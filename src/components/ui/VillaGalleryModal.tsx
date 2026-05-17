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
  const shownRef = useRef(activeIndex);
  const dotsRef = useRef<HTMLDivElement>(null);

  // Mobile (<lg) gets a real Instagram-style swipe; desktop is untouched.
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(max-width: 1023px)").matches,
  );
  // `dragging` swaps the mobile photo into a finger-tracked 3-slide track.
  // `fadePhoto` decides whether the idle <img> plays the entrance fade: true
  // for chevron / dots / keyboard, false right after a swipe (the photo
  // already physically slid, so it must not also fade).
  const [dragging, setDragging] = useState(false);
  const [fadePhoto, setFadePhoto] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);
  const swipeRef = useRef({ x: 0, dx: 0, armed: false, dragging: false, animating: false });

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

  // Track the breakpoint so the swipe layer only ever exists on mobile.
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 1023px)");
    const onChange = () => setIsMobile(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Mirror `shown` into a ref so the swipe-commit callback (stable identity)
  // can compute the right neighbour without going stale.
  useEffect(() => { shownRef.current = shown; }, [shown]);

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
    setFadePhoto(true); // chevron / dots / keyboard => keep the fade
    setIndex(t);
  }, []);

  const next = useCallback(() => navigateTo(indexRef.current + 1), [navigateTo]);
  const prev = useCallback(() => navigateTo(indexRef.current - 1), [navigateTo]);

  // --- Mobile swipe (Instagram-style). The photo physically tracks the
  // finger; on release it slides to the neighbour or springs back. The photo
  // itself never fades here (it slid); the caption still re-fades on commit.
  const SWIPE_MS = 300;
  const commitSwipe = useCallback((dir: -1 | 0 | 1) => {
    const track = trackRef.current;
    const finish = () => {
      const s = swipeRef.current;
      s.animating = false;
      s.dragging = false;
      if (dir !== 0) {
        const count = allVillaImages.length;
        const target = ((shownRef.current + dir) % count + count) % count;
        shownRef.current = target;
        indexRef.current = target;
        setFadePhoto(false); // it slid in — must not also fade
        setShown(target);
        setIndex(target);
      } else {
        setFadePhoto(false); // unchanged photo — re-show without a fade
      }
      setDragging(false);
    };
    if (!track) { finish(); return; }
    swipeRef.current.animating = true;
    track.style.transition = `transform ${SWIPE_MS}ms cubic-bezier(0.22,0.61,0.36,1)`;
    const to = dir === -1 ? "0%" : dir === 1 ? "-200%" : "-100%";
    void track.offsetWidth; // flush so the transition runs from the drag pos
    track.style.transform = `translate3d(${to},0,0)`;
    window.setTimeout(finish, SWIPE_MS + 20);
  }, []);

  const onSwipeStart = useCallback((e: React.TouchEvent) => {
    if (!isMobile || allVillaImages.length < 2 || swipeRef.current.animating) return;
    const s = swipeRef.current;
    s.x = e.touches[0].clientX;
    s.dx = 0;
    s.armed = true;
    s.dragging = false;
  }, [isMobile]);

  const onSwipeMove = useCallback((e: React.TouchEvent) => {
    const s = swipeRef.current;
    if (!s.armed) return;
    s.dx = e.touches[0].clientX - s.x;
    if (!s.dragging) {
      if (Math.abs(s.dx) < 8) return; // ignore taps / tiny moves
      s.dragging = true;
      setFadePhoto(false);
      setDragging(true);
    }
    const track = trackRef.current;
    if (track) {
      track.style.transition = "none";
      track.style.transform = `translate3d(calc(-100% + ${s.dx}px),0,0)`;
    }
  }, []);

  const onSwipeEnd = useCallback(() => {
    const s = swipeRef.current;
    s.armed = false;
    if (!s.dragging) return;
    const vw = trackRef.current ? trackRef.current.clientWidth / 3 : window.innerWidth;
    const threshold = Math.max(56, vw * 0.18);
    if (s.dx <= -threshold) commitSwipe(1);
    else if (s.dx >= threshold) commitSwipe(-1);
    else commitSwipe(0);
  }, [commitSwipe]);

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
        style={isMobile ? { touchAction: "none" } : undefined}
        onTouchStart={onSwipeStart}
        onTouchMove={onSwipeMove}
        onTouchEnd={onSwipeEnd}
        onTouchCancel={onSwipeEnd}
      >
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none transition-opacity duration-300 ease-out"
          style={{ opacity: !shownReady && !dragging ? 1 : 0 }}
        >
          <div className="flex flex-col items-center gap-4">
            <Logo className="h-14 w-14 gallery-logo-pulse" />
            <span className="gallery-text-shimmer text-[11px] font-bold uppercase tracking-[0.35em]">
              Villa Sandemarie
            </span>
          </div>
        </div>

        {isMobile && dragging ? (
          /* Mobile drag: a finger-tracked 3-slide track. The photo slides
             with the finger (no fade); neighbours are precached so they are
             already decoded. */
          <div className="absolute inset-0 overflow-hidden">
            <div
              ref={trackRef}
              className="flex h-full"
              style={{ width: "300%", transform: "translate3d(-100%,0,0)" }}
            >
              {[
                (shown - 1 + allVillaImages.length) % allVillaImages.length,
                shown,
                (shown + 1) % allVillaImages.length,
              ].map((idx, i) => {
                const slide = allVillaImages[idx];
                const slideReady = !!loadedImages[slide.src];
                return (
                  <div
                    key={i}
                    className="flex h-full w-full shrink-0 items-center justify-center px-4 py-3"
                  >
                    {slideReady ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={buildOptimizedUrl(slide.src, widthBucket)}
                        alt={slide.alt}
                        draggable={false}
                        className="block max-h-full max-w-full rounded-xl object-contain pointer-events-none select-none"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-4">
                        <Logo className="h-14 w-14 gallery-logo-pulse" />
                        <span className="gallery-text-shimmer text-[11px] font-bold uppercase tracking-[0.35em]">
                          Villa Sandemarie
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Desktop + mobile-idle: the keyed <img> with the one-shot fade
             (chevron / dots / keyboard). Desktop behaviour is unchanged:
             `fadePhoto` only ever goes false via the mobile swipe. */
          /* eslint-disable-next-line @next/next/no-img-element */
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
              (shownReady && fadePhoto ? " gallery-photo-in" : "")
            }
            style={shownReady ? undefined : { opacity: 0 }}
          />
        )}
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
