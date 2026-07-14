import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Section, Kicker } from "../components/ui/Section";
import { Reveal, RevealGroup, revealItem } from "../components/ui/Reveal";
import { SourceTriangle } from "../components/ui/SourceTriangle";
import { AMRCycle } from "../components/ui/AMRCycle";

export function Science() {
  const { t } = useLanguage();

  return (
    <Section id="science" tone="dark">
      <Kicker>{t.science.kicker}</Kicker>
      <Reveal>
        <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl">{t.science.title}</h2>
        <p className="mt-4 max-w-2xl text-parchment/75">{t.science.intro}</p>
      </Reveal>

      {/* Three sources */}
      <div className="mt-16">
        <Reveal>
          <h3 className="font-display text-2xl font-bold">{t.science.sourcesTitle}</h3>
          <p className="mt-1 text-sm text-parchment/60">{t.science.sourcesIntro}</p>
        </Reveal>
        <Reveal delay={0.1} className="mt-8">
          <SourceTriangle sources={t.science.sources} />
        </Reveal>
      </div>

      {/* Agriculture pathway */}
      <div className="mt-24">
        <Reveal>
          <h3 className="font-display text-2xl font-bold">{t.science.agricultureTitle}</h3>
          <p className="mt-2 max-w-2xl text-parchment/75">{t.science.agricultureIntro}</p>
        </Reveal>

        <RevealGroup className="mt-8 flex flex-wrap items-stretch gap-3" stagger={0.08}>
          {t.science.pathway.map((step, i) => (
            <motion.div key={step} variants={revealItem} className="flex items-center gap-3">
              <div className="max-w-[10rem] rounded-xl border border-gold/30 bg-gold/10 p-3 text-center text-xs font-medium leading-snug text-parchment/90">
                {step}
              </div>
              {i < t.science.pathway.length - 1 && (
                <ArrowRight size={16} className="shrink-0 text-gold/60" />
              )}
            </motion.div>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h4 className="font-display text-lg font-bold text-water">{t.science.findingsTitle}</h4>
          <ul className="mt-4 space-y-3">
            {t.science.findings.map((f) => (
              <li key={f} className="flex gap-3 text-sm leading-relaxed text-parchment/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-water" />
                {f}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* AMR cycle */}
      <div className="mt-24">
        <Reveal>
          <p className="font-mono-stat text-xs font-semibold uppercase tracking-widest text-coral">
            {t.science.cycleKicker}
          </p>
          <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">{t.science.cycleTitle}</h3>
          <p className="mt-2 max-w-2xl text-parchment/75">{t.science.cycleIntro}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <AMRCycle stages={t.science.stages} warning={t.science.warning} />
        </Reveal>

        <Reveal delay={0.15} className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h4 className="font-display text-lg font-bold">{t.science.consequencesTitle}</h4>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {t.science.consequences.map((c) => (
              <li key={c} className="flex gap-3 text-sm leading-relaxed text-parchment/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                {c}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 border-l-2 border-forest-light pl-6">
          <p className="max-w-2xl text-parchment/85">{t.science.bridgeText}</p>
        </Reveal>
      </div>
    </Section>
  );
}
