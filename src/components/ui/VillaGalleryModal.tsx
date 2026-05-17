"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { allVillaImages } from "@/lib/gallery";
import { useGallery } from "@/lib/GalleryProvider";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/site/Logo";

const globalLoadedImages = new Set<string>();

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
  const [index, setIndex] = useState(activeIndex);
  // `visible` is only toggled during navigation transitions — starts true.
  const [visible, setVisible] = useState(true);
  const [labelVisible, setLabelVisible] = useState(true);
  // `mounted` drives the modal open fade-in (false → true on first paint).
  const [mounted, setMounted] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    globalLoadedImages.forEach((src) => { init[src] = true; });
    return init;
  });
  const isNavigatingRef = useRef(false);
  const touchStartX = useRef(0);
  const dotsRef = useRef<HTMLDivElement>(null);

  // Fade-in the modal on open.
  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleImageLoad = useCallback((src: string) => {
    globalLoadedImages.add(src);
    setLoadedImages((prev) => ({ ...prev, [src]: true }));
  }, []);

  // Preload current ±2 images so navigation feels instant.
  useEffect(() => {
    const count = allVillaImages.length;
    for (let offset = -2; offset <= 2; offset++) {
      const idx = ((index + offset) % count + count) % count;
      const src = allVillaImages[idx].src;
      if (!globalLoadedImages.has(src)) {
        const img = new window.Image();
        img.onload = () => handleImageLoad(src);
        img.src = src;
      }
    }
  }, [index, handleImageLoad]);

  // Scroll active dot into view on mobile.
  useEffect(() => {
    if (dotsRef.current && window.innerWidth < 1024) {
      const activeDot = dotsRef.current.children[index] as HTMLElement;
      if (activeDot) {
        dotsRef.current.scrollTo({
          left: activeDot.offsetLeft - dotsRef.current.clientWidth / 2 + activeDot.clientWidth / 2,
          behavior: "smooth",
        });
      }
    }
  }, [index]);

  const navigateTo = useCallback((targetIndex: number) => {
    if (isNavigatingRef.current) return;
    isNavigatingRef.current = true;
    const tagWillChange = allVillaImages[index]?.tag !== allVillaImages[targetIndex]?.tag;
    setVisible(false);
    if (tagWillChange) setLabelVisible(false);
    setTimeout(() => {
      setIndex(targetIndex);
      setVisible(true);
      if (tagWillChange) setLabelVisible(true);
      isNavigatingRef.current = false;
    }, 260);
  }, [index]);

  const next = useCallback(() => {
    navigateTo((index + 1) % allVillaImages.length);
  }, [index, navigateTo]);

  const prev = useCallback(() => {
    navigateTo((index - 1 + allVillaImages.length) % allVillaImages.length);
  }, [index, navigateTo]);

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

  const img = allVillaImages[index];

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
            style={{ opacity: labelVisible ? 1 : 0, transition: "opacity 0.28s ease-out" }}
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

      {/* Image area — opacity transition drives the crossfade */}
      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-4 py-3 lg:px-48 lg:py-10"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.28s ease-out" }}
        onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          const dx = e.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(dx) > 50) dx < 0 ? next() : prev();
        }}
      >
        {!loadedImages[img.src] && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <div className="flex flex-col items-center gap-4">
              <Logo className="h-14 w-14 gallery-logo-pulse" />
              <span className="gallery-text-shimmer text-[11px] font-bold uppercase tracking-[0.35em]">
                Villa Sandemarie
              </span>
            </div>
          </div>
        )}

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img.src}
          alt={img.alt}
          onLoad={() => handleImageLoad(img.src)}
          loading="eager"
          fetchPriority="high"
          className={cn(
            "block max-h-full max-w-full rounded-xl object-contain pointer-events-none select-none transition-opacity duration-500 ease-out",
            loadedImages[img.src] ? "opacity-100" : "opacity-0"
          )}
        />
      </div>

      {/* Footer */}
      <div
        className="z-[110] flex shrink-0 flex-col items-center pt-4"
        style={{ paddingBottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
      >
        <p
          className="max-w-2xl px-6 text-center text-[14px] font-medium leading-relaxed text-primary line-clamp-2 sm:text-[15px]"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.28s ease-out" }}
        >
          {(() => {
            if (!img) return null;
            const captionKey = img.src.split("/").pop()?.replace(".webp", "") || "";
            return t.content.galleryCaptions[captionKey] ?? img.alt;
          })()}
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
