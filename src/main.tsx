import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
import ThemeLanguageProvider from "./state/ThemeLanguageProvider";
import "./i18n/i18n";
import { useLangSync } from "./i18n/useLang";

function LangSyncWrapper({ children }: { children: React.ReactNode }) {
  useLangSync();
  return <>{children}</>;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster position="top-center" reverseOrder={false} />
    <ThemeLanguageProvider>
      <LangSyncWrapper>
        <App />
      </LangSyncWrapper>
    </ThemeLanguageProvider>
  </StrictMode>,
);
