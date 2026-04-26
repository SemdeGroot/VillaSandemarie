"use client";

import {
  Bath,
  BedDouble,
  Car,
  ChefHat,
  Flame,
  HeartHandshake,
  type LucideIcon,
  MapPin,
  Mountain,
  Snowflake,
  Users,
  WashingMachine,
  Waves,
  Wifi,
  Wind,
} from "lucide-react";
import { Display, Eyebrow, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/Reveal";
import { villa } from "@/lib/villa";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const iconMap: Record<string, LucideIcon> = {
  Users,
  BedDouble,
  Bath,
  Waves,
  Mountain,
  Wind,
  MapPin,
  Car,
  Wifi,
  ChefHat,
  Flame,
  Snowflake,
  WashingMachine,
  HeartHandshake,
};

export function Amenities() {
  const { t } = useLocale();
  return (
    <Section
      id="voorzieningen"
      className="border-y border-line bg-background py-16 sm:py-24 lg:py-28"
    >
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal className="max-w-md lg:sticky lg:top-32 lg:self-start">
          <Eyebrow>{t.amenities.eyebrow}</Eyebrow>
          <Display as="h2" className="mt-4">
            {t.amenities.title}
          </Display>
          <p className="mt-5 text-base leading-7 text-primary/72">
            {t.amenities.body}
          </p>
        </Reveal>

        <Reveal
          as="ul"
          delay={100}
          className="grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2"
        >
          {villa.amenities.map(({ icon, label }) => {
            const Icon = iconMap[icon] ?? Users;
            return (
              <li
                key={label}
                className="group flex items-center gap-4 border-b border-line/70 py-3.5 text-primary"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-paper text-warm transition group-hover:bg-highlight group-hover:text-primary">
                  <Icon size={17} strokeWidth={1.6} />
                </span>
                <span className="text-[14.5px] leading-6">{label}</span>
              </li>
            );
          })}
        </Reveal>
      </div>
    </Section>
  );
}
