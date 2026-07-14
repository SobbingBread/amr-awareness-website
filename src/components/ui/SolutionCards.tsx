import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronDown } from "lucide-react";
import type { SolutionItem } from "../../i18n/types";

export function SolutionCards({ items }: { items: SolutionItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <motion.button
            key={item.title}
            onClick={() => setOpen(isOpen ? null : i)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="w-[80%] shrink-0 snap-start rounded-2xl border border-forest-light/40 bg-forest/15 p-5 text-left transition hover:-translate-y-1 hover:border-forest-light hover:shadow-lg sm:w-auto"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest-light/30 font-mono-stat text-xs font-bold text-forest-light">
                {i + 1}
              </div>
              <ChevronDown size={16} className={`mt-2 shrink-0 text-parchment/50 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </div>
            <h4 className="mt-3 font-display text-lg font-bold leading-snug text-parchment">{item.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-parchment/75">{item.detail}</p>
            <div
              className="grid transition-[grid-template-rows] duration-300"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="mt-3 flex items-start gap-2 border-t border-white/10 pt-3">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-gold" />
                  <p className="text-xs leading-relaxed text-gold/90">{item.evidence}</p>
                </div>
              </div>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}
