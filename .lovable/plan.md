

## Merge Slide 11's Best Features into Slide 4 and Remove Slide 11

### Summary

Enhance the existing Slide 4 (Proposition) by adding the richest content from Slide 11 (Solution Deep Dives) into the `SolutionValuePanel` component, then remove Slide 11 entirely. This creates a more complete explanation of each solution when users interact with the Connected Intelligence Wheel.

---

### What Makes Slide 11 Valuable (Best Bits to Keep)

| Element | Why It's Valuable | Include in Slide 4? |
|---------|------------------|---------------------|
| **Jobs to Be Done (JTBD)** | Clear "When...I want to...So that" format | Yes - condensed version |
| **Pain to Capability to Outcome** | Shows transformation story | Yes - top 1-2 items |
| **Real-Life Example** | Credibility with brand/challenge/result | Yes - condensed version |
| **Key Capabilities** | Tag cloud of what's included | Yes - 4-5 top capabilities |
| **Role Use Cases** | CMO/CSO/Category Lead personas | No - too detailed for overview |
| **CTA Buttons** | "Let's Discuss" / "Download Briefs" | No - move to final slide |

---

### Current State

**Slide 4 (`GDSlide4Proposition.tsx`):**
- Connected Intelligence Wheel (left)
- Simple `SolutionValuePanel` (right) showing:
  - Icon + headline
  - One-liner description
  - Outcome callout

**Slide 11 (`GDSlide11SolutionDeepDives.tsx`):**
- Tabbed interface with 5 solutions
- Rich content per solution:
  - JTBD statement
  - 3 pain-to-capability mappings
  - Real-life example with brand/action/result
  - Key capabilities tags
  - Role use cases

---

### Proposed Solution: Enhanced SolutionValuePanel

Transform the simple value panel into a richer "mini deep dive" that shows:

```text
+----------------------------------------+
| [Icon] Strategic Intelligence          |
|----------------------------------------|
| One-liner description...               |
|----------------------------------------|
| JOBS TO BE DONE                        |
| When [scenario]... I want to [action]  |
| So that [outcome]                      |
|----------------------------------------|
| FROM PAIN TO OUTCOME                   |
| [Pain] -> [Capability] -> [Outcome]    |
|----------------------------------------|
| REAL EXAMPLE                           |
| Brand: [name]                          |
| Result: [metric]                       |
|----------------------------------------|
| [Cap1] [Cap2] [Cap3] [Cap4]            |
+----------------------------------------+
```

---

### Data Changes

**Enhance `SolutionValuePanel.tsx`** to import data from `solutionDeepDives.ts`:

The existing `solutionDeepDives` data already contains everything needed:
- `jtbd` - Jobs to be done
- `painToCapability[0]` - First pain/capability/outcome mapping
- `example` - Brand, challenge, result
- `capabilities` - Array of capability tags

We'll map the current segment names to solution IDs:
```typescript
const segmentToSolutionId: Record<string, string> = {
  "Strategic Intelligence": "strategic",
  "Market Intelligence": "market",
  "Competitor Intelligence": "competitive",
  "Innovation Intelligence": "innovation",
  "Sales Intelligence": "sales",
};
```

---

### File Changes

#### 1. Update `SolutionValuePanel.tsx`

**Changes:**
- Import `solutionDeepDives` data
- Add segment-to-solution ID mapping
- Expand panel content to show JTBD, pain-to-outcome, example, and capabilities
- Use `AnimatePresence` + `motion.div` for smooth transitions

**New structure:**

```tsx
// Import the rich data
import { solutionDeepDives } from "@/data/solutionDeepDives";

// Map wheel segment names to solution IDs
const segmentToSolutionId: Record<string, string> = {
  "Strategic Intelligence": "strategic",
  "Market Intelligence": "market",
  "Competitor Intelligence": "competitive",
  "Innovation Intelligence": "innovation",
  "Sales Intelligence": "sales",
};

// In the component:
const solutionId = activeSolution ? segmentToSolutionId[activeSolution] : null;
const deepDive = solutionId 
  ? solutionDeepDives.find(s => s.id === solutionId) 
  : null;
```

**New panel content (active state):**

