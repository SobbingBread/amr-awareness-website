import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function ActionChecklist({ actions }: { actions: string[] }) {
  const [checked, setChecked] = useState<boolean[]>(() => Array(actions.length).fill(false));

  useEffect(() => {
    const stored = window.localStorage.getItem("amr-actions");
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as boolean[];
        if (parsed.length === actions.length) setChecked(parsed);
      } catch {
        /* ignore */
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actions.length]);

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      window.localStorage.setItem("amr-actions", JSON.stringify(next));
      return next;
    });
  };

  const doneCount = checked.filter(Boolean).length;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="mb-5 flex items-center justify-between">
        <span className="font-mono-stat text-xs uppercase tracking-widest text-parchment/50">
          {doneCount}/{actions.length}
        </span>
        <div className="h-1.5 w-32 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full bg-forest-light"
            animate={{ width: `${(doneCount / actions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
      <ul className="space-y-2">
        {actions.map((action, i) => (
          <li key={action}>
            <button
              onClick={() => toggle(i)}
              className="flex w-full items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-left transition hover:border-white/10 hover:bg-white/5"
            >
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${
                  checked[i] ? "border-forest-light bg-forest-light" : "border-white/30"
                }`}
              >
                {checked[i] && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <Check size={13} className="text-midnight" strokeWidth={3} />
                  </motion.span>
                )}
              </span>
              <span
                className={`text-sm leading-snug transition-colors ${
                  checked[i] ? "text-parchment/50 line-through" : "text-parchment/90"
                }`}
              >
                {action}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
