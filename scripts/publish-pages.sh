#!/usr/bin/env bash
# Build the scorecard as static files for GitHub Pages (main branch, /docs).
#
#   ./scripts/publish-pages.sh            # build + refresh docs/
#   git add -A docs && git commit -m "Refresh scorecard" && git push
#
# How it works: vite.config.ts switches into "Pages mode" when PAGES_BASE is
# set — base path /fi-ops-scorecard/, TanStack Start prerenders "/" to static
# HTML, and Nitro writes to dist/ instead of the committed .vercel/output.
# This script then copies dist/static into a clean docs/, keeps docs/.nojekyll,
# points the remaining root-absolute links (favicon, /__grok/*) at the base
# path, writes a static web manifest, and sanity-checks the result.
set -euo pipefail

BASE="${PAGES_BASE:-/fi-ops-scorecard/}"
case "$BASE" in /*/) ;; *) echo "PAGES_BASE must start and end with '/': $BASE" >&2; exit 1 ;; esac

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

# 1. Dependencies (only when missing or older than the lockfile).
if [ ! -d node_modules ] || [ package-lock.json -nt node_modules/.package-lock.json ]; then
  echo "==> Installing dependencies"
  if ! npm ci --no-audit --no-fund; then
    echo "==> npm ci failed (lockfile drift); falling back to npm install --no-save"
    npm install --no-audit --no-fund --no-save
  fi
fi

# 2. Build with the Pages base. (Skips `npm run build`'s db:migrate — the
#    scorecard data is baked into src/data/ops.ts, no database involved.)
echo "==> Building with base $BASE"
rm -rf dist
PAGES_BASE="$BASE" node scripts/with-app-env.mjs npx vite build

OUT="dist/static"
[ -f "$OUT/index.html" ] || { echo "Build did not produce $OUT/index.html (prerender failed?)" >&2; exit 1; }

# 3. Fresh docs/ (keep .nojekyll so Pages serves dirs starting with "_").
echo "==> Writing docs/"
rm -rf docs
mkdir -p docs
cp -R "$OUT"/. docs/
touch docs/.nojekyll

# 4. Rewrite leftover root-absolute paths + write a static manifest.
PAGES_BASE="$BASE" node --input-type=module - <<'NODE'
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const base = process.env.PAGES_BASE; // "/fi-ops-scorecard/"
const docs = "docs";

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
const files = walk(docs);

// Public files that live at the site root on Vercel, plus the manifest we
// write below. Built assets already carry the base via Vite.
const rootPaths = files
  .map((f) => "/" + relative(docs, f).split("\\").join("/"))
  .filter((p) => !p.startsWith("/assets/") && p !== "/index.html" && p !== "/.nojekyll");
rootPaths.push("/__grok/manifest.webmanifest");

let changed = 0;
for (const file of files.filter((f) => /\.(html|js|css)$/.test(f))) {
  const src = readFileSync(file, "utf8");
  let out = src;
  for (const p of rootPaths) {
    const target = base + p.slice(1);
    for (const q of ['"', "'", "`"]) out = out.split(q + p + q).join(q + target + q);
    out = out.split("url(" + p + ")").join("url(" + target + ")");
  }
  if (out !== src) {
    writeFileSync(file, out);
    changed++;
  }
}

// Static stand-in for the manifest the Vercel middleware generates.
writeFileSync(
  join(docs, "__grok/manifest.webmanifest"),
  JSON.stringify(
    {
      name: "FI Ops Board",
      short_name: "FI Ops Board",
      id: base,
      start_url: base,
      scope: base,
      display: "standalone",
      background_color: "#000000",
      theme_color: "#000000",
      icons: [{ src: base + "__grok/icon-180.png", sizes: "180x180", type: "image/png" }],
    },
    null,
    2,
  ) + "\n",
);

// Sanity check: every local src/href in index.html must be under the base and exist.
const html = readFileSync(join(docs, "index.html"), "utf8");
const refs = [...html.matchAll(/\b(?:src|href)="(\/[^"\/][^"]*)"/g)].map((m) => m[1]);
const bad = refs.filter((r) => !r.startsWith(base));
const missing = refs
  .filter((r) => r.startsWith(base))
  .filter((r) => !existsSync(join(docs, r.slice(base.length).split(/[?#]/)[0])));
if (bad.length || missing.length || refs.length === 0) {
  console.error("index.html check failed", { bad, missing, refs: refs.length });
  process.exit(1);
}
console.log(`Rewrote paths in ${changed} file(s); index.html: ${refs.length} local refs, all under ${base}.`);
NODE

echo "==> docs/ ready. Next: git add -A docs && git commit -m 'Refresh scorecard' && git push"
