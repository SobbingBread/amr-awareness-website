import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Maximize2, X } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { asset } from "../../lib/asset";

export function Poster() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="grid gap-6 sm:grid-cols-[minmax(0,240px)_1fr] sm:items-center">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t.resources.posterView}
        className="group relative overflow-hidden rounded-xl border border-ink/10 shadow-md transition hover:shadow-xl"
      >
        <img
          src={asset("images/poster.jpg")}
          alt={t.resources.posterTitle}
          loading="lazy"
          className="aspect-[1432/2027] w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-ink/0 transition group-hover:bg-ink/30">
          <Maximize2 className="text-parchment opacity-0 transition group-hover:opacity-100" size={28} />
        </span>
      </button>

      <div>
        <h3 className="font-display text-lg font-bold text-ink">{t.resources.posterTitle}</h3>
        <p className="mt-1 max-w-xl text-sm text-ink/70">{t.resources.posterText}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded-full border border-earth/40 px-4 py-2 text-sm font-semibold text-earth transition hover:bg-earth/10"
          >
            <Maximize2 size={15} />
            {t.resources.posterView}
          </button>
          <a
            href={asset("images/poster-full.jpg")}
            download="reclaiming-the-earth-we-farm-poster.jpg"
            className="inline-flex items-center gap-2 rounded-full bg-earth px-4 py-2 text-sm font-semibold text-parchment transition hover:scale-[0.98]"
          >
            <Download size={15} />
            {t.resources.posterDownload}
          </a>
        </div>
      </div>

      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            >
              <button
                onClick={() => setOpen(false)}
                aria-label={t.common.close}
                className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 p-2 text-parchment transition hover:bg-white/20"
              >
                <X size={22} />
              </button>
              <motion.img
                initial={{ scale: 0.94 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.94 }}
                transition={{ duration: 0.25 }}
                src={asset("images/poster-full.jpg")}
                alt={t.resources.posterTitle}
                className="max-h-[92vh] max-w-full rounded-lg object-contain shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </div>
  );
}
