

# Plan: Move Play Button to Top Right Corner

## Overview

Relocate the narration play/pause button from the center of the slide to the top right corner so it doesn't obstruct the visual content on any slide.

## Current State

- The play button is positioned at **center of viewport** using:
  ```
  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
  ```
- This places an 80x80px button directly over the slide content
- The "Next slide" button appears below it after narration completes

## Proposed Position

Move the button to the **top right corner**, aligned with the slide content container:

| Element | Current | Proposed |
|---------|---------|----------|
| Position | Center of viewport | Top right corner |
| CSS Classes | `left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2` | `top-6 right-6 sm:top-8 sm:right-10` |
| Button Size | 80x80px (w-20 h-20) | 56x56px (w-14 h-14) - slightly smaller for corner placement |
| Icon Size | 32x32px (w-8 h-8) | 24x24px (w-6 h-6) |
| Next Slide Button | Below play button | To the left of play button |

## Visual Layout

```text
┌─────────────────────────────────────────────────────────────────────┐
│                                                     [Next] [▶️]     │  ← Top right
│  Title                                                              │
│  Subtitle                                                           │
│                                                                     │
│                                                                     │
│            [SLIDE CONTENT - NOW UNOBSTRUCTED]                       │
│                                                                     │
│                                                                     │
│  Footer                                                  Slide #    │
└─────────────────────────────────────────────────────────────────────┘
```

## Technical Changes

### File: `src/components/SlidePlayButton.tsx`

1. **Update container positioning**:
   - Change from centered to top-right corner
   - Adjust flex direction for horizontal layout (play + next side-by-side)

2. **Reduce button size for corner placement**:
   - Main button: `w-14 h-14` (from `w-20 h-20`)
   - SVG progress ring: viewBox adjusted to 56x56
   - Icon size: `w-6 h-6` (from `w-8 h-8`)

3. **Update "Next slide" button layout**:
   - Display inline to the left of the play button
   - Adjust flex direction to `flex-row-reverse` for natural tab order

## Files to Modify

| File | Change |
|------|--------|
| `src/components/SlidePlayButton.tsx` | Reposition to top right, resize button, horizontal layout |

## Outcome

- Play button positioned unobtrusively in the top right corner of all slides
- Full slide content visible without any central obstruction
- Consistent placement across both GlobalData and Comply365 decks
- Smaller button size appropriate for corner UI element

