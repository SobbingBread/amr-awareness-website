import { Droplets } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Section, Kicker } from "../components/ui/Section";
import { Reveal, RevealGroup, revealItem } from "../components/ui/Reveal";
import { StatCounter } from "../components/ui/StatCounter";
import { OxygenGauge } from "../components/ui/OxygenGauge";
import { GeneCard } from "../components/ui/GeneCard";
import { TimelineSlider } from "../components/ui/TimelineSlider";
import { motion } from "framer-motion";

function parseStatValue(raw: string): { number: number; prefix: string; suffix: string; decimals: number } {
  const match = raw.match(/^([^\d]*)([\d.,]+)(.*)$/);
  if (!match) return { number: 0, prefix: "", suffix: raw, decimals: 0 };
  const [, prefix, numStr, suffix] = match;
  const cleaned = numStr.replace(/,/g, "");
  const decimals = cleaned.includes(".") ? cleaned.split(".")[1].length : 0;
  return { number: parseFloat(cleaned), prefix, suffix, decimals };
}

export function Problem() {
  const { t } = useLanguage();

  return (
    <Section id="problem" tone="midnight">
      <Kicker>{t.problem.kicker}</Kicker>
      <Reveal>
        <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl">{t.problem.title}</h2>
        <p className="mt-4 max-w-2xl text-parchment/75">{t.problem.intro}</p>
      </Reveal>

      {/* River profile */}
      <div className="mt-14">
        <Reveal>
          <div className="flex items-baseline gap-3">
            <Droplets className="text-water" size={22} />
            <h3 className="font-display text-2xl font-bold">{t.problem.riverTitle}</h3>
          </div>
          <p className="mt-1 font-mono-stat text-sm text-gold">{t.problem.riverLength}</p>
        </Reveal>

        <RevealGroup className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-5" stagger={0.08}>
          {t.problem.riverStats.map((stat) => {
            const parsed = parseStatValue(stat.value);
            return (
              <motion.div
                key={stat.label}
                variants={revealItem}
                className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:border-water/40 hover:shadow-lg"
              >
                <p className="font-mono-stat text-2xl font-bold text-water">
                  {parsed.prefix}
                  <StatCounter value={parsed.number} decimals={parsed.decimals} />
                  {parsed.suffix}
                </p>
                <p className="mt-1 text-xs text-parchment/65">{stat.label}</p>
              </motion.div>
            );
          })}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-8">
          <OxygenGauge />
        </Reveal>
      </div>

      {/* Pak Ahmad narrative */}
      <div className="mt-24">
        <Reveal>
          <p className="font-mono-stat text-xs font-semibold uppercase tracking-widest text-forest-light">
            {t.problem.amrKicker}
          </p>
          <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">{t.problem.amrTitle}</h3>
          <p className="mt-3 max-w-2xl text-parchment/75">{t.problem.amrIntro}</p>
        </Reveal>

        <div className="relative mt-10 border-l border-white/15 pl-8">
          {t.problem.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.05} className="relative mb-8 last:mb-0">
              <span className="absolute -left-[calc(2rem+1px)] flex h-8 w-8 items-center justify-center rounded-full border border-amber bg-midnight font-mono-stat text-xs font-bold text-amber">
                {i + 1}
              </span>
              <h4 className="font-display text-lg font-bold text-parchment">{step.title}</h4>
              <p className="mt-1 max-w-2xl text-sm text-parchment/75">{step.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h4 className="font-display text-lg font-bold text-gold">{t.problem.keysTitle}</h4>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-parchment/75">{t.problem.keysNote}</p>
        </Reveal>

        <div className="mt-10">
          <Reveal>
            <h4 className="font-display text-lg font-bold">{t.problem.genesTitle}</h4>
          </Reveal>
          <RevealGroup className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5" stagger={0.06}>
            {t.problem.genes.map((gene) => (
              <motion.div key={gene.code} variants={revealItem}>
                <GeneCard gene={gene} />
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </div>

      {/* Global stakes */}
      <div className="mt-24">
        <Reveal>
          <p className="font-mono-stat text-xs font-semibold uppercase tracking-widest text-coral">
            {t.problem.globalKicker}
          </p>
          <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">{t.problem.globalTitle}</h3>
        </Reveal>

        <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-2" stagger={0.1}>
          <motion.div variants={revealItem} className="rounded-2xl border border-coral/30 bg-coral/10 p-6">
            <p className="font-mono-stat text-4xl font-bold text-coral">{t.problem.directDeaths}</p>
            <p className="mt-1 text-sm text-parchment/75">{t.problem.directDeathsLabel}</p>
          </motion.div>
          <motion.div variants={revealItem} className="rounded-2xl border border-amber/30 bg-amber/10 p-6">
            <p className="font-mono-stat text-4xl font-bold text-amber">{t.problem.associatedDeaths}</p>
            <p className="mt-1 text-sm text-parchment/75">{t.problem.associatedDeathsLabel}</p>
          </motion.div>
        </RevealGroup>

        <Reveal delay={0.15} className="mt-6">
          <TimelineSlider />
        </Reveal>

        <Reveal delay={0.2} className="mt-10 border-l-2 border-gold pl-6">
          <p className="max-w-2xl font-display text-xl italic text-parchment/90">{t.problem.bridgeText}</p>
        </Reveal>
      </div>
    </Section>
  );
}
