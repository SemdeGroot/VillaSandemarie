import Image from "next/image";
import { Display, Eyebrow, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/Reveal";
import { villa } from "@/lib/villa";

export function Outdoor() {
  return (
    <Section bleed className="relative overflow-hidden bg-[#0e1f15] text-white">
      <div className="absolute inset-0">
        <Image
          src="/media/villa/pool-evening.webp"
          alt="Privézwembad in de avond"
          fill
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12 lg:py-32">
        <Reveal className="max-w-xl">
          <Eyebrow tone="warm" className="text-[#fee7a9]">
            Buitenleven in de tropen
          </Eyebrow>
          <Display as="h2" className="mt-5 text-white">
            Het{" "}
            <span className="italic text-[#fee7a9]">balkon op de wind</span>,
            het zwembad, de zonsondergang.
          </Display>
          <p className="mt-7 text-base leading-8 text-white/82 sm:text-lg sm:leading-9">
            {villa.outdoor.intro}
          </p>
        </Reveal>

        <Reveal delay={120} as="div" className="grid gap-3 self-end">
          {villa.outdoor.points.map((point, i) => (
            <div
              key={point}
              className="flex items-start gap-5 rounded-2xl border border-white/12 bg-white/5 p-5 backdrop-blur-md"
            >
              <span className="font-display text-3xl text-[#fee7a9]">
                0{i + 1}
              </span>
              <span className="text-[15px] leading-7 text-white/90">
                {point}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
