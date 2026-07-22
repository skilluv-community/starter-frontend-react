export const en = {
  title: 'Skilluv starter — React',
  tagline: 'React 19 + Vite 6 + Tailwind v4 + TanStack Query + React Router 7.',
  nav_home: 'Home',
  nav_counter: 'Counter',
  nav_api: 'API demo',
  counter_title: 'Counter',
  counter_inc: 'Increment',
  counter_dec: 'Decrement',
  counter_reset: 'Reset',
  counter_current: 'Current value',
  counter_doubled: 'Doubled',
  api_title: 'API demo',
  api_intro:
    'This page uses TanStack Query to hit the public GitHub API and shows how to handle loading and error states.',
  api_button: 'Fetch',
  api_repo_label: 'Public repository stars',
  api_loading: 'Loading…',
  lang_switch: 'FR',
} as const;

export const fr = {
  title: 'Starter Skilluv — React',
  tagline: 'React 19 + Vite 6 + Tailwind v4 + TanStack Query + React Router 7.',
  nav_home: 'Accueil',
  nav_counter: 'Compteur',
  nav_api: 'Démo API',
  counter_title: 'Compteur',
  counter_inc: 'Incrémenter',
  counter_dec: 'Décrémenter',
  counter_reset: 'Reset',
  counter_current: 'Valeur',
  counter_doubled: 'Doublé',
  api_title: 'Démo API',
  api_intro:
    "Cette page utilise TanStack Query pour interroger l'API publique de GitHub et montre comment gérer loading et erreurs.",
  api_button: 'Charger',
  api_repo_label: 'Étoiles du repo public',
  api_loading: 'Chargement…',
  lang_switch: 'EN',
} as const satisfies typeof en;

export type Dict = typeof en;
export type Lang = 'en' | 'fr';
export const dictionaries: Record<Lang, Dict> = { en, fr };
