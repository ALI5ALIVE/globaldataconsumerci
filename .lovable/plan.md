

# Plan: Thread a Consumer Brand Story Arc Through Slides 1–6

## The Story

An unnamed global snacking company is facing the plant-based protein opportunity. The same scenario threads through every slide, making the abstract pain and solution tangible. No brand name — just "your company" / "your team."

## Current vs. Proposed Copy (Slide-by-Slide)

### Slide 1 — Monday Morning
**Current**: Generic inbox notifications (CEO wants plant-based view, Sales needs Tesco context, etc.)
**Proposed**: Same structure but every notification now orbits the same decision — plant-based protein snacking. The subtitle shifts to: *"One opportunity. Seven opinions. Zero alignment."*

Notifications become:
- CEO: "The board wants our plant-based protein position by Friday"
- Strategy: "Our trend provider says plant-based is peaking — but social data says it's accelerating"
- Market Sizing: "Finance needs a TAM number. Ours says $1.4B. The consultant says $2.1B"
- Competitive Intel: "A rival just filed four patents in plant-based protein. Where did that come from?"
- Innovation: "We have five concepts in the pipeline — which ones should we kill?"
- Commercial: "The buyer at our biggest retailer wants a plant-based range proposal by next month"
- Procurement: "We're paying six vendors for overlapping data. Renewal season is in three weeks"

Bottom line: *"One opportunity. Seven teams. Seven answers. Which one do you trust?"*

### Slide 2 — Seven Sources
**Current**: Generic "Provider A/B/C" labels with abstract categories.
**Proposed**: Each source tile now shows the conflicting answer about the same opportunity:

| Source | Conflicting Signal |
|---|---|
| Trend Report | "Plant-based is peaking" |
| Market Sizing | "$1.4B TAM (or $2.1B?)" |
| Competitive DB | "No significant moves" |
| Innovation Agency | "Consumer fatigue detected" |
| Sales Intel | "Retailer X is demanding it" |
| Consumer Panel | "Trial is up, repeat is flat" |
| Internal Data | "Our test market grew 22%" |

Subtitle: *"Same opportunity. Seven sources. Seven conflicting signals."*
Bottom stat bar stays (60% reconciling / 10% strategy / 12 weeks) but adds: *"By the time you reconcile, someone else has launched."*

### Slide 3 — The Cost
**Current**: Generic cost cards (missed trends, 12 weeks, failed launches).
**Proposed**: All four cards now reference the same story:

1. **"They Moved First"** — A competitor saw the same plant-based signals six months ago. They launched. They claimed the shelf. You're still reconciling.
2. **"12 Weeks to Align"** — Your strategy, innovation, and commercial teams each had a different view. By the time they agreed, the buyer had moved on.
3. **"The Concept You Killed"** — One of your five plant-based concepts scored low on gut-feel. A competitor launched something almost identical — it's now a £40M line.
4. **"The Launch That Flopped"** — Another concept launched without competitive context. A rival had already saturated the space. You found out from trade press.

Subtitle: *"This isn't hypothetical. This is what fragmentation costs you — in this category, this year."*

### Slide 4 — One Lens (Hub)
**Current**: Generic "One taxonomy. One truth. From trend to shelf."
**Proposed**: Bottom line becomes: *"One opportunity — plant-based protein — seen through one connected lens. From the first signal to the shelf."*

No structural change to the hub visualization.

### Slide 5 — Connected Decision (already story-driven)
Light copy tweak to the question card subtitle: add *"The same opportunity. But this time, every team sees it through one lens."*

### Slide 6 — Connected Intelligence in Action
**Current**: Generic persona chain outputs.
**Proposed**: Each persona's output references the plant-based story:
- Sarah: "Plant-based signal validated"
- James: "SE Asia sized at $2.1B"
- Priya: "Rival patent activity flagged"
- Marcus: "3 concepts evidence-validated"
- Elena: "Buyer story built in one click"

Cross-pollination outcomes rewritten to reference the story.

### Narration Scripts
All six narration entries (slides 1–6) updated to tell the same continuous story in second person ("You spot the signal... your teams disagree... it costs you... now imagine...").

## Files to Modify

| File | Change |
|---|---|
| `src/components/consumer-pitch/CPSlide1MondayMorning.tsx` | Update notification copy + subtitle to plant-based story |
| `src/components/consumer-pitch/CPSlide2SevenSources.tsx` | Replace generic provider labels with conflicting signals, update subtitle + bottom text |
| `src/components/consumer-pitch/CPSlide3TheCost.tsx` | Rewrite all 4 cost cards to reference the same story |
| `src/components/consumer-pitch/CPSlide4ImagineOneLens.tsx` | Update bottom tagline |
| `src/components/consumer-journey/CJSlideConnectedDecision.tsx` | Add story-thread subtitle to question card |
| `src/components/consumer-journey/CJSlide11ConnectedInAction.tsx` | Update persona outputs + outcomes to reference story |
| `src/data/consumerJourneyNarration.ts` | Rewrite scripts for slides 1–6 with continuous story thread |

No structural or layout changes. Same components, same animations — new copy that tells one coherent story.

