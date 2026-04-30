
# Goal

Make the **Editable PPTX** export match each on-screen slide as closely as the PPTX format allows — same copy, same structure, same visual hierarchy, same brand chrome. Continue with **Strategy B (native redraw)** on the GlobalData master.

Below is a slide-by-slide audit of what currently ships in the spec vs. what the live React slide actually renders, with the fix to apply.

---

# Audit & Fixes (per slide)

### Slide 0 — Title
- **Live:** Audience badge "For CMOs, CSOs & Category Leaders" → 2-line gradient headline "Connected Intelligence / for Consumer Brands" → sub "What you're about to see isn't just better data… a completely new way of working." → 3 stats (8 of 10 / 95% / 40+) → italic quote "The brands that win don't have more data. They have connected intelligence." → eyebrow "A new way of working".
- **Spec gap:** Generic title; missing badge, two-tone headline, italic closing quote.
- **Fix:** Rebuild on navy hero with white Q-mark; badge pill, large two-line headline (accent color on second line), 3-column stats strip, italic pull-quote band at bottom.

### Slide 1 — The Pressure
- **Live:** Title "You're Under More Pressure Than Ever." (destructive accent on "Than Ever."), sub "Your consumers are changing faster than you can track them. And every missed signal is a missed opportunity." **4 cards** (Consumer Expectations, Market Velocity, Fragmented View, First-Mover Risk) in a 2×2, each with icon + title + 1-line desc. Bridge line: "Sound familiar? Picture your typical Monday."
- **Spec gap:** Only 3 cards, wrong titles/copy, no bridge line, no 2-tone headline.
- **Fix:** 2×2 card grid with icon tiles (TrendingUp, Zap, Layers, Target), exact copy, italic bridge line below.

### Slide 2 — Monday Morning
- **Live:** Title "Your Monday Morning", sub "One opportunity. Seven opinions. Zero alignment." Inbox chrome (Inbox · 7 badge, search field, filter icon). 7 emails with **specific** sender/subject/time pairs (CEO, Head of Strategy, Finance/Market Intel, Competitive Intel, Innovation Lead, Commercial/Sales, Procurement). Footer italic: "One opportunity. Seven teams. Seven answers. Which one do you trust?"
- **Spec gap:** Sender names and subjects are wrong; missing inbox toolbar chrome and footer italic.
- **Fix:** Rebuild rows with exact sender/subject/time list; add toolbar bar with "Inbox 7" pill and a faux search field rectangle; italic footer caption.

### Slide 3 — Seven Sources
- **Live:** Title "Same Opportunity. Seven Conflicting Signals.", sub "Every source is telling you something different about plant-based protein." 7 vendor tiles, each with **icon + 2-line name + italic conflicting signal quote** (Mintel "Plant-based is peaking", Euromonitor "$1.4B TAM (or $2.1B?)", Innova "No significant moves", IDEO "Consumer fatigue detected", NielsenIQ "Retailer X is demanding it", Kantar "Trial is up, repeat is flat", Circana "Our test market grew 22%"). Stats pill (60% / 10% / 12 wks) inside a destructive-tinted band, plus italic caption "By the time you reconcile, someone else has launched."
- **Spec gap:** Vendor list wrong (uses Brandwatch/Gartner/Statista/Internal BI); no conflicting-signal quotes; no destructive band styling around stats.
- **Fix:** Replace vendors and add italic signal text per tile; render stats as a single pill-shaped card with vertical dividers; keep red-tinted fill.

### Slide 4 — The Cost
- **Live:** Two columns (Business / Personal), but each column is a **stacked list of 3 mini-cards** with icon, bold stat headline, and detail paragraph — not a single big number. Business cards: "£40M Line — Lost", "12 Weeks to Align", "The Launch That Flopped". Personal cards: "Your Board Questioned the Numbers — Again", "3 Days Building a Deck, Not Strategy", "The Call You Didn't Make". An animated £63M accumulator runs across the bottom.
- **Spec gap:** Currently shows two big single-stat panels (£63M / 60%) + bullet lists. Wrong structure.
- **Fix:** Replace with two columns × 3 mini-cards each, exact copy and per-card accent color (red/amber/orange on left, violet/sky/emerald on right). Add a footer band showing the accumulated total "£63M" with caption "Revenue at risk this year".

### Slide 5 — One Lens (Ava Hub)
- **Live:** Central Ava AI hub with 5 spokes to the 5 solutions, each spoke labelled with a persona name (Sarah/James/Priya/Marcus/Elena) and unlocked-actions chips between personas.
- **Spec gap:** Color palette updated but layout still generic — needs the hub-and-spoke structure with persona labels.
- **Fix:** Native shapes — center ellipse "Ava" in navy, 5 outer rounded-rect persona cards positioned on a circle (top, two upper-sides, two lower-sides), 5 connector lines from hub to each card (drawn as thin rotated rects). Each card: persona name + role + solution name. Add a small caption strip below describing cross-persona unlocks.

