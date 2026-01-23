

## Merge Slides 3 and 4 into Single "Connected Intelligence" Slide

### Summary

Merge **Slide 3 (Transformation)** and **Slide 4 (The Proposition)** into a single comprehensive slide that preserves all visual elements and information from both slides. The deck will reduce from 12 to 11 slides, requiring renumbering of all subsequent slides.

---

### Content Inventory

**From Slide 3 (Transformation):**
- Before/After comparison columns (4 items each)
- Warning indicators (12+ weeks, 3-5 sources)
- Success indicators (Days, 1 source)
- Metrics banner (Decision cycles, Launch approach, Tool landscape)
- Transformation arrow

**From Slide 4 (Proposition):**
- Value proposition statement
- Connected Intelligence Wheel visualization
- "What It Replaces" list (3 items)
- "What It Is NOT" list (3 items)
- Bottom callout

---

### Merged Slide Layout

```text
+---------------------------------------------------------------+
|  Connected Intelligence for Consumer Brands                   |
|  "From Fragmented Insight to Aligned Action"                  |
+---------------------------------------------------------------+
|                                                               |
|  [Value Proposition Banner - condensed to 2 lines]            |
|                                                               |
+---------------------------------------------------------------+
|                                                               |
|  +---------------------------+  +---------------------------+ |
|  | BEFORE                    |  | AFTER                     | |
|  | - Siloed insights         |  | - Unified system          | |
|  | - Different taxonomies    |  | - Shared truth            | |
|  | - Manual reconciliation   |->| - Embedded workflows      | |
|  | - Slow decisions          |  | - Confident action        | |
|  | [12+ wks] [3-5 sources]   |  | [Days] [1 source]         | |
|  +---------------------------+  +---------------------------+ |
|                                                               |
|  +-------------------+  +-----------------------------------+ |
|  | Intelligence      |  | What It Replaces | What It Is NOT| |
|  | Wheel             |  | - Tool sprawl    | - Dataset     | |
|  | (compact)         |  | - Manual recon   | - Dashboard   | |
|  |                   |  | - Conflicting    | - Point soln  | |
|  +-------------------+  +-----------------------------------+ |
|                                                               |
+---------------------------------------------------------------+
|  [Metrics: 70% faster | 2x success | 30% lower TCO]           |
+---------------------------------------------------------------+
```

---

### Files to Modify

#### 1. Create Merged Component
**File:** `src/components/globaldata-slides/GDSlide3Transformation.tsx` (new file)

- Combine imports from both slides
- Include `ConnectedIntelligenceWheel` component
- Merge all data arrays: `beforeItems`, `afterItems`, `metrics`, `replaces`, `notThis`
- Use compact layout with smaller padding (`p-3` instead of `p-4`)
- Scale down Connected Intelligence Wheel to fit (add `transform: scale(0.8)` or reduce SVG size)
- Title: "Connected Intelligence for Consumer Brands"
- Subtitle: "From Fragmented Insight to Aligned Action"

#### 2. Delete Old Slide Files
- Delete `GDSlide3BeforeAfter.tsx`
- Delete `GDSlide4Proposition.tsx`

#### 3. Rename Subsequent Slide Components
| Old Name | New Name | New slideNumber |
|----------|----------|-----------------|
| `GDSlide5ValueChain.tsx` | `GDSlide4ValueChain.tsx` | 4 |
| `GDSlide6ValuePyramid.tsx` | `GDSlide5ValuePyramid.tsx` | 5 |
| `GDSlide7MaturityCurve.tsx` | `GDSlide6MaturityCurve.tsx` | 6 |
| `GDSlide8ROI.tsx` | `GDSlide7ROI.tsx` | 7 |
| `GDSlide9WhyGlobalData.tsx` | `GDSlide8WhyGlobalData.tsx` | 8 |
| `GDSlide10Solutions.tsx` | `GDSlide9Solutions.tsx` | 9 |
| `GDSlide11SolutionDeepDives.tsx` | `GDSlide10SolutionDeepDives.tsx` | 10 |

