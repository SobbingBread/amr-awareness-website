import { useState } from "react";
import { RiverClean, RiverPolluted } from "./RiverArt";
import { useLanguage } from "../../context/LanguageContext";

export function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const { t } = useLanguage();

  return (
    <div className="relative w-full select-none overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
      <div className="relative aspect-[4/3] sm:aspect-[16/10]">
        <RiverPolluted className="absolute inset-0 h-full w-full" />
        <div
          className="absolute inset-0 h-full w-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <RiverClean className="h-full w-full" />
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-parchment/80"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-parchment text-ocean shadow-lg">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5 3 1 8l4 5M11 3l4 5-4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <span className="absolute top-3 left-3 rounded-full bg-ocean/80 px-3 py-1 font-mono-stat text-[11px] font-semibold uppercase tracking-wider text-parchment backdrop-blur-sm">
          {t.hero.beforeLabel}
        </span>
        <span className="absolute top-3 right-3 rounded-full bg-midnight/80 px-3 py-1 font-mono-stat text-[11px] font-semibold uppercase tracking-wider text-parchment backdrop-blur-sm">
          {t.hero.afterLabel}
        </span>

        <div className="absolute bottom-3 left-3 right-3 flex justify-between text-xs text-parchment/90">
          <span className="rounded bg-black/30 px-2 py-1 backdrop-blur-sm">{t.hero.beforeYear}</span>
          <span className="rounded bg-black/30 px-2 py-1 backdrop-blur-sm">{t.hero.afterYear}</span>
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        aria-label={t.hero.sliderHint}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
      <p className="pointer-events-none absolute bottom-1 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-3 py-1 text-[11px] text-parchment/80 backdrop-blur-sm sm:hidden">
        {t.hero.sliderHint}
      </p>
    </div>
  );
}
