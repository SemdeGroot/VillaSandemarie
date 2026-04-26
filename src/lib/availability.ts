import { site } from "./site";

export type BlockedRange = {
  start: string;
  end: string;
};

export type AvailabilityData = {
  blocked: Set<string>;
  ranges: BlockedRange[];
  fetchedAt: string;
  ok: boolean;
};

const MS_DAY = 24 * 60 * 60 * 1000;

function parseICalDate(value: string): Date | null {
  const m = value.match(/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})Z?)?$/);
  if (!m) return null;
  const [, y, mo, d, h = "0", mi = "0", s = "0"] = m;
  return new Date(
    Date.UTC(
      Number(y),
      Number(mo) - 1,
      Number(d),
      Number(h),
      Number(mi),
      Number(s),
    ),
  );
}

export function dateKey(d: Date): string {
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function startOfMonth(year: number, month: number): Date {
  return new Date(Date.UTC(year, month, 1));
}

export function addMonths(d: Date, n: number): Date {
  return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + n, 1));
}

function unfoldICal(text: string): string {
  return text.replace(/\r?\n[ \t]/g, "");
}

export async function fetchAvailability(): Promise<AvailabilityData> {
  const fetchedAt = new Date().toISOString();
  try {
    const res = await fetch(site.airbnbIcal, {
      next: { revalidate: 1800 },
      headers: { "User-Agent": "VillaSandemarie/1.0 (availability-fetch)" },
    });
    if (!res.ok) {
      return { blocked: new Set(), ranges: [], fetchedAt, ok: false };
    }
    const raw = unfoldICal(await res.text());
    const blocked = new Set<string>();
    const ranges: BlockedRange[] = [];

    for (const block of raw.split("BEGIN:VEVENT").slice(1)) {
      const ev = block.split("END:VEVENT")[0];
      const sm = ev.match(/\nDTSTART(?:;[^:\n]*)?:([^\r\n]+)/);
      const em = ev.match(/\nDTEND(?:;[^:\n]*)?:([^\r\n]+)/);
      if (!sm || !em) continue;
      const start = parseICalDate(sm[1].trim());
      const end = parseICalDate(em[1].trim());
      if (!start || !end) continue;
      ranges.push({ start: dateKey(start), end: dateKey(end) });
      for (
        let t = start.getTime();
        t < end.getTime();
        t += MS_DAY
      ) {
        blocked.add(dateKey(new Date(t)));
      }
    }
    return { blocked, ranges, fetchedAt, ok: true };
  } catch {
    return { blocked: new Set(), ranges: [], fetchedAt, ok: false };
  }
}

export type MonthGrid = {
  year: number;
  month: number;
  monthLabel: string;
  weeks: (string | null)[][];
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

export function buildMonthGrid(year: number, month: number): MonthGrid {
  const first = new Date(Date.UTC(year, month, 1));
  const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  const startWeekday = (first.getUTCDay() + 6) % 7;

  const cells: (string | null)[] = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(dateKey(new Date(Date.UTC(year, month, d))));
  }
  while (cells.length % 7 !== 0) cells.push(null);

  const weeks: (string | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7));
  }

  return {
    year,
    month,
    monthLabel: `${NL_MONTHS[month]} ${year}`,
    weeks,
  };
}

export function buildUpcomingMonths(count: number): MonthGrid[] {
  const today = new Date();
  const start = startOfMonth(today.getUTCFullYear(), today.getUTCMonth());
  const months: MonthGrid[] = [];
  for (let i = 0; i < count; i++) {
    const d = addMonths(start, i);
    months.push(buildMonthGrid(d.getUTCFullYear(), d.getUTCMonth()));
  }
  return months;
}
