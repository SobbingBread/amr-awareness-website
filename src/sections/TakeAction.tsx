import { Download } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Section, Kicker } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { PledgeCounter } from "../components/ui/PledgeCounter";
import { ShareButtons } from "../components/ui/ShareButtons";
import { Newsletter } from "../components/ui/Newsletter";
import { asset } from "../lib/asset";

export function TakeAction() {
  const { t } = useLanguage();

  return (
    <Section id="take-action" tone="midnight">
      <Kicker>{t.takeAction.kicker}</Kicker>
      <Reveal>
        <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl">{t.takeAction.title}</h2>
        <p className="mt-4 max-w-2xl text-parchment/75">{t.takeAction.intro}</p>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <PledgeCounter />
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-display text-lg font-bold">{t.takeAction.shareTitle}</h3>
            <p className="mt-1 text-sm text-parchment/70">{t.takeAction.shareIntro}</p>
            <p className="mt-4 rounded-xl bg-midnight/60 p-4 text-sm italic text-parchment/85">
              “{t.takeAction.shareStat}”
            </p>
            <div className="mt-4">
              <ShareButtons text={t.takeAction.shareStat} />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-display text-lg font-bold">{t.takeAction.resourcesTitle}</h3>
            <a
              href={asset("docs/reclaiming-the-earth-we-farm-essay.pdf")}
              download
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-water/40 px-5 py-2.5 text-sm font-semibold text-water transition hover:bg-water/10"
            >
              <Download size={16} />
              {t.takeAction.essayCta}
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="font-display text-lg font-bold">{t.takeAction.newsletterTitle}</h3>
        <p className="mt-1 max-w-md text-sm text-parchment/70">{t.takeAction.newsletterText}</p>
        <div className="mt-4 max-w-md">
          <Newsletter />
        </div>
      </Reveal>
    </Section>
  );
}
