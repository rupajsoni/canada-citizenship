# Community contributions

Users send topics, gaps and corrections through the in-app "Help keep it current" form. The form is reachable from:
- the end of each module quiz
- exam results
- Exam Day
- the About page
- `/app/#contribute`, which the landing pages link to

Submissions go to the Netlify form `northbound-contribution`.

## Fields

| Field | Meaning |
|---|---|
| `kind` | `test` (came up on their test), `missing` (gap in lessons) or `correction` (something looks wrong) |
| `topic` | module id (`rights`, `hist1`, …), `other`, or empty |
| `details` | free text, required |
| `answer` | the correct answer if they know it, optional |
| `context` | where they opened the form: `quiz:<moduleId>`, `exam-results`, `examday`, `about`, `landing` |
| `lang` | `en` or `fr` |

## Review

1. **Read it.** Netlify emails each submission; you can also see them under Netlify → Forms → `northbound-contribution`.
2. **Verify it against the official guide.** Use *Discover Canada* ([EN](https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/discover-canada.html) / [FR](https://www.canada.ca/fr/immigration-refugies-citoyennete/organisation/publications-guides/decouvrir-canada.html)). If the guide doesn't support it, don't add it.
3. **Add it in both languages:**
   - Lesson content goes in `app/js/content.js` and `app/js/content.fr.js`.
   - Questions go in `questionBank` or the module `quiz`. Mark them with `source: 'community'`.
   - Write the French version using the official *Découvrir le Canada* terms.
   - Keep `correct` indices identical across EN and FR.
4. **Update the counts** wherever they're quoted. These are the landing pages (`index.html`, `fr/index.html`, both the proof strip and the FAQ) and `llms.txt` (the root copy, then copy it to `app/llms.txt`).
5. **Deploy, then re-ping IndexNow** (see `DEPLOY.md`).

Ask people what *came up* in their own words. Never ask for exact copies of IRCC test questions.
