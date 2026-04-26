"use client";

import { Display, Eyebrow, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/Reveal";
import { villa } from "@/lib/villa";
import { site } from "@/lib/site";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function Audiences() {
  const { t } = useLocale();
  return (
    <Section className="bg-paper py-16 sm:py-24 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="max-w-xl">
          <Eyebrow>{t.audiences.eyebrow}</Eyebrow>
          <Display as="h2" className="mt-4">
            {t.audiences.titlePre}{" "}
            <span className="text-warm font-medium italic">
              {t.audiences.titleHighlight}
            </span>
            .
          </Display>
          <p className="mt-5 text-base leading-7 text-primary/72">
            {t.audiences.body}
          </p>
          <p className="mt-3 text-[15px] leading-7 text-primary/72">
            {t.audiences.diveLine(
              `<a class="font-medium text-warm underline underline-offset-4" href="${site.partners.scubaDo.url}" target="_blank" rel="noreferrer">Scuba Do Curaçao</a>`,
            )
              .split(/(<a[^>]+>[^<]+<\/a>)/)
              .map((part, i) =>
                part.startsWith("<a") ? (
                  <span
                    key={i}
                    dangerouslySetInnerHTML={{ __html: part }}
                  />
                ) : (
                  <span key={i}>{part}</span>
                ),
              )}
          </p>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {villa.audiences.map((a, i) => (
            <Reveal
              as="article"
              delay={80 + i * 60}
              key={a.title}
              className="group relative overflow-hidden rounded-2xl border border-line bg-background p-5 transition hover:bg-white sm:p-6"
            >
              <span className="font-display text-xs tracking-widest text-warm/70">
                0{i + 1}
              </span>
              <h3 className="font-display mt-2 text-xl text-primary sm:text-2xl">
                {a.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-6 text-primary/72 sm:text-[15px] sm:leading-7">
                {a.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
