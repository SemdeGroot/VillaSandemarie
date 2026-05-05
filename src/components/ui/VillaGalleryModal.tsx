"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { allVillaImages } from "@/lib/gallery";
import { useGallery } from "@/lib/GalleryProvider";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { cn } from "@/lib/utils";

export function VillaGalleryModal() {
  const { isOpen, activeIndex, closeGallery } = useGallery();
  const { t } = useLocale();
  const [internalIndex, setInternalIndex] = useState(activeIndex);
  const railRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const hasMountedRef = useRef(false);

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

  // Sync internal index when modal opens and do instant scroll
  useEffect(() => {
    if (isOpen) {
      hasMountedRef.current = false;
      
      // We use requestAnimationFrame to ensure the rail is rendered before scrolling
      requestAnimationFrame(() => {
        setInternalIndex(activeIndex);
        if (railRef.current) {
          const cell = railRef.current.children[activeIndex] as HTMLElement;
          if (cell) {
            railRef.current.scrollTo({ left: cell.offsetLeft, behavior: "auto" });
          }
        }
        // Small delay to ensure the scroll has finished before enabling observer
        setTimeout(() => {
          hasMountedRef.current = true;
        }, 50);
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
          className="rounded-full bg-primary/5 p-2.5 text-primary transition hover:bg-primary/10 active:scale-95"
          aria-label="Close gallery"
        >
          <X size={22} />
        </button>
      </div>

      {/* Desktop Navigation Arrows */}
      <div className="hidden lg:block">
        <button
          onClick={prev}
          className="absolute left-8 top-1/2 z-[110] -translate-y-1/2 rounded-full bg-primary/5 p-4 text-primary transition hover:bg-primary/10 hover:scale-105 active:scale-95"
          aria-label="Previous image"
        >
          <ChevronLeft size={32} strokeWidth={1.5} />
        </button>
        <button
          onClick={next}
          className="absolute right-8 top-1/2 z-[110] -translate-y-1/2 rounded-full bg-primary/5 p-4 text-primary transition hover:bg-primary/10 hover:scale-105 active:scale-95"
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
          className={cn(
            "flex h-full w-full overflow-x-auto scrollbar-none",
            "snap-x snap-mandatory lg:overflow-x-hidden"
          )}
        >
          {allVillaImages.map((img, i) => (
            <div
              key={img.src}
              data-index={i}
              className="flex h-full w-full shrink-0 snap-center items-center justify-center px-4 py-32 lg:px-48"
            >
              <div className="relative h-full w-full select-none">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain pointer-events-none"
                  sizes="100vw"
                  priority={isOpen && Math.abs(i - internalIndex) <= 1}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="absolute bottom-0 left-0 right-0 z-[110] flex flex-col items-center bg-gradient-to-t from-paper to-transparent pb-10 pt-24">
          <p className="max-w-2xl px-6 text-center text-[15px] font-medium leading-relaxed text-primary sm:text-base">
            {allVillaImages[internalIndex]?.alt}
          </p>
          
          <div className="mt-5 flex items-center gap-8">
             <div className="text-[10px] font-bold tracking-[0.2em] text-primary/30 tabular-nums uppercase">
              {internalIndex + 1} / {allVillaImages.length}
            </div>

            {/* Dots Navigation */}
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
      `}</style>
    </div>
  );
}
