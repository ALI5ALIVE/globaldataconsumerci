# Fix: ORPHAN_OVERRIDE — same `[^/]` regex bug in Content Types cleanup

## Root cause

Same class of bug as the previous fix. In `templateMerge.ts` step 6, this regex strips `<Override>` entries for removed slides:

```ts
/<Override\s+PartName="\/ppt\/slides\/slide\d+\.xml"[^/]*\/>/g
```

`[^/]*` forbids `/` — but every `<Override>` element contains `ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"`, which has slashes. So the regex matches **zero** elements, no overrides are removed, and the validator correctly reports `/ppt/slides/slide14.xml` (and 58 others) as orphans.

## Fix

One-line change in `src/exporters/pptx/templateMerge.ts`:

```ts
// Was:
/<Override\s+PartName="\/ppt\/slides\/slide\d+\.xml"[^/]*\/>/g
// New:
/<Override\s+PartName="\/ppt\/slides\/slide\d+\.xml"[^>]*?\/>/g
```

`[^>]*?` (non-greedy, stops at `>`) allows `/` inside attribute values but still terminates at the closing `/>`.

After this fix, the validator pass will be clean and PowerPoint should open the file without complaint.

## Files changed

- `src/exporters/pptx/templateMerge.ts` — single regex fix on line 187.
