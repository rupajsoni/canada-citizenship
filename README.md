# Canada Citizenship Prep

Free citizenship test prep for future Canadians — modules, Q&A, and timed mock exams based on IRCC's **Discover Canada** guide (2026 format).

**Not affiliated with the Government of Canada or IRCC.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## Principle

> **Individuals never pay. Partners pay. We only win when we've served the community.**

**Tagline:** *Government is slow. The experience doesn't have to be.*

---

## Quick start

```bash
git clone https://github.com/YOUR_USER/canada-citizenship.git
cd canada-citizenship

# Option A — open directly
open app/index.html

# Option B — local server
chmod +x scripts/serve.sh
./scripts/serve.sh          # http://localhost:8080
```

---

## Deploy

One-click via [Vercel](https://vercel.com) or [Netlify](https://netlify.com). No build step.

| Platform | Config |
|----------|--------|
| Vercel | `vercel.json` → publishes `app/` |
| Netlify | `netlify.toml` → publishes `app/` |

Details: [docs/DEPLOY.md](docs/DEPLOY.md)

After deploy, set partner and tip URLs in `app/index.html` → `CONFIG` object.

---

## Repository structure

```
canada-citizenship/
├── README.md
├── LICENSE
├── vercel.json
├── netlify.toml
├── .env.example
├── app/
│   └── index.html              # Single-page prep app (ship this)
├── content/
│   └── study-guide.md          # Source Q&A / modules (markdown)
├── docs/
│   ├── README.md               # Doc index
│   ├── strategy.md             # Free-first model, launch plan
│   ├── partnerships.md         # Partner pipeline, IRCC outreach
│   ├── monetization.md         # Tips, affiliates, sponsorship
│   └── DEPLOY.md               # Hosting instructions
└── scripts/
    └── serve.sh                # Local dev server
```

---

## Documentation

| Doc | Purpose |
|-----|---------|
| [docs/strategy.md](docs/strategy.md) | Positioning, distribution, launch checklist |
| [docs/partnerships.md](docs/partnerships.md) | Inbound partner channel, target orgs |
| [docs/monetization.md](docs/monetization.md) | How costs get covered without user paywalls |
| [content/study-guide.md](content/study-guide.md) | Study content reference |

---

## Configuration

In `app/index.html`:

```javascript
const CONFIG = {
  tipsUrl: '',      // Ko-fi or Stripe tip link
  partnersUrl: ''   // Google Form or /partners page
};
```

---

## Status

| Item | Status |
|------|--------|
| App (modules + mock test) | Done |
| Repo structure | Done |
| Deploy to static host | TODO |
| Partnership inbound form | TODO |
| Tips link | TODO |
| Custom `.ca` domain | TODO |

---

## License

MIT — see [LICENSE](LICENSE). Study content is derived from IRCC's public Discover Canada guide; not an official government product.

---

*Maintainer: [Rupaj Soni](https://linkedin.com/in/rupajsoni) · Civic / slow-tech · Separate from personal test prep*
