
Goal: On Slide 4 (“The Answer: Connected Intelligence”), the Solution Value Panel (“copy box”) must never scroll. All module content should be fully visible when a module is selected/clicked.

What I found (current state)
- `src/components/globaldata-slides/SolutionValuePanel.tsx` still has `overflow-y-auto` on the main panel container (line ~48). That guarantees scrolling whenever content exceeds the height cap.
- The panel is height-capped at `max-h-[380px]` with fairly generous typography (`text-sm`/`text-lg`) and padding (`p-4`) across multiple stacked sections (Header, JTBD, Pain→Outcome, Example, Tags). Several JTBD + Example strings in `src/data/solutionDeepDives.ts` are long enough that they won’t fit at 380px without either (a) scrolling, (b) truncation, or (c) more vertical space.
- The slide layout (`GDSlide4Proposition.tsx`) uses a top value-prop box and bottom callout that consume vertical budget, leaving a limited middle area for both the wheel and the panel.

Constraints / interpretation
- You explicitly want: “no scrolling” and “all visible for each module”.
- That means we must remove scroll behavior AND ensure content fits inside the available height.
- To achieve this without truncating text, we need to (1) reclaim vertical space on the slide, and (2) compact the panel’s internal spacing/typography, and (3) optionally reduce non-essential elements that aren’t “copy” (e.g., number of capability tags) to protect the no-scroll requirement.

Implementation plan (code changes)

A) Remove scroll behavior (hard requirement)
File: `src/components/globaldata-slides/SolutionValuePanel.tsx`
1) Change the panel container from scrolling to non-scrolling:
   - Replace `overflow-y-auto` with `overflow-hidden`.
2) Add a “tight layout” baseline:
   - Reduce container padding: `p-4` → `p-3` (or `p-2.5` if needed).
   - Consider `leading-tight` for dense text blocks.

B) Compact panel content to guarantee fit (no truncation)
File: `src/components/globaldata-slides/SolutionValuePanel.tsx`
3) Header compaction:
   - `gap-2 mb-2` → `gap-1.5 mb-1.5`
   - Icon box `w-10 h-10` → `w-8 h-8`
   - Icon `w-5 h-5` → `w-4 h-4`
   - Title `text-lg` → `text-base` (keep `font-bold`)
4) JTBD section compaction:
   - Section container `mb-2 p-2` → `mb-1.5 p-1.5`
   - Label `text-[10px] ... mb-1` → `text-[9px] ... mb-0.5`
   - Body `text-sm leading-relaxed` → `text-[11px] leading-snug`
5) Pain → Capability → Outcome flow compaction:
   - Section container `mb-2 p-2` → `mb-1.5 p-1.5`
   - Label `text-[10px] ... mb-1` → `text-[9px] ... mb-0.5`
   - Stack `gap-1` → `gap-0.5`
   - Boxes `px-2.5 py-1.5` → `px-2 py-1`
   - Box text `text-xs` → `text-[11px]`
   - Arrows `w-3.5 h-3.5` → `w-3 h-3`
6) Real Example compaction:
   - Section container `mb-2 p-2` → `mb-1.5 p-1.5`
   - Label `text-[10px] ... mb-0.5` → `text-[9px] ... mb-0.5`
   - Brand line `text-xs` → `text-[10px]`
   - Result line `text-sm ... mt-0.5` → `text-[11px] ... mt-0.5 leading-snug`
7) Capabilities tags (space protection):
   - Reduce gap `gap-1.5` → `gap-1`
   - Reduce tag padding `px-2 py-1` → `px-1.5 py-0.5`
   - Reduce tag text `text-[10px]` → `text-[9px]`
   - If still tight, reduce count: `slice(0, 3)` → `slice(0, 2)` (this is the cleanest way to avoid overflow without truncating core narrative text)

C) Reclaim vertical space on Slide 4 so the panel has more room
File: `src/components/globaldata-slides/GDSlide4Proposition.tsx`
8) Reduce top value proposition height slightly:
   - Container padding `p-3` → `p-2.5` (or `p-2`)
   - Text `text-sm md:text-base` → `text-[13px] md:text-sm` with `leading-snug`
9) Reduce bottom callout height slightly:
   - Container padding `p-2` → `p-1.5`
   - Text `text-sm` → `text-[12px]` with `leading-snug`
10) Ensure the middle grid truly takes available space without forcing internal scroll:
   - Keep `min-h-0` (already present).
   - Ensure the panel and wheel wrappers do not exceed the middle row height.
   - If the wheel still dominates, cap wheel height a bit to prioritize panel:
     - In the wheel wrapper: `max-h-[380px]` → `max-h-[340px]` (only if needed after compaction).

D) Verify across all modules and viewports
11) Test each segment (Market, Innovation, Sales, Strategic, Competitor) and confirm:
   - No scrollbars appear in the panel.
   - All text is visible (JTBD + pain/capability/outcome + example result + tags).
12) Check 1366x768 specifically (your “perfect fit” target) and also a slightly shorter viewport to ensure the no-scroll behavior holds.

Edge cases & fallback (if one module still overflows)
- The “Strategic Intelligence” and some example results are the longest strings. If even after compaction one module still overflows, we will:
  1) Reduce capabilities tags to 2 items (if not already),
  2) Slightly reduce the panel max height dependency by freeing a few more pixels from the top/bottom callouts,
  3) As a last resort (only if you approve), rewrite the longest lines in `solutionDeepDives.ts` to be shorter while preserving meaning (this would truly “reduce the copy”, not just the font size).

Files that will be edited
- `src/components/globaldata-slides/SolutionValuePanel.tsx` (remove scroll + compact)
- `src/components/globaldata-slides/GDSlide4Proposition.tsx` (reclaim vertical space)
- Optional, only if needed after validation:
  - `src/components/globaldata-slides/ConnectedIntelligenceWheel.tsx` or the wheel wrapper in Slide 4 (slightly lower wheel max height)

Expected outcome
- The Solution Value Panel will never scroll.
- Clicking any module shows its full content at once within the fixed slide layout.
- Slide 4 remains within the “no page scroll” 768p constraint while prioritizing readability.
