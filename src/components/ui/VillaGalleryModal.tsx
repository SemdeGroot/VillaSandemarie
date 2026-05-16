"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { allVillaImages } from "@/lib/gallery";
import { useGallery } from "@/lib/GalleryProvider";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/site/Logo";

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
  const [internalIndex, setInternalIndex] = useState(activeIndex);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const railRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const hasMountedRef = useRef(false);

  const handleImageLoad = (src: string) => {
    setLoadedImages((prev) => ({ ...prev, [src]: true }));
  };

  const scrollToIndex = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const rail = railRef.current;
      if (!rail) return;
      const cell = rail.children[index] as HTMLElement;
      if (!cell) return;
      isScrollingRef.current = true;
      rail.scrollTo({ left: cell.offsetLeft, behavior });
      setTimeout(
        () => { isScrollingRef.current = false; },
        behavior === "smooth" ? 500 : 0
      );
    },
    []
  );

  const next = useCallback(() => {
    setInternalIndex((prev) => {
      const n = (prev + 1) % allVillaImages.length;
      scrollToIndex(n);
      return n;
    });
  }, [scrollToIndex]);

  const prev = useCallback(() => {
    setInternalIndex((prev) => {
      const n = (prev - 1 + allVillaImages.length) % allVillaImages.length;
      scrollToIndex(n);
      return n;
    });
  }, [scrollToIndex]);

  const onScroll = useCallback(() => {
    if (isScrollingRef.current || !hasMountedRef.current) return;
    const rail = railRef.current;
    if (!rail) return;
    const width = rail.clientWidth;
    if (width === 0) return;
    const newIndex = Math.round(rail.scrollLeft / width);
    if (
      newIndex !== internalIndex &&
      newIndex >= 0 &&
      newIndex < allVillaImages.length
    ) {
      setInternalIndex(newIndex);
    }
  }, [internalIndex]);

  const dotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hasMountedRef.current) return;
    if (dotsRef.current && window.innerWidth < 1024) {
      const activeDot = dotsRef.current.children[internalIndex] as HTMLElement;
      if (activeDot) {
        const container = dotsRef.current;
        container.scrollTo({
          left:
            activeDot.offsetLeft -
            container.clientWidth / 2 +
            activeDot.clientWidth / 2,
          behavior: "smooth",
        });
      }
    }
  }, [internalIndex]);

  useEffect(() => {
    requestAnimationFrame(() => {
      const rail = railRef.current;
      if (!rail) return;
      const cell = rail.children[activeIndex] as HTMLElement;
      if (cell) rail.scrollTo({ left: cell.offsetLeft, behavior: "auto" });
      setTimeout(() => { hasMountedRef.current = true; }, 100);
    });
  }, [activeIndex]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-paper/98 backdrop-blur-md">
      {/* Header — shrink-0, in normal flow, clears device notch */}
      <div
        className="z-[110] flex shrink-0 items-center justify-between px-5 pb-3"
        style={{ paddingTop: "calc(env(safe-area-inset-top, 0px) + 0.875rem)" }}
      >
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary/40">
            Villa Sandemarie
          </span>
          <span className="font-display text-lg text-primary">
            {allVillaImages[internalIndex]?.tag
              ? t.content.galleryTags[allVillaImages[internalIndex].tag]
              : t.gallery.eyebrow}
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

      {/* Desktop navigation arrows — absolute in the outer fixed container */}
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

      {/* Image rail — flex-1 + min-h-0 fills the space between header and
          footer. min-h-0 is required so iOS Safari respects the flex height
          instead of expanding to fit content. */}
      <div
        ref={railRef}
        onScroll={onScroll}
        className="relative flex min-h-0 flex-1 snap-x snap-mandatory overflow-x-auto overflow-y-hidden scrollbar-none lg:overflow-x-hidden"
      >
        {allVillaImages.map((img, i) => (
          <div
            key={img.src}
            data-index={i}
            // [scroll-snap-stop:always] forces the browser to stop at exactly
            // one snap point per swipe, regardless of swipe speed.
            className="relative flex h-full w-full shrink-0 snap-center [scroll-snap-stop:always] items-center justify-center px-4 py-3 lg:px-48 lg:py-10"
          >
            {/* Placeholder: only logo + text shimmer, no background box */}
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

            {/* Native <img> so the element box = the visible photo area.
                With Next Image fill+object-contain, rounded-xl lands on the
                full viewport rectangle, not the photo itself. Here max-h-full
                + max-w-full constrains to the available cell space, and the
                element is exactly the photo size → rounded-xl works correctly.
                Images load on demand (lazy) instead of all 42 at once. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              onLoad={() => handleImageLoad(img.src)}
              loading="eager"
              className={cn(
                "block max-h-full max-w-full rounded-xl object-contain pointer-events-none select-none transition-opacity duration-700 ease-out",
                loadedImages[img.src] ? "opacity-100" : "opacity-0"
              )}
            />
          </div>
        ))}
      </div>

      {/* Footer — shrink-0, in normal flow, always below the image rail.
          There is therefore always guaranteed space between photo and caption. */}
      <div
        className="z-[110] flex shrink-0 flex-col items-center pt-4"
        style={{ paddingBottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
      >
        <p className="max-w-2xl px-6 text-center text-[14px] font-medium leading-relaxed text-primary line-clamp-2 sm:text-[15px]">
          {(() => {
            const img = allVillaImages[internalIndex];
            if (!img) return null;
            const captionKey =
              img.src.split("/").pop()?.replace(".webp", "") || "";
            return t.content.galleryCaptions[captionKey] ?? img.alt;
          })()}
        </p>

        {/* Desktop: counter + dots */}
        <div className="mt-4 hidden lg:flex items-center gap-8">
          <div className="text-[10px] font-bold tracking-[0.2em] text-primary/30 tabular-nums uppercase">
            {internalIndex + 1} / {allVillaImages.length}
          </div>
          <div className="flex gap-2">
            {allVillaImages.map((_, i) => (
              <button
                key={i}
                onClick={() => { scrollToIndex(i); setInternalIndex(i); }}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  i === internalIndex
                    ? "w-6 bg-warm shadow-sm"
                    : "w-1.5 bg-primary/15 hover:bg-primary/30"
                )}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile: counter */}
        <div className="mt-2 flex lg:hidden justify-center text-[10px] font-bold tracking-[0.2em] text-primary/30 tabular-nums uppercase">
          {internalIndex + 1} / {allVillaImages.length}
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
            className="flex gap-2 overflow-x-auto scrollbar-none snap-x py-1 px-2 max-w-[62vw]"
          >
            {allVillaImages.map((_, i) => (
              <button
                key={i}
                onClick={() => { scrollToIndex(i); setInternalIndex(i); }}
                className={cn(
                  "h-1.5 shrink-0 rounded-full transition-all duration-500 snap-center",
                  i === internalIndex ? "w-6 bg-warm shadow-sm" : "w-1.5 bg-primary/15"
                )}
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

      <style jsx global>{`
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }

        /* Logo: gentle opacity breathing — no rectangle visible */
        .gallery-logo-pulse {
          animation: gallery-logo-breathe 2.5s ease-in-out infinite;
        }
        @keyframes gallery-logo-breathe {
          0%, 100% { opacity: 0.13; }
          50%       { opacity: 0.27; }
        }

        /* Text: the shimmer gradient is clipped to the actual text pixels via
           background-clip, so NO rectangle or box appears around it.
           Direction: bottom-left → top-right (background-position 0% 100% → 100% 0%). */
        .gallery-text-shimmer {
          background: linear-gradient(
            to top right,
            rgba(45,72,41,0.12) 0%,
            rgba(45,72,41,0.12) 25%,
            rgba(45,72,41,0.48) 50%,
            rgba(45,72,41,0.12) 75%,
            rgba(45,72,41,0.12) 100%
          );
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gallery-text-sweep 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes gallery-text-sweep {
          0%   { background-position: 0% 100%; }
          100% { background-position: 100% 0%; }
        }
      `}</style>
    </div>
  );
}
