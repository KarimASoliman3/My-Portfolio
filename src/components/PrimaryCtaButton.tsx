import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
  ariaLabel?: string;
  disabled?: boolean;
};

export default function PrimaryCtaButton({
  children,
  onClick,
  href,
  target,
  rel,
  download,
  ariaLabel,
  disabled,
}: Props) {
  const classes =
    "group relative inline-flex items-center justify-center gap-3 px-7 py-3 rounded-xl font-semibold text-white " +
    "bg-gradient-to-r from-blue-600 to-cyan-500 " +
    "shadow-lg shadow-blue-600/20 " +
    "transition-all duration-300 ease-out " +
    "hover:translate-y-[-1px] hover:shadow-xl hover:shadow-blue-600/35 " +
    "active:translate-y-[0px] " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white/60 " +
    "dark:focus-visible:ring-offset-slate-950/60 " +
    "overflow-hidden";

  const innerGlow = (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 bg-gradient-to-r from-white/20 via-white/10 to-transparent group-hover:opacity-100"
    />
  );

  // If href provided, render anchor; else render button.
  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        target={target}
        rel={rel}
        download={typeof download === "string" ? download : undefined}
        aria-label={ariaLabel}
        aria-disabled={disabled ? true : undefined}
        onClick={
          disabled
            ? (e) => {
                e.preventDefault();
                e.stopPropagation();
              }
            : undefined
        }
        className={classes + (disabled ? " opacity-50 cursor-not-allowed" : "")}
      >
        {innerGlow}
        <span className="inline-flex items-center gap-3 rtl:flex-row-reverse">
          {children}
        </span>
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={disabled ? undefined : onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      className={classes + (disabled ? " opacity-50 cursor-not-allowed" : "")}
    >
      {innerGlow}
      <span className="inline-flex items-center gap-3 rtl:flex-row-reverse">
        {children}
      </span>
    </button>
  );
}
