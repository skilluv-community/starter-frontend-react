# Getting started — starter-frontend-react

## Prerequisites

- Node 22 or 24 (LTS)
- npm 10+

## First run

```bash
git clone git@github.com:skilluv-community/starter-frontend-react.git
cd starter-frontend-react
cp .env.example .env
npm install
npm run dev
```

Vite dev server on <http://localhost:5173> with HMR.

## Scripts

| Command             | Purpose                              |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Vite dev server, HMR                 |
| `npm run build`     | Production build (Vite)              |
| `npm run preview`   | Serve `dist/` on :4173               |
| `npm run typecheck` | `tsc --noEmit`                       |
| `npm run lint`      | ESLint + Prettier                    |
| `npm run format`    | Prettier auto-fix                    |
| `npm run test:unit` | Vitest                               |
| `npm run test:e2e`  | Playwright (build → preview → tests) |
| `npm run test`      | unit + e2e                           |

## Deploying

- **Netlify / Cloudflare Pages / Vercel** — connect the repo, build `npm run build`, output `dist/`.
- **Self-hosted** — copy `dist/` behind Caddy / nginx.

Since we use React Router with `createBrowserRouter`, configure the host to serve `index.html` on unknown routes (SPA rewrite).

## Environment variables

Vite exposes only variables prefixed with `VITE_` to the client. See `.env.example`.
