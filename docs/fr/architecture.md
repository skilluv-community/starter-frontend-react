# Architecture — starter-frontend-react

## Choix opinionated

### 1. React 19 en client-only

SPA Vite. Les Server Components requièrent un framework fullstack (Next.js, Waku, etc.) — hors scope d'un starter client. Utiliser ici les nouveautés React 19 : `use`, `useOptimistic`, actions, `useTransition`.

### 2. React Router 7 API data-router

`createBrowserRouter` avec objets de route. C'est l'API recommandée actuelle. Le layout est `<Outlet />` dans `App.tsx`.

### 3. TanStack Query v5 pour le data fetching

- Cache, retry, dédup automatiques.
- États loading/error out of the box.
- Query keys → invalidation explicite.

`refetchOnWindowFocus` désactivé pour la lisibilité de la démo — à réactiver en prod.

### 4. Tailwind v4 via le plugin Vite

Pipeline CSS-first : `@import "tailwindcss";` dans `index.css`, plugin `@tailwindcss/vite`. Pas de PostCSS, pas de `tailwind.config.js` sauf pour étendre le thème.

### 5. i18n via un contexte

- Zéro dépendance.
- État langue dans un contexte React ; composants via `useI18n()`.
- Suffisant au démarrage — migrer vers `react-intl` ou `i18next` si besoin.

### 6. Tests : Vitest + Testing Library, Playwright pour l'e2e

- Vitest tourne sous Vite ; même config pour compilation source et tests.
- Playwright teste le preview de prod (CI ≈ ce que voient les users).

## Hors scope

- Auth (`oauth4webapi`, Auth.js si passage à Next, ou IdP externe).
- Pages SSR / RSC.
- Component library (2 exemples fournis ; utiliser `shadcn/ui` ou `radix-ui`).

## Extensions suggérées

- Passer au mode framework de React Router pour SSR.
- Ajouter un exemple `use()` + Suspense (Actions pattern).
- Ajouter MSW pour mocker l'API en tests.
