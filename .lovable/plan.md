
Goal: make each “Why It Exists” card line up perfectly with its corresponding “Quantified Impact” card (same height per row), not just “roughly similar”.

Why it’s still misaligned
- Right now we render two independent vertical stacks:
  - Left: `rootCauses.map(...)` (4 cards)
  - Right: `impacts.map(...)` (4 cards)
- Even with the same `min-h-[84px]`, any card that wraps to an extra line becomes taller, and because the stacks are independent, the “row heights” don’t match across columns.
- `min-h` only sets a floor, not a shared row height between left and right.

Implementation approach (robust fix)
- Render the content as 4 paired rows (one dimension per row), where each row contains:
  - Left cell: the root cause card
  - Right cell: the impact card
- Use a grid row container with `items-stretch` so both cards in the same row stretch to the same height automatically.
- Add `h-full` to both cards so they fill the row height.
- Keep current “Why It Exists” and “Quantified Impact” headings, but structure the content beneath them so the row pairing is explicit.

Exact changes (single file)
File: `src/components/globaldata-slides/GDSlide2IntelligenceGap.tsx`

1) Create a paired data structure
- Replace the two separate arrays rendering with a single mapping that pairs by index:
  - `const pairs = rootCauses.map((cause, i) => ({ cause, impact: impacts[i] }))`
- (Optional safety) If `impacts[i]` is undefined, skip rendering that row.

2) Replace the current two independent stacks with a paired grid
Current structure:
- Left column: `rootCauses.map(...)`
- Right column: `impacts.map(...)`

New structure (conceptual):
- A 2-column header row (Why / Impact)
- Then a set of 4 rows:
  - Each row is a 2-column grid on `lg+` so cards are side-by-side
  - On small screens it can become a single column (cause then impact) per dimension, which also preserves pairing

Recommended Tailwind layout:
- Outer: keep `flex-1` region but swap the inner `lg:grid-cols-2` block to something like:
  - Header row: `grid grid-cols-1 lg:grid-cols-2 gap-6`
  - Rows wrapper: `space-y-3` (or `grid gap-3`)
  - Each row: `grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch`
- Card classes:
  - Add `h-full` to both card containers
  - Keep `p-4` consistent
  - Keep `min-h-[84px]` as a baseline for smaller screens, but the key is `items-stretch` + `h-full`

3) Make both cards use compatible vertical alignment
- Root cause card currently uses `items-start`; impact card uses `items-center`.
- Once both stretch to the same height, mismatched vertical alignment can still “feel” off even if heights match.
- Update impact card from `items-center` to `items-start` (or vice versa) so the content blocks sit at the same top baseline.
  - Recommended: use `items-start` on both, since the root cause card is multi-line and reads better top-aligned.

4) Verify in the slide deck route
- Confirm on the actual slide deck route (not `/`), because the screenshot tool showed a 404 on `/#/`.
- Check alignment at typical presentation widths (1280–1600px), and ensure no row shifts when text wraps.

Acceptance criteria
- On desktop (`lg+`):
  - Each dimension displays as a left card + right card on the same row
  - The two cards in each row have identical height (pixel-perfect)
  - The set of four rows is evenly stacked with consistent spacing
- On mobile:
  - Each dimension stays grouped (cause directly followed by its impact)

Risks / edge cases
- If copy changes cause an extreme wrap (e.g., 5+ lines), that row will grow taller; with the paired-row grid, both sides will still match height, which is the desired behavior.
- If the team prefers the mobile layout to remain “all causes then all impacts”, we can keep the old mobile behavior, but it requires more complex responsive ordering; the paired approach is the cleanest for guaranteed alignment.

Scope of work
- Only `src/components/globaldata-slides/GDSlide2IntelligenceGap.tsx` changes.
- No backend changes, no dependency changes.
