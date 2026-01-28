
## Goal
1) On **Slide 8 (“The Return”)**: the compounding curve (5 bars) must be visible immediately on load (never hidden) and its “phase walk” must line up with the narration cues on that slide.
2) Remove any remaining **annotation / calibration overlays**.
3) Ensure slide/page numbering is **1-based with Title = 1** (not 00), consistently across the deck UI.

---

## What I found (current code)
### Slide 8 (src/components/globaldata-slides/GDSlide8ROI.tsx)
- The “Visual Compounding Chart” is already **always visible** (comment says “Always visible” and there is no `isVisible('compounding')` gating on the chart container).
- The **stage-bar animation logic was removed** in the last diff (no `stageBarTimings`, no `highlightedStage`), so the bars are static.
- The **pillar reveal timing markers** are currently: 22 / 48 / 68 / 85 (%). These may not match the slide 8 narration script’s “First / Second / Third / Key message” cadence.

### Slide 7 (“Your Roadmap”) narration vs animation
- Slide 7 has a 5-stage animation with hardcoded timings: 12 / 28 / 45 / 62 / 78.
- The Slide 7 narration script explicitly announces stages 1–5; Slide 8 narration does **not** announce stages by number, but it does have clear cue phrases (“First…”, “Second…”, “Third…”, “Here’s the key message…”).

### Slide numbering
- GlobalDataDeck’s header already shows `activeSlide + 1` (so it’s 1-based).
- However, Title slide renders **“00”** manually in GDSlide0Title, and other slides pass `slideNumber={7}`, `slideNumber={8}`, etc (0-based vs 1-based inconsistency at the bottom-right slide number).

---

## Implementation approach
### A) Make Slide 8 stage-walk animation align to its narration (without adding any overlays)
Instead of guessing percentages, we’ll compute the “phase timing” from the actual narration script text for Slide 8 so it stays aligned even if the script changes.

**Key idea:** Use `getGlobalDataNarration(8)` (already available) inside `GDSlide8ROI.tsx` to:
- Read the narration script
- Find the character index of cue phrases:
  - “First,”
  - “Second,”
  - “Third,”
  - “Here’s the key message”
- Convert those character indices into approximate progress percentages (index / script.length * 100)
- Use those computed percentages to drive both:
  1) the ROI pillar reveal steps (pillar1/pillar2/pillar3/compounding)
  2) the stage-bar “walk” (Stage 1→5) in a way that matches the narration beats

**Why this is better than hardcoding:** Your narration is generated audio from script; using script-relative positions is the closest reliable proxy we can implement without audio word timestamps.

#### Slide 8 “phase walk” mapping (aligned to narration cues)
Even though Slide 8 doesn’t say “Stage 1…Stage 2…”, you asked for the walk to align “when each stage is announced.” On Slide 8 the closest “announcements” are the 4 narrated beats:
- Intro line (setup)
- First pillar
- Second pillar
- Third pillar
- Key message (compounding)

So we’ll map the 5 bars to those beats:
- Stage 1: at start (or very early once narration begins)
- Stage 2: at “First, speed to decision…”
- Stage 3: at “Second, better growth outcomes…”
- Stage 4: at “Third, lower cost of intelligence…”
- Stage 5: at “Here’s the key message…”

This produces a clear left-to-right walk that *actually follows what the narrator is saying on Slide 8*, while keeping Slide 7 as the true “stage-by-stage” narration.

#### Visual behavior rules (Slide 8 bars)
- Before narration starts:
  - Bars visible (per your requirement: “curve shows as soon as the user lands”)
  - Either:
    - Option 1 (recommended): show all bars in the current subtle graduated opacity (current behavior), so the slide never looks empty.
- When narration plays:
  - A `highlightedStage` (1–5) advances at the cue boundaries.
  - Past stages remain “lit”, future stages remain dim.
  - Current stage gets a glow/ring/scale to show the active phase.
- When narration completes:
  - All 5 bars end fully lit (or keep the graduated look—your preference; I’ll implement “fully lit” to communicate completion).

