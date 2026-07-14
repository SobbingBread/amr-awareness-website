import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export function OxygenGauge() {
  const { t } = useLanguage();
  const shouldReduce = useReducedMotion();
  const radius = 80;
  const circumference = Math.PI * radius;

  return (
    <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
      <svg viewBox="0 0 200 110" className="w-56">
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <motion.path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="#E74C3C"
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: shouldReduce ? circumference * 0.06 : circumference }}
          whileInView={{ strokeDashoffset: circumference * 0.06 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />
      </svg>
      <p className="-mt-8 font-mono-stat text-4xl font-bold text-coral">~0 mg/L</p>
      <p className="mt-3 max-w-[16rem] text-sm font-semibold text-parchment/85">{t.problem.oxygenLabel}</p>
      <p className="mt-2 max-w-[16rem] text-xs text-parchment/60">{t.problem.oxygenNote}</p>
    </div>
  );
}
