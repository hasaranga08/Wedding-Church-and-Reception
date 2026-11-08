/**
 * Utility to resolve public asset URLs with Vite's configured base URL.
 * Automatically adapts between:
 * - Local development: base = '/' -> '/assets/...'
 * - GitHub Pages production: base = '/Wedding-Church-and-Reception/' -> '/Wedding-Church-and-Reception/assets/...'
 */
export const getAssetUrl = (path: string): string => {
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${cleanPath}`;
};
