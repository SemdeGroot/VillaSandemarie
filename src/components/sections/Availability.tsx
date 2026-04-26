import { CalendarDays, ExternalLink } from "lucide-react";
import { Display, Eyebrow, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/button";
import {
  buildUpcomingMonths,
  dateKey,
  fetchAvailability,
} from "@/lib/availability";
import { site } from "@/lib/site";

const WEEKDAY_SHORT = ["ma", "di", "wo", "do", "vr", "za", "zo"];

export async function Availability() {
  const data = await fetchAvailability();
  const months = buildUpcomingMonths(6);
  const todayKey = dateKey(new Date());

  return (
    <Section id="beschikbaarheid-kalender" className="bg-paper py-20 sm:py-24 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal className="max-w-md">
          <Eyebrow>Beschikbaarheid</Eyebrow>
          <Display as="h2" className="mt-5">
            Live kalender,{" "}
            <span className="italic text-warm">altijd actueel</span>.
          </Display>
          <p className="mt-6 text-base leading-8 text-primary/72">
            Onze kalender wordt rechtstreeks gesynchroniseerd met Airbnb.
            Donkere dagen zijn al geboekt, lichte dagen zijn beschikbaar voor
            een aanvraag.
          </p>
          <div className="mt-8 space-y-3 text-[14px] text-primary/72">
            <Legend swatch="bg-paper border border-[#2d4829]/16" label="Beschikbaar" />
            <Legend swatch="bg-[#2d4829]/85" textOnSwatch="text-[#faf8f3]/70" label="Geboekt" />
            <Legend swatch="bg-[#fee7a9]" label="Vandaag" />
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="#beschikbaarheid" variant="primary" size="default">
              Doe een aanvraag
            </LinkButton>
            <LinkButton
              href={site.airbnbIcal}
              variant="secondary"
              size="default"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={14} /> iCal feed
            </LinkButton>
          </div>
          <p className="mt-6 text-xs text-primary/55">
            {data.ok
              ? `Laatst gesynchroniseerd: ${formatTimestamp(data.fetchedAt)}.`
              : "Kalender tijdelijk niet bereikbaar. Stuur ons direct een aanvraag, dan checken we de beschikbaarheid handmatig."}
          </p>
        </Reveal>

        <Reveal delay={120} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {months.map((m) => (
            <article
              key={`${m.year}-${m.month}`}
              className="rounded-2xl border border-line bg-background p-4 sm:p-5"
            >
              <header className="flex items-center justify-between gap-2">
                <h3 className="font-display text-lg text-primary">
                  {m.monthLabel}
                </h3>
                <CalendarDays size={14} className="text-warm" />
              </header>
              <div className="mt-3 grid grid-cols-7 gap-1 text-center text-[10px] uppercase tracking-[0.18em] text-primary/45">
                {WEEKDAY_SHORT.map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
              <div className="mt-1 grid grid-cols-7 gap-1">
                {m.weeks.flat().map((cell, i) => {
                  if (!cell) return <span key={`b-${i}`} aria-hidden />;
                  const day = cell.slice(8);
                  const blocked = data.blocked.has(cell);
                  const isToday = cell === todayKey;
                  const isPast = cell < todayKey;
                  return (
                    <span
                      key={cell}
                      title={
                        blocked
                          ? "Geboekt"
                          : isToday
                            ? "Vandaag"
                            : "Beschikbaar"
                      }
                      className={
                        "flex aspect-square items-center justify-center rounded-md text-[12px] tabular-nums " +
                        (blocked
                          ? "bg-[#2d4829]/85 text-[#faf8f3]/70 line-through decoration-[#faf8f3]/40"
                          : isToday
                            ? "bg-[#fee7a9] font-semibold text-[#2d4829] ring-1 ring-[#2d4829]/20"
                            : isPast
                              ? "text-primary/35"
                              : "bg-paper text-primary/85 ring-1 ring-[#2d4829]/8")
                      }
                    >
                      {Number(day)}
                    </span>
                  );
                })}
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}

function Legend({
  swatch,
  label,
  textOnSwatch,
}: {
  swatch: string;
  label: string;
  textOnSwatch?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`inline-flex h-6 w-9 items-center justify-center rounded text-[11px] tabular-nums ${swatch} ${textOnSwatch ?? ""}`}
      >
        {textOnSwatch ? "12" : ""}
      </span>
      <span>{label}</span>
    </div>
  );
}

function formatTimestamp(iso: string) {
  const d = new Date(iso);
  return d.toLocaleString("nl-NL", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Amsterdam",
  });
}
