## Goal
Make Slides 07 and 08 explicitly resolve the pains set up in Slide 04 ("Your Monday morning") so the script reads as one continuous story rather than two halves.

## The anchors to echo
Slide 04 plants very specific hooks that 07/08 currently glide past:

| Slide 04 pain hook | Slide 07/08 payoff (currently) | Payoff to add |
|---|---|---|
| "It's 9:00. Forty-one minutes in." | — | Open 07 with the same clock: *"It's still Monday. Same nine a.m. Same forty-one minutes."* |
| "Seven unread emails, all about the same opportunity" | — | *"Seven inboxes collapse into one view."* |
| "The CEO wants your plant-based protein position by Friday" | Mentioned cold in 08 | Carry the CEO + Friday deadline forward as a continuous thread, not a new question |
| "Strategy says peaking, social says accelerating" | — | Sarah's beat resolves the contradiction explicitly |
| "Finance has two TAM numbers" | — | Chloe's beat replaces "two TAM numbers" with one reconciled $2.1B figure |
| "A rival has filed four patents nobody saw coming" | Sebastian mentions "four patents" | Sebastian explicitly says *"the four patents nobody saw coming on Monday — Sebastian saw them in week one"* |
| "Zero alignment. The clock starts now." | — | Close 08 by stopping that clock: *"Monday's clock stopped at forty-seven minutes."* |

## Slide-by-slide edits

**Slide 07 — opening paragraph (line 75)**
- Replace the generic *"Now picture the same Monday"* opener with a direct callback:
  - *"It's still Monday. Same nine a.m., same forty-one minutes, same CEO email about plant-based protein. But this time the seven inboxes collapse into one connected lens…"*
- Keep the rest of the paragraph (Ava as connective tissue, five solutions, etc.) intact.

**Slide 07 — persona paragraph (line 76)**
- Re-anchor each persona to the Monday pain they personally resolve. Minor adds, no length blowout:
  - Sarah: *"…stops chasing convergence across vendors — no more 'strategy says peaking, social says accelerating'; she sees one score…"*
  - Chloe: *"…stops rebuilding TAMs in spreadsheets — no more two finance numbers; one sized market…"*
  - Sebastian: *"…the four-patent surprise from Monday's inbox doesn't happen anymore — he saw the first filing in week one."*
  - Priya, Marcus, David: keep as-is.

**Slide 07 — closing paragraph (line 77)**
- Add a one-line bridge to Friday so 08 lands as a continuation, not a reset:
  - *"…none of them would have time to spot alone. Now it's Friday — same week, same question, same CEO. Watch what they do with it."*

**Slide 08 — opening (lines 85–86)**
- Tie the question explicitly back to Monday's inbox:
  - *"It's Friday. Same CEO. Same question from Monday's nine-a.m. email: should you launch plant-based snacking in Southeast Asia? Four days, not fourteen weeks."*
- Keep the Ava pre-meeting paragraph intact.

**Slide 08 — persona paragraph (line 87)**
- One small Sebastian tweak so Monday's specific shock pays off:
  - *"…four patents filed in the last ninety days — the same four that ambushed the inbox on Monday, only this time Sebastian flagged them in week one…"*

**Slide 08 — closer (line 88)**
- Replace the final line of the "Old way / New way" beat with the clock callback:
  - *"…GO validated in forty-seven minutes. Monday's clock that 'started now' — it stopped on Friday at minute forty-seven, with every line traceable to source."*

## What stays the same
- Slides 01–06 narrative (the pain build) — untouched.
- Slides 09–14 — untouched.
- All numbers, personas, Ava framing, deck visuals — untouched.
- Total runtime impact: ~+25 words across 07–08 (~+8 seconds).

## File to touch
- `src/pages/PresenterScript.tsx` — `paragraphs` arrays for the `num: "07"` and `num: "08"` slides only (lines 74–88).

## Out of scope
- Visual/slide-component changes.
- Memory updates (the deck-structure and narration memories already cover this story arc).
