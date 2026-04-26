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
  primary:
    "bg-[#2d4829] text-[#faf8f3] hover:bg-[#3a5a35] focus-visible:ring-[#2d4829]",
  secondary:
    "bg-[#faf8f3] text-[#2d4829] border border-[#2d4829]/14 hover:bg-white focus-visible:ring-[#2d4829]",
  ghost:
    "text-[#2d4829] hover:bg-[#2d4829]/8 focus-visible:ring-[#2d4829]",
  outline:
    "border border-white/55 bg-black/15 text-white backdrop-blur-md hover:bg-black/25 hover:border-white/70 focus-visible:ring-white",
  highlight:
    "bg-[#fee7a9] text-[#2d4829] hover:bg-[#f7dea0] focus-visible:ring-[#2d4829]",
  onDark:
    "bg-white text-[#2d4829] hover:bg-[#fee7a9] focus-visible:ring-white",
};

const sizeClasses: Record<Size, string> = {
  default: "h-12 px-6 text-sm",
  sm: "h-10 px-4 text-[13px]",
  lg: "h-14 px-7 text-base",
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

const baseClass =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => (
    <button
      ref={ref}
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
  ({ className, variant = "primary", size = "default", ...props }, ref) => (
    <a
      ref={ref}
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
