"use client";

import { useState } from "react";
import { RevealImage } from "@/components/ui/RevealImage";
import { Display, Eyebrow, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/Reveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { NumberTicker } from "@/components/ui/number-ticker";

export function Intro() {
  const { t } = useLocale();
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

        </div>

        <div className="space-y-10 sm:space-y-12 lg:pt-8">
          <Reveal delay={120} className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="relative col-span-2 aspect-[3/2] overflow-hidden rounded-2xl shadow-soft">
              <RevealImage
                src="/media/villa/Villa drone 1.webp"
                alt="Luchtfoto van Villa Sandemarie met privézwembad"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-soft sm:aspect-[4/3]">
              <RevealImage
                src="/media/villa/Balkon3.webp"
                alt="Uitzicht vanaf het balkon over Spaanse Water"
                fill
                sizes="(max-width: 1024px) 50vw, 22vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-soft sm:aspect-[4/3]">
              <RevealImage
                src="/media/villa/Zwembad 1.webp"
                alt="Het privézwembad van Villa Sandemarie"
                fill
                sizes="(max-width: 1024px) 50vw, 22vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <Reveal
          threshold={0.52}
          delay={120}
          onVisible={() => setStatsVisible(true)}
          className="max-w-xl"
        >
          <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-line pt-6 sm:gap-6">
            <Stat n={11} l={t.intro.statsGuests} countUp play={statsVisible} />
            <Stat n={5} l={t.intro.statsBedrooms} />
            <Stat n={2} l={t.intro.statsBathrooms} />
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}

function Stat({
  n,
  l,
  countUp = false,
  play = false,
}: {
  n: number;
  l: string;
  countUp?: boolean;
  play?: boolean;
}) {
  return (
    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
      <dt className="eyebrow max-w-[8.5rem] text-warm leading-tight lg:max-w-none">
        {l}
      </dt>
      <dd className="mt-2 w-full text-3xl text-primary lg:w-auto">
        {countUp ? (
          <NumberTicker value={n} delay={0.12} play={play} />
        ) : (
          <span className="inline-block w-full font-display tabular-nums lg:w-auto">
            {n}
          </span>
        )}
      </dd>
    </div>
  );
}
