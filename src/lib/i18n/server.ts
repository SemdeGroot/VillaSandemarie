import { cookies, headers } from "next/headers";
import { DEFAULT_LOCALE, LOCALES, type Locale } from "./locales";

export const LOCALE_COOKIE = "vs.locale";

export async function getServerLocale(): Promise<Locale> {
  const c = await cookies();
  const fromCookie = c.get(LOCALE_COOKIE)?.value;
  if (fromCookie && (LOCALES as readonly string[]).includes(fromCookie)) {
    return fromCookie as Locale;
  }
  const h = await headers();
  const al = h.get("accept-language") ?? "";
  const candidates = al
    .split(",")
    .map((s) => s.split(";")[0].trim().toLowerCase().split("-")[0])
    .filter(Boolean);
  for (const c of candidates) {
    if ((LOCALES as readonly string[]).includes(c)) return c as Locale;
  }
  return DEFAULT_LOCALE;
}
