"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { allVillaImages } from "./gallery";

type GalleryContextType = {
  isOpen: boolean;
  activeIndex: number;
  openGallery: (indexOrSrc: number | string) => void;
  closeGallery: () => void;
};

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

export function GalleryProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openGallery = useCallback((indexOrSrc: number | string) => {
    if (typeof indexOrSrc === "number") {
      setActiveIndex(indexOrSrc);
    } else {
      const idx = allVillaImages.findIndex((img) => img.src === indexOrSrc);
      if (idx !== -1) {
        setActiveIndex(idx);
      } else {
        // If not found in allVillaImages, we don't open or we open at 0?
        // The user said ONLY villa images should be clickable.
        return;
      }
    }
    setIsOpen(true);
  }, []);

  const closeGallery = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <GalleryContext.Provider
      value={{ isOpen, activeIndex, openGallery, closeGallery }}
    >
      {children}
    </GalleryContext.Provider>
  );
}

export function useGallery() {
  const context = useContext(GalleryContext);
  if (context === undefined) {
    throw new Error("useGallery must be used within a GalleryProvider");
  }
  return context;
}
