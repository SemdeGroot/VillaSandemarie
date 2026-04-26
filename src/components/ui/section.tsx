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
        "font-display font-medium text-primary [text-wrap:balance] [overflow-wrap:break-word]",
        Tag === "h1"
          ? "text-[1.75rem] leading-[1.1] sm:text-5xl lg:text-7xl"
          : Tag === "h2"
            ? "text-[1.65rem] leading-[1.15] sm:text-[2.4rem] lg:text-[3.2rem] lg:leading-[1.08]"
            : "text-xl leading-[1.18] sm:text-3xl lg:text-4xl",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
