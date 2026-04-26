import { Mail, MessageCircle, Phone } from "lucide-react";
import { Display, Eyebrow, Section } from "@/components/ui/section";
import { LinkButton } from "@/components/ui/button";
import { villa } from "@/lib/villa";
import { site } from "@/lib/site";
import { fetchAvailability } from "@/lib/availability";
import { InquiryForm } from "./InquiryForm";

export async function Booking() {
  const data = await fetchAvailability();
  const blocked = Array.from(data.blocked).sort();

  return (
    <Section
      id="beschikbaarheid"
      bleed
      className="relative overflow-hidden"
      style={{ backgroundColor: "#2d4829", color: "#faf8f3" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(254,231,169,0.6), transparent 45%), radial-gradient(circle at 80% 80%, rgba(136,167,178,0.4), transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:gap-14 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12 lg:py-32">
        <div className="max-w-xl">
          <Eyebrow tone="warm" style={{ color: "#fee7a9" }}>
            Beschikbaarheid & boeken
          </Eyebrow>
          <Display as="h2" className="mt-5" style={{ color: "#faf8f3" }}>
            Stuur een aanvraag, we reageren persoonlijk.
          </Display>
          <p
            className="mt-7 text-base leading-8 sm:text-lg"
            style={{ color: "rgba(250,248,243,0.82)" }}
          >
            Selecteer jullie data en aantal personen. We bevestigen altijd zelf,
            sturen je persoonlijk een reactie en zetten de boeking voor je
            klaar.
          </p>

          <div
            className="mt-10 rounded-2xl border p-6 backdrop-blur-md sm:p-7"
            style={{
              borderColor: "rgba(250,248,243,0.15)",
              backgroundColor: "rgba(250,248,243,0.06)",
            }}
          >
            <p className="eyebrow" style={{ color: "#fee7a9" }}>
              Prijsindicatie
            </p>
            <ul
              className="mt-4 space-y-2.5 text-[15px] leading-7"
              style={{ color: "rgba(250,248,243,0.88)" }}
            >
              {villa.pricing.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full"
                    style={{ backgroundColor: "#fee7a9" }}
                  />
                  {b}
                </li>
              ))}
            </ul>
            <p
              className="mt-5 text-xs leading-6"
              style={{ color: "rgba(250,248,243,0.6)" }}
            >
              {villa.pricing.notes}
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <LinkButton
              href={site.whatsapp.nl}
              variant="highlight"
              size="default"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={16} /> WhatsApp
            </LinkButton>
            <LinkButton
              href={`mailto:${site.contact.email}`}
              variant="outline"
              size="default"
            >
              <Mail size={16} /> E-mail
            </LinkButton>
          </div>

          <div
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs"
            style={{ color: "rgba(250,248,243,0.65)" }}
          >
            <span className="inline-flex items-center gap-2">
              <Phone size={12} /> {site.contact.phone}
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail size={12} /> {site.contact.email}
            </span>
          </div>
        </div>

        <InquiryForm blockedDates={blocked} />
      </div>
    </Section>
  );
}
