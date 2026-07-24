export type CategoryId =
  | "basics"
  | "citarum"
  | "agriculture"
  | "policy"
  | "onehealth"
  | "solutions"
  | "global"
  | "team";

export type Difficulty = "easy" | "medium" | "hard";

export interface Category {
  id: CategoryId;
  color: string;
  label: { en: string; id: string };
}

export const categories: Category[] = [
  { id: "basics", color: "#4A90D9", label: { en: "What is AMR?", id: "Apa itu AMR?" } },
  { id: "citarum", color: "#2E8B57", label: { en: "The Citarum River", id: "Sungai Citarum" } },
  { id: "agriculture", color: "#D4A843", label: { en: "Agriculture & Farming", id: "Pertanian & Peternakan" } },
  { id: "policy", color: "#9B59B6", label: { en: "Policy & Law", id: "Kebijakan & Hukum" } },
  { id: "onehealth", color: "#1ABC9C", label: { en: "One Health", id: "Satu Kesehatan" } },
  { id: "solutions", color: "#27AE60", label: { en: "Solutions & Action", id: "Solusi & Aksi" } },
  { id: "global", color: "#E74C3C", label: { en: "Global Impact & Future", id: "Dampak Global & Masa Depan" } },
  { id: "team", color: "#FF6B35", label: { en: "Our Team & Method", id: "Tim & Metode Kami" } },
];

export const categoryMap: Record<CategoryId, Category> = categories.reduce(
  (acc, c) => ({ ...acc, [c.id]: c }),
  {} as Record<CategoryId, Category>,
);

export const difficultyColors: Record<Difficulty, string> = {
  easy: "#27AE60",
  medium: "#D4A843",
  hard: "#E74C3C",
};
