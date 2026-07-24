import { useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Gavel, Search, Frown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Section, Kicker } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { categories, type CategoryId, type Difficulty } from "../data/challengeCategories";
import { qaItems } from "../data/judgesChallenge";
import { QACard } from "../components/challenge/QACard";
import { ChallengeProgress } from "../components/challenge/ChallengeProgress";
import { JudgeSimulator } from "../components/challenge/JudgeSimulator";
import { useExplored } from "../components/challenge/useExplored";

type CatFilter = CategoryId | "all";
type DiffFilter = Difficulty | "all";

export function JudgesChallenge() {
  const { t, lang } = useLanguage();
  const { explored, markExplored, reset } = useExplored();

  const [search, setSearch] = useState("");
  const [catFilter, setCatFilter] = useState<CatFilter>("all");
  const [diffFilter, setDiffFilter] = useState<DiffFilter>("all");
  const [openId, setOpenId] = useState<number | null>(null);
  const [simOpen, setSimOpen] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { amount: 0.05 });

  const query = search.trim().toLowerCase();

  const filtered = useMemo(() => {
    return qaItems.filter((item) => {
      if (catFilter !== "all" && item.category !== catFilter) return false;
      if (diffFilter !== "all" && item.difficulty !== diffFilter) return false;
      if (query) {
        const hay = `${item.q[lang]} ${item.a[lang].tldr} ${item.a[lang].body} ${item.a[lang].take}`.toLowerCase();
        if (!hay.includes(query)) return false;
      }
      return true;
    });
  }, [catFilter, diffFilter, query, lang]);

  const diffOptions: { id: DiffFilter; label: string }[] = [
    { id: "all", label: t.challenge.difficultyAll },
    { id: "easy", label: t.challenge.difficultyEasy },
    { id: "medium", label: t.challenge.difficultyMedium },
    { id: "hard", label: t.challenge.difficultyHard },
  ];

  const handleToggle = (id: number) => {
    setOpenId((prev) => {
      const next = prev === id ? null : id;
      if (next !== null) markExplored(id);
      return next;
    });
  };

  return (
    <Section id="challenge" tone="midnight">
      <div ref={sectionRef}>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Kicker>{t.challenge.kicker}</Kicker>
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl">
              {t.challenge.title}
            </h2>
            <p className="mt-4 max-w-2xl text-parchment/75">{t.challenge.subtitle}</p>
          </Reveal>
        </div>
        <Reveal>
          <button
            onClick={() => setSimOpen(true)}
            className="inline-flex items-center gap-2 rounded-full bg-amber px-5 py-3 font-semibold text-midnight shadow-lg shadow-amber/20 transition hover:scale-[0.98]"
          >
            <Gavel size={18} />
            {t.challenge.simulatorButton}
          </button>
        </Reveal>
      </div>

      {/* Quick-reference stat cards */}
      <Reveal delay={0.1}>
        <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {t.challenge.stats.map((s, i) => (
            <div
              key={s.label}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
              style={{ borderTop: `3px solid ${["#E74C3C", "#E74C3C", "#D4A843", "#2E8B57"][i]}` }}
            >
              <p className="font-mono-stat text-2xl font-bold text-parchment">{s.value}</p>
              <p className="mt-1 text-xs text-parchment/60">{s.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Controls */}
      <div className="mt-10 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search
            size={16}
            className={`absolute left-4 top-1/2 -translate-y-1/2 ${query ? "animate-pulse-slow text-water" : "text-parchment/40"}`}
          />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.challenge.searchPlaceholder}
            className="w-full rounded-full border border-white/15 bg-white/5 py-3 pl-11 pr-4 text-sm text-parchment placeholder:text-parchment/40 focus:border-water focus:outline-none"
          />
        </div>

        {/* Category tabs */}
        <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
          <FilterPill
            active={catFilter === "all"}
            color="#4A90D9"
            label={t.challenge.allCategories}
            onClick={() => setCatFilter("all")}
          />
          {categories.map((c) => (
            <FilterPill
              key={c.id}
              active={catFilter === c.id}
              color={c.color}
              label={c.label[lang]}
              onClick={() => setCatFilter(c.id)}
            />
          ))}
        </div>

        {/* Difficulty + count */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-mono-stat text-[10px] uppercase tracking-wider text-parchment/40">
              {t.challenge.difficultyLabel}
            </span>
            {diffOptions.map((d) => (
              <button
                key={d.id}
                onClick={() => setDiffFilter(d.id)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                  diffFilter === d.id
                    ? "bg-parchment/90 text-midnight"
                    : "border border-white/15 text-parchment/60 hover:text-parchment"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
          <span className="font-mono-stat text-xs text-parchment/50">
            {filtered.length} {t.challenge.countLabel}
          </span>
        </div>
      </div>

      {/* Cards grid */}
      {filtered.length > 0 ? (
        <motion.div layout className="mt-8 grid gap-3 lg:grid-cols-2">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.35, delay: Math.min(i, 8) * 0.04 }}
            >
              <QACard
                item={item}
                isOpen={openId === item.id}
                isExplored={explored.has(item.id)}
                onToggle={() => handleToggle(item.id)}
              />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="mt-10 flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.02] py-14 text-center">
          <Frown size={40} className="text-parchment/30" />
          <p className="mt-3 font-display text-lg font-bold text-parchment">{t.challenge.noResultsTitle}</p>
          <p className="mt-1 text-sm text-parchment/55">{t.challenge.noResultsHint}</p>
        </div>
      )}

      </div>

      {/* Floating progress tracker — only while the section is in view */}
      <div
        className={`pointer-events-none fixed bottom-4 right-4 z-40 transition-opacity duration-300 ${
          inView && !simOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className={inView && !simOpen ? "pointer-events-auto" : ""}>
          <ChallengeProgress explored={explored.size} total={qaItems.length} onReset={reset} />
        </div>
      </div>

      <JudgeSimulator open={simOpen} onClose={() => setSimOpen(false)} />
    </Section>
  );
}

function FilterPill({
  active,
  color,
  label,
  onClick,
}: {
  active: boolean;
  color: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="shrink-0 whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold transition"
      style={
        active
          ? { background: color, color: "#0A1F1A" }
          : { border: `1px solid ${color}66`, color }
      }
    >
      {label}
    </button>
  );
}
