import { Mail, MessageCircle, Phone } from "lucide-react";
import { Section } from "@/components/ui/section";
import { LinkButton } from "@/components/ui/button";
import { site } from "@/lib/site";
import { fetchAvailability } from "@/lib/availability";
import { InquiryForm } from "./InquiryForm";
import {
  BookingHeader,
  ContactStrip,
  PricingBullets,
  PricingHeading,
  PricingNotes,
} from "./BookingClient";

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

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:gap-12 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12 lg:py-32">
        <div className="max-w-xl">
          <BookingHeader />

          <div
            className="mt-8 rounded-2xl border p-5 backdrop-blur-md sm:p-6"
            style={{
              borderColor: "rgba(250,248,243,0.15)",
              backgroundColor: "rgba(250,248,243,0.06)",
            }}
          >
            <PricingHeading />
            <PricingBullets />
            <PricingNotes />
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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

          <ContactStrip>
            <span className="inline-flex items-center gap-2">
              <Phone size={12} /> {site.contact.phone}
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail size={12} /> {site.contact.email}
            </span>
          </ContactStrip>
        </div>

        <InquiryForm blockedDates={blocked} />
      </div>
    </Section>
  );
}

