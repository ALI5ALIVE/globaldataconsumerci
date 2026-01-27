
## Goal
Make the apex (Level 5) reliably selectable so clicking it updates the copy/details panel to the PREDICTIVE stage.

## What’s actually going wrong (based on code)
- In `GDSlide6ValuePyramid.tsx`, `onModuleClick` is wired to `handleModuleClick`.
- `handleModuleClick` **always forces the active stage to "MANAGED"**:
  - `setActiveLayerId("MANAGED")`
- In `GDPyramid3D.tsx` (Layer 5 foreignObject), the AVA icon container currently has:
  - `onPointerDownCapture={() => onLayerClick(5)}` on the wrapper (good)
  - BUT the inner AVA card has `onClick={() => handleModuleClick("ava")}` (bad for stage navigation)
- Result: even if the pointer-down capture selects level 5 briefly, the subsequent click event triggers `handleModuleClick("ava")`, which forces the stage back to MANAGED. To the user it looks like “Level 5 clicking doesn’t work”.

## Fix strategy (minimal + consistent with your other pyramid)
We will prevent the apex AVA icon from triggering the module-click pathway (which is intended for Level 2 “silos”), and ensure the apex click only selects Level 5.

### Primary fix (recommended): remove module click from the apex AVA element
**File:** `src/components/globaldata-slides/GDPyramid3D.tsx`

**Change Layer 5 foreignObject block:**
1. Remove `onClick={() => handleModuleClick("ava")}` from the inner AVA card.
2. Make sure the wrapper handles the “select Level 5” action:
   - Keep `onPointerDownCapture={() => onLayerClick(5)}`
   - Add `onClick={() => onLayerClick(5)}` as a fallback (helps across browsers and input types)
3. Ensure the inner AVA card does not intercept pointer events:
   - Add `pointer-events-none` to the inner AVA card (or at least to the Sparkles icon container)
4. Preserve the hover “scale up” effect without needing pointer events on the inner element:
   - Add `group` to the wrapper
   - Change inner scaling class from `hover:scale-110` to `group-hover:scale-110`

**Net result:** Clicking the AVA icon (or anywhere inside the apex foreignObject) consistently triggers `onLayerClick(5)` and cannot be overridden by the “module click forces MANAGED” logic.

### Secondary hardening (optional but very safe): ignore non-silo modules in Slide 6 handler
If you want to keep the concept of “module clicks” but limit them to the 5 Level-2 silos only:

**File:** `src/components/globaldata-slides/GDSlide6ValuePyramid.tsx`

Update `handleModuleClick` to only force MANAGED for known Level-2 module IDs:
- Allowed: `nielseniq`, `circana`, `kantar`, `euromonitor`, `mintel`
- If `module === "ava"` (or anything else), do nothing (or optionally set stage 5)

This is defensive, but the primary fix above should already resolve the apex issue.

## How we’ll validate the fix
1. Go to Slide 6 (“Where Is Your Organisation Today?”).
2. Click Level 1, Level 2 silos, Level 3, Level 4: confirm they still update the copy box.
3. Click the apex AVA icon:
   - Expected: copy box updates to “Predictive & Adaptive Category Performance” (Stage 5).
4. Click Level 2 silos again:
   - Expected: stage changes to 2 and highlights the silo module as before.

## Files involved
- `src/components/globaldata-slides/GDPyramid3D.tsx` (required)
- `src/components/globaldata-slides/GDSlide6ValuePyramid.tsx` (optional hardening)

## Why this approach
- It matches the working pattern in your homepage pyramid (`Pyramid3D.tsx`): apex visuals should not route into “module click” logic that’s meant for lower-level sections.
- It removes the event-handler conflict instead of trying to “fight” it with more pointer capture handlers.
