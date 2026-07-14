import { useState, type FormEvent } from "react";
import { useLanguage } from "../../context/LanguageContext";

export function Newsletter() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return;
    setDone(true);
  };

  if (done) {
    return <p className="text-sm font-semibold text-forest-light">{t.takeAction.newsletterSuccess}</p>;
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t.takeAction.newsletterPlaceholder}
        className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-parchment placeholder:text-parchment/40 focus:border-gold focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-full bg-water px-6 py-2.5 text-sm font-semibold text-midnight transition hover:scale-[0.98]"
      >
        {t.takeAction.newsletterCta}
      </button>
    </form>
  );
}
