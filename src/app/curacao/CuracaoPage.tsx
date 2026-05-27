"use client";

import { RevealImage } from "@/components/ui/RevealImage";
import { ArrowUpRight } from "lucide-react";
import { Display, Eyebrow, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/button";
import {
  curacaoStories,
  curacaoQuickTips,
  getStory,
  getStoryAlt,
  getTip,
} from "@/lib/curacao";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { cn } from "@/lib/utils";

const PRACTICAL_TITLE: Record<string, string> = {
  nl: "Goed om te weten",
  en: "Good to know",
  de: "Gut zu wissen",
  es: "Bueno saberlo",
};

const FROM_VILLA_TITLE: Record<string, string> = {
  nl: "Vanuit de villa zo het eiland op.",
  en: "Out the door, onto the island.",
  de: "Aus der Tür, raus auf die Insel.",
  es: "Desde la villa, directo a la isla.",
};

const FROM_VILLA_BODY: Record<string, string> = {
  nl: "Cas Grandi ligt vlak bij Jan Thiel en het Spaanse Water. Eigen parkeerplek, auto aanbevolen.",
  en: "Cas Grandi sits right next to Jan Thiel and Spanish Water. Own parking spot, car recommended.",
  de: "Cas Grandi liegt direkt neben Jan Thiel und dem Spanischen Wasser. Eigener Parkplatz, Auto empfohlen.",
  es: "Cas Grandi está al lado de Jan Thiel y de Aguas Españolas. Aparcamiento propio, recomendamos coche.",
};

export function CuracaoPage() {
  const { t, locale } = useLocale();
  return (
    <>
      <Section className="bg-paper pt-[calc(env(safe-area-inset-top,0px)+5rem)] pb-12 sm:pt-32 sm:pb-20 lg:pt-40">
        <Reveal immediate className="max-w-3xl">
          <Eyebrow>{t.curacao.eyebrow}</Eyebrow>
          <Display as="h1" className="mt-4">
            {t.curacao.titlePre}{" "}
            <span className="text-warm font-medium italic">
              {t.curacao.titleHighlight}
            </span>
          </Display>
          <p className="mt-6 max-w-2xl text-base leading-7 text-primary/78 sm:text-lg sm:leading-9">
            {t.curacao.lead}
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {curacaoStories.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-line bg-background px-3.5 py-1.5 text-[12.5px] font-medium text-primary/80 transition hover:bg-highlight"
              >
                {getStory(s, locale).category}
              </a>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section className="bg-paper">
        <div className="grid gap-3 sm:gap-4 lg:grid-cols-3">
          {[
            "/media/curacao/strand-cas-abao-overhangende-takken.webp",
            "/media/curacao/duiken-freedive-silhouet.webp",
            "/media/curacao/willemstad-parasols-punda.webp",
          ].map((src) => (
            <Reveal
              key={src}
              immediate
              className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft"
            >
              <RevealImage
                src={src}
                alt="Curaçao"
                fill
                priority
                immediate
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </Reveal>
          ))}        </div>
      </Section>

      <Section className="border-t border-line bg-paper py-16 sm:py-24">
        <Reveal className="max-w-2xl">
          <Eyebrow>{t.curacao.storiesHeading}</Eyebrow>
          <Display as="h2" className="mt-4 text-3xl sm:text-4xl">
            {t.curacao.lead}
          </Display>
        </Reveal>

        <div className="mt-12 space-y-16 sm:space-y-24">
          {curacaoStories.map((story, i) => {
            const c = getStory(story, locale);
            const alt = getStoryAlt(story, locale);
            return (
              <article
                key={story.id}
                id={story.id}
                className="grid scroll-mt-24 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16"
              >
                <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className={cn(
                      "relative aspect-[5/4] w-full overflow-hidden rounded-3xl shadow-soft",
                      story.imageFrameClassName
                    )}
                  >
                    <RevealImage
                      src={story.image}
                      alt={alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className={cn("object-cover", story.imageClassName)}
                    />
                  </div>
                </Reveal>
                <Reveal delay={120}>
                  <Eyebrow>{c.category}</Eyebrow>
                  <h3 className="font-display mt-3 text-3xl leading-tight text-primary sm:text-4xl">
                    {c.title}
                  </h3>
                  <p className="mt-4 text-[15.5px] leading-7 text-primary/78 sm:text-lg sm:leading-9">
                    {c.intro}
                  </p>
                  <div className="mt-5 space-y-4 text-[15px] leading-7 text-primary/72">
                    {c.body.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                  {story.by && (
                    <p className="mt-5 text-xs uppercase tracking-[0.22em] text-warm">
                      {t.curacao.insiderBy(story.by)}
                    </p>
                  )}
                  {c.link && (
                    <a
                      href={c.link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-8 hover:underline"
                    >
                      {c.link.label} <ArrowUpRight size={14} />
                    </a>
                  )}
                </Reveal>
              </article>
            );
          })}
        </div>
      </Section>

      <Section className="border-y border-line bg-background py-14 sm:py-20">
        <Reveal className="max-w-xl">
          <Eyebrow>{t.curacao.quickTipsHeading}</Eyebrow>
          <Display as="h2" className="mt-4 text-3xl sm:text-4xl">
            {PRACTICAL_TITLE[locale] ?? PRACTICAL_TITLE.en}
          </Display>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {curacaoQuickTips.map((tip, i) => {
            const c = getTip(tip, locale);
            return (
              <Reveal
                key={c.title}
                delay={i * 60}
                className="rounded-2xl border border-line bg-paper p-5 sm:p-6"
              >
                <p className="text-[10px] uppercase tracking-[0.22em] text-warm">
                  {c.category}
                </p>
                <h3 className="font-display mt-2 text-lg text-primary">
                  {c.title}
                </h3>
                <p className="mt-2 text-[14px] leading-6 text-primary/72">
                  {c.text}
                </p>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="bg-paper py-16 sm:py-24">
        <Reveal className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <Display as="h2" className="text-3xl sm:text-4xl">
              {FROM_VILLA_TITLE[locale] ?? FROM_VILLA_TITLE.en}
            </Display>
            <p className="mt-3 text-[15px] leading-7 text-primary/72 sm:text-base">
              {FROM_VILLA_BODY[locale] ?? FROM_VILLA_BODY.en}
            </p>
          </div>
          <LinkButton href="/#beschikbaarheid" variant="primary" size="lg">
            {t.cta.planStay}
          </LinkButton>
        </Reveal>
      </Section>
    </>
  );
}
