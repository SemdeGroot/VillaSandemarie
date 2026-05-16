"use client";

import { useEffect, useLayoutEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { allVillaImages } from "@/lib/gallery";
import { useGallery } from "@/lib/GalleryProvider";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/site/Logo";

export function VillaGalleryModal() {
  const { isOpen, activeIndex, closeGallery } = useGallery();
  const { t } = useLocale();
  const [internalIndex, setInternalIndex] = useState(activeIndex);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const railRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const hasMountedRef = useRef(false);

  const handleImageLoad = (src: string) => {
    setLoadedImages((prev) => ({ ...prev, [src]: true }));
  };

  const scrollToIndex = useCallback((index: number, behavior: ScrollBehavior = "smooth") => {
    const rail = railRef.current;
    if (!rail) return;
    const cell = rail.children[index] as HTMLElement;
    if (!cell) return;
    
    isScrollingRef.current = true;
    rail.scrollTo({ left: cell.offsetLeft, behavior });
    
    // Reset scrolling flag after animation
    const timeout = behavior === "smooth" ? 500 : 0;
    setTimeout(() => {
      isScrollingRef.current = false;
    }, timeout);
  }, []);

  const next = useCallback(() => {
    setInternalIndex((prevIdx) => {
      const nextIdx = (prevIdx + 1) % allVillaImages.length;
      scrollToIndex(nextIdx);
      return nextIdx;
    });
  }, [scrollToIndex]);

  const prev = useCallback(() => {
    setInternalIndex((prevIdx) => {
      const prevIdxVal = (prevIdx - 1 + allVillaImages.length) % allVillaImages.length;
      scrollToIndex(prevIdxVal);
      return prevIdxVal;
    });
  }, [scrollToIndex]);

  const onScroll = useCallback(() => {
    if (isScrollingRef.current || !hasMountedRef.current) return;
    
    const rail = railRef.current;
    if (!rail) return;
    
    const scrollLeft = rail.scrollLeft;
    const width = rail.clientWidth;
    if (width === 0) return;
    
    const newIndex = Math.round(scrollLeft / width);
    
    if (newIndex !== internalIndex && newIndex >= 0 && newIndex < allVillaImages.length) {
      setInternalIndex(newIndex);
    }
  }, [internalIndex]);

  const dotsRef = useRef<HTMLDivElement>(null);

  // Auto-scroll the active dot into view - ONLY on mobile, ONLY after gallery has settled
  useEffect(() => {
    if (!hasMountedRef.current) return;
    if (dotsRef.current && window.innerWidth < 1024) {
      const activeDot = dotsRef.current.children[internalIndex] as HTMLElement;
      if (activeDot) {
        const container = dotsRef.current;
        const scrollLeft = activeDot.offsetLeft - container.clientWidth / 2 + activeDot.clientWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    }
  }, [internalIndex]);

  // Sync index synchronously before paint to prevent title flicker
  useLayoutEffect(() => {
    if (isOpen) {
      setInternalIndex(activeIndex);
      hasMountedRef.current = false;
    }
  }, [isOpen, activeIndex]);

  // Instantly scroll rail to the correct position after the index is synced
  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        const rail = railRef.current;
        if (!rail) return;
        const cell = rail.children[activeIndex] as HTMLElement;
        if (cell) {
          rail.scrollTo({ left: cell.offsetLeft, behavior: "auto" });
        }
        setTimeout(() => {
          hasMountedRef.current = true;
        }, 100);
      });
    }
  }, [isOpen, activeIndex]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-paper/98 backdrop-blur-md">
      {/* Top Header */}
      <div className="absolute left-0 right-0 top-0 z-[110] flex items-center justify-between p-6">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary/40">
            Villa Sandemarie
          </span>
          <span className="font-display text-lg text-primary">
            {allVillaImages[internalIndex]?.tag ? t.content.galleryTags[allVillaImages[internalIndex].tag] : t.gallery.eyebrow}
          </span>
        </div>
        <button
          onClick={closeGallery}
          className="rounded-full bg-primary/5 p-3 text-primary transition hover:bg-primary/10 active:scale-95"
          aria-label="Close gallery"
        >
          <X size={20} />
        </button>
      </div>

      {/* Desktop Navigation Arrows */}
      <div className="hidden lg:block">
        <button
          onClick={prev}
          className="absolute left-8 top-1/2 z-[110] -translate-y-1/2 cursor-pointer rounded-full bg-primary/5 p-4 text-primary transition hover:bg-primary/10 hover:scale-105 active:scale-95"
          aria-label="Previous image"
        >
          <ChevronLeft size={32} strokeWidth={1.5} />
        </button>
        <button
          onClick={next}
          className="absolute right-8 top-1/2 z-[110] -translate-y-1/2 cursor-pointer rounded-full bg-primary/5 p-4 text-primary transition hover:bg-primary/10 hover:scale-105 active:scale-95"
          aria-label="Next image"
        >
          <ChevronRight size={32} strokeWidth={1.5} />
        </button>
      </div>

      {/* Main Content */}
      <div className="relative flex h-full w-full flex-col items-center justify-center">
        {/* Image Rail */}
        <div
          ref={railRef}
          onScroll={onScroll}
          className={cn(
            "flex h-full w-full overflow-x-auto scrollbar-none",
            "snap-x snap-mandatory lg:overflow-x-hidden"
          )}
        >
          {allVillaImages.map((img, i) => (
            <div
              key={img.src}
              data-index={i}
              className="flex h-full w-full shrink-0 snap-center items-center justify-center px-4 pt-20 pb-28 lg:px-48 lg:py-32"
            >
              <div className="relative h-full w-full select-none">
                {/* Skeleton Loader */}
                {!loadedImages[img.src] && (
                  <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-primary/[0.04] overflow-hidden">
                    {/* Shimmer Effect - middle ground prominence */}
                    <div className="absolute inset-0 z-0 bg-gradient-to-tr from-transparent via-primary/[0.08] to-transparent animate-shimmer-diagonal" style={{ backgroundSize: '200% 200%' }} />
                    
                    <div className="relative z-10 flex flex-col items-center gap-5 opacity-20">
                      <Logo className="h-16 w-16" />
                       <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-primary">
                        Villa Sandemarie
                      </span>
                    </div>
                  </div>
                )}
                
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  onLoad={() => handleImageLoad(img.src)}
                  className={cn(
                    "object-contain pointer-events-none transition-opacity duration-700 ease-out",
                    loadedImages[img.src] ? "opacity-100" : "opacity-0"
                  )}
                  sizes="100vw"
                  // Preload all images when gallery is open for maximum smoothness
                  priority={isOpen}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div
          className="absolute bottom-0 left-0 right-0 z-[110] flex flex-col items-center bg-gradient-to-t from-paper to-transparent pt-16"
          style={{ paddingBottom: 'max(2.5rem, env(safe-area-inset-bottom))' }}
        >
          <p className="max-w-2xl px-6 text-center text-[15px] font-medium leading-relaxed text-primary sm:text-base">
            {(() => {
              const img = allVillaImages[internalIndex];
              if (!img) return null;
              const captionKey = img.src.split("/").pop()?.replace(".webp", "") || "";
              return t.content.galleryCaptions[captionKey] ?? img.alt;
            })()}
          </p>
          
          {/* Desktop Footer: Original centered layout */}
          <div className="mt-5 hidden lg:flex items-center gap-8">
            <div className="text-[10px] font-bold tracking-[0.2em] text-primary/30 tabular-nums uppercase">
              {internalIndex + 1} / {allVillaImages.length}
            </div>

            <div className="flex gap-2">
              {allVillaImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    scrollToIndex(i);
                    setInternalIndex(i);
                  }}
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

          {/* Mobile Footer: chevrons | dots | counter — one row */}
          <div className="mt-4 flex lg:hidden items-center gap-2 justify-center w-full px-4">
            <button
              onClick={prev}
              className="cursor-pointer rounded-full p-3 text-primary/60 active:bg-primary/8 active:scale-90"
              aria-label="Previous"
            >
              <ChevronLeft size={24} strokeWidth={1.5} />
            </button>

            <div
              ref={dotsRef}
              className="flex gap-2 overflow-x-auto scrollbar-none snap-x py-1 px-2 max-w-[200px]"
            >
              {allVillaImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    scrollToIndex(i);
                    setInternalIndex(i);
                  }}
                  className={cn(
                    "h-1.5 shrink-0 rounded-full transition-all duration-500 snap-center",
                    i === internalIndex
                      ? "w-6 bg-warm shadow-sm"
                      : "w-1.5 bg-primary/15"
                  )}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="cursor-pointer rounded-full p-3 text-primary/60 active:bg-primary/8 active:scale-90"
              aria-label="Next"
            >
              <ChevronRight size={24} strokeWidth={1.5} />
            </button>

            <span className="ml-1 text-[10px] font-bold tracking-[0.2em] text-primary/30 tabular-nums uppercase shrink-0">
              {internalIndex + 1}&thinsp;/&thinsp;{allVillaImages.length}
            </span>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes shimmer-diagonal {
          0% {
            transform: translate(-100%, 100%);
          }
          100% {
            transform: translate(100%, -100%);
          }
        }
        
        .animate-shimmer-diagonal {
          animation: shimmer-diagonal 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}
