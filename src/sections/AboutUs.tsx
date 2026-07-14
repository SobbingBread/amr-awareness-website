import { Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Section } from "../components/ui/Section";
import { Reveal, RevealGroup, revealItem } from "../components/ui/Reveal";
import { team } from "../data/team";
import { asset } from "../lib/asset";
import { motion } from "framer-motion";

export function AboutUs() {
  const { t } = useLanguage();

  return (
    <Section id="about" tone="midnight">
      <div className="mb-3 flex items-center gap-3">
        <span className="h-px w-[60px] bg-forest-light" />
        <span className="font-mono-stat text-xs font-semibold uppercase tracking-[0.2em] text-forest-light">
          {t.about.kicker}
        </span>
      </div>

      <Reveal>
        <h2 className="font-display text-4xl font-bold sm:text-5xl">
          {t.about.title} <em className="text-forest-light not-italic italic">{t.about.titleAccent}</em>
        </h2>
        <p className="mt-4 max-w-2xl text-parchment/75">{t.about.intro}</p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="font-display text-lg font-bold text-gold">{t.about.missionTitle}</h3>
        <p className="mt-2 text-sm leading-relaxed text-parchment/80">{t.about.mission}</p>
      </Reveal>

      <RevealGroup
        className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-5"
        stagger={0.08}
      >
        {team.map((member) => (
          <motion.div
            key={member.email}
            variants={revealItem}
            className="group w-[75%] shrink-0 snap-start rounded-2xl border border-white/10 bg-[#0D2818] p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:w-auto"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-light font-sans text-lg font-semibold text-white">
              {member.initial}
            </div>
            <p className="mt-4 font-sans text-base font-bold text-white">{member.name}</p>
            {member.role && <p className="text-xs font-medium text-gold">{member.role}</p>}
            <a
              href={`mailto:${member.email}`}
              className="mt-1 flex items-center gap-1.5 text-[13px] text-forest-light/80 transition group-hover:text-forest-light group-hover:underline"
            >
              <Mail size={12} className="shrink-0" />
              <span className="truncate">{member.email}</span>
            </a>
          </motion.div>
        ))}
      </RevealGroup>

      <Reveal delay={0.1} className="mt-10">
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-[#143824] p-8 text-center sm:p-10">
          <img src={asset("images/school-logo.png")} alt={t.about.institutionName} className="w-32 max-w-[200px] sm:w-40" />
          <div>
            <p className="font-display text-lg font-bold tracking-wide text-white">{t.about.institutionName}</p>
            <p className="mt-1 text-sm text-parchment/70">{t.about.institutionLocation}</p>
            <p className="font-mono-stat text-xs text-gold">{t.about.institutionYear}</p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
