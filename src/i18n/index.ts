import { en } from "./en";
import { id } from "./id";
import type { Content } from "./types";

export type Lang = "en" | "id";

export const dictionaries: Record<Lang, Content> = { en, id };

export type { Content };
