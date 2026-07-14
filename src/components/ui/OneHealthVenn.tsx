import { useLanguage } from "../../context/LanguageContext";

export function OneHealthVenn() {
  const { t } = useLanguage();

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-center">
      <div className="relative mx-auto aspect-square w-full max-w-sm">
        <svg viewBox="-25 0 300 232" className="h-full w-full">
          <circle cx="85" cy="100" r="58" fill="#4A90D9" fillOpacity="0.45" stroke="#4A90D9" strokeWidth="1" />
          <circle cx="165" cy="100" r="58" fill="#1B4D1B" fillOpacity="0.45" stroke="#1B4D1B" strokeWidth="1" />
          <circle cx="125" cy="152" r="58" fill="#D4A843" fillOpacity="0.45" stroke="#D4A843" strokeWidth="1" />
          <text x="42" y="26" textAnchor="middle" className="font-sans" fontSize="8" fill="#F5F1E9" fontWeight="600">
            {t.solutions.oneHealthHuman}
          </text>
          <text x="208" y="26" textAnchor="middle" className="font-sans" fontSize="8" fill="#F5F1E9" fontWeight="600">
            {t.solutions.oneHealthAnimal}
          </text>
          <text x="125" y="224" textAnchor="middle" className="font-sans" fontSize="8" fill="#F5F1E9" fontWeight="600">
            {t.solutions.oneHealthEnvironment}
          </text>
          <text
            x="125"
            y="122"
            textAnchor="middle"
            fontSize="10"
            fontWeight="800"
            fill="#0A1F1A"
            className="font-display"
          >
            {t.solutions.oneHealthResult}
          </text>
        </svg>
      </div>
      <div>
        <h4 className="font-display text-xl font-bold">{t.solutions.oneHealthTitle}</h4>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-parchment/80">{t.solutions.oneHealthDescription}</p>
      </div>
    </div>
  );
}
