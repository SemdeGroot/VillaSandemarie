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
            {t.amenities.titlePre}{" "}
            <span className="text-warm font-medium italic">
              {t.amenities.titleHighlight}
            </span>
          </Display>
          <p className="mt-5 text-base leading-7 text-primary/72">
            {t.amenities.body}
          </p>
        </Reveal>

        <Reveal
          as="ul"
          delay={100}
          className="grid grid-cols-2 gap-x-3 gap-y-1 sm:gap-x-6"
        >
          {villa.amenities.map(({ icon, id, label }) => {
            const Icon = iconMap[icon] ?? Users;
            const translated = t.content.amenities[id] ?? label;
            return (
              <li
                key={id}
                className="group flex items-center gap-2.5 border-b border-line/70 py-3 text-primary sm:gap-4 sm:py-3.5"
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-paper text-warm transition group-hover:bg-highlight group-hover:text-primary sm:h-9 sm:w-9">
                  <Icon size={15} strokeWidth={1.6} className="sm:hidden" />
                  <Icon
                    size={17}
                    strokeWidth={1.6}
                    className="hidden sm:block"
                  />
                </span>
                <span className="min-w-0 text-[13px] leading-5 sm:text-[14.5px] sm:leading-6">
                  {translated}
                </span>
              </li>
            );
          })}
        </Reveal>
      </div>
    </Section>
  );
}
