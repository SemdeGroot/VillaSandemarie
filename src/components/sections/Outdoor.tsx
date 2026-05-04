"use client";

import Image from "next/image";
import { RevealImage } from "@/components/ui/RevealImage";
import { Display, Eyebrow, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/Reveal";
import { villa } from "@/lib/villa";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function Outdoor() {
  const { t } = useLocale();
  return (
    <Section bleed className="relative overflow-hidden bg-[#0e1f15] text-white">
      <div className="absolute inset-0">
        {/* Mobile: exact state from before (opacity 55, centered) */}
        <Image
          src="/media/villa/pool-evening.webp"
          alt="Privézwembad in de avond"
          fill
          sizes="100vw"
          className="object-cover opacity-55 sm:hidden"
        />
        {/* Desktop: current improved state */}
        <RevealImage
          src="/media/villa/pool-evening.webp"
          alt="Privézwembad in de avond"
          fill
          sizes="100vw"
          className="hidden object-cover opacity-50 sm:block"
        />
        
        {/* Mobile overlay: exact state from before (horizontal gradient) */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30 sm:hidden"
          aria-hidden="true"
        />
        {/* Desktop overlay: current improved state */}
        <div
          className="hidden absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/40 sm:block"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12 lg:py-32">
        <Reveal className="max-w-xl">
          <Eyebrow tone="warm" className="text-[#fee7a9]">
            {t.outdoor.eyebrow}
          </Eyebrow>
          <Display as="h2" className="mt-4 text-white">
            {t.outdoor.titlePre}{" "}
            <span className="font-medium italic text-[#fee7a9]">
              {t.outdoor.titleHighlight}
            </span>
            {t.outdoor.titlePost}
          </Display>
          <p className="mt-6 text-base leading-7 text-white/82 sm:text-lg sm:leading-9">
            {t.outdoor.body}
          </p>
        </Reveal>

        <Reveal delay={120} as="div" className="grid gap-3 self-end">
          {villa.outdoor.points.map((fallback, i) => {
            const point = t.content.outdoor[i] ?? fallback;
            return (
              <div
                key={point}
                className="flex items-center gap-5 rounded-2xl border border-white/15 bg-white/15 p-4 backdrop-blur-md sm:p-5"
              >
                <span className="font-display text-2xl text-[#fee7a9] sm:text-3xl">
                  0{i + 1}
                </span>
                <span className="text-[14.5px] leading-6 text-white/90 sm:text-[15px] sm:leading-7">
                  {point}
                </span>
              </div>
            );
          })}
        </Reveal>
      </div>
    </Section>
  );
}
