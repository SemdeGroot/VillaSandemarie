"use client";

import Image from "next/image";
import { Display, Eyebrow, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/Reveal";
import { family, familyIntro } from "@/lib/family";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function AboutPage() {
  const { t, locale } = useLocale();
  return (
    <>
      <Section
        className="bg-paper pt-[calc(env(safe-area-inset-top,0px)+5rem)] pb-12 sm:pt-32 sm:pb-20 lg:pt-40"
      >
        <Reveal className="max-w-3xl">
          <Eyebrow>{t.about.eyebrow}</Eyebrow>
          <Display as="h1" className="mt-4">
            {t.about.titlePre}{" "}
            <span className="text-warm font-medium italic">
              {t.about.titleHighlight}
            </span>
          </Display>
        </Reveal>
      </Section>

      <Section className="bg-paper pb-16 sm:pb-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-soft">
              <Image
                src="/media/about/family-azier-curacao.webp"
                alt="De familie Azier op Curaçao"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="space-y-5 text-base leading-7 text-primary/78 sm:text-[17px] sm:leading-9">
            {familyIntro[locale].split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-line bg-background py-16 sm:py-24">
        <ul className="grid gap-5 sm:gap-6 md:grid-cols-2">
          {family.map((person, i) => (
            <Reveal
              as="li"
              delay={80 + i * 60}
              key={person.name}
              className="rounded-3xl border border-line bg-paper p-5 shadow-soft sm:p-7"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-display text-2xl text-primary sm:text-3xl">
                  {person.name}
                </h2>
                <span className="text-xs uppercase tracking-[0.22em] text-warm">
                  {person.role[locale]}
                </span>
              </div>
              <p className="mt-4 text-[15px] leading-7 text-primary/78">
                {person.bio[locale]}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {person.favorites[locale].map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-line bg-background px-3 py-1 text-xs text-primary/80"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
