import { Download, ExternalLink, FileText } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Section, Kicker } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { references } from "../data/references";

export function Resources() {
  const { t } = useLanguage();
  const categories = Array.from(new Set(references.map((r) => r.category)));

  return (
    <Section id="resources" tone="parchment">
      <Kicker tone="dark">{t.resources.kicker}</Kicker>
      <Reveal>
        <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
          {t.resources.title}
        </h2>
        <p className="mt-4 max-w-2xl text-ink/70">{t.resources.intro}</p>
      </Reveal>

      <Reveal delay={0.1} className="mt-12 flex flex-col gap-4 rounded-2xl border border-ink/10 bg-white/60 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <FileText className="mt-1 shrink-0 text-earth" size={28} />
          <div>
            <h3 className="font-display text-lg font-bold text-ink">{t.resources.essayTitle}</h3>
            <p className="mt-1 max-w-xl text-sm text-ink/70">{t.resources.essayText}</p>
          </div>
        </div>
        <div className="flex shrink-0 gap-3">
          <a
            href="/docs/reclaiming-the-earth-we-farm-essay.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-earth/40 px-4 py-2 text-sm font-semibold text-earth transition hover:bg-earth/10"
          >
            {t.resources.essayRead}
          </a>
          <a
            href="/docs/reclaiming-the-earth-we-farm-essay.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-earth px-4 py-2 text-sm font-semibold text-parchment transition hover:scale-[0.98]"
          >
            <Download size={15} />
            {t.resources.essayDownload}
          </a>
        </div>
      </Reveal>

      <div className="mt-14">
        <Reveal>
          <h3 className="font-display text-2xl font-bold text-ink">{t.resources.referencesTitle}</h3>
          <p className="mt-1 text-sm text-ink/60">{t.resources.referencesIntro}</p>
        </Reveal>

        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          {categories.map((cat) => (
            <Reveal key={cat}>
              <h4 className="font-mono-stat text-xs font-semibold uppercase tracking-widest text-earth">{cat}</h4>
              <ul className="mt-3 space-y-3">
                {references
                  .filter((r) => r.category === cat)
                  .map((r) => (
                    <li key={r.citation} className="text-sm leading-relaxed text-ink/75">
                      {r.citation}
                    </li>
                  ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <Reveal>
          <h3 className="font-display text-2xl font-bold text-ink">{t.resources.glossaryTitle}</h3>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {t.resources.glossary.map((g) => (
            <Reveal key={g.term} className="rounded-xl border border-ink/10 bg-white/60 p-4">
              <p className="font-display text-sm font-bold text-ink">{g.term}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink/70">{g.def}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <Reveal>
          <h3 className="font-display text-2xl font-bold text-ink">{t.resources.linksTitle}</h3>
        </Reveal>
        <Reveal delay={0.1} className="mt-4 flex flex-wrap gap-3">
          {t.resources.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/60 px-4 py-2 text-sm font-medium text-ink/80 transition hover:border-earth hover:text-earth"
            >
              {link.label}
              <ExternalLink size={13} />
            </a>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
