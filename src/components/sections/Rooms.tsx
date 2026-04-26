"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { Display, Eyebrow, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/Reveal";
import { villa } from "@/lib/villa";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const roomMedia: Record<string, { src: string; alt: string }> = {
  Slaapkamers: {
    src: "/media/villa/bedroom-master-l.webp",
    alt: "Slaapkamer met twee bedden en airco",
  },
  Badkamers: {
    src: "/media/villa/bathroom.webp",
    alt: "Badkamer met inloopdouche",
  },
  Woonkamer: {
    src: "/media/villa/living-room-2.webp",
    alt: "Woonkamer met bank en smart-tv",
  },
  Keuken: {
    src: "/media/villa/kitchen-2.webp",
    alt: "Volledig uitgeruste keuken",
  },
};

export function Rooms() {
  const { t } = useLocale();
  return (
    <Section className="bg-paper py-16 sm:py-24 lg:py-28">
      <Reveal className="max-w-2xl">
        <Eyebrow>{t.rooms.eyebrow}</Eyebrow>
        <Display as="h2" className="mt-4">
          {t.rooms.titlePre}{" "}
          <span className="text-warm font-medium italic">
            {t.rooms.titleHighlight}
          </span>
        </Display>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:gap-7 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-12">
        {villa.rooms.map((room, i) => {
          const media = roomMedia[room.title];
          return (
            <Reveal
              as="article"
              delay={80 + i * 60}
              key={room.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-background shadow-soft sm:flex-row"
            >
              {media && (
                <div className="relative aspect-[5/4] w-full shrink-0 overflow-hidden sm:aspect-auto sm:w-2/5">
                  <Image
                    src={media.src}
                    alt={media.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 22vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col justify-start space-y-3 px-5 py-5 sm:px-7 sm:py-8">
                <h3 className="font-display text-2xl text-primary sm:text-3xl">
                  {room.title}
                </h3>
                <ul className="space-y-2 text-[14px] leading-6 text-primary/78">
                  {room.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <Check
                        size={15}
                        className="mt-1.5 shrink-0 text-warm"
                        strokeWidth={2}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
