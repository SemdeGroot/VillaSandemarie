"use client";

import * as React from "react";
import { Display, Eyebrow } from "@/components/ui/section";
import { villa } from "@/lib/villa";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function BookingHeader() {
  const { t } = useLocale();
  return (
    <>
      <Eyebrow tone="warm" style={{ color: "#fee7a9" }}>
        {t.booking.eyebrow}
      </Eyebrow>
      <Display as="h2" className="mt-4" style={{ color: "#faf8f3" }}>
        {t.booking.title}
      </Display>
      <p
        className="mt-6 text-base leading-7 sm:text-lg sm:leading-9"
        style={{ color: "rgba(250,248,243,0.82)" }}
      >
        {t.booking.body}
      </p>
    </>
  );
}

export function PricingHeading() {
  const { t } = useLocale();
  return (
    <p className="eyebrow" style={{ color: "#fee7a9" }}>
      {t.booking.pricingHeading}
    </p>
  );
}

export function PricingBullets() {
  const { t } = useLocale();
  const bullets = t.content.pricing.bullets ?? villa.pricing.bullets;
  return (
    <ul
      className="mt-4 space-y-2 text-[15px] leading-7"
      style={{ color: "rgba(250,248,243,0.88)" }}
    >
      {bullets.map((b) => (
        <li key={b} className="flex items-start gap-3">
          <span
            className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ backgroundColor: "#fee7a9" }}
          />
          {b}
        </li>
      ))}
    </ul>
  );
}

export function PricingNotes() {
  const { t } = useLocale();
  const notes = t.content.pricing.notes ?? villa.pricing.notes;
  return (
    <p
      className="mt-5 text-xs leading-6"
      style={{ color: "rgba(250,248,243,0.6)" }}
    >
      {notes}
    </p>
  );
}

export function ContactStrip({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs"
      style={{ color: "rgba(250,248,243,0.65)" }}
    >
      {children}
    </div>
  );
}
