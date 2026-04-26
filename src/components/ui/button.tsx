import * as React from "react";
import { cn } from "@/lib/utils";

type Variant =
  | "primary"
  | "secondary"
  | "ghost"
  | "outline"
  | "highlight"
  | "onDark";
type Size = "default" | "sm" | "lg";

const variantClasses: Record<Variant, string> = {
  primary: "hover:opacity-95 focus-visible:ring-[#2d4829]",
  secondary:
    "border border-[#2d4829]/14 hover:bg-white focus-visible:ring-[#2d4829]",
  ghost: "hover:bg-[#2d4829]/8 focus-visible:ring-[#2d4829]",
  outline:
    "border border-white/55 bg-black/15 backdrop-blur-md hover:bg-black/25 hover:border-white/70 focus-visible:ring-white",
  highlight: "hover:bg-[#f7dea0] focus-visible:ring-[#2d4829]",
  onDark: "hover:bg-[#fee7a9] focus-visible:ring-white",
};

const variantStyles: Record<Variant, React.CSSProperties | undefined> = {
  primary: { backgroundColor: "#2d4829", color: "#faf8f3" },
  secondary: { backgroundColor: "#faf8f3", color: "#2d4829" },
  ghost: { color: "#2d4829" },
  outline: { color: "#ffffff" },
  highlight: { backgroundColor: "#fee7a9", color: "#2d4829" },
  onDark: { backgroundColor: "#ffffff", color: "#2d4829" },
};

const sizeClasses: Record<Size, string> = {
  default: "h-12 px-6 text-sm",
  sm: "h-10 px-4 text-[13px]",
  lg: "h-14 px-7 text-base",
};

const baseClass =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "default", style, ...props },
    ref,
  ) => (
    <button
      ref={ref}
      style={{ ...(variantStyles[variant] ?? {}), ...style }}
      className={cn(
        baseClass,
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  ),
);
Button.displayName = "Button";

type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
};

export const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    { className, variant = "primary", size = "default", style, ...props },
    ref,
  ) => (
    <a
      ref={ref}
      style={{ ...(variantStyles[variant] ?? {}), ...style }}
      className={cn(
        baseClass,
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  ),
);
LinkButton.displayName = "LinkButton";
