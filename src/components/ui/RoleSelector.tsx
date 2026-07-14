import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Megaphone, Lightbulb, Link2 } from "lucide-react";
import type { LeaderRole } from "../../i18n/types";

const icons = [Megaphone, Lightbulb, Link2];
const colors = ["#FF6B35", "#4A90D9", "#D4A843"];

export function RoleSelector({ roles }: { roles: LeaderRole[] }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {roles.map((role, i) => {
          const Icon = icons[i];
          const isActive = active === i;
          return (
            <button
              key={role.name}
              onClick={() => setActive(i)}
              style={{
                borderColor: isActive ? colors[i] : "rgba(255,255,255,0.15)",
                color: isActive ? colors[i] : undefined,
              }}
              className="flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold text-parchment/80 transition hover:border-white/40"
            >
              <Icon size={16} />
              {role.name}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <p className="font-display text-lg font-bold" style={{ color: colors[active] }}>
            {roles[active].tagline}
          </p>
          <ul className="mt-4 space-y-3">
            {roles[active].actions.map((a) => (
              <li key={a} className="flex gap-3 text-sm leading-relaxed text-parchment/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: colors[active] }} />
                {a}
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
