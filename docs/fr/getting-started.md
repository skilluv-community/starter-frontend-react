# Démarrage — starter-frontend-react

## Prérequis

- Node 22 ou 24 (LTS)
- npm 10+

## Premier lancement

```bash
git clone git@github.com:skilluv-community/starter-frontend-react.git
cd starter-frontend-react
cp .env.example .env
npm install
npm run dev
```

Serveur Vite sur <http://localhost:5173> avec HMR.

## Scripts

| Commande            | Rôle                                 |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Serveur Vite, HMR                    |
| `npm run build`     | Build de prod                        |
| `npm run preview`   | Sert `dist/` sur :4173               |
| `npm run typecheck` | `tsc --noEmit`                       |
| `npm run lint`      | ESLint + Prettier                    |
| `npm run format`    | Auto-fix Prettier                    |
| `npm run test:unit` | Vitest                               |
| `npm run test:e2e`  | Playwright (build → preview → tests) |
| `npm run test`      | unit + e2e                           |

## Déploiement

- **Netlify / Cloudflare Pages / Vercel** — connecter le repo, build `npm run build`, output `dist/`.
- **Self-hosted** — copier `dist/` derrière Caddy / nginx.

React Router (`createBrowserRouter`) implique de configurer l'hôte pour servir `index.html` sur les routes inconnues (SPA rewrite).

## Variables d'environnement

Vite n'expose au client que les variables préfixées par `VITE_`. Voir `.env.example`.
