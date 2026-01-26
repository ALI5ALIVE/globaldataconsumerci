

## Hide Slide 11 (Connected Solutions) from GlobalData Deck

### Overview

Remove the "Connected Solutions" slide (currently displayed as slide 10) from the GlobalData presentation deck. This involves removing the slide component from the rendering, updating the slides array for navigation, and adjusting the agenda items on the title slide.

---

### Technical Implementation

#### 1. Remove Slide from Navigation Array

**File:** `src/pages/GlobalDataDeck.tsx`

**Line 27** - Remove the last entry from the slides array:

```tsx
// Current
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
  { id: "gd-slide-10", label: "Connected Solutions" },  // Remove this line
];

// New
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
];
```

---

#### 2. Remove Slide Component from Render

**File:** `src/pages/GlobalDataDeck.tsx`

**Line 14** - Remove the import:
```tsx
// Remove this import
import GDSlide10Solutions from "@/components/globaldata-slides/GDSlide10Solutions";
```

**Line 201** - Remove the slide component:
```tsx
// Remove this line
<GDSlide10Solutions {...getNarrationProps(10)} />
```

---

#### 3. Update "Why GlobalData" Slide to be Final Slide

**File:** `src/components/globaldata-slides/GDSlide9WhyGlobalData.tsx`

Update the `onNextSlide` behavior - since this is now the last slide, ensure the narration doesn't try to navigate to a non-existent slide (this is handled automatically by the `getNarrationProps` function which checks `slideId < slides.length - 1`).

No code change needed - the logic already handles this correctly.

---

### Summary of Changes

| File | Change |
|------|--------|
| `GlobalDataDeck.tsx` (Line 14) | Remove `GDSlide10Solutions` import |
| `GlobalDataDeck.tsx` (Line 27) | Remove `gd-slide-10` from slides array |
| `GlobalDataDeck.tsx` (Line 201) | Remove `<GDSlide10Solutions />` component |

---

### Result

After these changes:
- The deck will have **10 slides** (0-9)
- Navigation dots will show 10 slides instead of 11
- Header counter will show "X / 10"
- "Why GlobalData" becomes the final slide
- The "Connected Solutions" slide component files remain in the codebase (can be re-enabled later if needed)

