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
  return (
    <Section
      id="voorzieningen"
      className="border-y border-line bg-background py-20 sm:py-24 lg:py-28"
    >
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal className="max-w-md lg:sticky lg:top-32 lg:self-start">
          <Eyebrow>Voorzieningen</Eyebrow>
          <Display as="h2" className="mt-5">
            Alles wat je nodig hebt, niets wat je niet wilt.
          </Display>
          <p className="mt-6 text-base leading-8 text-primary/72">
            We hebben de villa ingericht zoals we zelf graag op vakantie zijn:
            comfortabel, ontspannen en praktisch. Een goede keuken, airco in
            elke slaapkamer, snelle wifi, en een ligstoel waar je niet meer
            vanaf wilt komen.
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
                className="group flex items-center gap-4 border-b border-line/70 py-4 text-primary"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-paper text-warm transition group-hover:bg-highlight group-hover:text-primary">
                  <Icon size={18} strokeWidth={1.6} />
                </span>
                <span className="text-[15px] leading-6">{label}</span>
              </li>
            );
          })}
        </Reveal>
      </div>
    </Section>
  );
}
