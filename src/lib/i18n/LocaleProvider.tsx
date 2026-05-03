"use client";

import * as React from "react";
import { DEFAULT_LOCALE, LOCALES, type Locale } from "./locales";
import { dictionaries, type Dict } from "./dictionary";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dict;
};

const LocaleContext = React.createContext<Ctx | null>(null);

const STORAGE_KEY = "vs.locale";
const COOKIE_KEY = "vs.locale";

function persistLocale(l: Locale) {
  try {
    localStorage.setItem(STORAGE_KEY, l);
  } catch {}
  try {
    document.cookie = `${COOKIE_KEY}=${l};path=/;max-age=31536000;samesite=lax`;
  } catch {}
}

export function LocaleProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = React.useState<Locale>(initialLocale);

  React.useEffect(() => {
    let chosen: Locale | null = null;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && (LOCALES as readonly string[]).includes(stored)) {
        chosen = stored as Locale;
      }
    } catch {}
    if (chosen && chosen !== locale) {
      const c = chosen;
      setTimeout(() => setLocaleState(c), 0);
    } else {
      // make sure cookie is set so next SSR matches
      persistLocale(locale);
    }
    document.documentElement.lang = chosen ?? locale;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLocale = React.useCallback((l: Locale) => {
    setLocaleState(l);
    persistLocale(l);
    document.documentElement.lang = l;
  }, []);

  const value = React.useMemo<Ctx>(
    () => ({ locale, setLocale, t: dictionaries[locale] }),
    [locale, setLocale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): Ctx {
  const ctx = React.useContext(LocaleContext);
  if (!ctx) {
    return {
      locale: DEFAULT_LOCALE,
      setLocale: () => {},
      t: dictionaries[DEFAULT_LOCALE],
    };
  }
  return ctx;
}
