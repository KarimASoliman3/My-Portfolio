import { ReactNode } from "react";
import { useAppContext } from "../state/AppContext";

export default function RtlWrapper({ children }: { children: ReactNode }) {
  const { language } = useAppContext();
  const dir = language === "ar" ? "rtl" : "ltr";

  return <div dir={dir}>{children}</div>;
}
