import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "amr-challenge-explored";

function read(): Set<number> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw) as number[]);
  } catch {
    return new Set();
  }
}

export function useExplored() {
  const [explored, setExplored] = useState<Set<number>>(() => new Set());

  useEffect(() => {
    setExplored(read());
  }, []);

  const markExplored = useCallback((id: number) => {
    setExplored((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    window.localStorage.removeItem(STORAGE_KEY);
    setExplored(new Set());
  }, []);

  return { explored, markExplored, reset };
}
