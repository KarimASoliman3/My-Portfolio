import { ReactNode } from "react";
import { useAppContext } from "../state/AppContext";

export default function AppShell({ children }: { children: ReactNode }) {
  const { theme, language } = useAppContext();
  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <div
      dir={dir}
      className={
        theme === "dark"
          ? "min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-slate-100"
          : "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-slate-900"
      }
    >
      {children}
    </div>
  );
}
