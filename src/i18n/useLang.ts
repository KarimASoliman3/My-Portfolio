import { useEffect } from "react";
import i18n from "./i18n";
import { useAppContext } from "../state/AppContext";

export function useLangSync() {
  const { language } = useAppContext();

  useEffect(() => {
    // Sync i18n with context language
    i18n.changeLanguage(language).catch(() => {
      // ignore
    });
  }, [language]);
}
