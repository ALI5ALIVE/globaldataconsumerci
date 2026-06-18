## Goal
Ava is named once on Slide 07 ("one AI layer — Ava") and never reappears on Slide 08. Right now she sounds like a label, not an active participant. Reposition Ava as the connective tissue that does the work *between* the personas: she pre-empts questions on Slide 07, she synthesises the answer on Slide 08. Per memory, Ava is the proprietary AI assistant that surfaces patterns and pre-empts decisions — keep her in that role, don't promote her into a sixth persona.

## Fix — `src/pages/PresenterScript.tsx` Slide 07

**Paragraph 1 — sharpen Ava's intro (replace current opener):**
> "Now picture the same Monday — but through one connected lens. Five intelligence solutions, one shared taxonomy, forty years of analyst-validated data — and Ava, your AI layer, sitting across all of it. Ava doesn't replace your team. She does the work between them: spotting the pattern that crosses two solutions, flagging the signal before anyone asks, drafting the first answer so your people start at minute thirty, not minute zero. Here's what that means for the people on your team."

**Paragraph 3 — add an Ava beat before the Friday handoff (replace current close):**
> "One platform. One source of truth. Every number traceable back to a named analyst — and Ava connecting the dots none of them would have time to spot alone. Now watch what they do with it on a Friday."

## Fix — `src/pages/PresenterScript.tsx` Slide 08

**Add a new paragraph between the question and the persona-answer paragraph** so Ava is visibly *how* the answer assembles in forty-seven minutes:

> "Ava reads the question, pulls the relevant signal from each of the five solutions, and posts a draft answer to the room before the meeting starts. Each person walks in to their own view, already populated, already cross-referenced. They're not gathering — they're pressure-testing."

**Sharpen the audit-trail paragraph (replace current paragraph 3) so Ava's role lands:**
> "Same taxonomy, so the numbers reconcile automatically. Ava attaches a confidence score and a citation to every figure — you can click the GO verdict back to the source survey, the patent filing, the shipment record. Old way: seven vendors, fourteen weeks, three conflicting answers. New way: one platform, one meeting, Ava-assembled, human-decided, GO validated in forty-seven minutes — and you can prove every line."

## Why this works
- **Defines Ava by behaviour, not by label** — "spots the pattern," "drafts the first answer," "attaches confidence + citation" — concrete verbs the listener can picture.
- **Keeps humans in charge** — "Ava-assembled, human-decided" closes the obvious objection ("is the AI making the call?").
- **Explains the forty-seven minutes** — currently a hanging stat; now there's a mechanism behind it (Ava drafts before the meeting; people pressure-test, not gather).
- **No new numbers introduced** — uses only the figures already locked in the deck.

### Timing impact
- Slide 07 grows ~40 words → +~12s. Slide 08 grows ~50 words → +~15s. Total deck: ~5:45 → ~6:15.

## Out of scope
- No edits to slide visual components (Ava already has hub treatment on Slide 5).
- No changes to other slides' Ava references.
- Memory unchanged — `mem://features/ava-ai-assistant` already covers her definition.
