
## Goal
Fix narration-to-animation synchronization so that when the narration begins describing the next stage, the visual (curve/pyramid) advances at that moment (no longer ~20% ahead).

## What’s happening now (root cause)
- The stage switching logic uses `progress` which is time-based (`currentTime / duration * 100`) from the audio player.
- The current `stageTimings` values were derived from rough script-position estimates (character-based), not from time pacing.
- Text-to-speech introduces variable pacing (pauses at line breaks, punctuation, emphasis), so “percent of script text” ≠ “percent of spoken audio time”.
- Result: the UI switches stages earlier than the narration reaches that stage.

## Solution approach (robust, “spot on”)
Replace hardcoded `stageTimings` with **script-derived timing markers** computed at runtime using:
1) The actual narration script for that slide (already available via `getGlobalDataNarration(slideId)`).
2) A set of stage “marker phrases” (the exact substrings that introduce each stage).
3) A **weighted-duration estimator** that better approximates spoken time by assigning extra weight to pauses (newlines, periods, em dashes, etc.).
4) A small configurable “safety lag” (optional, ~1–2%) so the animation triggers just as the phrase begins (not before).

This makes timings automatically adjust whenever the script changes, preventing future drift.

---

## Files to update
### 1) `src/components/globaldata-slides/GDSlide7MaturityCurve.tsx` (Slide 8 UI)
#### Changes
- Import the script:
  - `import { getGlobalDataNarration } from "@/data/globalDataNarration";`
- Replace the hardcoded `stageTimings` constant with a computed one:
  - Get script from `getGlobalDataNarration(7)` (this slide’s narration id is 7).
  - Define marker phrases for each stage in order, matching the script exactly:
    - Stage 1: `"At stage one,"`
    - Stage 2: `"At stage two,"`
    - Stage 3: `"Stage three changes everything."`
    - Stage 4: `"Stage four embeds intelligence into action."`
    - Stage 5: `"And stage five—predictive."`
  - Compute `startPercent` for each marker using a weighted estimator.
  - Apply a slight lag (example: `+1.5%`) to stage 2–5 to ensure the switch happens as the narration starts the line (not ahead). Stage 1 typically stays near the beginning and may not need lag.

#### Implementation detail (estimator)
Add a small helper inside the file (or extracted to a shared util if preferred later):
- `computeWeightedProgressIndex(script: string, index: number): number`
- `computeStageTimingsFromScript(script: string, markers: {stage:number, phrase:string}[]): {stage:number, startPercent:number}[]`

Weighting proposal (tunable, but a strong starting point):
- Base weight per character: `1`
- Additional pause weights:
  - `\n` newline: `+35` (big pause)
  - `.` `!` `?`: `+18`
  - `,` `;` `:`: `+8`
  - em dash `—` / dash `-`: `+10`
This doesn’t need to be perfect; it just needs to correlate better with TTS pacing than raw character count.

Fallback behavior:
- If any marker phrase can’t be found (script edited), fall back to the last known-good hardcoded timings, and log a warning in dev console.

---

### 2) `src/components/globaldata-slides/GDSlide6ValuePyramid.tsx` (Slide 7 Pyramid UI)
The user mentioned “pyramid” as well, so we should apply the same fix to prevent drift there too.

#### Changes
- Import `getGlobalDataNarration` and compute `stageTimings` for slideId `6` (the pyramid narration).
- Marker phrases for each stage in that script:
  - Stage 1: `"At the base:"`
  - Stage 2: `"Stage two:"`
  - Stage 3: `"Stage three:"`
  - Stage 4: `"Stage four:"`
  - Stage 5: `"And at the apex:"`
- Use the same weighted estimator and same small lag (stage 2–5).

This ensures both:
- Slide 7 pyramid advances exactly when each stage starts being described.
- Slide 8 curve advances exactly when each stage starts being described.

---

## Optional polish (recommended)
### A) Make “Optimised/Optimized” consistent with the narration
- The narration uses “Operational Intelligence” / “Optimised” conventions elsewhere.
- In `GDSlide7MaturityCurve.tsx`, the labels currently show “Optimized”.
- We can adjust the stage 4 label to “Optimised” (UK spelling) to match the rest of the deck conventions, without changing any logic.

### B) Debug overlay (temporary, dev-only)
Add a small dev-only overlay on Slide 8 that shows:
- Current `progress`
- Current computed `startPercent` thresholds
- Active stage
This makes future fine-tuning fast. (Can be removed after validation.)

---

## Validation steps (what you’ll test)
1) Go to Slide 7 (pyramid) and play narration:
   - Confirm the pyramid changes stage exactly as the narration transitions: “At the base…”, “Stage two…”, etc.
2) Go to Slide 8 (curve) and play narration:
   - Confirm stage changes happen exactly as the narration says: “At stage one…”, “At stage two…”, etc.
   - Confirm the animation stays on Stage 5 during the “hidden cost / where teams spend time” section (since that’s a conclusion, not a new stage).
3) If any stage still feels early/late:
   - Adjust only the small lag constant (e.g., from `1.5%` to `2.5%`) rather than editing five separate numbers again.

---

## Why this will fix the “20% ahead” issue
- The mismatch is caused by TTS timing (pauses and emphasis) not matching raw script length.
- Weighting newlines and punctuation pulls the computed thresholds later (where the spoken audio actually is).
- Using marker phrases means the visual changes at the exact conceptual transition points in the narration, and remains stable as you continue iterating the script.

