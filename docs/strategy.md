# Strategy — free first, partners pay

> **Decision (2026-06-21):** Pursue the free + upside path. Full prep free for all individuals. Revenue from tips, consulting, affiliates, sponsorship, and B2B — only after serving the community.

---

## North star

Walk into oath ceremony knowing **thousands of future Canadians** used this tool — free, no paywall.

**Resume / LinkedIn claim target:**
> *Built and gave away a citizenship prep tool used by [X] permanent residents. Translated IRCC's Discover Canada into modern, free study tools — because becoming Canadian shouldn't cost money.*

---

## Positioning — slow tech, civic UX

IRCC, Discover Canada, the citizenship test — PDF-heavy, dignity-stripped, decades behind. Everyone in the pipeline knows the gap. Nobody owns the modern layer.

**We translate, not replace.** Fun, reliable, obvious value. Less intimidating than brutal tech — the bar is UX and trust, not distributed systems.

**Tagline:** *Government is slow. The experience doesn't have to be.*

**Career upside:** Portfolio for GovTech, provincial digital services, nonprofit tooling, consulting. See [monetization.md](monetization.md) Layer 5.

---

## What we're building

| Layer | Choice |
|-------|--------|
| Product | `app/index.html` — modules, Q&A, timed mock test |
| Hosting | Static (Vercel / Netlify / Cloudflare Pages) — $0 |
| Access | **100% free for individuals** — no unlock gate required |
| Optional signup | Light form for stats + partnership pipeline (name, email, test date, consent) — not a paywall |
| Tips | Ko-fi / Stripe link in footer — optional support |
| Partners | Inbound form + active outreach — see [partnerships.md](partnerships.md) |
| Domain | `.ca` when first stranger shares the link |

**Not day-one:** User accounts DB, AWS, subscriptions, AI coach, paywalls.

---

## Free-first distribution

### Tier 1 — This week (zero cost)

| Channel | Action |
|---------|--------|
| Community groups | Share link in WhatsApp, Facebook newcomer, temple/gurdwara channels |
| Reddit | r/ImmigrationCanada, r/canadianCitizenship — "I built this, free forever" |
| Personal network | PR holders approaching citizenship |
| LinkedIn | Launch post — generosity + civic tech angle |

**Pitch:**
> Free citizenship prep — modules + timed mock exam, Discover Canada 2026 format (20 Q, 45 min, 75% to pass). No paywall. Built for our community.

### Tier 2 — Referrers (highest leverage)

Immigration consultants, settlement agencies, LINC teachers — give them a **referrer kit** and unique link. They share because it's free and makes them look good. They earn on **affiliate cross-sell** (bank signup), not on charging their client. See [partnerships.md](partnerships.md).

### Tier 3 — SEO / AEO

- `.ca` domain + FAQ page
- Keywords: "Canadian citizenship test practice 2026", "free citizenship mock exam Canada"
- Structured Q&A for AI search: "How many questions?", "What score to pass?", "Is the test online in 2026?"

### Tier 4 — Institutional

Libraries, settlement agencies, citizenship classes — free resource listing. TPL, Peel, Milton, CCS.

---

## Lifecycle cross-sell (monetize the moment after stress)

Free at the **anxiety** moment (test prep). Optional affiliate at the **opportunity** moment (after mock pass):

1. Newcomer banking — highest affiliate value
2. Passport checklist — free, builds trust
3. Voter registration — free, on-brand
4. Oath ceremony prep + share card — free, viral
5. "What's next" — family sponsorship, RCIC referral (ethical)

Details: [monetization.md](monetization.md)

---

## Data asset (with consent)

Opt-in cohort of pre-citizens — test dates, study progress, referral source, pass outcome. Used for product improvement and **partnership pitches**, never sold raw (PIPEDA).

~250K–375K new citizens/year nationally. 1–2% engaged = 2,500–7,500 users/year at scale.

---

## Competitive gap

| Player | Gap we fill |
|--------|-------------|
| ApnaToronto | Free but dated — we match free, beat on UX + story |
| CitizenPass / canadatest.ca | Paid — we remove the paywall entirely |
| IRCC PDF | Official but unusable — we translate |

**Moat:** Trust + referrer network + free brand + lifecycle positioning — not the question bank.

---

## Oath ceremony milestone

| Metric | Target |
|--------|--------|
| Users helped | 1,000+ by ceremony |
| Pass testimonials | 20+ with permission |
| Active referrers | 10+ |
| Partnership conversations | 3+ opened |

**Ceremony post:** "I built this free for our community — today I took the oath."

---

## Launch checklist

- [ ] Deploy `app/` to static host
- [ ] Add footer: tips link + "Partner with us" + privacy disclaimer
- [ ] Optional signup form (stats, not gate) — Google Form OK
- [ ] Partnership inbound form — see [partnerships.md](partnerships.md)
- [ ] Referrer kit (1-page PDF + 3 codes for first partners)
- [ ] Post in 2 community groups + LinkedIn
- [ ] Email 5 local RCICs / 1 library settlement worker
- [ ] Buy `.ca` domain when traction appears
- [ ] FAQ page for SEO/AEO

---

## Metrics tracker

| Week | Users | Tips | Referrers active | Partnership inbound | Testimonials |
|------|-------|------|------------------|---------------------|--------------|
| 1 | | | | | |

---

## Content & trust rules

1. All Q&A from Discover Canada (IRCC).
2. **Not affiliated** with Government of Canada — disclaimer on every page.
3. 2026 format: 20 Q, 45 min, 75% pass, online webcam, 3 attempts.
4. PIPEDA: consent on forms; privacy page; no raw PII sales.
5. Affiliate disclosure on any monetized recommendation.

---

## Related docs

- [PRODUCT-UX.md](PRODUCT-UX.md) — design and reliability contract
- [monetization.md](monetization.md) — revenue layers, scenarios
- [partnerships.md](partnerships.md) — targets, IRCC playbook, inbound channel
- [../content/study-guide.md](../content/study-guide.md) — content source

---

*Last updated: 2026-06-21*
