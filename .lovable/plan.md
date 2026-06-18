
# Refresh Presenter Script + Add Slide Copy Updates

Update the `/presenter-script` page so it holds two sections you can read and copy from:

## 1. Refreshed presenter script (14 sections, ~5 min)
Rewrite to apply the agreed fixes:
- Sync persona names everywhere: **Sarah, James, Priya, Marcus, Elena, David** (remove Chloe/Sebastian).
- Lock counts: **5 solutions + Ava (AI layer) + David's procurement outcome**.
- Sharper open (slide 01): "Stop reconciling data. Start running the category."
- New thesis on slide 02: "The brands that win don't have more data. They've changed how they work."
- Slide 03 bridge: "This isn't a data problem. It's an operating-model problem."
- Slide 04 ribbon language: "41 minutes, 7 unread."
- Slide 05 trimmed (~30% shorter) so slide 06 (cost) gets oxygen.
- Slide 08 verdict: "GO. Validated in 47 minutes."
- Slide 12 (DIY): "Integration connects pipes. We connect meaning. You're not building it — you're switching it on."
- Slide 13 CTA: "Three ways to start… Your competitors aren't waiting for clarity. They bought it."
- Add "Beat" cues at slides 03, 06, 13.

## 2. New "Slide copy updates" section (paste-ready)
Below the script, render a second section listing each slide's recommended copy changes as before/after blocks, so you can copy and paste straight into the live deck. Includes a "Number discipline" lock-list at the top:
- 5 solutions · 1 AI layer (Ava) · 1 procurement outcome
- 4 maturity stages (Fragmented → Connected → Optimised → Predictive)
- 90 days · 8 of top 10 · 95% global GDP · 40 years
- Personas: Sarah, James, Priya, Marcus, Elena, David

Covers slides 00–12 with field-level edits (subtitle, bridge, hero stat, footer, etc.).

## Files
- `src/pages/PresenterScript.tsx` — full rewrite: refreshed `slides` array + new `copyChanges` data + a second rendered section with before/after cards (line-through "before", highlighted "after"). Print styles preserved.

## Out of scope
- No changes to the live deck components, narration audio, PPTX/Google Slides exporters, or memory. The deck slides are not edited — only the copy page is updated so you can paste into the deck yourself.
