# GitHub setup — one-time (2 minutes)

## 1. Create the repo

Go to **https://github.com/new**

| Setting | Value |
|---------|--------|
| Repository name | `canada-citizenship` |
| Visibility | **Public** (required for free GitHub Pages) |
| Add README | **Off** |
| Add .gitignore | **Off** |
| Add license | **Off** |

Click **Create repository**. Leave the empty-repo page open.

## 2. Push from your machine

Remote is already configured. From the project folder:

```bash
cd /Users/rupajsoni/Projects/canada-citizenship
git push -u origin main
```

Or tell the agent **"repo created"** and it will push for you.

## 3. Enable GitHub Pages (one click)

1. Repo → **Settings** → **Pages**
2. **Build and deployment** → Source: **GitHub Actions**
3. Wait ~1 minute — the `Deploy GitHub Pages` workflow runs on push
4. Refresh Pages settings — live URL: **https://rupajsoni.github.io/canada-citizenship/**

No branch or folder to pick manually — `.github/workflows/pages.yml` publishes the `app/` folder.

## 4. Vercel (optional, ~1 minute)

1. [vercel.com/new](https://vercel.com/new) → Import `rupajsoni/canada-citizenship`
2. Accept defaults (`vercel.json` sets output directory to `app/`)
3. Deploy — you get a `*.vercel.app` URL plus optional custom domain later

## Troubleshooting

- **404 on CSS/JS** — always deploy the `app/` folder root (workflow does this). Do not set Pages to repo root.
- **Workflow failed** — Settings → Pages must be **GitHub Actions**, not "Deploy from branch."
- **Private repo** — GitHub Pages on private repos needs GitHub Pro; use **Public** for this civic free tool.
