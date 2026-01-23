

## Remove Small Labels and Connect Pyramid Layers Directly to Details Panel

### Current Issue
The pyramid has small label boxes on the right side with 18px/15px fonts that are too small to read. Users should instead see lines connecting each layer directly to the main copy box (GDDetailsPanel) which has the full description in readable text.

### Proposed Changes

#### 1. Remove Small Label Boxes from GDPyramid3D.tsx

Remove these elements that currently render for each layer:
- The horizontal connector lines (`lineStartX` to `lineEndX`)
- The small label rectangles (100px wide boxes)
- The foreignObject text elements with label/sublabel

**Elements to remove:**
- `labelPositions` constant and its usage
- The `<line>` elements connecting layers to labels
- The `<rect>` background boxes for labels
- The `<foreignObject>` containing label text

#### 2. Add Connection Line to Details Panel

Add a single animated connector line from the active layer to the edge of the SVG, indicating it connects to the details panel beside it:

```text
Active layer center -> Right edge of viewBox
```

This line will:
- Originate from the center-right of the currently active layer
- Extend horizontally to the right edge of the SVG
- Use the active layer's color for visual connection
- Animate when the active layer changes

#### 3. Update ViewBox

Since we're removing the label area on the right, we can reduce the viewBox width:

**Current:** `0 0 2000 1370`  
**New:** `0 0 1700 1370`

This gives the pyramid more prominence and removes empty space where labels used to be.

### Technical Implementation

**File: `src/components/globaldata-slides/GDPyramid3D.tsx`**

1. Delete `labelPositions` constant (around lines 116-122)
2. Remove the label rendering section that includes:
   - `<line>` connector elements
   - `<rect>` label background boxes  
   - `<foreignObject>` with label text
3. Add single connector line from active layer to right edge
4. Update viewBox from `0 0 2000 1370` to `0 0 1700 1370`

### Visual Result

| Before | After |
|--------|-------|
| 5 small label boxes with tiny text | No label boxes |
| Lines to each label | Single line from active layer to edge |
| Wide viewBox (2000px) | Narrower viewBox (1700px) |
| Labels compete with details panel | Details panel is the sole information source |

The GDDetailsPanel already shows all the information (headline, description, behavior shift, time allocation, ROI) in a readable format, so removing the redundant small labels simplifies the visual and improves readability.

