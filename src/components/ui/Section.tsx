import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  tone?: "dark" | "parchment" | "midnight";
  className?: string;
}

const toneClasses: Record<NonNullable<SectionProps["tone"]>, string> = {
  dark: "bg-ocean text-parchment",
  midnight: "bg-midnight text-parchment",
  parchment: "bg-parchment text-ink",
};

export function Section({ id, children, tone = "midnight", className = "" }: SectionProps) {
  return (
    <section id={id} className={`relative scroll-mt-20 py-20 sm:py-28 ${toneClasses[tone]} ${className}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function Kicker({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className={`h-px w-14 ${tone === "light" ? "bg-forest-light" : "bg-forest"}`} />
      <span
        className={`font-mono-stat text-xs font-semibold uppercase tracking-[0.2em] ${
          tone === "light" ? "text-gold" : "text-forest"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
