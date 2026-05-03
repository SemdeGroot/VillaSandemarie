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
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  id?: string;
};

export function Reveal({
  as: Tag = "div",
  delay = 0,
  threshold = 0.18,
  className,
  style,
  children,
  ...props
}: Props) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
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
          obs.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [threshold]);

  return React.createElement(
    Tag,
    {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref: ref as any,
      className: cn("reveal", visible && "is-visible", className),
      style: { transitionDelay: `${delay}ms`, ...style },
      ...props,
    },
    children,
  );
}
