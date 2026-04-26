import { Display, Eyebrow, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/Reveal";
import { villa } from "@/lib/villa";
import { site } from "@/lib/site";

export function Audiences() {
  return (
    <Section className="bg-paper py-20 sm:py-24 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="max-w-xl">
          <Eyebrow>Voor wie</Eyebrow>
          <Display as="h2" className="mt-5">
            Voor groepen die{" "}
            <span className="text-warm font-medium">samen weg willen</span>.
          </Display>
          <p className="mt-6 text-base leading-8 text-primary/72">
            Genoeg ruimte voor iedereen, en de rust om je soms even terug te
            trekken.
          </p>
          <p className="mt-4 text-[15px] leading-7 text-primary/72">
            Duik je liever weg onder water? We werken samen met{" "}
            <a
              href={site.partners.scubaDo.url}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-warm underline-offset-4 hover:underline"
            >
              Scuba Do Curaçao
            </a>
            : 10% korting op duiken voor gasten van Villa Sandemarie.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {villa.audiences.map((a, i) => (
            <Reveal
              as="article"
              delay={80 + i * 60}
              key={a.title}
              className="group relative overflow-hidden rounded-2xl border border-line bg-background p-6 transition hover:bg-white sm:p-7"
            >
              <span className="font-display text-xs tracking-widest text-warm/70">
                0{i + 1}
              </span>
              <h3 className="font-display mt-3 text-2xl text-primary">
                {a.title}
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-primary/72">
                {a.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