#### 4. Update GlobalDataDeck.tsx
**File:** `src/pages/GlobalDataDeck.tsx`

- Update imports (remove old, add new, rename subsequent)
- Update `slides` array from 12 to 11 items
- Update all `slideNumber` references
- Adjust `getNarrationProps` calls

#### 5. Merge Narration Scripts
**File:** `src/data/globalDataNarration.ts`

Merge slideId 3 and 4 scripts into one:

```typescript
{
  slideId: 3,
  title: "Connected Intelligence for Consumer Brands",
  script: `This is Connected Intelligence for Consumer Brands—the transformation that closes the Intelligence Gap.

Look at where most organisations are today. Siloed insights fragmented across tools. Different taxonomies with no common language. Manual reconciliation. Slow, debated decisions. Twelve-plus weeks to decision, three to five sources to reconcile.

Now look at what's possible. A unified system on one connected platform. Shared truth through a single taxonomy. Embedded workflows with automated orchestration. Confident, fast action with aligned decisions. Days to decision, one source of truth.

A unified solution that connects market, consumer, competitor, innovation, and commercial intelligence into one trusted system—so organisations move faster, align better, and act with confidence.

What it replaces: tool sprawl across vendors, manual reconciliation, conflicting answers.

What it is NOT: another dataset, another dashboard, another point solution.

The transformation: Decision cycles seventy percent faster. Launch approach shifts from reactive to proactive with two times higher success. Tool landscape moves from sprawl to unified with thirty percent lower total cost of ownership.

This is intelligence designed to drive decisions end-to-end—not another layer of data.`,
  voiceId: DEFAULT_VOICE_ID,
}
```

- Renumber all subsequent narrations (slideId 5 becomes 4, etc.)

---

### Technical Details

#### Merged Component Structure
```tsx
// GDSlide3Transformation.tsx
import GDSlideContainer from "./GDSlideContainer";
import { Layers, MessageSquareWarning, Clock, Zap, Database, 
         CheckCircle2, ArrowRight, TrendingUp, XCircle } from "lucide-react";
import type { SlideNarrationProps } from "@/types/slideProps";
import ConnectedIntelligenceWheel from "./ConnectedIntelligenceWheel";

const beforeItems = [...]; // 4 items from Slide 3
const afterItems = [...];  // 4 items from Slide 3
const metrics = [...];     // 3 items from Slide 3
const replaces = [...];    // 3 items from Slide 4
const notThis = [...];     // 3 items from Slide 4

// Component renders:
// 1. Condensed value proposition (1-2 lines)
// 2. Before/After grid (compact, same row)
// 3. Two-column section: Wheel (scaled 80%) + Replaces/NotThis stacked
// 4. Metrics banner at bottom
```

#### Slides Array Update
```tsx
const slides = [
  { id: "gd-slide-0", label: "Title" },
  { id: "gd-slide-1", label: "Market Reality" },
  { id: "gd-slide-2", label: "Intelligence Gap" },
  { id: "gd-slide-3", label: "Connected Intelligence" }, // Merged
  { id: "gd-slide-4", label: "Value Chain" },
  { id: "gd-slide-5", label: "Capability Stack" },
  { id: "gd-slide-6", label: "Your Roadmap" },
  { id: "gd-slide-7", label: "ROI" },
  { id: "gd-slide-8", label: "Why GlobalData" },
  { id: "gd-slide-9", label: "Connected Solutions" },
  { id: "gd-slide-10", label: "Solution Deep Dives" },
];
```

---

### Implementation Steps

1. Create new `GDSlide3Transformation.tsx` with merged content
2. Delete `GDSlide3BeforeAfter.tsx` and `GDSlide4Proposition.tsx`
3. Rename slide 5-11 files to 4-10 and update their internal `slideNumber` props
4. Update `GlobalDataDeck.tsx` imports, slides array, and component rendering
5. Merge and renumber narration scripts in `globalDataNarration.ts`

