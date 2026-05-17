"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { allVillaImages } from "@/lib/gallery";
import { useGallery } from "@/lib/GalleryProvider";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { Logo } from "@/components/site/Logo";
import { pickWidthBucket, buildOptimizedUrl, preloadOptimized } from "@/lib/imageOptimizer";

const globalLoadedImages = new Set<string>();
// Keep ≤ the browser's ~6 sockets so the active photo is never starved while
// the rest of the gallery precaches in the background.
const PRECACHE_CONCURRENCY = 5;

export function VillaGalleryModal() {
  const { isOpen, activeIndex, closeGallery } = useGallery();
  if (!isOpen) return null;
  return (
    <GalleryModal
      key={activeIndex}
      activeIndex={activeIndex}
      closeGallery={closeGallery}
    />
  );
}

function GalleryModal({
  activeIndex,
  closeGallery,
}: {
  activeIndex: number;
  closeGallery: () => void;
}) {
  const { t } = useLocale();
  // `index` = the photo the user is navigating to (intent: drives the dots
  // + counter). `shown` = the photo actually painted, plus its caption/tag.
  // `shown` only ever advances to a fully decoded photo, so the photo and
  // its caption can never disagree no matter how erratically the user clicks.
  const [index, setIndex] = useState(activeIndex);
  const [shown, setShown] = useState(activeIndex);
  // `mounted` drives the modal open fade-in (false → true on first paint).
  const [mounted, setMounted] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    globalLoadedImages.forEach((src) => { init[src] = true; });
    return init;
  });
  // Monotonic token: every navigation bumps it, so any older in-flight load
  // is discarded and can never swap in the wrong photo.
  const reqRef = useRef(0);
  const indexRef = useRef(activeIndex);
  const touchStartX = useRef(0);
  const dotsRef = useRef<HTMLDivElement>(null);

  // Freeze one optimizer width bucket per open so the displayed <img> and the
  // precache request always resolve to a byte-identical URL (-> cache hit).
  const widthBucketRef = useRef<number | null>(null);
  if (widthBucketRef.current === null && typeof window !== "undefined") {
    widthBucketRef.current = pickWidthBucket(window.innerWidth, window.devicePixelRatio || 1);
  }
  const widthBucket = widthBucketRef.current ?? 1920; // SSR / no-window fallback

  // Fade-in the modal on open.
  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleImageLoad = useCallback((src: string) => {
    globalLoadedImages.add(src);
    setLoadedImages((prev) => ({ ...prev, [src]: true }));
  }, []);

  // Precache EVERY gallery photo ONCE when the modal opens, ordered outward
  // from the opening photo, concurrency-capped. This effect runs once and is
  // never torn down on navigation, so moving between photos (incl. the
  // 26 -> 1 wrap) never aborts/restarts in-flight loads. Each load resolves
  // only after decode() so the reveal is paint-ready and jank-free.
  useEffect(() => {
    const controller = new AbortController();
    const count = allVillaImages.length;
    const order: number[] = [activeIndex];
    for (let d = 1; d < count; d++) {
      order.push((activeIndex + d) % count);
      order.push((activeIndex - d + count) % count);
    }
    const queue = order.filter(
      (i, pos) =>
        order.indexOf(i) === pos && !globalLoadedImages.has(allVillaImages[i].src),
    );
    let cursor = 0;
    let active = 0;
    let cancelled = false;
    const pump = () => {
      if (cancelled) return;
      while (active < PRECACHE_CONCURRENCY && cursor < queue.length) {
        const src = allVillaImages[queue[cursor++]].src;
        active++;
        preloadOptimized(src, widthBucket, controller.signal)
          .then((loaded) => {
            if (!cancelled) handleImageLoad(loaded);
          })
          .catch(() => {
            /* aborted or failed — skeleton stays for that one */
          })
          .finally(() => {
            active--;
            pump();
          });
      }
    };
    pump();
    return () => {
      cancelled = true;
      controller.abort();
    };
    // Runs once per open. widthBucket + handleImageLoad are stable for the
    // modal's lifetime; activeIndex is fixed (component is keyed by it).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep the active dot in view on mobile. Adjacent steps scroll smoothly;
  // bigger jumps and the 26 -> 1 wrap snap instantly so the whole strip
  // doesn't visibly race across (which read as a glitch).
  const prevIndexRef = useRef(index);
  useEffect(() => {
    const prev = prevIndexRef.current;
    prevIndexRef.current = index;
    if (dotsRef.current && window.innerWidth < 1024) {
      const activeDot = dotsRef.current.children[index] as HTMLElement;
      if (activeDot) {
        dotsRef.current.scrollTo({
          left: activeDot.offsetLeft - dotsRef.current.clientWidth / 2 + activeDot.clientWidth / 2,
          behavior: Math.abs(index - prev) <= 1 ? "smooth" : "auto",
        });
      }
    }
  }, [index]);

  // Navigation only updates intent (`index`). It is synchronous, lock-free
  // and reads the live index from a ref, so spamming or alternating
  // directions can never desync. `indexRef` is updated immediately so two
  // clicks in the same tick still compute the right neighbour.
  const navigateTo = useCallback((target: number) => {
    const count = allVillaImages.length;
    const t = ((target % count) + count) % count;
    if (t === indexRef.current) return;
    indexRef.current = t;
    setIndex(t);
  }, []);

  const next = useCallback(() => navigateTo(indexRef.current + 1), [navigateTo]);
  const prev = useCallback(() => navigateTo(indexRef.current - 1), [navigateTo]);

  // Resolve the target into the displayed photo. The photo is only swapped
  // in once decoded; the token discards any older in-flight load, so the
  // painted photo + caption always match the latest settled target. With the
  // open-time precache this is usually instant; a far jump past the precache
  // front waits briefly while the previous photo stays up (never a mismatch).
  useEffect(() => {
    const token = ++reqRef.current;
    const src = allVillaImages[index].src;
    if (globalLoadedImages.has(src)) {
      setShown(index);
      return;
    }
    preloadOptimized(src, widthBucket)
      .then((s) => {
        if (reqRef.current !== token) return;
        handleImageLoad(s);
        setShown(index);
      })
      .catch(() => {});
  }, [index, widthBucket, handleImageLoad]);

  // Keyboard: Escape closes, arrow keys navigate.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeGallery, next, prev]);

  // Everything the user actually sees (photo, caption, tag) derives from
  // `shown` so they are always in lock-step. Dots + counter use `index`
  // (intent) for instant tap feedback.
  const img = allVillaImages[shown];
  const shownReady = !!loadedImages[img.src];

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-paper/98 backdrop-blur-md"
      style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
    >
      {/* Header */}
      <div
        className="z-[110] flex shrink-0 items-center justify-between px-5 pb-3"
        style={{ paddingTop: "calc(env(safe-area-inset-top, 0px) + 0.875rem)" }}
      >
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary/40">
            Villa Sandemarie
          </span>
          <span
            className="font-display text-lg text-primary"
            style={{ opacity: shownReady ? 1 : 0, transition: "opacity 0.28s ease-out" }}
          >
            {img?.tag ? t.content.galleryTags[img.tag] : t.gallery.eyebrow}
          </span>
        </div>
        <button
          onClick={closeGallery}
          className="cursor-pointer rounded-full bg-primary/5 p-3 text-primary transition hover:bg-primary/10 active:scale-95"
          aria-label="Close gallery"
        >
          <X size={20} />
        </button>
      </div>

      {/* Desktop navigation arrows */}
      <div className="pointer-events-none hidden lg:block">
        <button
          onClick={prev}
          className="pointer-events-auto absolute left-8 top-1/2 z-[110] -translate-y-1/2 cursor-pointer rounded-full bg-primary/5 p-4 text-primary transition hover:bg-primary/10 hover:scale-105 active:scale-95"
          aria-label="Previous image"
        >
          <ChevronLeft size={32} strokeWidth={1.5} />
        </button>
        <button
          onClick={next}
          className="pointer-events-auto absolute right-8 top-1/2 z-[110] -translate-y-1/2 cursor-pointer rounded-full bg-primary/5 p-4 text-primary transition hover:bg-primary/10 hover:scale-105 active:scale-95"
          aria-label="Next image"
        >
          <ChevronRight size={32} strokeWidth={1.5} />
        </button>
      </div>

      {/* Image area. `shown` only ever points at a decoded photo, and the
          <img> is keyed by it so React mounts a fresh element per photo — no
          stale bitmap can linger behind a newer caption. The fade is a
          one-shot CSS animation so it plays reliably on every (re)mount,
          which keeps it clean under rapid, erratic navigation. */}
      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-4 py-3 lg:px-48 lg:py-10"
        onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          const dx = e.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(dx) > 50) dx < 0 ? next() : prev();
        }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none transition-opacity duration-300 ease-out"
          style={{ opacity: shownReady ? 0 : 1 }}
        >
          <div className="flex flex-col items-center gap-4">
            <Logo className="h-14 w-14 gallery-logo-pulse" />
            <span className="gallery-text-shimmer text-[11px] font-bold uppercase tracking-[0.35em]">
              Villa Sandemarie
            </span>
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={shown}
          src={buildOptimizedUrl(img.src, widthBucket)}
          alt={img.alt}
          onLoad={() => handleImageLoad(img.src)}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className={
            "block max-h-full max-w-full rounded-xl object-contain pointer-events-none select-none" +
            (shownReady ? " gallery-photo-in" : "")
          }
          style={shownReady ? undefined : { opacity: 0 }}
        />
      </div>

      {/* Footer */}
      <div
        className="z-[110] flex shrink-0 flex-col items-center pt-4"
        style={{ paddingBottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
      >
        <p className="flex min-h-[2.6em] max-w-2xl items-center px-6 text-center text-[14px] font-medium leading-relaxed text-primary line-clamp-2 sm:text-[15px]">
          {shownReady && (
            <span key={shown} className="gallery-photo-in">
              {(() => {
                const captionKey = img.src.split("/").pop()?.replace(".webp", "") || "";
                return t.content.galleryCaptions[captionKey] ?? img.alt;
              })()}
            </span>
          )}
        </p>

        {/* Desktop: counter + dots */}
        <div className="mt-4 hidden lg:flex items-center gap-8">
          <div className="text-[10px] font-bold tracking-[0.2em] text-primary/30 tabular-nums uppercase">
            {index + 1} / {allVillaImages.length}
          </div>
          <div className="flex gap-2">
            {allVillaImages.map((_, i) => (
              <button
                key={i}
                onClick={() => navigateTo(i)}
                className="gallery-dot"
                data-active={i === index ? "" : undefined}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile: counter */}
        <div className="mt-2 flex lg:hidden justify-center text-[10px] font-bold tracking-[0.2em] text-primary/30 tabular-nums uppercase">
          {index + 1} / {allVillaImages.length}
        </div>

        {/* Mobile: chevrons + dots */}
        <div className="mt-1.5 flex lg:hidden items-center gap-2 justify-center w-full px-4">
          <button
            onClick={prev}
            className="shrink-0 cursor-pointer rounded-full p-3 text-primary/60 active:scale-90"
            aria-label="Previous"
          >
            <ChevronLeft size={26} strokeWidth={1.5} />
          </button>

          <div
            ref={dotsRef}
            className="flex gap-2 overflow-x-auto scrollbar-none py-1 px-2 max-w-[62vw]"
          >
            {allVillaImages.map((_, i) => (
              <button
                key={i}
                onClick={() => navigateTo(i)}
                className="gallery-dot"
                data-active={i === index ? "" : undefined}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="shrink-0 cursor-pointer rounded-full p-3 text-primary/60 active:scale-90"
            aria-label="Next"
          >
            <ChevronRight size={26} strokeWidth={1.5} />
          </button>
        </div>
      </div>

    </div>
  );
}
