## Goal
User has asked to put David back into the slide 07–08 voiceover. He was dropped earlier because the deck's persona slide names only five (Sarah, Chloe, Sebastian, Priya, Marcus). David is the **procurement / TCO outcome** — not a sixth intelligence solution, but the consolidation story that lands when the other five are unified. He already lives in the `personas` array in `ConsumerJourneyDeck.tsx` (Head of Procurement, 14→1 suppliers, 40% TCO down). Re-add him in that role so the script matches what the deck actually shows.

## Fix — `src/pages/PresenterScript.tsx`

**Slide 07 — value walk (add David as the closing procurement beat):**
- After Marcus's line, add: *"And David in Procurement stops managing fourteen overlapping contracts — one platform, one contract, total cost of ownership down forty percent."*
- Keep the close line ("One platform. One source of truth…") unchanged.

**Slide 08 — decision in motion (add David as the commercial close to the Friday answer):**
- Extend the persona-answer paragraph with: *"And David — one contract behind it, not fourteen; the answer costs less than last quarter's reconciliation."*
- Keep the audit-trail paragraph and old-way/new-way close unchanged.

**Slide 09 — anchor stats (add David line for consistency):**
- After Marcus, add: *"David stops chasing renewals across fourteen vendors."*

## Also update — `src/pages/PresenterScript.tsx` copy reference + number discipline

- **Number discipline block**: keep the "1 procurement outcome — not counted as a solution" line; update the Personas line to: *"Personas: Sarah (Strategy) · Chloe (Market) · Sebastian (Competitive) · Priya (Innovation) · Marcus (Commercial) · David (Procurement outcome)"* — flagged explicitly as the procurement outcome, not a sixth solution.

## Memory update
- Update `mem://style/persona-roster` to note: the deck's persona slide shows 5 intelligence personas; David is the **procurement-outcome** persona referenced in the value-walk and Friday-decision scripts, not a sixth solution.
- Update the Core line in `mem://index.md` from "5 only — never James/Elena/David" to "5 intelligence personas + David as procurement outcome — never James/Elena."

## Out of scope
- No edits to slide visual components (David is voiceover only on 07/08/09; the persona slide stays at five).
- No changes to slides 1, 2, 10, 11, 12, 13, 14.
