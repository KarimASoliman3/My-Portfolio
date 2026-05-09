import { ReactNode, useEffect, useState } from "react";

export default function AnimatedSwap({
  activeKey,
  children,
}: {
  activeKey: string;
  children: ReactNode;
}) {
  const [mountedKey, setMountedKey] = useState(activeKey);
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    if (activeKey === mountedKey) return;
    setPhase("out");
    const t = window.setTimeout(() => {
      setMountedKey(activeKey);
      setPhase("in");
    }, 180);

    return () => window.clearTimeout(t);
  }, [activeKey, mountedKey]);

  return (
    <div
      className={
        phase === "out"
          ? "transition-all duration-150 opacity-0 blur-[2px] translate-y-1"
          : "transition-all duration-300 opacity-100 blur-0 translate-y-0"
      }
    >
      {children}
    </div>
  );
}
