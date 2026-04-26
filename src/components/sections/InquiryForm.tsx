"use client";

import * as React from "react";
import {
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { Alert } from "@/components/ui/alert";

type Props = {
  blockedDates: string[];
};

const MS_DAY = 24 * 60 * 60 * 1000;
const WEEKDAYS = ["ma", "di", "wo", "do", "vr", "za", "zo"];

const MONTH_LABELS: Record<string, string[]> = {
  nl: [
    "Januari", "Februari", "Maart", "April", "Mei", "Juni",
    "Juli", "Augustus", "September", "Oktober", "November", "December",
  ],
  en: [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ],
  de: [
    "Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember",
  ],
  es: [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
  ],
};

const WEEKDAY_LABELS: Record<string, string[]> = {
  nl: ["ma", "di", "wo", "do", "vr", "za", "zo"],
  en: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  de: ["mo", "di", "mi", "do", "fr", "sa", "so"],
  es: ["lun", "mar", "mié", "jue", "vie", "sáb", "dom"],
};

void WEEKDAYS;

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

function maskDateInput(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 8);
  const dd = digits.slice(0, 2);
  const mm = digits.slice(2, 4);
  const yyyy = digits.slice(4, 8);
  let out = dd;
  if (digits.length >= 3) out += "-" + mm;
  if (digits.length >= 5) out += "-" + yyyy;
  return out;
}

function maskedToISO(masked: string): string | null {
  const m = masked.match(/^(\d{2})-(\d{2})-(\d{4})$/);
  if (!m) return null;
  const [, dd, mm, yyyy] = m;
  const d = Number(dd), mo = Number(mm), y = Number(yyyy);
  if (mo < 1 || mo > 12 || d < 1 || d > 31) return null;
  const dt = new Date(Date.UTC(y, mo - 1, d));
  if (
    dt.getUTCFullYear() !== y ||
    dt.getUTCMonth() !== mo - 1 ||
    dt.getUTCDate() !== d
  ) {
    return null;
  }
  return `${pad(y)}-${pad(mo)}-${pad(d)}`;
}

function isoToMasked(iso: string | null): string {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return `${d}-${m}-${y}`;
}

