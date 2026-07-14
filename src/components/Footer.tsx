import { useLanguage } from "../context/LanguageContext";
import { asset } from "../lib/asset";

const links = [
  { id: "home", key: "home" },
  { id: "problem", key: "problem" },
  { id: "science", key: "science" },
  { id: "solutions", key: "solutions" },
  { id: "take-action", key: "takeAction" },
  { id: "about", key: "about" },
  { id: "resources", key: "resources" },
] as const;

export function Footer() {
  const { t, lang, toggleLang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-midnight py-14 text-parchment">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <img src={asset("images/school-logo.png")} alt="" className="h-10 w-10 rounded-full bg-white/90 p-0.5" />
              <span className="font-display text-lg font-bold">Reclaiming the Earth We Farm</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-parchment/70">{t.footer.tagline}</p>
          </div>

          <div>
            <h3 className="font-mono-stat text-xs font-semibold uppercase tracking-widest text-gold">
              {t.footer.quickLinksTitle}
            </h3>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-parchment/75">
              {links.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="transition hover:text-gold">
                    {t.nav[l.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono-stat text-xs font-semibold uppercase tracking-widest text-gold">
              {t.nav.menu === "Menu" ? "Language" : "Bahasa"}
            </h3>
            <button
              onClick={toggleLang}
              className="mt-3 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold transition hover:border-gold hover:text-gold"
            >
              {lang === "en" ? "Switch to Bahasa Indonesia" : "Switch to English"}
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-parchment/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {t.footer.copyright}
          </p>
          <p>{t.footer.credits}</p>
        </div>
      </div>
    </footer>
  );
}
