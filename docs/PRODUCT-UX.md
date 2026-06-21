# Product UX — design principles and product contract

> **Decision (2026-06-21):** Premium civic edtech feel, low-key. Content is fixed; experience is what we own.

---

## Product contract (non-negotiable)

| Rule | Why |
|------|-----|
| **100% accurate content** | Every fact traceable to *Discover Canada* / IRCC. No improvisation. |
| **Deterministic prep** | Fixed question bank, fixed module quizzes, reproducible practice exams. |
| **No formatting bugs** | Content is structured data → rendered by typed components. No free-form HTML spills. |
| **We do not own the content** | We own translation, layout, pacing, and trust—not the facts themselves. |
| **Do not over-engineer** | Static site, CSS visuals, no backend until scale demands it. |

---

## Design direction — Canadian, Uber-informed, low-key

**Not** flag-waving red and white. **Not** government PDF with fonts changed.

**Yes:** the calm confidence of Uber—clarity, hierarchy, restraint, one accent used sparingly.

| Uber principle | Our application |
|----------------|-----------------|
| Clarity over decoration | One idea per card; no clutter |
| Strong typographic hierarchy | Display serif for titles, Inter for body, clear size steps |
| Monochrome + single accent | Black sidebar, white surfaces, maple red only for progress and primary actions |
| Purposeful whitespace | 8px grid; sections breathe |
| Subtle elevation | Light shadows; borders almost invisible |
| Invisible UX | User learns without noticing "components"—timelines, grids, checklists feel natural |

**Palette (low-key Canadian):**

- Black `#000000` — navigation shell  
- Off-white `#F7F7F8` — canvas  
- White `#FFFFFF` — cards  
- Charcoal `#1A1A1A` — primary text  
- Maple red `#C8102E` — accent (official Canada red, used rarely)  
- Muted gray `#6B7280` — secondary text  

---

## Teaching aids (lightweight, no illustration pipeline)

Structured section types—rendered deterministically from JSON:

| Type | Use for | Example |
|------|---------|---------|
| `list` | Supporting detail | Responsibilities, bullet facts |
| `cards` | Categories, branches, symbols | Six Charter rights, three government branches |
| `timeline` | History | Exploration → Confederation |
| `table` | Comparisons with many fields | Federal vs provincial responsibilities |
| `compare` | Side-by-side (2–3 columns) | First Nations / Métis / Inuit |
| `checklist` | Duties, steps | Citizenship responsibilities |
| `statstrip` | Exam constants | 20 questions · 45 min · 75% |

**No** custom illustration library. **No** charting JS. CSS + semantic HTML only.

Visual cues users feel but don't name:

- Red dot timeline nodes  
- Numbered lesson path on dashboard  
- Category tint on practice exam questions  
- Checkmarks on completed modules  
- Flip animation on flashcards (active recall)  

---

## Learning flow (edtech, kept simple)

```
Learn (structured visuals) → Flashcards (recall) → Check (3 MCQ) → Practice exam (20 MCQ)
```

- **Learn:** chunked sections, max one visual type per scroll  
- **Flashcards:** one concept per card; keyboard navigation  
- **Check:** fixed three questions per module—same every time  
- **Practice exam:** 20 questions drawn deterministically from bank of 35; distractors seeded from bank (stable per question)  

---

## Monetization ladder (honest, not fake-free)

**Now — genuinely free:**

- Full lessons, flashcards, module checks, practice exams  
- No artificial limits, no "free trial" dark patterns  
- Quality and trust are the product  

**Later — when we are the go-to prep:**

Revenue follows **richer experience**, not paywalling basics:

| Tier | What | Price logic |
|------|------|-------------|
| Free forever | Core prep (above) | Community trust, SEO, referrals |
| Supporter | Tips, optional badge | Gratitude |
| Plus (future) | Ceremony prep, oath rehearsal, printable summary, French mode, offline app | People pay when quality clearly exceeds free tier |
| B2B | Agency dashboard, referrer analytics | Partners pay, not students |
| Sponsorship | Bank/telco keeps it free | Real money at scale |

**We do not:** hide core prep behind email gates or fake urgency.  
**We do:** earn the right to charge when users say *this is the best prep in Canada* and want more.

Target: **real money that means something**—sponsorship + B2B + Plus at scale, not $15 guilt paywalls on anxious newcomers.

---

## UX roadmap

| Phase | Focus |
|-------|--------|
| **Now** | Typed visual sections, Uber palette, deterministic exams |
| Next | French bilingual toggle, oath ceremony module |
| Later | Plus tier features, referrer dashboard, `.ca` domain |

---

## Quality checklist (before every release)

- [ ] Spot-check 3 modules against Discover Canada PDF  
- [ ] All module quizzes pass with correct indices  
- [ ] Practice exam: 20 questions, scoring matches 15/20 pass threshold  
- [ ] Mobile sidebar and flashcards work  
- [ ] No console errors on load  

---

*Related: [strategy.md](strategy.md) · [monetization.md](monetization.md)*
