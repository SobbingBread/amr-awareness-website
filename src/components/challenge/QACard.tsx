import { AnimatePresence, motion } from "framer-motion";
import { Plus, Sparkles } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { categoryMap, difficultyColors } from "../../data/challengeCategories";
import type { QAItem } from "../../data/judgesChallenge";

interface QACardProps {
  item: QAItem;
  isOpen: boolean;
  isExplored: boolean;
  onToggle: () => void;
}

export function QACard({ item, isOpen, isExplored, onToggle }: QACardProps) {
  const { t, lang } = useLanguage();
  const cat = categoryMap[item.category];
  const answer = item.a[lang];
  const diffColor = difficultyColors[item.difficulty];
  const diffLabel = {
    easy: t.challenge.difficultyEasy,
    medium: t.challenge.difficultyMedium,
    hard: t.challenge.difficultyHard,
  }[item.difficulty];

  return (
    <div
      className="group rounded-xl border border-white/10 bg-white/[0.02] transition-shadow duration-300"
      style={{
        borderLeft: `4px solid ${cat.color}`,
        boxShadow: isOpen ? `0 0 22px ${cat.color}26` : undefined,
      }}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-start gap-3 px-4 py-4 text-left transition-[background] duration-300 hover:bg-white/[0.03]"
        style={isOpen ? { background: "rgba(255,255,255,0.03)" } : undefined}
      >
        <span
          className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
          style={{ background: cat.color }}
          aria-hidden
        >
          {isExplored ? "✓" : ""}
        </span>
        <span className="flex-1">
          <span className="mb-1.5 flex flex-wrap items-center gap-2">
            <span
              className="rounded-full px-2 py-0.5 font-mono-stat text-[10px] font-semibold uppercase tracking-wider"
              style={{ background: `${cat.color}22`, color: cat.color }}
            >
              {cat.label[lang]}
            </span>
            <span className="inline-flex items-center gap-1 font-mono-stat text-[10px] font-semibold uppercase tracking-wider text-parchment/50">
              <span className="h-2 w-2 rounded-full" style={{ background: diffColor }} />
              {diffLabel}
            </span>
          </span>
          <span className="block font-display text-base font-semibold leading-snug text-parchment">
            {item.q[lang]}
          </span>
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="mt-0.5 shrink-0 text-parchment/60"
          style={{ color: isOpen ? cat.color : undefined }}
        >
          <Plus size={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="space-y-3 px-4 pb-5 pl-13">
              <p className="text-sm leading-relaxed text-parchment/90">
                <span
                  className="mr-2 font-mono-stat text-[10px] font-bold uppercase tracking-wider"
                  style={{ color: cat.color }}
                >
                  {t.challenge.tldrLabel}
                </span>
                <span className="font-semibold text-parchment">{answer.tldr}</span>
              </p>
              <p className="text-sm leading-relaxed text-parchment/75">{answer.body}</p>
              <div
                className="flex items-start gap-2 rounded-lg p-3"
                style={{ background: `${cat.color}14` }}
              >
                <Sparkles size={15} className="mt-0.5 shrink-0" style={{ color: cat.color }} />
                <p className="text-xs leading-relaxed text-parchment/85">
                  <span className="font-semibold" style={{ color: cat.color }}>
                    {t.challenge.takeawayLabel}:{" "}
                  </span>
                  {answer.take}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