No DEV overlay will be added back.

**Files to update for A:**
- `src/components/globaldata-slides/GDSlide8ROI.tsx`
  - Re-introduce:
    - `highlightedStage` state
    - `stageBarTimings` derived from script cue phrases (computed)
  - Update the `useEffect` to:
    - Continue controlling pillar steps as today
    - Also advance `highlightedStage` based on computed timings when `isPlaying && progress > 0`
  - Update bar rendering to use highlight styles again (ring/glow/opacity/scale).

---

### B) Ensure Slide 7 (“Your Roadmap”) remains aligned to narration (and remove annotations)
Slide 7 currently uses hardcoded percent markers. We can apply the same “derive from script cues” approach, because Slide 7 narration includes explicit stage announcements.

We’ll compute stage timing boundaries from Slide 7 script using cue phrases:
- “At stage one”
- “By stage two”
- “Stage three”
- “Stage four”
- “And stage five”

Then set `activeStage` based on those computed percentages. This should noticeably improve alignment because it tracks the script structure rather than guessed percentages.

Also: remove the DEV calibration overlay from Slide 7 to meet the “no annotations” expectation (even if it’s DEV-only, you clearly don’t want it appearing while you review).

**Files to update for B:**
- `src/components/globaldata-slides/GDSlide7MaturityCurve.tsx`
  - Remove the DEV calibration overlay block.
  - Replace hardcoded `stageTimings` with computed timings derived from `getGlobalDataNarration(7).script`.
  - Keep existing behavior: don’t animate until narration starts; keep click-to-select stage.

---

### C) Fix slide/page numbering to start with Title = 1
We’ll make the bottom-right slide numbers match the deck header (which is already 1-based).

**Changes:**
1) Title slide bottom-right number:
   - Change from “00” to “01”
2) For slides that use `GDSlideContainer` with `slideNumber`, shift by +1:
   - SlideId 1 (“Market Pressure”) should show “02”
   - …
   - SlideId 9 should show “10”

**Files to update for C:**
- `src/components/globaldata-slides/GDSlide0Title.tsx` (manual “00” → “01”)
- All GlobalData slide components that pass `slideNumber={...}` to `GDSlideContainer`:
  - `GDSlide1GrowthReality.tsx` … `GDSlide9WhyGlobalData.tsx`
  - Specifically confirm `GDSlide7MaturityCurve.tsx` and `GDSlide8ROI.tsx` update to 8 and 9 respectively (since they currently show 7 and 8).

Note: This does not change narration slide IDs (those remain 0–9), so audio + progress tracking won’t break.

---

## Edge cases / acceptance criteria
### Slide 8
- On initial load (not playing), the curve is visible (it already is) and looks intentional (not “empty”).
- Press Play:
  - Pillar 1 appears when narrator says “First…”
  - Pillar 2 appears at “Second…”
  - Pillar 3 appears at “Third…”
  - The key message box appears at “Here’s the key message…”
  - Stage bars “walk” to the next stage at each of those cue moments.
- No debug overlays appear.

### Slide 7
- Press Play:
  - Stage highlight changes exactly when each stage is introduced in narration.
- No debug overlays appear.

### Numbering
- Title shows “01”
- Last slide shows “10”
- Header “x / 10” remains correct.

---

## How we’ll verify (quick test checklist)
1) Open the deck, confirm Title shows “01” bottom-right and header shows “1 / 10”.
2) Go to “Your Roadmap” and play narration: confirm stage changes happen right at the “stage one…stage five…” lines.
3) Go to “The Return” and play narration: confirm pillars and the bar-walk advance exactly at “First/Second/Third/Here’s the key message”.

---

## Notes / small naming consistency check (optional but recommended)
In Slide 7, Stage 4 label in the curve uses “Optimized” (American spelling) in the short labels map, while your newer naming elsewhere uses “Optimised”. If you want strict consistency, we should update that label too—but I will only do this if you confirm, because it’s copy-level and might be intentional for that slide.
