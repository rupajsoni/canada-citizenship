# Deploy

Static site, no build step. Hosted on **Netlify**, which auto-deploys `main`.

- Live: https://northboundapp.ca (landing page = `index.html`, study app = `app/`)
- `netlify.toml` publishes the repo root and 301-redirects `www.northboundapp.ca` and `northboundca.netlify.app` to the apex domain.
- Feedback form uses Netlify Forms (submissions + email notifications in the Netlify dashboard).

## Domain

Registered at Namecheap; DNS stays at Namecheap (Advanced DNS):

| Type  | Host | Value                      |
|-------|------|----------------------------|
| A     | @    | 75.2.60.5                  |
| CNAME | www  | northboundca.netlify.app   |

In Netlify → Domain management, `northboundapp.ca` is the primary domain. HTTPS is a Let's Encrypt cert issued by Netlify.

## Analytics & search

- Cloudflare Web Analytics beacon in `index.html` and `app/index.html`.
- `robots.txt` and `sitemap.xml` live at the repo root. Bump `<lastmod>` in the sitemap when content changes meaningfully.
- Google Search Console (Domain property, verified via DNS TXT) and Bing Webmaster Tools.
- `llms.txt` (root and `app/`) describes the product for AI crawlers.

## Local preview

```bash
./scripts/serve.sh        # http://localhost:8080
```

## IndexNow (instant Bing/Yandex re-crawl)

Key file: `c3d2c0e009116577ec56d5806ad3f9d6.txt` at the repo root. After a meaningful content change and deploy:

```bash
curl -s -o /dev/null -w "%{http_code}\n" -X POST https://api.indexnow.org/indexnow \
  -H "Content-Type: application/json" \
  -d '{"host":"northboundapp.ca","key":"c3d2c0e009116577ec56d5806ad3f9d6","keyLocation":"https://northboundapp.ca/c3d2c0e009116577ec56d5806ad3f9d6.txt","urlList":["https://northboundapp.ca/","https://northboundapp.ca/app/","https://northboundapp.ca/app/?lang=fr"]}'
```
