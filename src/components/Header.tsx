import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const sections = [
  { id: "home", key: "home" },
  { id: "problem", key: "problem" },
  { id: "science", key: "science" },
  { id: "solutions", key: "solutions" },
  { id: "take-action", key: "takeAction" },
  { id: "about", key: "about" },
  { id: "resources", key: "resources" },
] as const;

export function Header() {
  const { t, lang, toggleLang } = useLanguage();
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setVisible(y < lastY.current || y < 80);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${scrolled ? "bg-midnight/90 shadow-lg backdrop-blur-md" : "bg-transparent"}`}
      >
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
          <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold text-parchment">
            <img src="/images/school-logo.png" alt="" className="h-9 w-9 rounded-full bg-white/90 p-0.5" />
            <span className="hidden sm:inline">Reclaiming the Earth</span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="group relative font-sans text-sm font-medium text-parchment/85 transition hover:text-parchment"
              >
                {t.nav[s.key]}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="rounded-full border border-white/15 px-3 py-1.5 font-mono-stat text-xs font-semibold text-parchment transition hover:border-gold hover:text-gold"
              aria-label="Toggle language"
            >
              {lang === "en" ? "EN / ID" : "ID / EN"}
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className="rounded-full border border-white/15 p-2 text-parchment transition hover:border-gold hover:text-gold lg:hidden"
              aria-label={t.nav.menu}
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-midnight transition-opacity duration-300 lg:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <span className="font-display text-lg font-bold text-parchment">{t.nav.menu}</span>
          <button
            onClick={closeMenu}
            className="rounded-full border border-white/15 p-2 text-parchment"
            aria-label={t.common.close}
          >
            <X size={20} />
          </button>
        </div>
        <nav className="flex flex-1 flex-col justify-center gap-2 px-8">
          {sections.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={closeMenu}
              className="border-b border-white/10 py-4 font-display text-2xl font-semibold text-parchment transition hover:text-gold"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {t.nav[s.key]}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
