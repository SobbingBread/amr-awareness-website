import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { BeforeAfterSlider } from "../components/ui/BeforeAfterSlider";
import { StatCounter } from "../components/ui/StatCounter";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden bg-midnight pt-28 pb-16 text-parchment sm:pt-36">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-ocean-light blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-forest blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono-stat text-xs font-semibold uppercase tracking-[0.25em] text-gold"
          >
            {t.hero.kicker}
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 font-hand text-3xl leading-snug text-water sm:text-4xl"
          >
            “{t.hero.quote}”
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-1 text-sm text-parchment/60"
          >
            — {t.hero.quoteAuthor}, {t.hero.quoteMeta}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl"
          >
            {t.hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-parchment/80 sm:text-lg"
          >
            {t.hero.subhead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-6"
          >
            <a
              href="#problem"
              className="group inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 font-semibold text-midnight shadow-lg shadow-amber/20 transition hover:scale-[0.98] hover:shadow-amber/30"
            >
              {t.hero.cta}
              <ChevronDown size={18} className="transition group-hover:translate-y-0.5" />
            </a>

            <div className="font-mono-stat">
              <div className="text-3xl font-bold text-water sm:text-4xl">
                <StatCounter value={t.hero.statValue} suffix="M" />
              </div>
              <p className="max-w-[16rem] text-xs leading-snug text-parchment/65">{t.hero.statLabel}</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <BeforeAfterSlider />
        </motion.div>
      </div>

      <motion.a
        href="#problem"
        aria-label={t.common.scrollHint}
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-parchment/50 sm:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-mono-stat text-[10px] uppercase tracking-widest">{t.common.scrollHint}</span>
        <ChevronDown size={16} />
      </motion.a>
    </section>
  );
}
