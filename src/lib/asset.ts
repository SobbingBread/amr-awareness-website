// Resolve a path in the public/ directory against Vite's configured base URL.
// In production the app is served from /amr-awareness-website/, so a bare
// "/images/foo.png" would 404 — this prefixes the correct base at runtime.
// BASE_URL always ends with a trailing slash (e.g. "/" in dev,
// "/amr-awareness-website/" in production).
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.replace(/^\//, "")}`;
}
