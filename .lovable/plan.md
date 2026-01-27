
# Fix Pyramid Layer Click-to-Copy-Box Mapping

## Problem Summary

When clicking on pyramid layers on the Index page ("/"), the copy box (details panel) does not update to reflect the clicked layer correctly. This is caused by a **level numbering mismatch** between the visual pyramid (`Pyramid3D.tsx`) and the data model (`CategoryPyramid.tsx`).

## Root Cause Analysis

**Visual Pyramid (`Pyramid3D.tsx`):**
- Level 1 = Base of pyramid (visually red - FRAGMENTED area)
- Level 5 = Apex of pyramid (visually gold - PREDICTIVE area)

**Data Model (`CategoryPyramid.tsx`):**
- PREDICTIVE has `level: 1` (should be 5)
- CLOSED_LOOP has `level: 2` (should be 4)
- CONNECTED has `level: 3` (correct)
- MANAGED has `level: 4` (should be 2)
- FRAGMENTED has `level: 5` (should be 1)

When a user clicks the visual base layer (which fires `onLayerClick(1)`), the handler looks for a layer with `level: 1`, which is PREDICTIVE - but visually that's the apex. The mapping is inverted.

---

## Solution

Correct the level numbers in `CategoryPyramid.tsx` to match the visual pyramid structure (Level 1 = Base/FRAGMENTED, Level 5 = Apex/PREDICTIVE).

### File: `src/components/CategoryPyramid.tsx`

| Layer ID | Current Level | Correct Level |
|----------|---------------|---------------|
| PREDICTIVE | 1 | 5 |
| CLOSED_LOOP | 2 | 4 |
| CONNECTED | 3 | 3 |
| MANAGED | 4 | 2 |
| FRAGMENTED | 5 | 1 |

**Specific line changes:**

| Line | Current | Change To |
|------|---------|-----------|
| 11 | `level: 1,` | `level: 5,` |
| 47 | `level: 2,` | `level: 4,` |
| 81 | `level: 3,` | `level: 3,` (no change) |
| 116 | `level: 4,` | `level: 2,` |
| 149 | `level: 5,` | `level: 1,` |

Also update the `handleModuleClick` function to set the correct layer when a foundation module is clicked:

| Line | Current | Change To |
|------|---------|-----------|
| 243 | `setActiveLayerId("CONNECTED");` | `setActiveLayerId("MANAGED");` |

---

## Technical Details

The `handleLayerClick` function at line 233 uses `layersData.find((l) => l.level === level)` to map the clicked visual level to a data layer. With corrected level numbers:

- Clicking visual base (level 1) finds FRAGMENTED (level: 1)
- Clicking visual apex (level 5) finds PREDICTIVE (level: 5)

This ensures the copy box displays the correct content for each clicked pyramid layer.

---

## Expected Outcome

1. Clicking any pyramid layer updates the details panel (copy box) to show the correct stage information
2. Visual-to-data mapping is consistent:
   - Base layer click shows FRAGMENTED content
   - Apex layer click shows PREDICTIVE content
3. Auto-cycle and manual navigation continue to work correctly
4. Foundation module clicks (Safety, Content, Training) correctly select the MANAGED stage
