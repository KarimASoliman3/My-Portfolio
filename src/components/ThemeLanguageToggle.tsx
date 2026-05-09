import { useAppContext } from "../state/AppContext";
import { useTranslation } from "react-i18next";
import { Moon, Sun, Languages } from "lucide-react";

export default function ThemeLanguageToggle() {
  const { theme, language, setTheme, setLanguage } = useAppContext();
  const { i18n } = useTranslation();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleLanguage = () => {
    const next = language === "en" ? "ar" : "en";
    setLanguage(next);
    i18n.changeLanguage(next);
  };

  const themeLabel = theme === "dark" ? "Dark" : "Light";
  const langLabel = language === "en" ? "EN" : "AR";

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        className="inline-flex items-center justify-center p-2 rounded-xl border border-slate-200/60 dark:border-slate-700/60 bg-white/70 dark:bg-slate-900/40 backdrop-blur transition-all duration-300 hover:scale-105 focus:outline-none "
        onClick={toggleTheme}
        aria-label={`Toggle theme. Current: ${themeLabel}`}
        aria-pressed={theme === "dark"}
        title="Theme"
      >
        <span className="sr-only">Theme</span>
        <span className="relative w-5 h-5 inline-flex items-center justify-center">
          <span
            className={`absolute inset-0 transition-all duration-300 ${
              theme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
            <Moon size={20} />
          </span>
          <span
            className={`absolute inset-0 transition-all duration-300 ${
              theme === "light" ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
            <Sun size={20} />
          </span>
        </span>
      </button>

      <button
        type="button"
        className="inline-flex items-center justify-center p-2 rounded-xl border border-slate-200/60 dark:border-slate-700/60 bg-white/70 dark:bg-slate-900/40 backdrop-blur transition-all duration-300 hover:scale-105 focus:outline-none "
        onClick={toggleLanguage}
        aria-label={`Toggle language. Current: ${langLabel}`}
        aria-pressed={language === "ar"}
        title="Language"
      >
        <Languages size={20} />
        <span className="sr-only">Language</span>
      </button>
    </div>
  );
}
