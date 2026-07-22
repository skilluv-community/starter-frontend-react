# starter-frontend-react

> A Skilluv starter — React 19 + Vite 6 + Tailwind v4 + TanStack Query v5 + React Router 7.

[![CI](https://github.com/skilluv-community/starter-frontend-react/actions/workflows/ci.yml/badge.svg)](https://github.com/skilluv-community/starter-frontend-react/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Skilluv](https://img.shields.io/badge/skilluv-community-emerald)](https://skilluv.io)

## English

### What this is

A production-ready React 19 starter using only stable, current APIs:

- **React 19** + **Vite 6** + **TypeScript strict**
- **Tailwind v4** via the official Vite plugin
- **TanStack Query v5** for data fetching (loading / error / cache)
- **React Router 7** (data-router API, `createBrowserRouter`)
- **ESLint 9 flat config** + Prettier
- **Vitest** + **@testing-library/react** for units, **Playwright** for e2e

### Quickstart

```bash
git clone git@github.com:skilluv-community/starter-frontend-react.git
cd starter-frontend-react
cp .env.example .env
npm install
npm run dev
```

Open <http://localhost:5173>.

### Structure

```
src/
  main.tsx            Providers + router
  App.tsx             Layout (nav + <Outlet />)
  index.css           @import "tailwindcss"
  components/         Button, LangSwitcher
  hooks/              useCounter (reducer demo)
  i18n/               dictionaries + LangContext + useI18n
  routes/             HomePage, CounterPage, ApiDemoPage
tests/
  unit/               Vitest + Testing Library
  e2e/                Playwright
```

### Docs

- [`docs/en/getting-started.md`](./docs/en/getting-started.md)
- [`docs/en/architecture.md`](./docs/en/architecture.md)

---

## Français

Starter React 19 prêt-à-l'emploi avec les APIs stables actuelles. Voir [`docs/fr/getting-started.md`](./docs/fr/getting-started.md) et [`docs/fr/architecture.md`](./docs/fr/architecture.md).

```bash
git clone git@github.com:skilluv-community/starter-frontend-react.git
cd starter-frontend-react
cp .env.example .env
npm install
npm run dev
```

---

## License

MIT — see [LICENSE](./LICENSE).

## Related

- [Skilluv](https://skilluv.io)
- [Skilluv Community Charter](https://github.com/skilluv-community/community-charter)
- [Other starters](https://github.com/orgs/skilluv-community/repositories?q=starter)
