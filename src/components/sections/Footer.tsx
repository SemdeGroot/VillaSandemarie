import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";

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
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M13.5 21.95V13.5h2.84l.42-3.3H13.5V8.1c0-.96.27-1.61 1.65-1.61h1.76V3.55c-.86-.09-1.72-.13-2.58-.13-2.56 0-4.32 1.56-4.32 4.43V10.2H7.18v3.3h2.83v8.45h3.49z" />
  </svg>
);

const TikTokIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M16.5 3a5.5 5.5 0 0 0 4.5 4.6V11a8.5 8.5 0 0 1-4.5-1.3v6.3a6 6 0 1 1-6-6c.34 0 .67.03 1 .09v3.18a2.85 2.85 0 1 0 2 2.73V3h3z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper text-primary">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-16 lg:px-12 lg:py-20">
        <div>
          <Link href="/" className="font-display text-3xl text-primary">
            {site.name}
          </Link>
          <p className="mt-5 max-w-sm text-[14px] leading-7 text-primary/72">
            Een familievilla op Curaçao, gemaakt voor samen zijn. Cas Grandi,
            vlak bij Jan Thiel, met privézwembad, uitzicht over het Spaanse
            Water en een directe lijn met de familie.
          </p>
          <div className="mt-6 flex items-center gap-3">
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
          <p className="eyebrow text-warm">Verkennen</p>
          <ul className="mt-4 space-y-2 text-[14px] text-primary/78">
            {site.nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition hover:text-primary">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-warm">Contact</p>
          <ul className="mt-4 space-y-3 text-[14px] text-primary/78">
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-1 text-warm" />
              <span>{site.address.full}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-warm" />
              <a href={`tel:${site.contact.phoneIntl}`}>{site.contact.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-warm" />
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-warm">WhatsApp</p>
          <ul className="mt-4 space-y-3 text-[14px] text-primary/78">
            <li>
              <a
                href={site.whatsapp.nl}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-primary"
              >
                Chat in het Nederlands
              </a>
            </li>
            <li>
              <a
                href={site.whatsapp.en}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-primary"
              >
                Chat in English
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div
          className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-primary/60 sm:flex-row sm:items-center sm:px-8 lg:px-12"
          style={{
            paddingBottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))",
          }}
        >
          <p>
            © {new Date().getFullYear()} {site.name}. Met liefde gemaakt op
            Curaçao.
          </p>
          <p>{site.address.full}</p>
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
