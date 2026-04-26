"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { LinkButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  variant?: "transparent" | "solid";
};

export function Header({ variant = "transparent" }: Props) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = variant === "solid" || scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        solid
          ? "border-b border-[#2d4829]/12 bg-[#faf8f3]/90 backdrop-blur-xl"
          : "bg-gradient-to-b from-black/45 via-black/15 to-transparent",
      )}
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8 sm:py-4 lg:px-12">
        <Link
          href="/"
          className={cn(
            "font-display text-[1.35rem] font-medium tracking-tight transition-colors sm:text-xl",
            solid ? "text-[#2d4829]" : "text-white",
          )}
          aria-label={`${site.name} home`}
        >
          {site.name}
        </Link>

        <nav
          className={cn(
            "hidden items-center gap-7 text-sm transition-colors lg:flex",
            solid ? "text-[#2d4829]/85" : "text-white/85",
          )}
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-current hover:opacity-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LinkButton
            href="#beschikbaarheid"
            variant={solid ? "primary" : "highlight"}
            size="sm"
          >
            Boekingsaanvraag
          </LinkButton>
        </div>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-full border transition lg:hidden",
            solid
              ? "border-[#2d4829]/16 text-[#2d4829] hover:bg-[#2d4829]/8"
              : "border-white/55 bg-black/15 text-white backdrop-blur-md hover:bg-black/25",
          )}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#2d4829]/12 bg-[#faf8f3]/97 backdrop-blur-xl lg:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 text-base text-[#2d4829] sm:px-8"
            style={{
              paddingBottom: "calc(1rem + env(safe-area-inset-bottom, 0px))",
            }}
          >
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 transition hover:bg-[#2d4829]/8"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#beschikbaarheid"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-[#2d4829] px-5 text-sm font-semibold text-[#faf8f3]"
            >
              Boekingsaanvraag
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
