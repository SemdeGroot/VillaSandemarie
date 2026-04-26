"use client";

import Image from "next/image";
import { Display, Eyebrow, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/Reveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function Intro() {
  const { t } = useLocale();
  return (
    <Section id="villa" className="bg-paper py-16 sm:py-24 lg:py-32">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-24">
        <Reveal className="max-w-xl">
          <Eyebrow>{t.intro.eyebrow}</Eyebrow>
          <Display as="h2" className="mt-4">
            {t.intro.titlePre}{" "}
            <span className="text-warm font-medium italic">
              {t.intro.titleHighlight}
            </span>
            .
          </Display>
          <p className="mt-6 text-base leading-7 text-primary/78 sm:text-lg sm:leading-9">
            {t.intro.body}
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-6 border-t border-line pt-6">
            <Stat n="11" l={t.intro.statsGuests} />
            <Stat n="5" l={t.intro.statsBedrooms} />
            <Stat n="3" l={t.intro.statsBathrooms} />
          </dl>
        </Reveal>

        <Reveal delay={120} className="grid grid-cols-6 gap-3 sm:gap-4">
          <div className="relative col-span-6 aspect-[5/4] overflow-hidden rounded-2xl shadow-soft sm:col-span-4">
            <Image
              src="/media/villa/villa-drone-1.webp"
              alt="Luchtfoto van Villa Sandemarie met privézwembad"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="relative col-span-3 aspect-[3/4] overflow-hidden rounded-2xl shadow-soft sm:col-span-2 sm:translate-y-6">
            <Image
              src="/media/villa/balcony-view.webp"
              alt="Uitzicht vanaf het balkon over Spaanse Water"
              fill
              sizes="(max-width: 1024px) 50vw, 22vw"
              className="object-cover"
            />
          </div>
          <div className="relative col-span-3 aspect-[3/4] overflow-hidden rounded-2xl shadow-soft sm:col-span-2 sm:-translate-y-2">
            <Image
              src="/media/villa/pool-loungers.webp"
              alt="Zwembad met ligbedden"
              fill
              sizes="(max-width: 1024px) 50vw, 22vw"
              className="object-cover"
            />
          </div>
          <div className="relative col-span-6 hidden aspect-[5/3] overflow-hidden rounded-2xl shadow-soft sm:col-span-4 sm:block">
            <Image
              src="/media/villa/living-room.webp"
              alt="Woonkamer van Villa Sandemarie met comfortabele bank"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <dt className="eyebrow text-warm">{l}</dt>
      <dd className="font-display mt-2 text-3xl text-primary">{n}</dd>
    </div>
  );
}
