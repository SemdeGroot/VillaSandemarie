"use client";

import Image from "next/image";
import { RevealImage } from "@/components/ui/RevealImage";
import { Display, Eyebrow, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/Reveal";
import { villa } from "@/lib/villa";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useGallery } from "@/lib/GalleryProvider";

export function Outdoor() {
  const { t } = useLocale();
  const { openGallery } = useGallery();
  return (
    <Section bleed className="relative overflow-hidden bg-[#0e1f15] text-white">
      <div className="absolute inset-0">
        {/* Mobile: middle ground between 55 and 60 */}
        <button
          onClick={() => openGallery("/media/villa/zwembad-5.webp")}
          className="absolute inset-0 block w-full h-full p-0 border-0 bg-transparent text-left focus:outline-none sm:hidden"
        >
          <Image
            src="/media/villa/zwembad-5.webp"
            alt="Privézwembad in de avond"
            fill
            sizes="100vw"
            className="object-cover opacity-[0.57] cursor-pointer transition duration-700 hover:scale-[1.02]"
          />
        </button>
        {/* Desktop: middle ground between 50 and 75 */}
        <button
          onClick={() => openGallery("/media/villa/zwembad-5.webp")}
          className="absolute inset-0 hidden w-full h-full p-0 border-0 bg-transparent text-left focus:outline-none sm:block"
        >
          <RevealImage
            src="/media/villa/zwembad-5.webp"
            alt="Privézwembad in de avond"
            fill
            sizes="100vw"
            className="object-cover opacity-[0.62] cursor-pointer transition duration-700 hover:scale-[1.02]"
          />
        </button>
        
        {/* Mobile overlay: middle ground */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/58 to-black/28 sm:hidden pointer-events-none"
          aria-hidden="true"
        />
        {/* Desktop overlay: middle ground */}
        <div
          className="hidden absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/15 sm:block pointer-events-none"
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
