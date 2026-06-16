## Goal

Add a new page to the app that contains a polished, under-5-minute presenter script for the uploaded *GlobalData — Connected Intelligence for Consumer Brands* deck (14 slides). The script is the deliverable — readable on screen, printable, and timed.

## Page

- **Route:** `/presenter-script` (new) — added in `src/App.tsx`.
- **File:** `src/pages/PresenterScript.tsx`.
- **Optional:** small link/button on `/` (Index) so it's discoverable. Won't disturb the Consumer Journey deck routing.

## Layout

A single-column reading view, max-width ~880px, centered, generous line-height. Comply365 blue accents (existing semantic tokens — no hardcoded colors).

Top header:
- Eyebrow: "Presenter Script"
- Title: "Connected Intelligence for Consumer Brands"
- Meta strip: `~4 min 50 sec · ~700 words · 14 slides · British male voice` and a "Print" button (`window.print()`).

Body: 14 numbered sections, one per slide. Each section:
- Slide number + slide title (e.g. `Slide 03 — You're under more pressure than ever`)
- Approximate timing (e.g. `~0:35`)
- The spoken script (2–4 short paragraphs, second person, "Empathetic Advisor" tone, UK spelling)
- Subtle cue line in muted text (e.g. *Cue: advance after "Sound familiar?"*)

Print styles: hide nav/buttons, force black-on-white, page-break between slides.

## Script (target ~690 words, ~4:50 at 145 wpm)

Word budget is allocated so the total stays under 5 min. Tone matches existing `consumerJourneyNarration.ts` — second person, British spelling, no jargon, no GlobalData logo references in the script body.

1. **Title (0:00)** ~25w — Hook: "a new way of working."
2. **Trust strip (0:10)** ~25w — 8 of 10 FMCG, 95% GDP, 40 years.
3. **Pressure (0:20)** ~50w — Four pressures, "picture your Monday."
4. **Monday inbox (0:40)** ~55w — Seven emails, one opportunity, who do you trust.
5. **Seven signals (1:05)** ~55w — Same question, seven conflicting answers; 60/10/12wk stat.
6. **The cost (1:30)** ~70w — £40M line lost, £63M at risk, personal cost.
7. **One Lens (2:00)** ~70w — Six people, six solutions, Ava connecting them.
8. **Connected decision (2:30)** ~75w — SE Asia walkthrough: 92, $2.1B, 3/5, 2/3.
9. **Teams transformed (3:00)** ~55w — 10% → 75% strategy, 7.5× time, 2× launch success.
10. **Maturity journey (3:20)** ~55w — Fragmented → Connected → Optimised → Predictive.
11. **Proof (3:45)** ~45w — 70% faster, 3× decisions, 2× launches, VP quote.
12. **Why not DIY (4:05)** ~55w — 18 months vs 90 days, 14 contracts vs 1.
13. **CTA (4:30)** ~45w — Three next steps: discovery, assessment, POC.
14. **Thank you (4:50)** ~10w — Soft close, invite questions.

Total ≈ 690 words → ~4:45 spoken at a relaxed pace. Comfortable buffer under 5 minutes.

I'll write the full prose in the page file — every section is final spoken copy, not bullets.

## Out of scope

- No narration audio generation (existing `consumerJourneyNarration.ts` already covers a different deck; this is a static script page).
- No edits to existing decks, PPTX exporters, or Google Slides exporter.
- No new memory entries — this is a one-off reference page.

## QA

- Open `/presenter-script`, verify layout reads cleanly at 1002px and at desktop widths.
- `Cmd+P` preview: confirm slide sections page-break correctly and chrome is hidden.
- Word count check in-file comment so it can be re-tuned later.
