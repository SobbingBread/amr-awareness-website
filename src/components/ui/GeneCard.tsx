import { useState } from "react";
import type { GeneCard as GeneCardType } from "../../i18n/types";
import { useLanguage } from "../../context/LanguageContext";

export function GeneCard({ gene }: { gene: GeneCardType }) {
  const [flipped, setFlipped] = useState(false);
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
      aria-label={`${gene.code} — ${t.common.tapToExpand}`}
      className="group h-40 w-full [perspective:1000px] text-left"
    >
      <div
        className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-forest/40 to-ocean/60 p-4 text-center [backface-visibility:hidden]">
          <span className="font-mono-stat text-xl font-bold text-gold">{gene.code}</span>
          <span className="mt-2 text-xs text-parchment/70">{gene.name}</span>
          <span className="mt-3 font-mono-stat text-[10px] uppercase tracking-widest text-parchment/40">
            {t.common.tapToExpand}
          </span>
        </div>
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-xl border border-gold/40 bg-midnight p-4 text-center [backface-visibility:hidden]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <span className="font-mono-stat text-sm font-bold text-gold">{gene.code}</span>
          <p className="mt-2 text-xs leading-snug text-parchment/80">{gene.resistance}</p>
        </div>
      </div>
    </button>
  );
}
