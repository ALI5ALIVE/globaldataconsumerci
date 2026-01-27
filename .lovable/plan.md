
## Summary
The reason Level 5 (apex) is selecting Level 4 is very likely **not** the Level 5 click handler itself — it’s that the **Level 4 `<foreignObject>` hitbox is enormous and is rendered after Level 5**, so it sits “on top” in the SVG stacking order and intercepts the click. When you click the apex area, you’re actually clicking the invisible/overflowing Level 4 foreignObject, so `onLayerClick(4)` runs.

---

## What I found in the code (root cause)
In `src/components/globaldata-slides/GDPyramid3D.tsx`:

### 1) Layer 4 foreignObject is massively oversized
Layer 4 uses:
- `width = (rightX - leftX) * 11.2`
- `height = layerHeight * 12.8`
This makes the Layer 4 foreignObject extend far beyond the actual Layer 4 polygon — including into the apex region.

### 2) SVG stacking order makes it worse
SVG draws later elements on top. Your embedded illustrations render in this order:
1. Layer 5 foreignObject
2. Layer 4 foreignObject
3. Layer 3 foreignObject
4. Layer 1 foreignObject

So even though Layer 5 is “first”, Layer 4 is drawn after and therefore sits above it, capturing pointer events.

### 3) Why Level 4 wins even when clicking Level 5
Layer 4’s wrapper has:
- `onPointerDownCapture={() => onLayerClick(4)}`
So as soon as the pointer goes down anywhere inside that giant foreignObject rectangle, it sets Level 4.

---

## Implementation plan (safe + reliable)
We’ll fix this in `src/components/globaldata-slides/GDPyramid3D.tsx` with two complementary changes:

### A) Constrain Layer 4 foreignObject hitbox to the actual Layer 4 area
- Reduce Layer 4 `width` and `height` multipliers to values that stay inside the layer.
- Use a conservative sizing strategy similar to Layer 5 and Layer 1, for example:
  - `width = (rightX - leftX) * 0.9` (or 0.95)
  - `height = layerHeight * 0.9`
- Recompute offsets accordingly.

This ensures Layer 4 cannot “float” over the apex and steal clicks.

### B) Ensure Layer 5 foreignObject is on top in the DOM
Even after fixing Layer 4 sizing, we’ll also make the apex bulletproof by changing render order:
- Render Layer 5’s foreignObject *after* Layer 4’s foreignObject (i.e., move the Layer 5 block below the Layer 4 block).
- This guarantees the apex interactive area is topmost in SVG stacking order.

### C) Make Layer 5 selection robust across input types
- Add back `onPointerDownCapture={() => onLayerClick(5)}` to the Layer 5 wrapper (keep `onClick` too).
- Keep `pointer-events-none` on the inner decorative card, so the wrapper consistently receives the interaction.

This gives consistent behavior on:
- desktop mouse click
- trackpad click
- touchscreen taps

---

## How we will verify the fix
1. Go to Slide 6 (Value Pyramid).
2. Click the apex (Sparkles icon / Level 5 area).
   - Expected: details panel updates to **Stage 5 / PREDICTIVE**.
3. Click Level 4 just below the apex.
   - Expected: details panel updates to **Stage 4 / OPERATIONAL**.
4. Click Level 3, Level 2 silos, Level 1.
   - Expected: all continue to work as before.

---

## Notes / why this is the correct fix
- This addresses the real issue: **a huge invisible hitbox overlapping the apex**.
- It avoids hacky event-canceling and doesn’t break module interactions inside Level 4 (the gauges still remain clickable).
- Reordering the apex foreignObject makes Level 5 click behavior resilient even if we later tweak illustration sizing.

---

## Files to change
- `src/components/globaldata-slides/GDPyramid3D.tsx`
  - Adjust Layer 4 foreignObject sizing
  - Move Layer 5 foreignObject below Layer 4 in render order
  - Add `onPointerDownCapture` back to Layer 5 wrapper (keep `onClick`)

---

## Feature suggestions (optional next improvements)
1. Add keyboard navigation: Up/Down arrows move between stages 1–5.
2. Add a small “Stage 5” clickable label near the apex to reinforce affordance.
3. Add a subtle click “pulse” animation on the selected layer to confirm selection.
