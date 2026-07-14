import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { CycleStage } from "../../i18n/types";

export function AMRCycle({ stages, warning }: { stages: CycleStage[]; warning: string }) {
  const [active, setActive] = useState(0);
  const size = 320;
  const center = size / 2;
  const radius = size / 2 - 46;

  const points = stages.map((_, i) => {
    const angle = (i / stages.length) * 2 * Math.PI - Math.PI / 2;
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    };
  });

  const circlePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .concat(`L ${points[0].x} ${points[0].y}`)
    .join(" ");

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,360px)_1fr] lg:items-center">
      <div className="relative mx-auto" style={{ width: size, height: size }}>
        <svg viewBox={`0 0 ${size} ${size}`} className="absolute inset-0">
          <path d={circlePath} fill="none" stroke="rgba(231,76,60,0.25)" strokeWidth="2" />
          <path
            d={circlePath}
            fill="none"
            stroke="#E74C3C"
            strokeWidth="2"
            strokeDasharray="6 10"
            className="animate-flow"
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center px-10 text-center">
          <p className="font-display text-sm font-bold italic text-coral">{warning}</p>
        </div>

        {stages.map((stage, i) => (
          <button
            key={stage.title}
            onClick={() => setActive(i)}
            style={{ left: points[i].x, top: points[i].y }}
            className={`absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 font-mono-stat text-xs font-bold transition-all ${
              active === i
                ? "h-12 w-12 border-coral bg-coral text-midnight shadow-lg shadow-coral/30"
                : "h-9 w-9 border-coral/50 bg-midnight text-coral animate-pulse-slow"
            }`}
            aria-label={stage.title}
          >
            {i + 1}
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
          className="rounded-2xl border border-coral/30 bg-coral/10 p-6"
        >
          <span className="font-mono-stat text-xs font-bold text-coral">
            Stage {active + 1} / {stages.length}
          </span>
          <h4 className="mt-1 font-display text-xl font-bold text-parchment">{stages[active].title}</h4>
          <p className="mt-2 text-sm leading-relaxed text-parchment/80">{stages[active].detail}</p>
          <div className="mt-4 flex gap-1.5">
            {stages.map((_, i) => (
              <span
                key={i}
                className={`h-1 flex-1 rounded-full ${i === active ? "bg-coral" : "bg-white/15"}`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
