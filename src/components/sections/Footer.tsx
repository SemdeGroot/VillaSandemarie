"use client";

import Link from "next/link";
import { Mail, MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { Logo } from "@/components/site/Logo";

type IconProps = React.SVGProps<SVGSVGElement>;

const InstagramIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M13.5 21.95V13.5h2.84l.42-3.3H13.5V8.1c0-.96.27-1.61 1.65-1.61h1.76V3.55c-.86-.09-1.72-.13-2.58-.13-2.56 0-4.32 1.56-4.32 4.43V10.2H7.18v3.3h2.83v8.45h3.49z" />
  </svg>
);

const TikTokIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M16.5 3a5.5 5.5 0 0 0 4.5 4.6V11a8.5 8.5 0 0 1-4.5-1.3v6.3a6 6 0 1 1-6-6c.34 0 .67.03 1 .09v3.18a2.85 2.85 0 1 0 2 2.73V3h3z" />
  </svg>
);

export function Footer() {
  const { t } = useLocale();
  const nav = [
    { href: "/#villa", label: t.nav.villa },
    { href: "/#voorzieningen", label: t.nav.amenities },
    { href: "/about", label: t.nav.about },
    { href: "/curacao", label: t.nav.curacao },
    { href: "/#beschikbaarheid", label: t.nav.booking },
  ];

  return (
    <footer className="border-t border-line bg-paper text-primary">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 px-5 py-14 sm:px-8 sm:gap-x-10 sm:gap-y-12 sm:py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16 lg:px-12 lg:py-20">
        <div className="col-span-2 lg:col-span-1">
          <Link
            href="/"
            className="flex items-center gap-3 font-display text-3xl text-primary"
          >
            <Logo className="h-10 w-10 shrink-0" />
            <span className="mt-1">{site.name}</span>
          </Link>
          <p className="mt-4 max-w-sm text-[14px] leading-7 text-primary/72">
            {t.footer.intro}
          </p>
          <div className="mt-5 flex items-center gap-3">
            <Social href={site.social.instagram} label="Instagram">
              <InstagramIcon className="h-4 w-4" />
            </Social>
            <Social href={site.social.facebook} label="Facebook">
              <FacebookIcon className="h-4 w-4" />
            </Social>
            <Social href={site.social.tiktok} label="TikTok">
              <TikTokIcon className="h-4 w-4" />
            </Social>
          </div>
        </div>

        <div>
          <p className="eyebrow text-warm">{t.footer.explore}</p>
          <ul className="mt-3 space-y-2 text-[14px] text-primary/78">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="transition hover:text-primary">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0">
          <p className="eyebrow text-warm">{t.footer.contact}</p>
          <ul className="mt-3 space-y-3 text-[14px] text-primary/78">
            <li className="flex items-center gap-2">
              <Phone size={14} className="shrink-0 text-warm" />
              <a
                href={`tel:${site.contact.phoneIntl}`}
                className="break-all transition hover:text-primary"
              >
                {site.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="shrink-0 text-warm" />
              <a
                href={`mailto:${site.contact.email}`}
                className="break-all transition hover:text-primary"
              >
                {site.contact.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={14} className="shrink-0 text-warm" />
              <a
                href={site.whatsapp.nl}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-primary"
              >
                WhatsApp <span className="text-primary/55">(NL)</span>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={14} className="shrink-0 text-warm" />
              <a
                href={site.whatsapp.en}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-primary"
              >
                WhatsApp <span className="text-primary/55">(EN)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div
          className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-5 py-5 text-xs text-primary/60 sm:flex-row sm:items-center sm:px-8 sm:py-6 lg:px-12"
          style={{
            paddingBottom: "calc(1.25rem + env(safe-area-inset-bottom, 0px))",
          }}
        >
          <p>
            © {new Date().getFullYear()} {site.name}
            {t.footer.rights ? ` ${t.footer.rights}` : ""}
          </p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              site.address.full,
            )}`}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-1.5 transition hover:text-primary"
          >
            <span className="underline underline-offset-4 decoration-primary/20 transition group-hover:decoration-primary/50">
              {site.address.full}
            </span>
            <ArrowUpRight
              size={13}
              className="translate-y-px opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-background text-primary transition hover:bg-highlight"
    >
      {children}
    </a>
  );
}
