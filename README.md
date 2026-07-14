# Reclaiming the Earth We Farm — AMR Awareness

A bilingual (English / Bahasa Indonesia) interactive website built for an AMR (antimicrobial
resistance) awareness competition. It tells the story of the Citarum River in West Java,
Indonesia, and how agricultural antibiotic pollution is driving antimicrobial resistance — based
on the essay *"Reclaiming the Earth We Farm"* by Muhammad Azzhafran Nur et al., SMA Ibnu Hajar
Boarding School.

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4 (CSS-first theme in `src/index.css`)
- Framer Motion for scroll-triggered animation and micro-interactions
- Custom i18n (`src/i18n`) — no external i18n library, full EN/ID content dictionaries

## Structure

- `src/i18n/` — `en.ts` / `id.ts` content dictionaries typed against `types.ts`
- `src/context/LanguageContext.tsx` — language state, persisted to `localStorage`, syncs `<html lang>`
- `src/sections/` — one component per page section (Hero, Problem, Science, Solutions, Take Action, About Us, Resources)
- `src/components/ui/` — reusable interactive primitives (gene flip cards, AMR escalation cycle, One Health Venn, before/after slider, etc.)
- `src/data/` — team roster and essay references (language-independent)
- `public/docs/` — downloadable essay PDF
- `public/images/school-logo.png` — school logo, extracted from the source essay PDF

## Development

```bash
npm install
npm run dev       # start dev server
npm run build     # type-check + production build
npm run lint       # oxlint
```

## Notes

- The hero's before/after river comparison uses illustrated SVG artwork (no source photograph of
  the Citarum River was available at build time) — swap `src/components/ui/RiverArt.tsx` for real
  photography if available.
- Content is data-driven: to update copy, edit `src/i18n/en.ts` and `src/i18n/id.ts` — both files
  must stay in sync with the `Content` shape in `src/i18n/types.ts`.