export function InquiryForm({ blockedDates }: Props) {
  const { locale, t } = useLocale();
  const monthLabels = MONTH_LABELS[locale] ?? MONTH_LABELS.en;
  const weekdayLabels = WEEKDAY_LABELS[locale] ?? WEEKDAY_LABELS.en;

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
  const [checkinInput, setCheckinInput] = React.useState("");
  const [checkoutInput, setCheckoutInput] = React.useState("");
  const [status, setStatus] = React.useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const formRef = React.useRef<HTMLFormElement>(null);

  const startMin = startOfMonth(now.getFullYear(), now.getMonth());
  const startMax = startOfMonth(now.getFullYear() + 2, now.getMonth());

  React.useEffect(() => {
    setCheckinInput(isoToMasked(checkin));
  }, [checkin]);
  React.useEffect(() => {
    setCheckoutInput(isoToMasked(checkout));
  }, [checkout]);

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

  function commitCheckinInput(raw: string) {
    const iso = maskedToISO(raw);
    if (!iso) return;
    if (iso < today || blocked.has(iso)) return;
    setCheckin(iso);
    if (checkout && checkout <= iso) setCheckout(null);
    const [y, m] = iso.split("-").map(Number);
    setView({ year: y, month: m - 1 });
  }
  function commitCheckoutInput(raw: string) {
    const iso = maskedToISO(raw);
    if (!iso) return;
    if (!checkin || iso <= checkin) return;
    if (rangeIntersectsBlocked(checkin, iso, blocked)) return;
    setCheckout(iso);
  }

  const nights =
    checkin && checkout ? nightsBetween(checkin, checkout) : 0;

  const monthsToShow = [view, addMonths(view.year, view.month, 1)] as const;

  const maxYear = now.getFullYear() + 2;
  const minYear = now.getFullYear();

  function formatLong(key: string) {
    const [y, mo, d] = key.split("-").map(Number);
    return `${d} ${monthLabels[mo - 1]} ${y}`;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!checkin || !checkout || status === "submitting") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const body = new URLSearchParams();
    data.forEach((value, key) => {
      body.append(key, typeof value === "string" ? value : "");
    });

    setStatus("submitting");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      form.reset();
      setCheckin(null);
      setCheckout(null);
      setGuests(4);
      setCheckinInput("");
      setCheckoutInput("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      ref={formRef}
      name="inquiry"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="rounded-3xl border border-[#faf8f3]/14 bg-[#faf8f3]/8 p-5 backdrop-blur-md sm:p-7"
    >
      <input type="hidden" name="form-name" value="inquiry" />
      <input type="hidden" name="locale" value={locale} />
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
        <p className="font-display text-2xl">{t.booking.formTitle}</p>
      </div>
      <p className="mt-2 text-sm text-[#faf8f3]/65">{t.booking.formSub}</p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <MaskedDateField
          label={t.booking.formCheckin}
          name="checkin_text"
          value={checkinInput}
          placeholder={t.booking.formCheckinHint}
          onChange={(v) => {
            setCheckinInput(maskDateInput(v));
          }}
          onBlur={() => commitCheckinInput(checkinInput)}
        />
        <MaskedDateField
          label={t.booking.formCheckout}
          name="checkout_text"
          value={checkoutInput}
          placeholder={t.booking.formCheckoutHint}
          onChange={(v) => {
            setCheckoutInput(maskDateInput(v));
          }}
          onBlur={() => commitCheckoutInput(checkoutInput)}
          disabled={!checkin}
        />
      </div>

      <div className="mt-5 rounded-2xl border border-[#faf8f3]/12 bg-[#faf8f3]/5 p-3 sm:p-5">
        <div className="grid gap-5 sm:grid-cols-2">
          {monthsToShow.map((m, idx) => {
            const prevDisabled =
              startOfMonth(
                addMonths(view.year, view.month, -1).year,
                addMonths(view.year, view.month, -1).month,
              ) < startMin;
            const nextDisabled =
              startOfMonth(
                addMonths(view.year, view.month, 1).year,
                addMonths(view.year, view.month, 1).month,
              ) > startMax;

            const isFirst = idx === 0;

            return (
              <div
                key={`${m.year}-${m.month}`}
                className={cn(idx === 1 && "hidden sm:block")}
              >
                <div className="mb-2 flex h-9 items-center justify-between gap-2">
                  {isFirst ? (
                    <>
                      <button
                        type="button"
                        onClick={() => shiftMonth(-1)}
                        aria-label="Prev"
                        disabled={prevDisabled}
                        className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#faf8f3]/20 text-[#faf8f3]/85 transition hover:bg-[#faf8f3]/10 disabled:cursor-not-allowed disabled:opacity-30"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <MonthYearPicker
                        view={view}
                        setView={setView}
                        monthLabels={monthLabels}
                        minYear={minYear}
                        maxYear={maxYear}
                        minMonthInMinYear={now.getMonth()}
                      />
                      {/* mobile-only next chevron when only one month is shown */}
                      <button
                        type="button"
                        onClick={() => shiftMonth(1)}
                        aria-label="Next"
                        disabled={nextDisabled}
                        className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#faf8f3]/20 text-[#faf8f3]/85 transition hover:bg-[#faf8f3]/10 disabled:cursor-not-allowed disabled:opacity-30 sm:hidden"
                      >
                        <ChevronRight size={16} />
                      </button>
                      <span className="hidden h-9 w-9 sm:inline-block" aria-hidden />
                    </>
                  ) : (
                    <>
                      <span className="hidden h-9 w-9 sm:inline-block" aria-hidden />
                      <p className="font-display text-[14px] tracking-tight text-[#faf8f3]/95">
                        {monthLabels[m.month]} {m.year}
                      </p>
                      <button
                        type="button"
                        onClick={() => shiftMonth(1)}
                        aria-label="Next"
                        disabled={nextDisabled}
                        className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#faf8f3]/20 text-[#faf8f3]/85 transition hover:bg-[#faf8f3]/10 disabled:cursor-not-allowed disabled:opacity-30"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </>
                  )}
                </div>
                <Month
                  year={m.year}
                  month={m.month}
                  today={today}
                  weekdayLabels={weekdayLabels}
                  blocked={blocked}
                  checkin={checkin}
                  checkout={checkout}
                  hover={hover}
                  onHover={setHover}
                  onSelect={selectDate}
                />
              </div>
            );
          })}
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-x-5 gap-y-2 text-[12px] text-[#faf8f3]/70">
          <div className="flex flex-wrap items-center gap-3">
            <Legend swatch="bg-[#faf8f3]/10 ring-[#faf8f3]/25" label={t.booking.legendAvailable} />
            <Legend swatch="bg-[#fee7a9]" label={t.booking.legendSelected} />
            <Legend swatch="bg-[#faf8f3]/30" label={t.booking.legendBooked} />
          </div>
          <p>
            {checkin && checkout
              ? t.booking.rangeSummary(formatLong(checkin), formatLong(checkout), nights)
              : checkin
                ? t.booking.arrivalSelected(formatLong(checkin))
                : t.booking.selectArrival}
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field label={`${t.booking.formName} *`} name="name" type="text" required />
        <Field label={`${t.booking.formEmail} *`} name="email" type="email" required />
        <Field label={t.booking.formPhone} name="phone" type="tel" />
        <GuestStepper
          label={t.booking.formGuests}
          value={guests}
          onChange={setGuests}
        />
      </div>

      <div className="mt-4">
        <label className="block text-xs uppercase tracking-[0.2em] text-[#faf8f3]/65">
          {t.booking.formMessage}
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder={t.booking.formMessagePh}
          className="mt-2 w-full rounded-2xl border border-[#faf8f3]/15 bg-[#faf8f3]/10 px-4 py-3 text-[15px] text-[#faf8f3] placeholder:text-[#faf8f3]/40 focus:border-[#fee7a9] focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={!checkin || !checkout || status === "submitting"}
        style={{ backgroundColor: "#fee7a9", color: "#2d4829" }}
        className="mt-6 inline-flex h-13 w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold transition hover:opacity-95 disabled:opacity-55"
      >
        {status === "submitting"
          ? t.booking.submitting
          : checkin && checkout
            ? t.cta.sendInquiry
            : t.booking.submitDisabled}
      </button>

      {status === "success" && (
        <Alert
          className="mt-4"
          variant="success"
          title={t.booking.successTitle}
          description={t.booking.successBody}
        />
      )}
      {status === "error" && (
        <Alert
          className="mt-4"
          variant="error"
          title={t.booking.errorTitle}
          description={t.booking.errorBody}
        />
      )}
    </form>
  );
}

type MonthProps = {
  year: number;
  month: number;
  today: string;
  weekdayLabels: string[];
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
  weekdayLabels,
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
      <div className="grid grid-cols-7 gap-1 text-center text-[10px] uppercase tracking-[0.18em] text-[#faf8f3]/40">
        {weekdayLabels.map((d, i) => (
          <span key={i}>{d}</span>
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

type MonthYearPickerProps = {
  view: { year: number; month: number };
  setView: (v: { year: number; month: number }) => void;
  monthLabels: string[];
  minYear: number;
  maxYear: number;
  /** earliest selectable month index in minYear (e.g. current month) */
  minMonthInMinYear: number;
};

function MonthYearPicker({
  view,
  setView,
  monthLabels,
  minYear,
  maxYear,
  minMonthInMinYear,
}: MonthYearPickerProps) {
  const [open, setOpen] = React.useState(false);
  const [pickerYear, setPickerYear] = React.useState(view.year);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (open) setPickerYear(view.year);
  }, [open, view.year]);

  React.useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function pickMonth(m: number) {
    let y = pickerYear;
    if (y === minYear && m < minMonthInMinYear) {
      y = minYear + 1;
    }
    setView({ year: y, month: m });
    setOpen(false);
  }

  const canPrevYear = pickerYear > minYear;
  const canNextYear = pickerYear < maxYear;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-full border border-[#faf8f3]/20 bg-[#faf8f3]/5 px-4 text-[14px] font-display tracking-tight text-[#faf8f3]/95 transition hover:bg-[#faf8f3]/12"
      >
        <span>
          {monthLabels[view.month]} {view.year}
        </span>
        <ChevronDown
          size={14}
          className={cn("transition", open && "rotate-180")}
        />
      </button>

      {open && (
        <div
          role="dialog"
          className="absolute left-1/2 top-12 z-30 w-[min(20rem,calc(100vw-2rem))] -translate-x-1/2 rounded-2xl border border-[#faf8f3]/15 bg-[#1a2e1f] p-3 shadow-2xl ring-1 ring-black/30 backdrop-blur"
        >
          <div className="flex items-center justify-between gap-2 px-1 pb-2">
            <button
              type="button"
              onClick={() => canPrevYear && setPickerYear((y) => y - 1)}
              disabled={!canPrevYear}
              aria-label="Previous year"
              className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-[#faf8f3]/20 text-[#faf8f3]/85 transition hover:bg-[#faf8f3]/10 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft size={14} />
            </button>
            <p className="font-display text-base font-semibold text-[#faf8f3]">
              {pickerYear}
            </p>
            <button
              type="button"
              onClick={() => canNextYear && setPickerYear((y) => y + 1)}
              disabled={!canNextYear}
              aria-label="Next year"
              className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-[#faf8f3]/20 text-[#faf8f3]/85 transition hover:bg-[#faf8f3]/10 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-1.5">
            {monthLabels.map((m, i) => {
              const disabled =
                pickerYear === minYear && i < minMonthInMinYear;
              const isCurrent =
                pickerYear === view.year && i === view.month;
              return (
                <button
                  key={i}
                  type="button"
                  disabled={disabled}
                  onClick={() => pickMonth(i)}
                  className={cn(
                    "h-9 cursor-pointer rounded-lg px-2 text-[13px] font-medium transition",
                    isCurrent
                      ? "bg-[#fee7a9] text-[#2d4829]"
                      : disabled
                        ? "cursor-not-allowed text-[#faf8f3]/25"
                        : "text-[#faf8f3]/85 hover:bg-[#faf8f3]/12",
                  )}
                >
                  {m.slice(0, 3)}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

type GuestStepperProps = {
  label: string;
  value: number;
  onChange: (n: number) => void;
  min?: number;
  max?: number;
};

function GuestStepper({
  label,
  value,
  onChange,
  min = 1,
  max = 11,
}: GuestStepperProps) {
  const dec = () => onChange(Math.max(min, value - 1));
  const inc = () => onChange(Math.min(max, value + 1));
  const minDisabled = value <= min;
  const maxDisabled = value >= max;
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="guests"
        className="text-xs uppercase tracking-[0.2em] text-[#faf8f3]/65"
      >
        {label} *
      </label>
      <div className="flex h-12 items-center justify-between rounded-2xl border border-[#faf8f3]/15 bg-[#faf8f3]/10 px-2 focus-within:border-[#fee7a9]">
        <button
          type="button"
          onClick={dec}
          disabled={minDisabled}
          aria-label="Minder gasten"
          className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-[#faf8f3] transition hover:bg-[#faf8f3]/10 disabled:cursor-not-allowed disabled:text-[#faf8f3]/25 disabled:hover:bg-transparent"
        >
          <Minus size={16} strokeWidth={1.8} />
        </button>
        <div className="flex flex-1 items-center justify-center gap-1.5">
          <span
            id="guests"
            className="font-display text-[18px] tabular-nums text-[#faf8f3]"
            aria-live="polite"
          >
            {value}
          </span>
          <span className="text-[12px] text-[#faf8f3]/55">/ {max}</span>
        </div>
        <button
          type="button"
          onClick={inc}
          disabled={maxDisabled}
          aria-label="Meer gasten"
          className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-[#faf8f3] transition hover:bg-[#faf8f3]/10 disabled:cursor-not-allowed disabled:text-[#faf8f3]/25 disabled:hover:bg-transparent"
        >
          <Plus size={16} strokeWidth={1.8} />
        </button>
      </div>
      <input type="hidden" name="guests" value={value} />
    </div>
  );
}

type MaskedFieldProps = {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  disabled?: boolean;
};
function MaskedDateField({
  label,
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  disabled,
}: MaskedFieldProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs uppercase tracking-[0.2em] text-[#faf8f3]/65">
        {label}
      </span>
      <input
        type="text"
        name={name}
        inputMode="numeric"
        autoComplete="off"
        placeholder={placeholder ?? "dd-mm-jjjj"}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className="h-12 rounded-2xl border border-[#faf8f3]/15 bg-[#faf8f3]/10 px-4 text-[15px] tracking-wide text-[#faf8f3] placeholder:text-[#faf8f3]/35 focus:border-[#fee7a9] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        maxLength={10}
      />
    </label>
  );
}
