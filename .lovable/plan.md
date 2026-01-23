
Goal
- Fix the right-side “copy boxes” on the pyramid so their vertical order matches the intended maturity order:
  - Stage 1 (Fragmented) at the bottom
  - Stage 5 (Predictive) at the top
- Ensure the AI readiness labels (AI Blocked / AI Enabled / AI Optimized) align with the same numbering (they already do in logic, but we’ll validate after the visual fix).

What I found in the code (root cause)
- In `src/components/globaldata-slides/GDPyramid3D.tsx`, the pyramid geometry has already been corrected:
  - `layerBounds`: Level 1 is base (bottom), Level 5 is apex (top)
  - Rendering order: `[5, 4, 3, 1]` (with Level 2 silos rendered separately)
- But the right-side label box placement is still inverted:
  - `labelPositions` currently maps **level 1 to the top (y=140)** and **level 5 to the bottom (y=976)**.
  - That causes the copy boxes to appear reversed even though the pyramid itself is correct.

Also found (secondary issue)
- The “Silos label (right side)” block (Level 2 / Managed) incorrectly uses `const colors = layerColors[4];` which will color the Stage 2 label like Stage 4. This adds to the “wrong mapping” feeling.

Implementation changes (small, targeted)
1) Fix the copy-box order by correcting `labelPositions` in `GDPyramid3D.tsx`
- Replace the current mapping:

  - `1 -> y 140`
  - `2 -> y 350`
  - `3 -> y 560`
  - `4 -> y 768`
  - `5 -> y 976`

- With the corrected mapping that matches “5 at top → 1 at bottom”:

  - `5 -> y 140`
  - `4 -> y 350`
  - `3 -> y 560`
  - `2 -> y 768`
  - `1 -> y 976`

- Note: Keep the same X values (lineEndX, labelX etc.) so layout stays consistent; only re-key the Y positions to the correct levels.

2) Fix Stage 2 (Managed / silos) label color reference in `GDPyramid3D.tsx`
- In the “Silos label (right side)” section, change:
  - `const colors = layerColors[4];`
  to:
  - `const colors = layerColors[2];`

3) Validate AI readiness labels are correct (no logic change expected)
- `src/components/globaldata-slides/GDDetailsPanel.tsx` currently maps:
  - levels 1–2 => AI Blocked
  - level 3 => AI Enabled
  - levels 4–5 => AI Optimized
- After fixing the copy box ordering, visually confirm:
  - Bottom stage (1 / Fragmented) shows AI Blocked
  - Middle stage (3 / Connected) shows AI Enabled
  - Top stages (4–5) show AI Optimized
- If anything still looks mismatched, the next likely culprit would be a mismatch between `layer.level` values passed into `GDPyramid3D` vs the intended stage, but `GDSlide6ValuePyramid.tsx` already has the correct `level` mapping (Fragmented=1 … Predictive=5), so this should resolve it.

Files to edit
- `src/components/globaldata-slides/GDPyramid3D.tsx`
  - Fix `labelPositions` mapping (primary fix)
  - Fix silo label `colors` reference (secondary fix)
- No edits expected, but will verify behavior visually:
  - `src/components/globaldata-slides/GDDetailsPanel.tsx`
  - `src/components/globaldata-slides/GDSlide6ValuePyramid.tsx`

Acceptance criteria (what you should see after)
- Right-side copy boxes (top to bottom) read: Predictive (5), Operational (4), Connected (3), Managed (2), Fragmented (1).
- Pyramid itself remains: Fragmented at base, Predictive at apex.
- AI readiness labels align with the corrected stage numbers:
  - Stages 1–2: AI Blocked
  - Stage 3: AI Enabled
  - Stages 4–5: AI Optimized
- Stage 2 (Managed) label styling uses Stage 2’s color (not Stage 4’s).
