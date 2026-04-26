"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import {
  LOCALES,
  LOCALE_LABELS,
  LOCALE_SHORT,
  type Locale,
} from "@/lib/i18n/locales";
import { cn } from "@/lib/utils";

type Props = {
  variant: "light" | "dark";
  className?: string;
};

export function LanguageSwitcher({ variant, className }: Props) {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isDark = variant === "dark";

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Language"
        className={cn(
          "inline-flex h-9 cursor-pointer items-center gap-1 rounded-full border px-3 text-[12px] font-semibold tracking-wider transition",
          isDark
            ? "border-white/45 bg-black/15 text-white backdrop-blur-md hover:bg-black/25"
            : "border-[#2d4829]/16 bg-paper/80 text-[#2d4829] hover:bg-paper",
        )}
      >
        <span className="tabular-nums">{LOCALE_SHORT[locale]}</span>
        <ChevronDown size={12} className={cn("transition", open && "rotate-180")} />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-12 z-50 min-w-[10.5rem] overflow-hidden rounded-2xl border border-[#2d4829]/12 bg-[#faf8f3] py-1 text-sm text-[#2d4829] shadow-xl ring-1 ring-black/5"
        >
          {LOCALES.map((l) => (
            <li key={l}>
              <button
                type="button"
                onClick={() => {
                  setLocale(l as Locale);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full cursor-pointer items-center justify-between gap-3 px-3.5 py-2.5 text-left transition hover:bg-[#2d4829]/6",
                  locale === l && "font-semibold",
                )}
              >
                <span className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-7 items-center justify-center rounded bg-[#2d4829]/8 text-[10px] font-semibold tracking-wider">
                    {LOCALE_SHORT[l]}
                  </span>
                  {LOCALE_LABELS[l]}
                </span>
                {locale === l && <Check size={14} className="text-[#2d4829]/70" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
