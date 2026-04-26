import Image from "next/image";
import { Display, Eyebrow, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/Reveal";
import { family, familyIntro } from "@/lib/family";

export function About() {
  return (
    <Section
      id="over-ons"
      className="border-y border-line bg-background py-20 sm:py-24 lg:py-28"
    >
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <Eyebrow>Over ons</Eyebrow>
          <Display as="h2" className="mt-5">
            Een echt{" "}
            <span className="text-warm font-medium">familiebedrijf</span>.
          </Display>
          <div className="mt-8 space-y-5 text-base leading-8 text-primary/78">
            {familyIntro.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="relative mt-10 aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl shadow-soft">
            <Image
              src="/media/about/family-azier-curacao.webp"
              alt="De familie Azier op Curaçao"
              fill
              sizes="(max-width: 1024px) 80vw, 360px"
              className="object-cover"
            />
          </div>
        </Reveal>

        <ul className="grid gap-6 self-start">
          {family.map((person, i) => (
            <Reveal
              as="li"
              delay={80 + i * 60}
              key={person.name}
              className="rounded-3xl border border-line bg-paper p-6 shadow-soft sm:p-9"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-3xl text-primary">
                  {person.name}
                </h3>
                <span className="text-xs uppercase tracking-[0.22em] text-warm">
                  {person.role}
                </span>
              </div>
              <p className="mt-4 text-[15px] leading-7 text-primary/78">
                {person.bio}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {person.favorites.map((f) => (
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
      </div>
    </Section>
  );
}
