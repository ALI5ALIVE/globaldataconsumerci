

## Add 4th Confidence Dimension to Intelligence Gap Slide

### Current State
The slide currently has **3 root causes** (Why It Exists) and **3 quantified impacts**, displayed in two columns with uneven box counts.

### Required Changes

1. **Add 4th Root Cause: Confidence**
   - Title: "Decisions Lack Conviction"
   - Description: "Teams hedge instead of committing"
   - Detail: "Diluted action"
   - Badge: "CONFIDENCE"
   - Icon: `ShieldAlert` (from lucide-react)

2. **Add 4th Quantified Impact**
   - Value: "68%"
   - Label: "teams"
   - Description: "lack confidence to act decisively"
   - Dimension: "Confidence"

3. **Align Layout: 4 Boxes Each Side**
   - Reduce padding from `p-4` to `p-3` on each card to fit 4 items comfortably
   - Remove the arrow icons between root cause cards to save vertical space
   - Ensure both columns have identical box heights using `items-stretch` and `h-full`

---

### Implementation Details

**File:** `src/components/globaldata-slides/GDSlide2IntelligenceGap.tsx`

#### 1. Add ShieldAlert import (line 2)
```tsx
import { Layers, MessageSquareWarning, Clock, ShieldAlert, AlertOctagon } from "lucide-react";
```

#### 2. Add 4th root cause (lines 5-27)
```tsx
const rootCauses = [
  { 
    icon: Layers, 
    title: "Signals Fragment", 
    desc: "Across tools, teams, and vendors",
    detail: "No single source of truth",
    badge: "BREADTH"
  },
  { 
    icon: MessageSquareWarning, 
    title: "Leaders Debate", 
    desc: "Data instead of committing to direction",
    detail: "Analysis paralysis",
    badge: "ALIGNMENT"
  },
  { 
    icon: Clock, 
    title: "Decisions Arrive Late", 
    desc: "Too late to matter",
    detail: "Missed windows",
    badge: "SPEED"
  },
  { 
    icon: ShieldAlert, 
    title: "Decisions Lack Conviction", 
    desc: "Teams hedge instead of committing",
    detail: "Diluted action",
    badge: "CONFIDENCE"
  },
];
```

#### 3. Add 4th impact (lines 29-33)
```tsx
const impacts = [
  { value: "12+", label: "weeks", desc: "average decision latency", dimension: "Speed" },
  { value: "3-5", label: "sources", desc: "conflicting data per decision", dimension: "Breadth" },
  { value: "40%", label: "launches", desc: "miss optimal windows", dimension: "Alignment" },
  { value: "68%", label: "teams", desc: "lack confidence to act decisively", dimension: "Confidence" },
];
```

#### 4. Update layout for 4 items each (lines 73-118)

**Root Causes column:**
- Change card padding from `p-4` to `p-3`
- Remove the `ArrowRight` icon between cards
- Reduce `space-y-3` to `space-y-2`

**Quantified Impact column:**
- Change card padding from `p-4` to `p-3`
- Reduce `space-y-3` to `space-y-2`
- Reduce value font size from `text-2xl` to `text-xl`

---

### Narration Update

The narration in `globalDataNarration.ts` for Slide 2 should also be updated to include the 4th dimension. Add after "Decisions arrive late":

```
Finally, decisions lack conviction. Teams hedge instead of committing. Action gets diluted.
```

And update the quantified impact section:

```
Twelve-plus weeks average decision latency. Three to five conflicting data sources per decision. Forty percent of launches miss optimal windows. And sixty-eight percent of teams lack the confidence to act decisively.
```

---

### Visual Result
| Why It Exists (4 boxes) | Quantified Impact (4 boxes) |
|-------------------------|------------------------------|
| Signals Fragment (BREADTH) | 12+ weeks (Speed) |
| Leaders Debate (ALIGNMENT) | 3-5 sources (Breadth) |
| Decisions Arrive Late (SPEED) | 40% launches (Alignment) |
| Decisions Lack Conviction (CONFIDENCE) | 68% teams (Confidence) |

Both columns will have 4 equally-sized boxes with consistent dimensions.

