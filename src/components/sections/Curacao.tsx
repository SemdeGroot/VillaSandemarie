import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Display, Eyebrow, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/Reveal";
import { curacaoGallery } from "@/lib/gallery";

const tips = [
  {
    title: "Strand & zee",
    text: "Vanuit Cas Grandi sta je zo bij Jan Thiel, Mambo en de bekende stranden, ook de rustigere baaitjes aan de oostkant zijn goed bereikbaar.",
  },
  {
    title: "Eten & drinken",
    text: "We delen graag onze vaste plekken: koffie bij Number Ten, frozen cappuccino bij Chill Beach, diner bij Mosa Caña of Villa Vis.",
  },
  {
    title: "Onder water",
    text: "Lisa-Marie duikt het liefst aan de oostkant. Voor gasten regelen we 10% korting bij Scuba Do Curaçao.",
  },
  {
    title: "Willemstad",
    text: "Een halfuurtje rijden en je struint langs gekleurde gevels in Punda en Otrobanda. Aanrader voor een ochtend of avondje uit.",
  },
];

export function Curacao() {
  return (
    <Section id="curacao" className="bg-paper py-20 sm:py-24 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-16">
        <Reveal className="max-w-xl">
          <Eyebrow>Curaçao</Eyebrow>
          <Display as="h2" className="mt-5">
            Curaçao ontdekken{" "}
            <span className="italic text-warm">vanuit de villa</span>.
          </Display>
          <p className="mt-6 text-base leading-8 text-primary/78">
            Cas Grandi ligt vlak bij Jan Thiel, het Spaanse Water en de
            zuidoostkust. We delen graag onze hotspots zodat jullie het eiland
            op je eigen manier ontdekken, met wat insider info van een familie
            die hier echt woont.
          </p>
          <a
            href="#beschikbaarheid"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-8 hover:underline"
          >
            Plan jullie verblijf <ArrowUpRight size={16} />
          </a>
        </Reveal>

        <Reveal delay={120} className="grid grid-cols-6 gap-3">
          <div className="relative col-span-6 aspect-[16/10] overflow-hidden rounded-3xl shadow-soft sm:col-span-4">
            <Image
              src={curacaoGallery[0].src}
              alt={curacaoGallery[0].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="relative col-span-3 aspect-[4/5] overflow-hidden rounded-3xl shadow-soft sm:col-span-2">
            <Image
              src={curacaoGallery[2].src}
              alt={curacaoGallery[2].alt}
              fill
              sizes="(max-width: 1024px) 50vw, 22vw"
              className="object-cover"
            />
          </div>
          <div className="relative col-span-3 aspect-[4/5] overflow-hidden rounded-3xl shadow-soft sm:col-span-2">
            <Image
              src={curacaoGallery[4].src}
              alt={curacaoGallery[4].alt}
              fill
              sizes="(max-width: 1024px) 50vw, 22vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>

      <Reveal
        delay={160}
        className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {tips.map((tip, i) => (
          <article
            key={tip.title}
            className="rounded-2xl border border-line bg-background p-6 sm:p-7"
          >
            <span className="font-display text-xs tracking-widest text-warm/70">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display mt-3 text-xl text-primary">
              {tip.title}
            </h3>
            <p className="mt-3 text-[14px] leading-7 text-primary/72">
              {tip.text}
            </p>
          </article>
        ))}
      </Reveal>
    </Section>
  );
}
