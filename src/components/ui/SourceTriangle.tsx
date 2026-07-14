import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { SourceItem } from "../../i18n/types";

const positions = [
  { top: "4%", left: "50%" },
  { top: "88%", left: "8%" },
  { top: "88%", left: "92%" },
];

const colors = ["#4A90D9", "#D4A843", "#FF6B35"];

export function SourceTriangle({ sources }: { sources: SourceItem[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-center">
      <div className="relative mx-auto aspect-square w-full max-w-xs">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
          <polygon points="50,6 10,86 90,86" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.6" />
        </svg>
        {sources.map((s, i) => (
          <button
            key={s.name}
            onClick={() => setActive(i)}
            style={{ top: positions[i].top, left: positions[i].left, borderColor: colors[i] }}
            className={`absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 bg-midnight px-3 py-3 text-center transition-transform hover:scale-105 ${
              active === i ? "h-24 w-24 shadow-lg" : "h-20 w-20 opacity-80"
            }`}
          >
            <span className="font-mono-stat text-[10px] font-bold leading-tight" style={{ color: colors[i] }}>
              {s.stat}
            </span>
            <span className="mt-1 text-[10px] font-semibold leading-tight text-parchment/85">{s.name}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <h4 className="font-display text-xl font-bold" style={{ color: colors[active] }}>
            {sources[active].name}
          </h4>
          <p className="mt-1 font-mono-stat text-sm text-parchment/60">{sources[active].stat}</p>
          <p className="mt-3 text-sm leading-relaxed text-parchment/80">{sources[active].detail}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
