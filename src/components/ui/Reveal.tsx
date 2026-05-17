"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type RevealTag =
  | "div"
  | "section"
  | "article"
  | "li"
  | "ul"
  | "ol"
  | "figure"
  | "header"
  | "aside";

type Props = {
  as?: RevealTag;
  delay?: number;
  threshold?: number;
  /**
   * For above-the-fold content. Renders already-visible on the server and the
   * first paint, so there is no post-hydration slide-up/fade (no "jump"). Use
   * this for anything on screen at load; leave it off for scroll-in content.
   */
  immediate?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  id?: string;
  onVisible?: () => void;
};

export function Reveal({
  as: Tag = "div",
  delay = 0,
  threshold = 0.18,
  immediate = false,
  className,
  style,
  children,
  onVisible,
  ...props
}: Props) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [visible, setVisible] = React.useState(immediate);

  React.useEffect(() => {
    if (immediate) {
      onVisible?.();
      return;
    }
    const node = ref.current;
    if (!node) return;
    if (
      typeof window === "undefined" ||
      typeof IntersectionObserver === "undefined"
    ) {
      setTimeout(() => setVisible(true), 0);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          onVisible?.();
          obs.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [threshold, onVisible, immediate]);

  React.useEffect(() => {
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
      onVisible?.();
    }
  }, [onVisible]);

  return React.createElement(
    Tag,
    {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref: ref as any,
      // `immediate` renders a fully static element: no `.reveal` (so no
      // will-change/transform/transition GPU layer). A composited parent makes
      // its rounded `overflow:hidden` clip lag behind a composited child image,
      // which is the "borders snap in after the photo" artifact.
      className: immediate
        ? cn(className)
        : cn("reveal", visible && "is-visible", className),
      style: immediate ? style : { transitionDelay: `${delay}ms`, ...style },
      ...props,
    },
    children,
  );
}
