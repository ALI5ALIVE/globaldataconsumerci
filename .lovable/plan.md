
## What’s happening (root cause)
On Slide 9, the “bars” are technically being rendered with a height, but their **background style is invalid**, so they appear invisible and you only see the stage names.

In `GDSlide8ROI.tsx`, the bar background is currently set like this:

- `background: linear-gradient(to top, ${stage.color}, ${stage.color}cc)`

This worked when `stage.color` was a hex color (e.g. `#0066ff`), because `#0066ffcc` is valid hex-with-alpha.

But now `stage.color` is an HSL string (e.g. `hsl(0, 70%, 50%)`), and appending `cc` produces:
- `hsl(0, 70%, 50%)cc` which is **not valid CSS**, so the browser drops the background and the bar looks empty.

## Fix approach (safe + consistent)
We’ll stop trying to append `cc` and instead define bar colors using **HSLA** (HSL + alpha), which is valid and cross-browser reliable.

### 1) Update `stageConfig` to include two colors per stage
Instead of only `color`, we’ll store:
- `barFrom`: opaque color (alpha 1)
- `barTo`: same color but translucent (alpha ~0.25–0.35)
- keep a `labelColor` (or just reuse `barFrom`) for text

Example:
- Fragmented:
  - `barFrom: "hsla(0, 70%, 50%, 1)"`
  - `barTo: "hsla(0, 70%, 50%, 0.3)"`

### 2) Update the bar style to use the valid gradient
Replace:
- `linear-gradient(to top, ${stage.color}, ${stage.color}cc)`

With:
- `linear-gradient(to top, ${stage.barFrom}, ${stage.barTo})`

### 3) Keep the “value increases with maturity” behavior
We’ll preserve the increasing height logic:
- Stage 1 shortest → Stage 5 tallest  
So the chart visually communicates “more maturity = more value unlocked”.

### 4) Quick visual verification checklist (after implementation)
On Slide 9:
- You should see 5 colored bars (red, sky, teal, purple, gold)
- Each bar gets taller left → right
- Labels appear in the matching stage color
- The CTA stays in place above the chart

## Files to change
- `src/components/globaldata-slides/GDSlide8ROI.tsx`

## Technical notes (implementation detail)
- This fix is purely front-end styling (no backend work).
- HSLA is widely supported and avoids “hex alpha vs hsl alpha” pitfalls.
- This change also makes future palette adjustments safer (no string concatenation tricks).

## Estimated effort
- 5–10 minutes to implement + verify in preview
