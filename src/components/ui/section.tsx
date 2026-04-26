import * as React from "react";
import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  bleed?: boolean;
};

export function Section({
  className,
  children,
  bleed = false,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("relative w-full", className)}
      {...props}
    >
      {bleed ? (
        children
      ) : (
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">{children}</div>
      )}
    </section>
  );
}

type EyebrowProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "warm" | "primary" | "muted";
};

export function Eyebrow({
  className,
  tone = "warm",
  children,
  ...props
}: EyebrowProps) {
  const toneClass =
    tone === "warm"
      ? "text-warm"
      : tone === "primary"
        ? "text-primary"
        : "text-muted";
  return (
    <span className={cn("eyebrow", toneClass, className)} {...props}>
      {children}
    </span>
  );
}

type DisplayProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3";
};

export function Display({
  className,
  as: Tag = "h2",
  children,
  ...props
}: DisplayProps) {
  return (
    <Tag
      className={cn(
        "font-display font-light text-primary",
        Tag === "h1"
          ? "text-5xl leading-[1.02] sm:text-6xl lg:text-7xl"
          : Tag === "h2"
            ? "text-4xl leading-[1.05] sm:text-5xl lg:text-6xl"
            : "text-3xl leading-[1.1] sm:text-4xl",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
