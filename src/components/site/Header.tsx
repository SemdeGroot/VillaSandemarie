"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Mail, Menu, MessageCircle, X } from "lucide-react";
import { site } from "@/lib/site";
import { LinkButton } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { cn } from "@/lib/utils";

type Props = {
  variant?: "transparent" | "solid";
};

export function Header({ variant = "transparent" }: Props) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const { t } = useLocale();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Desktop transparency only when not scrolled, not forced solid, not menu open.
  // Mobile is always solid (handled via CSS classes — no JS-driven flash on hydrate).
  const desktopSolid = variant === "solid" || scrolled || open;

  const nav = [
    { href: "/#villa", label: t.nav.villa },
    { href: "/#voorzieningen", label: t.nav.amenities },
    { href: "/about", label: t.nav.about },
    { href: "/curacao", label: t.nav.curacao },
    { href: "/#beschikbaarheid", label: t.nav.booking },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[80]",
          // Mobile: always solid + bottom border, no transition.
          "bg-[#faf8f3] border-b border-[#2d4829]/10",
          // Desktop: switch to dynamic behavior with transition.
          "lg:transition-colors lg:duration-300",
          desktopSolid
            ? "lg:bg-[#faf8f3] lg:border-[#2d4829]/10"
            : "lg:bg-transparent lg:border-transparent",
        )}
        style={{
          paddingTop: "env(safe-area-inset-top, 0px)",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-8 sm:py-3.5 lg:px-12">
          <Link
            href="/"
            className="header-logo font-display text-[1.2rem] font-semibold tracking-tight sm:text-xl lg:transition-colors"
            style={{ color: desktopSolid ? "#2d4829" : "#ffffff" }}
            aria-label={`${site.name} home`}
            onClick={() => setOpen(false)}
          >
            {site.name}
          </Link>

          <nav
            className="header-nav hidden items-center gap-7 text-sm lg:flex lg:transition-colors"
            style={{
              color: desktopSolid
                ? "rgba(45,72,41,0.85)"
                : "rgba(255,255,255,0.92)",
            }}
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:opacity-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Mobile language switcher: always light (solid header). */}
            <span className="lg:hidden">
              <LanguageSwitcher variant="light" />
            </span>
            {/* Desktop language switcher: follows transparency state. */}
            <span className="hidden lg:inline-flex">
              <LanguageSwitcher variant={desktopSolid ? "light" : "dark"} />
            </span>
            <div className="hidden lg:block">
              <LinkButton
                href="/#beschikbaarheid"
                variant="primary"
                size="sm"
                style={{
                  backgroundColor: desktopSolid ? "#2d4829" : "#ffffff",
                  color: desktopSolid ? "#faf8f3" : "#2d4829",
                }}
              >
                {t.cta.book}
              </LinkButton>
            </div>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#2d4829]/16 text-[#2d4829] transition hover:bg-[#2d4829]/8 lg:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-[#0d1410]/55 transition-opacity duration-300 ease-out lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer panel */}
      <aside
        className={cn(
          "fixed inset-x-0 top-0 z-[70] origin-top bg-[#faf8f3] transition-[transform,opacity] duration-[320ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] lg:hidden",
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0",
        )}
        style={{
          paddingTop: "calc(env(safe-area-inset-top, 0px) + 4rem)",
          paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 1.5rem)",
          boxShadow: open
            ? "0 24px 60px -28px rgba(45,72,41,0.35)"
            : "none",
        }}
        aria-hidden={!open}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 pt-3 sm:px-8">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "group flex items-center justify-between border-b border-[#2d4829]/10 py-4 text-[1.4rem] font-display text-[#2d4829] transition-[opacity,transform] duration-300 ease-out hover:text-[#59392e]",
                open ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0",
              )}
              style={{ transitionDelay: open ? `${100 + i * 45}ms` : "0ms" }}
            >
              <span>{item.label}</span>
              <ArrowRight
                size={18}
                strokeWidth={1.7}
                className="opacity-30 transition group-hover:translate-x-1 group-hover:opacity-100"
              />
            </Link>
          ))}
        </nav>

        <div
          className={cn(
            "mx-auto mt-6 flex max-w-7xl flex-col gap-3 px-5 transition-[opacity,transform] duration-300 ease-out sm:px-8",
            open ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0",
          )}
          style={{ transitionDelay: open ? "320ms" : "0ms" }}
        >
          <LinkButton
            href="/#beschikbaarheid"
            variant="primary"
            size="lg"
            onClick={() => setOpen(false)}
            className="w-full"
          >
            {t.cta.book} <ArrowRight size={16} />
          </LinkButton>
          <div className="grid grid-cols-2 gap-3">
            <a
              href={site.whatsapp.nl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-full border border-[#2d4829]/16 bg-paper text-sm font-semibold text-[#2d4829] transition hover:bg-[#2d4829]/6"
            >
              <MessageCircle size={15} /> WhatsApp
            </a>
            <a
              href={`mailto:${site.contact.email}`}
              onClick={() => setOpen(false)}
              className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-full border border-[#2d4829]/16 bg-paper text-sm font-semibold text-[#2d4829] transition hover:bg-[#2d4829]/6"
            >
              <Mail size={15} /> {t.cta.email}
            </a>
          </div>
        </div>

        <div
          className={cn(
            "mx-auto mt-7 flex max-w-7xl flex-col gap-1 border-t border-[#2d4829]/10 px-5 pt-5 text-[12.5px] text-[#2d4829]/65 transition-opacity duration-300 sm:px-8",
            open ? "opacity-100" : "opacity-0",
          )}
          style={{ transitionDelay: open ? "380ms" : "0ms" }}
        >
          <p>{site.address.full}</p>
          <p>
            <a href={`tel:${site.contact.phoneIntl}`} className="hover:text-[#2d4829]">
              {site.contact.phone}
            </a>
            <span className="mx-2 text-[#2d4829]/30">·</span>
            <a href={`mailto:${site.contact.email}`} className="hover:text-[#2d4829]">
              {site.contact.email}
            </a>
          </p>
        </div>
      </aside>
    </>
  );
}
