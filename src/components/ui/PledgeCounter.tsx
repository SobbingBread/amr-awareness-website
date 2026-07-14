import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HandHeart } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const BASE_COUNT = 1842;

export function PledgeCounter() {
  const { t } = useLanguage();
  const [pledged, setPledged] = useState(false);
  const [count, setCount] = useState(BASE_COUNT);

  useEffect(() => {
    const already = window.localStorage.getItem("amr-pledged") === "1";
    setPledged(already);
    setCount(BASE_COUNT + (already ? 1 : 0));
  }, []);

  const handlePledge = () => {
    if (pledged) return;
    setPledged(true);
    setCount((c) => c + 1);
    window.localStorage.setItem("amr-pledged", "1");
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center sm:p-8">
      <HandHeart className="mx-auto text-gold" size={32} />
      <h3 className="mt-3 font-display text-xl font-bold">{t.takeAction.pledgeTitle}</h3>
      <p className="mx-auto mt-2 max-w-sm text-sm text-parchment/70">{t.takeAction.pledgeText}</p>

      <motion.p
        key={count}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        className="mt-5 font-mono-stat text-3xl font-bold text-gold"
      >
        {count.toLocaleString()}
      </motion.p>
      <p className="text-xs text-parchment/55">{t.takeAction.pledgeCountLabel}</p>

      <button
        onClick={handlePledge}
        disabled={pledged}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 font-semibold text-midnight shadow-lg shadow-amber/20 transition hover:scale-[0.98] disabled:cursor-default disabled:opacity-60 disabled:hover:scale-100"
      >
        {pledged ? t.takeAction.pledgeDone : t.takeAction.pledgeCta}
      </button>
    </div>
  );
}
