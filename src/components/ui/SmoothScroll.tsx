"use client";
import { useEffect } from "react";

/**
 * Enables CSS smooth scrolling for in-page anchor navigation, but only AFTER
 * the browser has finished its automatic scroll restoration on (re)load.
 *
 * If `scroll-behavior: smooth` is active while the browser restores scroll on
 * a refresh, the restore from y=0 to the saved position is animated. On mobile
 * that reads as a flash to the top that then visibly scrolls back down. By
 * waiting for `load` + two frames, restoration runs instantly (auto) and only
 * subsequent user-driven anchor jumps are smooth.
 */
export function SmoothScroll() {
  useEffect(() => {
    // Reduced motion: never force smooth (also keeps restoration instant).
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    let raf1 = 0;
    let raf2 = 0;

    const enable = () => {
      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => {
          root.style.scrollBehavior = "smooth";
        });
      });
    };

    if (document.readyState === "complete") {
      enable();
    } else {
      window.addEventListener("load", enable, { once: true });
    }

    return () => {
      window.removeEventListener("load", enable);
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, []);

  return null;
}
