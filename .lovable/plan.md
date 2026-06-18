## Goal
Reset the roles of Slides 07 and 08:
- **Slide 07** = solution overview. Links the pain to the five solutions + Ava. No Monday-morning callback, no Friday meeting setup.
- **Slide 08** = the new way of working. Carries the full Monday → Friday narrative thread and the decision payoff.

## What changes

**Slide 07 — strip the Monday/Friday framing**
- Opening paragraph: remove *"It's still Monday. Same nine a.m., same forty-one minutes in, same CEO email about plant-based protein…"* Replace with a pain-to-solution bridge that doesn't reference the inbox scene:
  - *"That operating-model problem has a fix. One connected lens across five intelligence solutions, one shared taxonomy, forty years of analyst-validated data — and Ava, your AI layer, sitting across all of it. Ava doesn't replace your team. She does the work between them: spotting the pattern that crosses two solutions, flagging the signal before anyone asks, drafting the first answer so your people start at minute thirty, not minute zero."*
- Persona paragraph: keep the "stops X, starts Y" structure that links each pain to its solution, but strip Monday-specific call-outs:
  - Remove *"no more 'strategy says peaking, social says accelerating'"* from Sarah.
  - Remove *"no more two finance numbers"* from Chloe.
  - Remove *"the four-patent surprise from Monday's inbox doesn't happen anymore"* from Sebastian — replace with a generic *"stops finding out late"*.
  - Priya, Marcus, David already generic — leave as-is.
- Closing paragraph: remove *"Now it's Friday — same week, same question, same CEO. Watch what they do with it."* Replace with a cleaner solution-overview close:
  - *"One platform. One source of truth. Every number traceable back to a named analyst — and Ava connecting the dots none of them would have time to spot alone."*

Net result: Slide 07 reads as a clean solution overview that resolves the pain *thematically* (operating-model fix, five solutions, Ava) without re-entering the Monday scene.

**Slide 08 — own the Monday → Friday narrative**
- Opening: strengthen the explicit Monday callback so the whole inbox-to-decision arc lives here:
  - *"Remember Monday's nine-a.m. inbox? Seven unread, one CEO question, clock started. It's now Friday — same week, same question: should you launch plant-based snacking in Southeast Asia? Four days, not fourteen weeks."*
- Ava pre-meeting paragraph: unchanged.
- Persona paragraph: keep the Monday-callout in Sebastian's beat (*"the same four that ambushed the inbox on Monday, only this time Sebastian flagged the first filing in week one"*) — this is where Monday pays off.
- Closer: keep the *"Monday's clock that 'started now' — it stopped on Friday at minute forty-seven"* line. This is the narrative payoff and belongs only on 08.

## File to touch
- `src/pages/PresenterScript.tsx` — `paragraphs` array for the `num: "07"` slide only (lines 74–78). Slide 08 stays as it is in the current build.

## Out of scope
- Slide 08 content (already correctly carrying the Monday→Friday arc after the previous turn).
- All other slides, visuals, memory.
