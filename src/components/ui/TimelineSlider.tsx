import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

const START_YEAR = 2026;
const END_YEAR = 2050;
const START_DEATHS = 4.95;
const END_DEATHS = 10;

export function TimelineSlider() {
  const [year, setYear] = useState(START_YEAR);
  const { t } = useLanguage();

  const progress = (year - START_YEAR) / (END_YEAR - START_YEAR);
  const deaths = START_DEATHS + (END_DEATHS - START_DEATHS) * progress;
  const cost = 100 * progress;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="font-mono-stat text-xs font-semibold uppercase tracking-widest text-gold">
        {t.problem.timelineTitle}
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <p className="font-mono-stat text-4xl font-bold text-coral">{deaths.toFixed(2)}M</p>
          <p className="text-xs text-parchment/60">{t.problem.associatedDeathsLabel}</p>
        </div>
        <div>
          <p className="font-mono-stat text-4xl font-bold text-amber">${cost.toFixed(1)}T</p>
          <p className="text-xs text-parchment/60">{t.problem.economicLabel}</p>
        </div>
      </div>

      <div className="mt-6">
        <input
          type="range"
          min={START_YEAR}
          max={END_YEAR}
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="w-full accent-coral"
          aria-label={t.problem.timelineTitle}
        />
        <div className="mt-2 flex justify-between font-mono-stat text-xs text-parchment/60">
          <span>{START_YEAR}</span>
          <span className="font-bold text-parchment">{year}</span>
          <span>{END_YEAR}</span>
        </div>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-parchment/60">{t.problem.timelineNote}</p>
    </div>
  );
}
