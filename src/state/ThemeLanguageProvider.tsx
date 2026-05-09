import React from "react";
import { AppProvider } from "./AppContext";

export default function ThemeLanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppProvider>{children}</AppProvider>;
}
