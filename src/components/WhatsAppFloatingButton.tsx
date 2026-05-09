import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import { useAppContext } from "../state/AppContext";

const WHATSAPP_NUMBER = "201010731125";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function WhatsAppFloatingButton() {
  const { language } = useAppContext();
  const { t } = useTranslation();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const tooltipText = t("common.whatsappChat");
  const isRtl = language === "ar";

  return (
    <div
      className={
        "fixed bottom-4 sm:bottom-6 z-50 " +
        (isRtl ? "left-3 sm:left-5" : "right-3 sm:right-5")
      }
      aria-live="polite"
    >
      <div className="relative group">
        {/* Tooltip */}
        <div
          className={
            "pointer-events-none absolute " +
            (isRtl
              ? "bottom-full left-0 translate-x-0"
              : "bottom-full right-0 translate-x-0") +
            " mb-2 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-200"
          }
          role="tooltip"
        >
          <span className="block max-w-[220px] whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium bg-slate-900 text-white shadow-lg dark:bg-slate-950">
            {tooltipText}
          </span>
          <span
            className={
              "absolute top-full " +
              (isRtl ? "left-5" : "right-5") +
              " -mt-1 w-2 h-2 rotate-45 bg-slate-900 shadow-sm dark:bg-slate-950"
            }
          />
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={tooltipText}
          className={
            "inline-flex items-center justify-center rounded-full " +
            "w-12 h-12 sm:w-14 sm:h-14 " +
            "bg-[#25D366] text-white " +
            "shadow-[0_10px_25px_-10px_rgba(37,211,102,0.55)] " +
            "dark:shadow-[0_10px_25px_-10px_rgba(37,211,102,0.35)] " +
            "ring-1 ring-black/5 dark:ring-white/10 " +
            "transition-transform duration-200 ease-out " +
            "hover:scale-110 active:scale-95 " +
            "hover:shadow-[0_16px_35px_-12px_rgba(37,211,102,0.7)] " +
            "focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 " +
            (mounted ? " animate-whatsappEnter" : "")
          }
          title={tooltipText}
        >
          <MessageCircle size={22} className="drop-shadow-sm" />
        </a>
      </div>
    </div>
  );
}
