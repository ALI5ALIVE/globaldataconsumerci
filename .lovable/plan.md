# Fix: PPTX build fails with "Template title/thankyou slides not found"

## Root cause (verified by inspecting the template)

The validator I added last turn was working correctly — it surfaced a real, pre-existing bug in `templateMerge.ts`.

`ppt/_rels/presentation.xml.rels` does contain both `slides/slide1.xml` and `slides/slide61.xml` (confirmed by unzipping `src/assets/pptx/gd_master.pptx`). But the `parseRels()` helper uses this regex:

```ts
const re = /<Relationship\s[^/>]*\/>/g;
```

`[^/>]` forbids `/` characters inside the match. Every `<Relationship>` element has `Type="http://schemas.openxmlformats.org/..."` whose value contains slashes, so **the regex matches zero elements**. `parseRels` returns `[]`, both `titleRId` and `thankYouRId` stay `null`, and we throw `"Template title/thankyou slides not found"`.

## Fix

One-line regex correction in `src/exporters/pptx/templateMerge.ts` (`parseRels`):

```ts
// Was (broken — forbids "/" so URL Types never match):
const re = /<Relationship\s[^/>]*\/>/g;

// New (non-greedy up to the closing "/>"):
const re = /<Relationship\b[^>]*?\/>/g;
```

`[^>]*?` allows `/` inside attribute values and the non-greedy quantifier still stops at the first `/>`.

## Why I'm confident

- Manual unzip of the template confirms `slide1.xml`, `slide61.xml`, and rels for both exist verbatim.
- The same broken regex pattern is also used inside `validatePptx.ts` for the slide-rels target check (`/<Relationship\s+[^/>]*Target=...`). I'll apply the same fix there for consistency, otherwise validation of *generated* slide rels will under-report.

## Files changed

1. `src/exporters/pptx/templateMerge.ts` — fix `parseRels` regex.
2. `src/exporters/pptx/validatePptx.ts` — apply the same fix to the slide-rels Target scan and the presentation rels scan, so the validator stops missing relationships with URL-bearing Types.

No new dependencies. No behavioural change to anything other than rels parsing.
