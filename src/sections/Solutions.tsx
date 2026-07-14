import { useLanguage } from "../context/LanguageContext";
import { Section, Kicker } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { OneHealthVenn } from "../components/ui/OneHealthVenn";
import { Accordion } from "../components/ui/Accordion";
import { SolutionCards } from "../components/ui/SolutionCards";
import { RoleSelector } from "../components/ui/RoleSelector";
import { ActionChecklist } from "../components/ui/ActionChecklist";

export function Solutions() {
  const { t } = useLanguage();

  return (
    <Section id="solutions" tone="parchment">
      <Kicker tone="dark">{t.solutions.kicker}</Kicker>
      <Reveal>
        <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
          {t.solutions.title}
        </h2>
        <p className="mt-4 max-w-2xl text-ink/70">{t.solutions.intro}</p>
      </Reveal>

      <div className="mt-14 rounded-3xl bg-ocean p-6 text-parchment sm:p-10">
        <Reveal>
          <OneHealthVenn />
        </Reveal>
      </div>

      <div className="mt-16 rounded-3xl bg-ocean p-6 text-parchment sm:p-10">
        <Reveal>
          <h3 className="font-display text-2xl font-bold">{t.solutions.counterTitle}</h3>
        </Reveal>
        <Reveal delay={0.1} className="mt-6">
          <Accordion items={t.solutions.counterarguments} />
        </Reveal>
      </div>

      <div className="mt-16 rounded-3xl bg-ocean p-6 text-parchment sm:p-10">
        <Reveal>
          <h3 className="font-display text-2xl font-bold">{t.solutions.solutionsTitle}</h3>
          <p className="mt-1 text-sm text-parchment/65">{t.solutions.solutionsIntro}</p>
        </Reveal>
        <div className="mt-8">
          <SolutionCards items={t.solutions.items} />
        </div>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl bg-ocean p-6 text-parchment sm:p-10">
          <Reveal>
            <h3 className="font-display text-2xl font-bold">{t.solutions.leadersTitle}</h3>
            <p className="mt-2 text-sm text-parchment/70">{t.solutions.leadersIntro}</p>
          </Reveal>
          <Reveal delay={0.1} className="mt-6">
            <RoleSelector roles={t.solutions.roles} />
          </Reveal>
        </div>

        <div className="rounded-3xl bg-ocean p-6 text-parchment sm:p-10">
          <Reveal>
            <h3 className="font-display text-2xl font-bold">{t.solutions.actionsTitle}</h3>
            <p className="mt-2 text-sm text-parchment/70">{t.solutions.actionsIntro}</p>
          </Reveal>
          <Reveal delay={0.1} className="mt-6">
            <ActionChecklist actions={t.solutions.actions} />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
