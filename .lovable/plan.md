

## Improve Slide 5: Value Chain with Solution Combinations

### Summary

Transform the current static "Value Chain" slide into an interactive visualization that shows how the 5 intelligence solutions can be **combined strategically across workflow stages**, inspired by the PDF's "Where to Play & How to Win" concept. The new design will demonstrate that solutions are not siloed but work together across the innovation/go-to-market lifecycle.

---

### Current State Analysis

**Existing Slide 5 (`GDSlide5ValueChain.tsx`):**
- Shows 5 generic value chain stages (Strategy & Portfolio, Innovation & Product, Brand/Pricing/Claims, Go-to-Market & Sales, In-Market Performance)
- Static cards with bullet points
- No connection to the 5 intelligence solutions
- Generic "What Changes" callout
- Stats: "5 stages, 1 source of truth, infinite compounding"

**Key Insight from PDF (Page 9):**
The PDF shows an "Innovation workflow" with questions at each stage (Which markets? What white space? Which products? etc.) and maps **multiple intelligence solutions to each stage**. The slide title is "Solutions can be combined for greater advantage – e.g. Where to Play & How to Win?"

---

### Problem with Current Design

1. **No connection to solutions** - The 5 intelligence solutions (Strategic, Market, Competitive, Innovation, Sales) are not linked to value chain stages
2. **No interactivity** - Users cannot explore which solutions apply where
3. **No "combination" messaging** - Doesn't show that solutions work together (e.g., Strategic + Market for "Where to Play")
4. **Generic questions** - Doesn't surface the real business questions at each stage

---

### Proposed Solution: Interactive Solution-to-Workflow Mapping

**New slide title:** "Solutions That Combine for Greater Advantage"
**Subtitle:** "Connected intelligence across every workflow stage"

**Visual design:**

```text
+--------------------------------------------------------------------+
|  Solutions That Combine for Greater Advantage                       |
|  Connected intelligence across every workflow stage                 |
+--------------------------------------------------------------------+
|                                                                     |
|  [Where to Play]    [How to Win]    [How to Execute]               |
|   Strategic +        Innovation +    Sales +                        |
|   Market             Competitive     Market                         |
|   (clickable)        (clickable)     (clickable)                   |
|                                                                     |
+--------------------------------------------------------------------+
|                                                                     |
|  +----------+  +----------+  +----------+  +----------+  +--------+|
|  | Trend &  |->| White    |->| Concept  |->| Market   |->| Post-  ||
|  | Strategy |  | Space    |  | Screening|  | Entry    |  | Launch ||
|  +----------+  +----------+  +----------+  +----------+  +--------+|
|  | Questions|  | Questions|  | Questions|  | Questions|  | Q's    ||
|  |----------|  |----------|  |----------|  |----------|  |--------|
|  | [Icons]  |  | [Icons]  |  | [Icons]  |  | [Icons]  |  | [Icons]||
|  | Solutions|  | Solutions|  | Solutions|  | Solutions|  | Solns  ||
|  +----------+  +----------+  +----------+  +----------+  +--------+|
|                                                                     |
+--------------------------------------------------------------------+
|  [Detail Panel: Shows active stage questions + solution combos]     |
+--------------------------------------------------------------------+
```

---

### Data Structure: Workflow Stages with Solution Mapping

Based on the PDF, each workflow stage has:
1. **Key business questions** (from PDF page 9)
2. **Primary solutions** that apply
3. **Combination examples**

| Stage | Questions | Primary Solutions | Combination Example |
|-------|-----------|-------------------|---------------------|
| **Trend & Strategy** | Which markets and categories? Macro trends? Size of the prize? | Strategic, Market | "Where to Play": Strategic + Market Intelligence |
| **White Space** | What white space exists? What approaches are working? | Market, Innovation, Competitive | Trend-to-opportunity validation |
| **Concept Screening** | Which products with consumers? Initial reactions? How to differentiate? | Innovation, Competitive | Concept vs. competitive positioning |
| **Market Entry** | In which channels should I launch? What is the TAM? | Sales, Market, Competitive | Channel + pricing strategy |
| **Post-Launch** | How do I measure engagement? When should we consider a refresh? How can I monitor competitors? | Sales, Competitive, Market | Performance + competitive response |

---

### File Changes

#### 1. Update `GDSlide5ValueChain.tsx`

**Major changes:**
- Replace static `stages` array with new `workflowStages` data structure
- Add `solutionCombos` data for "Where to Play" / "How to Win" / "How to Execute" messaging
- Add interactive hover/click state to show stage details
- Replace generic callout with dynamic detail panel
- Map solution icons to each stage (multiple solutions per stage)

