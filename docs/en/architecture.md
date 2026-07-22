# Architecture — starter-frontend-react

## Opinionated choices

### 1. React 19 with client-only rendering

This starter uses React 19 in a Vite SPA. React Server Components require a full-stack framework (Next.js, Waku, etc.) and are outside the scope of a client starter. Use the tools React 19 gives you here: `use`, `useOptimistic`, actions, `useTransition`.

### 2. React Router 7 with the data-router API

`createBrowserRouter` with route objects. This is the current recommended API and the direction the framework is going. `<Outlet />` in `App.tsx` is the layout.

### 3. TanStack Query v5 for data fetching

- Automatic caching, retries, dedup.
- Loading / error states out of the box.
- Query keys make cache invalidation explicit.

`refetchOnWindowFocus` is disabled to keep the demo predictable — turn it back on in production apps.

### 4. Tailwind v4 via the Vite plugin

CSS-first pipeline: `@import "tailwindcss";` in `index.css`, `@tailwindcss/vite` plugin in `vite.config.ts`. No PostCSS config, no `tailwind.config.js` unless you need to extend the theme.

### 5. i18n via a context

- Zero dependency.
- Language state lives in a React context; components read via `useI18n()`.
- Sufficient for starter scale — swap in `react-intl` or `i18next` if you outgrow it.

### 6. Tests: Vitest + Testing Library, Playwright for e2e

- Vitest runs under Vite, so the same config compiles tests and source.
- Playwright tests the production preview build (what CI validates is what users see).

## What's out of scope

- Auth (add `oauth4webapi`, Auth.js if you swap to Next, or an external IdP).
- Server-rendered pages / RSC.
- A component library (this starter ships two example components; use `shadcn/ui` or `radix-ui` for a real system).

## Suggested first extensions

- Swap `createBrowserRouter` for React Router's framework mode when you need SSR.
- Add a Suspense-wrapped `use()` example for the Actions pattern.
- Add MSW for API mocking in tests.
