

## Add Confidence Dimension & Align Impacts to Root Causes

### Summary
Update Slide 2 (The Intelligence Gap) to include Confidence as a fourth root cause on the left, and restructure the layout so each impact is directly paired with its corresponding dimension.

---

### Current State

| Left Side (Root Causes) | Right Side (Impacts) |
|------------------------|---------------------|
| Breadth | Speed, Breadth |
| Alignment | Alignment, Confidence |
| Speed | (2x2 grid) |

**Problem**: Confidence only appears on the right (impacts), not on the left (root causes).

---

### Proposed Changes

#### 1. Add Confidence Root Cause

Add a fourth root cause card for Confidence with appropriate icon and messaging:

```typescript
{ 
  icon: ShieldAlert, // or similar icon like ShieldQuestion
  title: "Throughout: Confidence—Decisions Stall", 
  desc: "Without unified intelligence, teams hesitate",
  detail: "Gut feel replaces shopper truth",
  badge: "CONFIDENCE"
}
```

#### 2. Restructure Layout to Pair Dimensions

Instead of separating root causes (left) and impacts (right), combine them into four unified dimension cards:

**New Layout Option A - Four Paired Cards (2x2 Grid)**:
Each card shows:
- Dimension badge (BREADTH, ALIGNMENT, SPEED, CONFIDENCE)
- Root cause description
- Quantified impact

**New Layout Option B - Keep Split but Add Confidence**:
- Left: 4 root causes (Breadth, Alignment, Speed, Confidence)
- Right: 4 impacts aligned in same order

---

### Recommended Approach: Option B (Minimal Visual Change)

Keep the existing two-column layout but:
1. Add Confidence as 4th root cause on left
2. Reorder impacts to match the left column order: Breadth → Alignment → Speed → Confidence

#### Updated Root Causes Array

```typescript
const rootCauses = [
  { 
    icon: Layers, 
    title: "First: Breadth—Signals Fragment", 
    desc: "Consumer insights in one system, POS in another",
    detail: "Incomplete shopper picture",
    badge: "BREADTH"
  },
  { 
    icon: MessageSquareWarning, 
    title: "Then: Alignment—Teams Debate Sources", 
    desc: "Which data do we trust for this launch?",
    detail: "No shared truth to act on",
    badge: "ALIGNMENT"
  },
  { 
    icon: Clock, 
    title: "Next: Speed—The Shelf Window Closes", 
    desc: "Competitor launched while you validated",
    detail: "Category share lost",
    badge: "SPEED"
  },
  { 
    icon: ShieldAlert, 
    title: "Finally: Confidence—Decisions Stall", 
    desc: "Without unified intelligence, teams hesitate",
    detail: "Gut feel replaces shopper truth",
    badge: "CONFIDENCE"
  },
];
```

#### Updated Impacts Array (Reordered)

```typescript
const impacts = [
  { value: "3-5", label: "sources", desc: "to reconcile per NPD decision", dimension: "Breadth" },
  { value: "40%", label: "of NPD", desc: "misses the consumer moment", dimension: "Alignment" },
  { value: "12wks", label: "=", desc: "2 missed seasonal windows", dimension: "Speed" },
  { value: "68%", label: "of teams", desc: "lack confidence to act fast", dimension: "Confidence" },
];
```

---

### Visual Alignment

The left and right columns will now mirror each other:

| Left (Why It Exists) | Right (Quantified Impact) |
|---------------------|--------------------------|
| BREADTH: Signals Fragment | 3-5 sources to reconcile |
| ALIGNMENT: Teams Debate | 40% of NPD misses moment |
| SPEED: Window Closes | 12wks = 2 missed windows |
| CONFIDENCE: Decisions Stall | 68% lack confidence |

---

### File Changes

| File | Changes |
|------|---------|
| `src/components/globaldata-slides/GDSlide2IntelligenceGap.tsx` | Add ShieldAlert import, add 4th root cause, reorder impacts array |

---

### Technical Details

1. **Import Update**: Add `ShieldAlert` from lucide-react
2. **Root Causes**: Add 4th item for Confidence dimension
3. **Impacts**: Reorder to match left column sequence (Breadth, Alignment, Speed, Confidence)
4. **Layout**: Keep existing grid but impacts will now show in stacked order (grid-cols-1) to align visually with the 4 root causes, or maintain 2x2 with matching positions

