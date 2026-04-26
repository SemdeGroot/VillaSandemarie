export const LOCALES = ["nl", "en", "de", "es"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, string> = {
  nl: "Nederlands",
  en: "English",
  de: "Deutsch",
  es: "Español",
};

export const LOCALE_SHORT: Record<Locale, string> = {
  nl: "NL",
  en: "EN",
  de: "DE",
  es: "ES",
};

export function detectBrowserLocale(): Locale {
  if (typeof navigator === "undefined") return DEFAULT_LOCALE;
  const candidates = [navigator.language, ...(navigator.languages ?? [])]
    .filter(Boolean)
    .map((l) => l.toLowerCase().split("-")[0]);
  for (const c of candidates) {
    if ((LOCALES as readonly string[]).includes(c)) return c as Locale;
  }
  return DEFAULT_LOCALE;
}
