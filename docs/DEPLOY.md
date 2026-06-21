# Deploy

Static site — no build step. The app is `app/index.html`.

## Vercel (recommended)

1. Push repo to GitHub.
2. [vercel.com/new](https://vercel.com/new) → Import repository.
3. Vercel reads `vercel.json` — output directory is `app/`.
4. Deploy. Set custom `.ca` domain in project settings when ready.

Or CLI:

```bash
npx vercel --prod
```

## Netlify

```bash
# netlify.toml at repo root — build command empty, publish app/
netlify deploy --prod --dir=app
```

Add `netlify.toml` if you prefer Netlify over Vercel:

```toml
[build]
  publish = "app"
```

## GitHub Pages

Requires either:
- Move `index.html` to repo root, or
- Use a GitHub Action to publish `app/` to `gh-pages` branch.

Vercel is simpler for this project.

## After deploy

1. Open `app/index.html` and set `CONFIG.tipsUrl` and `CONFIG.partnersUrl` (or use `config.local.js` — gitignored).
2. Smoke test: home → module → mock test → footer links.
3. Update README status table.

## Local preview

```bash
./scripts/serve.sh        # http://localhost:8080
# or
open app/index.html
```
