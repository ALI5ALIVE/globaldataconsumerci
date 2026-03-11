

# Plan: Remove Persona Panorama Slides (5 & 6)

Remove the two `PersonaPanorama` slides and re-index the deck from 13 to 11 slides. The Connected Decision slide now follows directly after One Lens.

## Revised Slide Order (11 slides)

```text
 0  The Pressure
 1  Your Monday Morning
 2  Seven Sources
 3  The Cost
 4  One Lens
 5  The Connected Decision
 6  Connected Intelligence in Action
 7  Why Not DIY?
 8  Proof
 9  Teams Transformed
10  Let's Talk
```

## Changes

| File | Change |
|------|--------|
| `src/pages/ConsumerJourneyDeck.tsx` | Remove `PersonaPanorama` import, remove `panorama1`/`panorama2` variables, remove 2 panorama slide entries from `slides` array, remove 2 `<PersonaPanorama>` JSX elements, re-index all narration props (5-10), update comment |
| `src/data/consumerJourneyNarration.ts` | Re-index slideId values (shift entries formerly at 7-12 down to 5-10) |

No new files. The `PersonaPanorama.tsx` component file will be left in place (unused) in case you want it back later.

