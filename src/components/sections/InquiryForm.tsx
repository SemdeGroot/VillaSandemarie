"use client";

import * as React from "react";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  blockedDates: string[];
};

const NL_MONTHS = [
  "Januari",
  "Februari",
  "Maart",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Augustus",
  "September",
  "Oktober",
  "November",
  "December",
];

const WEEKDAYS = ["ma", "di", "wo", "do", "vr", "za", "zo"];

const MS_DAY = 24 * 60 * 60 * 1000;

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function dateKey(d: Date) {
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
}

function todayKey() {
  const now = new Date();
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

function startOfMonth(year: number, month: number) {
  return new Date(Date.UTC(year, month, 1));
}

function addMonths(year: number, month: number, n: number) {
  const d = new Date(Date.UTC(year, month + n, 1));
  return { year: d.getUTCFullYear(), month: d.getUTCMonth() };
}

function isBetween(key: string, start: string, end: string) {
  return key >= start && key <= end;
}

function nightsBetween(start: string, end: string) {
  const a = Date.parse(start + "T00:00:00Z");
  const b = Date.parse(end + "T00:00:00Z");
  return Math.max(0, Math.round((b - a) / MS_DAY));
}

function rangeIntersectsBlocked(
  start: string,
  end: string,
  blocked: Set<string>,
) {
  const a = Date.parse(start + "T00:00:00Z");
  const b = Date.parse(end + "T00:00:00Z");
  for (let t = a; t <= b; t += MS_DAY) {
    const k = dateKey(new Date(t));
    if (blocked.has(k)) return true;
  }
  return false;
}

function buildMonthCells(year: number, month: number): (string | null)[] {
  const first = new Date(Date.UTC(year, month, 1));
  const days = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  const startWd = (first.getUTCDay() + 6) % 7;
  const cells: (string | null)[] = [];
  for (let i = 0; i < startWd; i++) cells.push(null);
  for (let d = 1; d <= days; d++) {
    cells.push(dateKey(new Date(Date.UTC(year, month, d))));
  }
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export function InquiryForm({ blockedDates }: Props) {
  const blocked = React.useMemo(() => new Set(blockedDates), [blockedDates]);
  const today = todayKey();

  const now = React.useMemo(() => new Date(), []);
  const [view, setView] = React.useState({
    year: now.getFullYear(),
    month: now.getMonth(),
  });
  const [checkin, setCheckin] = React.useState<string | null>(null);
  const [checkout, setCheckout] = React.useState<string | null>(null);
  const [hover, setHover] = React.useState<string | null>(null);
  const [guests, setGuests] = React.useState<number>(4);

  const startMin = startOfMonth(now.getFullYear(), now.getMonth());
  const startMax = startOfMonth(now.getFullYear() + 2, now.getMonth());

  function shiftMonth(delta: number) {
    const next = addMonths(view.year, view.month, delta);
    const nextStart = startOfMonth(next.year, next.month);
    if (nextStart < startMin) return;
    if (nextStart > startMax) return;
    setView(next);
  }

  function selectDate(key: string) {
    if (blocked.has(key) || key < today) return;

    if (!checkin || (checkin && checkout)) {
      setCheckin(key);
      setCheckout(null);
      return;
    }
    if (key === checkin) {
      setCheckin(null);
      return;
    }
    if (key < checkin) {
      setCheckin(key);
      setCheckout(null);
      return;
    }
    if (rangeIntersectsBlocked(checkin, key, blocked)) {
      setCheckin(key);
      setCheckout(null);
      return;
    }
    setCheckout(key);
  }

  const nights =
    checkin && checkout ? nightsBetween(checkin, checkout) : 0;

  const monthsToShow = [view, addMonths(view.year, view.month, 1)] as const;

  return (
    <form
      name="inquiry"
      method="POST"
      action="/?bedankt=1#beschikbaarheid"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="rounded-3xl border border-[#faf8f3]/14 bg-[#faf8f3]/8 p-5 backdrop-blur-md sm:p-7"
    >
      <input type="hidden" name="form-name" value="inquiry" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>
      <input type="hidden" name="checkin" value={checkin ?? ""} />
      <input type="hidden" name="checkout" value={checkout ?? ""} />
      <input type="hidden" name="nights" value={nights} />

      <div className="flex items-center gap-2 text-[#faf8f3]/85">
        <CalendarDays size={18} className="text-[#fee7a9]" />
        <p className="font-display text-2xl">Boekingsaanvraag</p>
      </div>
      <p className="mt-2 text-sm text-[#faf8f3]/65">
        Klik je gewenste aankomst en vertrek in de kalender, vul de rest aan en
        we reageren persoonlijk binnen 24 uur.
      </p>

      <div className="mt-6 rounded-2xl border border-[#faf8f3]/12 bg-[#faf8f3]/5 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => shiftMonth(-1)}
            aria-label="Vorige maand"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#faf8f3]/20 text-[#faf8f3]/85 transition hover:bg-[#faf8f3]/10 disabled:opacity-40"
            disabled={
              startOfMonth(
                addMonths(view.year, view.month, -1).year,
                addMonths(view.year, view.month, -1).month,
              ) < startMin
            }
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex flex-1 items-center justify-center gap-6 text-[#faf8f3]/85">
            {monthsToShow.map((m) => (
              <p
                key={`${m.year}-${m.month}`}
                className={cn(
                  "font-display text-base",
                  m === monthsToShow[1] && "hidden sm:block",
                )}
              >
                {NL_MONTHS[m.month]} {m.year}
              </p>
            ))}
          </div>
          <button
            type="button"
            onClick={() => shiftMonth(1)}
            aria-label="Volgende maand"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#faf8f3]/20 text-[#faf8f3]/85 transition hover:bg-[#faf8f3]/10 disabled:opacity-40"
            disabled={
              startOfMonth(
                addMonths(view.year, view.month, 1).year,
                addMonths(view.year, view.month, 1).month,
              ) > startMax
            }
          >
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          {monthsToShow.map((m) => (
            <Month
              key={`${m.year}-${m.month}`}
              year={m.year}
              month={m.month}
              today={today}
              blocked={blocked}
              checkin={checkin}
              checkout={checkout}
              hover={hover}
              onHover={setHover}
              onSelect={selectDate}
            />
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-[12px] text-[#faf8f3]/70">
          <div className="flex items-center gap-3">
            <Legend swatch="bg-[#faf8f3]/10 ring-[#faf8f3]/25" label="Beschikbaar" />
            <Legend swatch="bg-[#fee7a9]" label="Aankomst/vertrek" />
            <Legend swatch="bg-[#faf8f3]/30" label="Geboekt" />
          </div>
          <p>
            {checkin && checkout
              ? `${formatLong(checkin)} → ${formatLong(checkout)} · ${nights} nacht${nights === 1 ? "" : "en"}`
              : checkin
                ? `Aankomst: ${formatLong(checkin)} — selecteer vertrek`
                : "Selecteer je aankomstdatum"}
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field label="Naam *" name="name" type="text" required />
        <Field label="E-mail *" name="email" type="email" required />
        <Field label="Telefoon / WhatsApp" name="phone" type="tel" />
        <label className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-[0.2em] text-[#faf8f3]/65">
            Aantal personen *
          </span>
          <input
            type="number"
            name="guests"
            min={1}
            max={11}
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            required
            className="h-12 rounded-2xl border border-[#faf8f3]/15 bg-[#faf8f3]/10 px-4 text-[15px] text-[#faf8f3] placeholder:text-[#faf8f3]/40 focus:border-[#fee7a9] focus:outline-none"
          />
        </label>
      </div>

      <div className="mt-4">
        <label className="block text-xs uppercase tracking-[0.2em] text-[#faf8f3]/65">
          Bericht (optioneel)
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Vertel ons kort wie er meekomen en waar jullie zin in hebben."
          className="mt-2 w-full rounded-2xl border border-[#faf8f3]/15 bg-[#faf8f3]/10 px-4 py-3 text-[15px] text-[#faf8f3] placeholder:text-[#faf8f3]/40 focus:border-[#fee7a9] focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={!checkin || !checkout}
        style={{ backgroundColor: "#fee7a9", color: "#2d4829" }}
        className="mt-6 inline-flex h-13 w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold transition hover:opacity-95 disabled:opacity-55"
      >
        Verstuur aanvraag
      </button>
    </form>
  );
}

type MonthProps = {
  year: number;
  month: number;
  today: string;
  blocked: Set<string>;
  checkin: string | null;
  checkout: string | null;
  hover: string | null;
  onHover: (k: string | null) => void;
  onSelect: (k: string) => void;
};

function Month({
  year,
  month,
  today,
  blocked,
  checkin,
  checkout,
  hover,
  onHover,
  onSelect,
}: MonthProps) {
  const cells = buildMonthCells(year, month);

  const previewEnd = !checkout && checkin && hover && hover > checkin ? hover : null;
  const previewIntersects =
    previewEnd && rangeIntersectsBlocked(checkin!, previewEnd, blocked);

  return (
    <div>
      <div className="grid grid-cols-7 gap-1 text-center text-[10px] uppercase tracking-[0.18em] text-[#faf8f3]/45 sm:hidden">
        <p className="col-span-7 mb-1 font-display text-sm normal-case tracking-normal text-[#faf8f3]/85">
          {NL_MONTHS[month]} {year}
        </p>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-[10px] uppercase tracking-[0.18em] text-[#faf8f3]/40">
        {WEEKDAYS.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>
      <div className="mt-1 grid grid-cols-7 gap-1">
        {cells.map((cell, i) => {
          if (!cell) return <span key={`b-${i}`} aria-hidden />;
          const isPast = cell < today;
          const isBlocked = blocked.has(cell);
          const isCheckin = cell === checkin;
          const isCheckout = cell === checkout;
          const inRange =
            checkin && checkout && isBetween(cell, checkin, checkout);
          const inPreview =
            previewEnd &&
            !previewIntersects &&
            isBetween(cell, checkin!, previewEnd);
          const disabled = isPast || isBlocked;

          let cls =
            "flex aspect-square items-center justify-center rounded-md text-[12px] tabular-nums transition";
          let style: React.CSSProperties = {};

          if (disabled) {
            cls +=
              " cursor-not-allowed text-[#faf8f3]/30 line-through decoration-[#faf8f3]/20";
            if (isBlocked) {
              cls += " bg-[#faf8f3]/30 !text-[#2d4829]/55";
            }
          } else if (isCheckin || isCheckout) {
            style = { backgroundColor: "#fee7a9", color: "#2d4829" };
            cls += " font-semibold";
          } else if (inRange || inPreview) {
            cls += " bg-[#fee7a9]/30 text-[#faf8f3]";
          } else {
            cls +=
              " bg-[#faf8f3]/10 text-[#faf8f3]/85 ring-1 ring-[#faf8f3]/15 hover:bg-[#faf8f3]/20";
          }

          return (
            <button
              key={cell}
              type="button"
              disabled={disabled}
              onClick={() => onSelect(cell)}
              onMouseEnter={() => onHover(cell)}
              onMouseLeave={() => onHover(null)}
              className={cls}
              style={style}
              aria-label={cell}
            >
              {Number(cell.slice(8))}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Legend({ swatch, label }: { swatch: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={cn("inline-block h-3 w-4 rounded ring-1", swatch)} />
      {label}
    </span>
  );
}

function formatLong(key: string) {
  const [y, m, d] = key.split("-").map(Number);
  return `${d} ${NL_MONTHS[m - 1]} ${y}`;
}

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};
function Field({ label, name, ...props }: FieldProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs uppercase tracking-[0.2em] text-[#faf8f3]/65">
        {label}
      </span>
      <input
        name={name}
        {...props}
        className="h-12 rounded-2xl border border-[#faf8f3]/15 bg-[#faf8f3]/10 px-4 text-[15px] text-[#faf8f3] placeholder:text-[#faf8f3]/40 focus:border-[#fee7a9] focus:outline-none"
      />
    </label>
  );
}