### Slide 6 — Connected Decision
- **Live:** Boardroom "GO" verdict with 5 enriched persona dashboards in a row (each persona's mini metrics).
- **Spec gap:** Generic stat tiles only.
- **Fix:** Top band "GO" verdict card with green accent, then 5 persona mini-dashboards in a row (avatar circle with initial + name/role + 3 stacked KPI rows from the persona `metrics` array).

### Slide 7 — Teams Transformed
- **Live:** Three large stat tiles (75% / Hours / 2×) + a navy retention card with charSpacing eyebrow.
- **Spec status:** Already close. **Fix:** Verify exact eyebrow/copy "AND THE TALENT YOU FOUGHT TO HIRE — STAYS." and the longer paragraph below match the live component (re-pull copy from `CPSlide7TeamsTransformed`).

### Slide 8 — Maturity Journey
- **Live:** **4-stage** SVG curve (Fragmented → Connected → Optimised → Predictive) with Connected marked as **"Gateway"** pill. Each stage has tagline, decision-speed badge, time-allocation bar (recon/analysis/strategy %), bullets, and an italic insight quote.
- **Spec gap:** Renders 5 stages (Fragmented/Managed/Connected/Optimised/Predictive); summary boxes don't include time-allocation bars or insight quotes.
- **Fix:** Switch to 4 stages matching live data. Draw curve as ascending dotted line with 4 colored circles, "GATEWAY" pill on Connected. Below, 4 cards each with: stage name + tagline, decision-speed pill, mini stacked bar (3 segments coloured for recon/analysis/strategy with %), 3 bullets, italic insight at the bottom.

### Slide 9 — Proof
- **Live:** Stats grid using GD data-viz palette (already partly applied).
- **Fix:** Re-verify stat values, labels and subcopy match `CJSlideProof` exactly.

### Slide 10 — Why Not DIY
- **Live:** Eyebrow "The #1 Objection", headline `"Can't we just integrate what we have?"` with "integrate" in destructive. Two columns each with 4 icon rows: each row has icon + bold label + detail line. DIY: 18+ months / 14 contracts / No shared taxonomy / No cross-pollination. Connected: 90-day deployment / 1 platform 1 contract / One consumer taxonomy / Intelligence flows.
- **Spec gap:** Has 5 generic check/x rows, wrong copy and no icons per row.
- **Fix:** Title block with eyebrow + quoted headline, then 2 columns × 4 icon rows with exact copy. Use ✕ icon col + red tint on left, ✓ + primary tint on right.

### Slide 11 — CTA
- **Live:** Headline "Your competitors already see the full picture." + sub "Let's make sure you do too." **3** CTA cards (30-min Discovery Call / Intelligence Maturity Assessment / 90-Day Pilot) each with icon, title, description, button label.
- **Spec gap:** Only 2 CTAs (Discovery Session + Intelligence Audit) and wrong headline; testimonial band content also from old script.
- **Fix:** Headline + sub block, 3-column CTA cards (icon tile + bold title + description + pill button label). Drop the VP testimonial band (not on live slide) or replace with the social-proof badge actually shown.

---

# Cross-Cutting Improvements

1. **Single source of truth for copy.** Add `src/exporters/pptx/specs/consumerJourney/_copy.ts` that re-imports the same arrays already declared in the React components (where practical) or mirrors them as exported constants. Eliminates copy drift.
2. **Reusable native primitives** in `pptxBrand.ts`:
   - `addIconTile(slide, x, y, w, h, {iconCharOrLetter, color})` — colored rounded-rect with a centered glyph (use Unicode geometric shapes since real Lucide icons can't ship in PPTX without bitmaps).
   - `addPillBadge(slide, …)` — for "GATEWAY", "UNREAD", eyebrow pills.
   - `addSegmentedBar(slide, x, y, w, h, segments[])` — for time-allocation bars on Slide 8.
   - `addPersonaMiniCard(slide, …)` — for Slides 5/6.
3. **Icon strategy.** Lucide icons are SVG, not embeddable directly. Two options:
   - **(a)** Use Unicode glyphs in colored circles (✉, ⚡, ▲, ◆, $, ⏱) — zero asset overhead, ~80% recognisable.
   - **(b)** Pre-export the Lucide SVGs we use as small PNGs into `src/assets/pptx-icons/` and embed as base64. Higher fidelity, ~200KB to deck size.
   - Recommendation: **(a)** for v1, leave a hook to swap to (b) per-icon later.
4. **Brand chrome.** Keep the cream content master + navy title master we built. Add a small "Slide N / 12" footer left of `globaldata.com` so deck navigation matches the on-screen slide numbers shown by `CPSlideContainer`.
5. **QA loop.** After implementation, generate the PPTX, render every slide to JPG via LibreOffice + pdftoppm, and inspect each side-by-side with a screenshot of the live React slide. Iterate until each slide passes.

---

# Honest Limitations

Even after this rewrite, the editable PPTX **will not** reproduce:
- Animated counters and motion (frozen to final state).
- Gradient text and CSS blur glows (approximated with solid fills + soft shadows).
- Real Lucide SVG icons unless we pre-bake PNGs.
- Browser-rendered SVG curve smoothness on Slide 8 (PPTX has no bezier line shape — we approximate with a dotted curve of small ellipses).

Visual match target after this work: **~90%** for text-heavy slides (1, 2, 3, 4, 7, 9, 10, 11), **~75–80%** for diagram slides (5, 6, 8). Editable everywhere.

---

# Files to Edit

- `src/lib/pptxBrand.ts` — add `addIconTile`, `addPillBadge`, `addSegmentedBar`, `addPersonaMiniCard`.
- `src/exporters/pptx/specs/consumerJourney/_copy.ts` — **new**, shared copy arrays.
- `src/exporters/pptx/specs/consumerJourney/00-title.ts` … `11-cta.ts` — rewrite each per the audit above.
- `src/exporters/pptx/buildConsumerJourneyEditable.ts` — wire any new helpers; add slide-number footer.
- `.lovable/plan.md` — record approach.

# Optional follow-up (not in this pass)

- Pre-bake the 30-or-so Lucide icons we actually use into base64 PNGs and embed for true icon parity (Strategy A's main visual win, applied surgically).
