import * as React from "react";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "success" | "error";

type AlertProps = {
  variant: Variant;
  title: string;
  description?: string;
  className?: string;
};

const variantStyles: Record<Variant, React.CSSProperties> = {
  success: {
    backgroundColor: "rgba(254,231,169,0.15)",
    borderColor: "rgba(254,231,169,0.55)",
    color: "#faf8f3",
  },
  error: {
    backgroundColor: "rgba(220,90,80,0.18)",
    borderColor: "rgba(255,170,160,0.55)",
    color: "#faf8f3",
  },
};

const iconColor: Record<Variant, string> = {
  success: "#fee7a9",
  error: "#ffb4ab",
};

export function Alert({ variant, title, description, className }: AlertProps) {
  const Icon = variant === "success" ? CheckCircle2 : AlertTriangle;
  return (
    <div
      role="alert"
      aria-live="polite"
      style={variantStyles[variant]}
      className={cn(
        "flex items-start gap-3 rounded-2xl border px-4 py-3 text-[14px] leading-6",
        className,
      )}
    >
      <Icon
        size={18}
        className="mt-[2px] shrink-0"
        style={{ color: iconColor[variant] }}
        aria-hidden="true"
      />
      <div className="min-w-0">
        <p className="font-semibold">{title}</p>
        {description ? (
          <p className="mt-0.5 opacity-85">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
