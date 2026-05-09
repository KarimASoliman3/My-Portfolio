import React, { createContext, useEffect, useMemo, useState } from "react";

export type Theme = "light" | "dark";
export type Language = "en" | "ar";

type AppContextValue = {
  theme: Theme;
  language: Language;
  setTheme: (t: Theme) => void;
  setLanguage: (l: Language) => void;
};

const DEFAULT_THEME: Theme = "light";

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return DEFAULT_THEME;
  try {
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  } catch {
    return DEFAULT_THEME;
  }
}
const DEFAULT_LANGUAGE: Language = "en";

const STORAGE_KEYS = {
  theme: "theme",
  language: "language",
} as const;

export const AppContext = createContext<AppContextValue | null>(null);

function safeGetTheme(): Theme {
  const raw = localStorage.getItem(STORAGE_KEYS.theme);
  if (raw === "dark" || raw === "light") return raw;
  return getSystemTheme();
}

function safeGetLanguage(): Language {
  const raw = localStorage.getItem(STORAGE_KEYS.language);
  return raw === "ar" || raw === "en" ? raw : DEFAULT_LANGUAGE;
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);

  // Initialize from localStorage (if present) else use system preference on first visit
  useEffect(() => {
    try {
      setThemeState(safeGetTheme());
      setLanguageState(safeGetLanguage());
    } catch {
      // ignore
    }
  }, []);

  // Persist + apply on changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.theme, theme);
    } catch {
      // ignore
    }

    // Tailwind class-based dark mode uses `dark` on a parent element.
    // We also set data-theme for custom CSS.
    document.documentElement.setAttribute("data-theme", theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const dir = language === "ar" ? "rtl" : "ltr";

    document.documentElement.setAttribute("dir", dir);
    document.documentElement.lang = language;

    try {
      localStorage.setItem(STORAGE_KEYS.language, language);
    } catch {
      // ignore
    }
  }, [language]);

  const value = useMemo<AppContextValue>(
    () => ({
      theme,
      language,
      setTheme: (t) => setThemeState(t),
      setLanguage: (l) => setLanguageState(l),
    }),
    [theme, language],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const ctx = React.useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be used within AppProvider");
  return ctx;
}
