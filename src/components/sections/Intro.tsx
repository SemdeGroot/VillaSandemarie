"use client";

import { useState } from "react";
import { RevealImage } from "@/components/ui/RevealImage";
import { Display, Eyebrow, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/Reveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { NumberTicker } from "@/components/ui/number-ticker";
import { cn } from "@/lib/utils";
import { useGallery } from "@/lib/GalleryProvider";

export function Intro() {
  const { t } = useLocale();
  const { openGallery } = useGallery();
  const [statsVisible, setStatsVisible] = useState(false);
  
  return (
    <Section id="villa" className="bg-paper py-16 sm:py-24 lg:py-32">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-24">
        <div className="max-w-xl">
          <Reveal>
            <Eyebrow>{t.intro.eyebrow}</Eyebrow>
            <Display as="h2" className="mt-4">
              {t.intro.titlePre}{" "}
              <span className="text-warm font-medium italic">
                {t.intro.titleHighlight}
              </span>
            </Display>
            <p className="mt-6 text-base leading-7 text-primary/78 sm:text-lg sm:leading-9">
              {t.intro.body}
            </p>
          </Reveal>

          <Reveal
            threshold={0.52}
            delay={120}
            onVisible={() => setStatsVisible(true)}
          >
            <dl className="mt-8 grid grid-cols-3 gap-2 border-t border-line pt-6 sm:gap-6">
              <Stat
                n={11}
                l={t.intro.statsGuests}
                countUp
                play={statsVisible}
                align="start"
              />
              <Stat n={5} l={t.intro.statsBedrooms} align="center" />
              <Stat n={2} l={t.intro.statsBathrooms} align="end" />
            </dl>
          </Reveal>
        </div>

        <div className="space-y-10 sm:space-y-12 lg:pt-8">
          <Reveal delay={120} className="grid grid-cols-2 gap-3 sm:gap-4">
            <button
              onClick={() => openGallery("/media/villa/villa-drone-1.webp")}
              className="group relative col-span-2 aspect-[3/2] overflow-hidden rounded-2xl shadow-soft text-left focus:outline-none"
            >
              <RevealImage
                src="/media/villa/villa-drone-1.webp"
                alt="Luchtfoto van Villa Sandemarie met privézwembad"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition duration-700 group-hover:scale-[1.04] cursor-pointer"
              />
            </button>
            <button
              onClick={() => openGallery("/media/villa/balkon-3.webp")}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-soft sm:aspect-[4/3] text-left focus:outline-none"
            >
              <RevealImage
                src="/media/villa/balkon-3.webp"
                alt="Uitzicht vanaf het balkon over Spaanse Water"
                fill
                sizes="(max-width: 1024px) 50vw, 22vw"
                className="object-cover transition duration-700 group-hover:scale-[1.04] cursor-pointer"
              />
            </button>
            <button
              onClick={() => openGallery("/media/villa/zwembad-1.webp")}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-soft sm:aspect-[4/3] text-left focus:outline-none"
            >
              <RevealImage
                src="/media/villa/zwembad-1.webp"
                alt="Het privézwembad van Villa Sandemarie"
                fill
                sizes="(max-width: 1024px) 50vw, 22vw"
                className="object-cover transition duration-700 group-hover:scale-[1.04] cursor-pointer"
              />
            </button>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

function Stat({
  n,
  l,
  countUp = false,
  play = false,
  align = "start",
}: {
  n: number;
  l: string;
  countUp?: boolean;
  play?: boolean;
  align?: "start" | "center" | "end";
}) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "start" && "items-start",
        align === "center" && "items-center lg:items-start",
        align === "end" && "items-end lg:items-start",
      )}
    >
      <div className="flex flex-col items-start">
        <dt className="eyebrow text-warm leading-tight lg:max-w-none">
          {l}
        </dt>
        <dd className="mt-2 text-3xl text-primary font-display tabular-nums">
          {countUp ? (
            <NumberTicker value={n} delay={0.12} play={play} />
          ) : (
            n
          )}
        </dd>
      </div>
    </div>
  );
}
