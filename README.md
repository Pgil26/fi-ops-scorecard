# FI Ops Scorecard (Floral Image)

Executive FI Ops board exported from Grok Build: Salesforce (units on hire, closed won, open trials, at-risk), RouteMap changeovers, and Geotab van activity, with a location filter. The numbers are baked into the page (`src/data/ops.ts`), so no login is needed.

**Public URL:** https://pgil26.github.io/fi-ops-scorecard/

## Structure
- `src/` — TanStack Start + React app (`src/routes/index.tsx` → `src/components/ops-board.tsx`, data in `src/data/ops.ts`).
- `docs/` — static build served by GitHub Pages (`main` branch, `/docs` folder).
- `.vercel/`, `vercel.json` — original Grok Build / Vercel deploy output.

## Refreshing the Pages build
1. Update `src/data/ops.ts`.
2. Build with `base: "/fi-ops-scorecard/"` in `vite.config.ts` (`npm install && npx vite build`).
3. Run `npx vite preview`, save `http://127.0.0.1:8081/fi-ops-scorecard/` as `docs/index.html`, and copy `.vercel/output/static/*` into `docs/` (keep `docs/.nojekyll`). Point `/favicon.svg` and `/__grok/` links at `/fi-ops-scorecard/...`.
4. Commit and push to `main`.
