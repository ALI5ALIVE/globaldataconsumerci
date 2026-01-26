
# Fix Slide Numbering and Label Alignment

## Issue Summary

The slide **numbering is correct**, but there are **label inconsistencies** between:
1. The agenda items displayed on the Title Slide (GDSlide0Title.tsx)
2. The navigation dot labels in GlobalDataDeck.tsx

These inconsistencies could confuse users when hovering over navigation dots.

---

## Current Misalignments

| Slide | Agenda Label (Title Slide) | Nav Dot Label (GlobalDataDeck) | Status |
|-------|---------------------------|-------------------------------|--------|
| 1 | "Market Pressure" | "Market Reality" | ⚠️ Mismatch |
| 2 | "Intelligence Gap" | "Intelligence Gap" | ✓ Aligned |
| 3 | "Transformation" | "Transformation" | ✓ Aligned |
| 4 | "The Answer" | "The Proposition" | ⚠️ Mismatch |
| 5 | "Value Chain" | "Value Chain" | ✓ Aligned |
| 6 | "Your Position" | "Capability Stack" | ⚠️ Mismatch |
| 7 | "Your Roadmap" | "Your Roadmap" | ✓ Aligned |
| 8 | "The Return" | "ROI" | ⚠️ Mismatch |
| 9 | "Why GlobalData" | "Why GlobalData" | ✓ Aligned |

---

## Technical Solution

**Option A: Align Navigation Labels to Match Agenda (Recommended)**

Update the `slides` array in `GlobalDataDeck.tsx` to match the agenda items on the title slide, ensuring users see consistent labels throughout the presentation.

### File: `src/pages/GlobalDataDeck.tsx`

**Lines 16-28 - Update slides array:**

```text
Current:
{ id: "gd-slide-1", label: "Market Reality" }
{ id: "gd-slide-4", label: "The Proposition" }
{ id: "gd-slide-6", label: "Capability Stack" }
{ id: "gd-slide-8", label: "ROI" }

Change to:
{ id: "gd-slide-1", label: "Market Pressure" }
{ id: "gd-slide-4", label: "The Answer" }
{ id: "gd-slide-6", label: "Your Position" }
{ id: "gd-slide-8", label: "The Return" }
```

---

## Verification Checklist

After implementation:
- ✓ Slide 0 (Title) shows "00" in bottom-right
- ✓ Slides 1-9 show "01" through "09" respectively
- ✓ Header counter shows "1 / 10" through "10 / 10"
- ✓ Navigation dot hover labels match agenda items exactly
- ✓ Clicking agenda items navigates to correct slides

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/pages/GlobalDataDeck.tsx` | Update 4 labels in slides array (lines 18, 21, 23, 25) |

---

## Expected Outcome

Users will see consistent labels:
- When viewing the agenda grid on the title slide
- When hovering over navigation dots on the right side
- Both will use the same terminology for each slide
