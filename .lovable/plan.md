## Goal
Expand presenter script slides 07–10 in `src/pages/PresenterScript.tsx` so they're more informative about **what the solution actually does**, the **quality of the data** behind it, and **how decisions get made** — without breaking the ~5-minute total runtime.

## Why these four slides
- **07 One Lens** — currently lists personas but doesn't explain *what each solution does* or *what data sits underneath*.
- **08 Connected Decision** — jumps to a verdict without showing *how* the answer is assembled or *why it can be trusted*.
- **09 Teams Transformed** — stats only; no link to the data/decision quality that makes the time-saving real.
- **10 Maturity Journey** — names the stages but doesn't describe what changes in *decision quality* at each step.

## Proposed rewrites (script only — copy-updates section untouched)

**Slide 07 — One Lens. Five solutions. One AI layer.** (~0:35)
Add one descriptive line per solution + the data spine:
- Strategic Intelligence — 40 years of analyst-validated foresight across 22 sectors.
- Market Intelligence — sized and forecast across 110 countries, refreshed continuously.
- Competitive Intelligence — 25,000 companies, every deal, filing and move tracked.
- Innovation Intelligence — 4M+ products and patents, concept-to-launch signals.
- Sales Intelligence — retailer-ready evidence, account by account.
- Ava — the AI layer that reads across all five and answers in your language.
Close: "One taxonomy. One source of truth. Every number traceable to a named analyst."

**Slide 08 — One question. Five perspectives. One connected answer.** (~0:40)
Keep the plant-based SE-Asia question, but make the *decision mechanics* explicit:
- Each persona's number comes from the same underlying taxonomy, so the answers reconcile automatically.
- Add a confidence line: "Every figure carries a confidence score and an analyst trail — you can click from the GO verdict back to the source survey, filing or shipment."
- Old way / new way line stays.

**Slide 09 — What changes when your best people stop being data janitors.** (~0:30)
Reframe the stats around *decision quality*, not just speed:
- 75% of your team's time back on strategy.
- Decisions made on one reconciled dataset — not seven conflicting ones.
- 2× launch success rate, because the GO/NO-GO is built on evidence the whole exec team already trusts.
Closer kept.

**Slide 10 — The Intelligence Maturity Journey.** (~0:35)
Describe what decision quality looks like at each stage:
- Fragmented — decisions defended, not made; 6–8 weeks per call.
- Connected — one taxonomy, one source of truth; decisions made in days.
- Optimised — Ava surfaces patterns humans miss; decisions get pre-empted.
- Predictive — you act on signals before the market reads them.
Close kept: "You can't skip to Predictive. Connected is the foundation."

## Runtime impact
Adds ~90 words across 4 slides (≈35 sec). To hold ~5 min total: trim Slide 04 (Monday) by ~15 words and Slide 11 (Proof) by ~15 words — both already have the same numbers landing elsewhere. Updated timing markers on slides 08–14.

## Out of scope
- No changes to slide components, narration audio data, or the "Slide copy updates" reference section.
- No new personas, stats or claims — only sharper articulation of what's already in the deck.

## File touched
- `src/pages/PresenterScript.tsx` — update the `slides` array entries 07–10 (and adjust timings on 08–14, light trims on 04 and 11).