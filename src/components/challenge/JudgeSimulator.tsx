import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Gavel, X } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { categoryMap } from "../../data/challengeCategories";
import { qaItems, type QAItem } from "../../data/judgesChallenge";

const hardItems = qaItems.filter((q) => q.difficulty === "hard");

export function JudgeSimulator({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t, lang } = useLanguage();
  const [item, setItem] = useState<QAItem | null>(null);
  const [countdown, setCountdown] = useState(10);
  const [revealed, setRevealed] = useState(false);
  const timerRef = useRef<number | null>(null);

  const clearTimer = () => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const pick = useCallback(() => {
    clearTimer();
    const next = hardItems[Math.floor(Math.random() * hardItems.length)];
    setItem(next);
    setRevealed(false);
    setCountdown(10);
    timerRef.current = window.setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          clearTimer();
          setRevealed(true);
          return 0;
        }
        return c - 1;
      });
    }, 1000);
  }, []);

  useEffect(() => {
    if (!open) {
      clearTimer();
      setItem(null);
      setRevealed(false);
      setCountdown(10);
      return;
    }
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      clearTimer();
    };
  }, [open, onClose]);

  const cat = item ? categoryMap[item.category] : null;
  const answer = item ? item.a[lang] : null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/85 p-0 backdrop-blur-sm sm:items-center sm:p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 40, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 40, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl rounded-t-3xl border border-white/10 bg-ocean p-6 text-parchment shadow-2xl sm:rounded-3xl sm:p-8"
          >
            <button
              onClick={onClose}
              aria-label={t.challenge.simulatorClose}
              className="absolute right-4 top-4 rounded-full border border-white/15 p-2 text-parchment/70 transition hover:text-parchment"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-2 text-amber">
              <Gavel size={20} />
              <h3 className="font-display text-xl font-bold">{t.challenge.simulatorTitle}</h3>
            </div>

            {!item ? (
              <>
                <p className="mt-3 max-w-md text-sm text-parchment/75">{t.challenge.simulatorIntro}</p>
                <button
                  onClick={pick}
                  className="mt-6 rounded-full bg-amber px-6 py-3 font-semibold text-midnight transition hover:scale-[0.98]"
                >
                  {t.challenge.simulatorStart}
                </button>
              </>
            ) : (
              <>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span
                    className="rounded-full px-2.5 py-1 font-mono-stat text-[10px] font-semibold uppercase tracking-wider"
                    style={{ background: `${cat!.color}22`, color: cat!.color }}
                  >
                    {cat!.label[lang]}
                  </span>
                  {!revealed && (
                    <div className="flex items-center gap-2">
                      <span className="font-mono-stat text-2xl font-bold text-amber">{countdown}</span>
                      <span className="text-xs text-parchment/50">{t.challenge.simulatorThinking}</span>
                    </div>
                  )}
                </div>

                <p className="mt-4 font-display text-xl font-bold leading-snug sm:text-2xl">
                  {item.q[lang]}
                </p>

                {!revealed && (
                  <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-amber"
                      initial={{ width: "100%" }}
                      animate={{ width: `${(countdown / 10) * 100}%` }}
                      transition={{ duration: 1, ease: "linear" }}
                    />
                  </div>
                )}

                <AnimatePresence>
                  {revealed && answer && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                      className="mt-5 space-y-3 rounded-2xl bg-midnight/50 p-4"
                    >
                      <p className="text-sm leading-relaxed">
                        <span className="font-mono-stat text-[10px] font-bold uppercase tracking-wider text-amber">
                          {t.challenge.tldrLabel}{" "}
                        </span>
                        <span className="font-semibold">{answer.tldr}</span>
                      </p>
                      <p className="text-sm leading-relaxed text-parchment/80">{answer.body}</p>
                      <p className="text-xs leading-relaxed text-parchment/70">
                        <span className="font-semibold text-amber">{t.challenge.takeawayLabel}: </span>
                        {answer.take}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-6 flex flex-wrap gap-3">
                  {!revealed && (
                    <button
                      onClick={() => {
                        clearTimer();
                        setRevealed(true);
                      }}
                      className="rounded-full bg-amber px-5 py-2.5 text-sm font-semibold text-midnight transition hover:scale-[0.98]"
                    >
                      {t.challenge.simulatorReveal}
                    </button>
                  )}
                  <button
                    onClick={pick}
                    className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-parchment transition hover:border-amber hover:text-amber"
                  >
                    {t.challenge.simulatorNext}
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