**New component structure:**

```tsx
// New data structure
const workflowStages = [
  {
    id: "trend-strategy",
    label: "Trend & Strategy",
    questions: ["Which markets and categories?", "Macro trends?", "Size of the prize?"],
    solutions: ["Strategic Intelligence", "Market Intelligence"],
    combination: { name: "Where to Play", description: "Identify growth spaces before competitors" },
  },
  {
    id: "whitespace",
    label: "White Space",
    questions: ["What white space exists?", "What approaches are working?"],
    solutions: ["Market Intelligence", "Innovation Intelligence", "Competitive Intelligence"],
    combination: { name: "Opportunity Discovery", description: "Validate trends with competitive context" },
  },
  // ... etc
];

const solutionCombos = [
  { label: "Where to Play", solutions: ["Strategic", "Market"], color: "primary" },
  { label: "How to Win", solutions: ["Innovation", "Competitive"], color: "sky-500" },
  { label: "How to Execute", solutions: ["Sales", "Market"], color: "green-500" },
];
```

**New state management:**
- `activeStage: number | null` - Currently hovered/selected workflow stage
- Same narration sync pattern used in `GDSlide10Solutions.tsx`

#### 2. Visual Elements

**Solution Combo Pills (top section):**
Three highlighted combination examples that users can click to see how solutions work together:
- "Where to Play" = Strategic + Market
- "How to Win" = Innovation + Competitive  
- "How to Execute" = Sales + Market

**Workflow Cards (middle section):**
5 horizontal cards representing the innovation/go-to-market lifecycle. Each card:
- Shows stage name and icon
- Displays small solution icons (2-3 per stage)
- Highlights when hovered/clicked
- Connects via flow arrows

**Detail Panel (bottom section):**
When a stage is active, shows:
- Stage name and questions
- Which solutions apply with their icons
- Example of combined value

---

### Animation & Interactivity

1. **Hover on workflow card** - Highlights card, shows detail panel below
2. **Hover on solution combo pill** - Highlights relevant workflow stages
3. **Narration sync** - Progress through stages during audio playback (same pattern as Slide 10)
4. **Transitions** - `animate-fade-in` on detail panel, `transition-all duration-200` on cards

---

### Solution Icon Mapping

Use existing icons from the codebase:

| Solution | Icon | Color |
|----------|------|-------|
| Strategic | Target | blue-500 |
| Market | TrendingUp | sky-400 |
| Competitive | Users / Swords | cyan-400 |
| Innovation | Lightbulb | teal-400 |
| Sales | Truck | green-400 |

---

### Implementation Steps

1. **Create new data structures** - `workflowStages` and `solutionCombos` arrays with questions, solutions, and combination messaging
2. **Update component state** - Add `activeStage` state and narration sync logic (copy pattern from `GDSlide10Solutions.tsx`)
3. **Build Solution Combo Pills** - Horizontal row of clickable combo examples
4. **Redesign Workflow Cards** - Replace static cards with interactive version showing multiple solution icons per stage
5. **Create Detail Panel** - Dynamic panel showing stage questions and solution applications
6. **Update title/subtitle** - "Solutions That Combine for Greater Advantage" / "Connected intelligence across every workflow stage"
7. **Update narration** in `globalDataNarration.ts` - Script for the new interactive slide

---

### Technical Details

**Props interface** (unchanged):
```tsx
interface SlideNarrationProps {
  isPlaying?: boolean;
  isLoading?: boolean;
  progress?: number;
  hasCompleted?: boolean;
  onPlay?: () => void;
  onPause?: () => void;
  onNextSlide?: () => void;
}
```

**Narration step timings** (similar to Slide 10):
```tsx
const stepTimings = [
  { index: 0, startPercent: 15 },  // Trend & Strategy
  { index: 1, startPercent: 30 },  // White Space
  { index: 2, startPercent: 45 },  // Concept Screening
  { index: 3, startPercent: 60 },  // Market Entry
  { index: 4, startPercent: 75 },  // Post-Launch
];
```

---

### Expected Outcome

The improved Slide 5 will:
1. **Show solution combinations** - Not just individual solutions, but how they work together
2. **Map to real workflows** - Based on actual business questions from the PDF
3. **Be interactive** - Users can explore which solutions apply where
4. **Reinforce key messaging** - "Where to Play", "How to Win", "How to Execute" framework
5. **Demonstrate compound value** - Each stage builds on the previous with connected intelligence

