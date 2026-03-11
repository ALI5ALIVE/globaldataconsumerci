

# Fix Slide 7 Narration Alignment

## Problem
Slide 7 ("Teams Transformed") **visually** shows before/after time allocation bars and decision velocity improvement, but the **narration script** (slideId 6) describes the connected intelligence chain between personas (Sarah → James → Priya → Marcus → Elena → David). The narrative doesn't match the visual at all.

## Solution
Rewrite the narration script for slideId 6 to align with what the slide actually shows:
- Before: 60% reconciling, 20% searching, 10% reporting, 10% strategy → decisions take 6-8 weeks
- After: 5% reconciling, 5% searching, 15% reporting, 75% strategy → decisions in hours
- The transformation from "data janitors to strategic advisors"

## File Change

**`src/data/consumerJourneyNarration.ts`** — slideId 6 script (line 50)

Replace the current script with one that narrates the visual content:

> "This is what changes for your teams. Today, sixty percent of their time goes to reconciling data. Twenty percent to searching for it. Ten percent reporting. And just ten percent — ten — on actual strategy. They're data janitors, not strategic advisors. Now look at what happens with Connected Intelligence. Reconciliation drops to five percent. Searching — five percent. Reporting becomes fifteen percent because it's automated and evidence-based. And strategy? Seventy-five percent. Your best people finally doing what you hired them to do. And decision velocity? It goes from six to eight weeks — to hours. Not days. Hours. That's not incremental improvement. That's transformation."

Single file, single field change. No structural or layout changes.