```tsx
<motion.div className="h-full bg-card/50 border rounded-xl p-4 overflow-y-auto">
  {/* Header: Icon + Title */}
  <div className="flex items-center gap-3 mb-3">
    <IconComponent />
    <h3 className="text-lg font-bold">{deepDive.label}</h3>
  </div>
  
  {/* JTBD Section - Condensed */}
  <div className="mb-3 p-3 bg-card/60 rounded-lg border">
    <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">
      Jobs to Be Done
    </p>
    <p className="text-sm">
      <span className="text-primary">When</span> {deepDive.jtbd.when}...
      <span className="text-primary">I want to</span> {deepDive.jtbd.iWantTo}
      <span className="text-primary">so that</span> {deepDive.jtbd.soThat}.
    </p>
  </div>
  
  {/* Pain to Outcome - First item only */}
  <div className="mb-3 p-3 bg-card/60 rounded-lg border">
    <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">
      From Pain to Outcome
    </p>
    <div className="flex items-center gap-2 text-sm">
      <span className="text-destructive">{pain}</span>
      <ArrowRight className="w-3 h-3" />
      <span className="text-foreground">{capability}</span>
      <ArrowRight className="w-3 h-3" />
      <span className="text-accent font-medium">{outcome}</span>
    </div>
  </div>
  
  {/* Real Example - Condensed */}
  <div className="mb-3 p-3 bg-primary/10 rounded-lg border border-primary/20">
    <p className="text-xs font-semibold text-primary uppercase mb-1">
      Real Example
    </p>
    <p className="text-xs text-muted-foreground">{deepDive.example.brand}</p>
    <p className="text-sm font-medium text-foreground mt-1">
      {deepDive.example.result}
    </p>
  </div>
  
  {/* Capabilities - Tags */}
  <div className="flex flex-wrap gap-1.5">
    {deepDive.capabilities.slice(0, 4).map(cap => (
      <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">
        {cap}
      </span>
    ))}
  </div>
</motion.div>
```

#### 2. Remove Slide 11

**File: `src/pages/GlobalDataDeck.tsx`**

Remove from imports:
```tsx
// DELETE this line
import GDSlide11SolutionDeepDives from "@/components/globaldata-slides/GDSlide11SolutionDeepDives";
```

Update slides array (remove last entry):
```tsx
const slides = [
  { id: "gd-slide-0", label: "Title" },
  { id: "gd-slide-1", label: "Market Reality" },
  { id: "gd-slide-2", label: "Intelligence Gap" },
  { id: "gd-slide-3", label: "Transformation" },
  { id: "gd-slide-4", label: "The Proposition" },
  { id: "gd-slide-5", label: "Value Chain" },
  { id: "gd-slide-6", label: "Capability Stack" },
  { id: "gd-slide-7", label: "Your Roadmap" },
  { id: "gd-slide-8", label: "ROI" },
  { id: "gd-slide-9", label: "Why GlobalData" },
  { id: "gd-slide-10", label: "Connected Solutions" },
  // DELETE: { id: "gd-slide-11", label: "Solution Deep Dives" },
];
```

Remove from render:
```tsx
// DELETE this line
<GDSlide11SolutionDeepDives {...getNarrationProps(11)} />
```

#### 3. Update Narration (Optional)

**File: `src/data/globalDataNarration.ts`**

Remove narration entry for slideId 11 (lines 197-216) since the slide no longer exists.

Update Slide 4 narration to mention the interactive deep-dive capability:
```typescript
{
  slideId: 4,
  title: "Connected Intelligence for Consumer Brands",
  script: `This is Connected Intelligence for Consumer Brands. It closes the Intelligence Gap.

A unified solution that connects market, consumer, competitor, innovation, and commercial intelligence into one trusted system—so organisations move faster, align better, and act with confidence.

Hover over each segment of the wheel to explore. You'll see the specific jobs each solution does, the pains it solves, and real examples from consumer brands like yours.

This is intelligence designed to drive decisions end-to-end—not another layer of data.`,
  voiceId: DEFAULT_VOICE_ID,
},
```

---

### Visual Layout Comparison

**Before (Slide 4 panel):**
```text
+------------------------+
| [Icon] Strategic       |
| One-liner text...      |
| ┌──────────────────┐   |
| │ OUTCOME          │   |
| │ Text...          │   |
| └──────────────────┘   |
+------------------------+
```

**After (Enhanced panel):**
```text
+------------------------+
| [Icon] Strategic       |
|------------------------|
| JOBS TO BE DONE        |
| When...I want to...    |
|------------------------|
| PAIN -> OUTCOME        |
| [Pain] -> [Outcome]    |
|------------------------|
| REAL EXAMPLE           |
| Brand: Result...       |
|------------------------|
| [Cap] [Cap] [Cap]      |
+------------------------+
```

---

### Animation Details

- Use `framer-motion` for smooth panel content transitions
- `AnimatePresence` with `mode="wait"` for crossfade between solutions
- Keep the existing `animate-fade-in` class as fallback

---

### Files to Modify

| File | Action |
|------|--------|
| `src/components/globaldata-slides/SolutionValuePanel.tsx` | Major update - add rich content |
| `src/pages/GlobalDataDeck.tsx` | Remove Slide 11 import, slides array entry, and render |
| `src/data/globalDataNarration.ts` | Remove slideId 11 entry, update slideId 4 script |
| `src/components/globaldata-slides/GDSlide11SolutionDeepDives.tsx` | Delete file (optional cleanup) |

---

### Implementation Steps

1. Update `SolutionValuePanel.tsx` to import `solutionDeepDives` and display rich content
2. Add segment-to-solution ID mapping for data lookup
3. Restructure panel layout with JTBD, pain-to-outcome, example, and capabilities sections
4. Add framer-motion animations for smooth transitions
5. Remove Slide 11 from `GlobalDataDeck.tsx` (import, slides array, render)
6. Update narration for Slide 4 to mention the interactive exploration
7. Remove Slide 11 narration entry
8. Delete `GDSlide11SolutionDeepDives.tsx` file (optional cleanup)

