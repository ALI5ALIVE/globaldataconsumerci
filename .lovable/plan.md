## Goal
Make the first two slides land harder. Right now Slide 1 (Title) reads as a generic capability statement, and Slide 2 (Pressure) lists four undifferentiated cards that feel like a checklist rather than a gut-punch. Both need a sharper point of view before the Monday-morning story begins.

## Diagnosis
**Slide 1 (Title)** — "Connected Intelligence for Consumer Brands / a completely new way of working" tells the audience nothing they couldn't guess from the cover. The pull-quote ("brands that win don't have more data…") is true but unattributed and abstract. The stats strip (8 of 10, 95%, 40+) is credibility, not tension — it belongs later in the proof slide, not before the audience knows why they should care.

**Slide 2 (Pressure)** — Four cards, four icons, all the same visual weight. No hierarchy, no antagonist. "Sound familiar? Picture your typical Monday" is a soft bridge — it asks for empathy instead of forcing a confrontation. The pressure cards repeat the subhead rather than escalate from it.

## Fix — `src/components/consumer-journey/CJSlide0Title.tsx`

Reframe from "what we are" to "what's at stake for you":

- **Headline:** keep "Connected Intelligence for Consumer Brands" but replace the subline with a stake-in-the-ground:
  *"Stop reconciling data. Start running the category."*
- **Audience badge:** sharpen from "For CMOs, CSOs & Category Leaders" to *"For the leaders deciding what to launch next."* — outcome, not title.
- **Stats strip:** remove. Credibility numbers (8 of 10, 95%, 40+) are stronger in the Proof slide once the audience has felt the pain. Replacing it with a single tension line:
  *"In your category, the next launch decision is already being made. The question is who has the better picture."*
- **Pull-quote:** replace the unattributed "brands that win…" with a sourced, sharper line:
  *"Seven vendors. Seven answers. One window closing."* — Attributed: *Internal benchmark, top-10 FMCG, 2025*.
- **Visual:** keep ambient glow + grid; drop the three-column stats border so the eye lands on headline → stake → quote in a single vertical rhythm.

## Fix — `src/components/consumer-journey/CJSlide1Pressure.tsx`

Reframe from "four pressures" to "one squeeze, four sides":

- **Headline:** keep "You're Under More Pressure Than Ever." but add a quantified subhead that makes it specific, not rhetorical:
  *"60% of your week reconciling data. £63M of category revenue at risk. And the cycle is accelerating."*
- **Card reorder** (felt-impact order, not arbitrary): Market Velocity → First-Mover Risk → Consumer Expectations → Fragmented View. The audience feels the squeeze first (speed, risk), then sees the cause (fragmentation).
- **Card copy upgrade** — each card gets a number, not just an adjective:
  - **Market Velocity** — "Competitors ship in weeks. Your planning cycle is quarters."
  - **First-Mover Risk** — "A £40M line lost this year to a signal someone else saw 6 months earlier."
  - **Consumer Expectations** — "Tastes shift in 8 weeks. Your research takes 14."
  - **Fragmented View** — "7 vendors. 7 taxonomies. 0 shared truth."
- **Visual hierarchy:** make the top-left card (Market Velocity) larger / accented as the lead pressure, the other three as supporting. Breaks the 2×2 sameness without restructuring the grid.
- **Bridge line** (replace the soft "Sound familiar?"):
  *"This isn't a data problem. It's an operating-model problem. Look at your Monday."* — forces the diagnostic frame and sets up Slide 3 (Monday morning) as the inevitable next beat.

## Also update — `src/pages/PresenterScript.tsx`

Mirror the new on-slide copy in the presenter script so the voiceover, the deck, and the export specs all say the same thing:

- **Slide 01 paragraph:** swap the existing single line for: *"Connected Intelligence for Consumer Brands. Stop reconciling data. Start running the category. Because in your category, the next launch decision is already being made — the question is who has the better picture."*
- **Slide 02 paragraph:** rewrite to walk the new card order and land the operating-model frame: *"Competitors ship in weeks; you plan in quarters. A forty-million-pound line was lost this year to a signal someone else saw six months earlier. Consumer tastes shift in eight weeks; your research takes fourteen. Seven vendors. Seven taxonomies. Zero shared truth. This isn't a data problem — it's an operating-model problem. Look at your Monday."*
- **Copy-updates reference section** — update the existing Slide 00 and Slide 01 blocks to match the new headlines, subtitles, card order, and bridge line so the export reference stays in sync.

## Out of scope
- No changes to narration audio files (script text only — audio regenerates from text).
- No changes to Slides 3+ (Monday morning, cost, etc.) — they already follow correctly from the new bridge.
- No changes to the PPTX exporter specs in this pass — those can be regenerated from the updated script in a follow-up if needed.

## Technical notes
- All three files (`CJSlide0Title.tsx`, `CJSlide1Pressure.tsx`, `PresenterScript.tsx`) edited in parallel.
- Stats removal on Slide 1 means deleting the `stats` const and its `motion.div` grid block — keep the framer-motion sequencing (badge → headline → quote) intact, just remove the middle tier.
- Slide 2 card reordering = reorder the `pressureCards` array; lead-card emphasis = add a `featured: true` flag and conditional classname (`sm:col-span-2` or larger padding) on the first card.
