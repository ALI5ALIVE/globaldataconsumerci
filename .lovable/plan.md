## Goal
Slide 08's persona-answer paragraph fires off six headline numbers ("Sarah — convergence ninety-two") with no context — the listener can't tell what the number measures, why it matters, or how it earns the GO verdict. Rewrite each persona beat so it carries: (1) the question that persona is answering, (2) the number, and (3) one clause of meaning. Keep the rhythm fast, but give every figure a job.

## Fix — `src/pages/PresenterScript.tsx` Slide 08, paragraph 2

Replace the current single sentence with a paragraph where each persona beat is one short, self-contained thought:

> "Sarah on Strategy — convergence score ninety-two out of a hundred: every long-range signal she tracks, from health to sustainability to protein anxiety, is pointing the same way. Chloe on Market Sizing — two-point-one billion dollar TAM growing at eleven percent compound, and Southeast Asia is the white space inside it: Indonesia, Vietnam, the Philippines, none of the global brands have moved yet. Sebastian on Competitive — threat level high: a regional rival is already building manufacturing capacity, four patents filed in the last ninety days, and his alerts caught the supplier shift two weeks before trade press. Priya on Innovation — three of your five existing concepts already pass against the converging trends, so you don't need a clean-sheet R&D programme; you need to accelerate what's in the pipeline. Marcus on Commercial — two of three target retailers have a first-mover slot open in their category review and his account history says they'll listen if you bring the evidence. And David on Procurement — one contract sits behind every number on this slide, not fourteen, so the answer itself costs less than last quarter's reconciliation bill."

### Why each clause is there
- **Sarah** — explains *what* convergence is (signals pointing the same way) and *what* signals (health, sustainability, protein anxiety) so the 92 reads as evidence, not a vanity score.
- **Chloe** — adds growth rate + specific markets so $2.1B isn't a hanging number; names the white space concretely.
- **Sebastian** — turns "high threat" into the three observable proof points (capacity build, patent count, supplier shift) and shows the lead-time advantage.
- **Priya** — explains *why* 3 of 5 matters: it changes the strategic move from "invent" to "accelerate."
- **Marcus** — turns "2 of 3 retailers ready" into a recognisable commercial moment (category review window) so the listener pictures the meeting.
- **David** — keeps the consolidation outcome but makes the procurement maths explicit.

### Timing
Paragraph grows from ~55 words to ~190 — roughly an extra 45 seconds of voiceover. Slide 08 currently sits at 2:55; total deck moves from ~5:00 to ~5:45. Acceptable; the Friday-decision slide is the proof moment.

## Also update — Copy-updates reference section

The reference block for Slide 07 (Connected Decision) doesn't currently quote this paragraph, so no copy-block edit needed there. The numbers in the **Number discipline** block still hold ($2.1B TAM, 92 convergence, 4 patents, 3/5 concepts, 2/3 retailers, 14→1 contracts) — no changes.

## Out of scope
- No edits to slide visual components.
- No changes to other slides' persona lines (07, 09) — those serve a different purpose (value-walk and stat-anchor, not decision proof).
- Narration audio regenerates from text — no audio file changes here.
