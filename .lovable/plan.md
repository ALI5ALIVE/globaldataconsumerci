
Goal
- Fix the bottom-left footer text (“© 2026 GlobalData · Connected Consumer Intelligence Platform”) and bottom-right page number being cut off at the bottom of each GlobalData slide.

What I found (current cause)
- In `src/components/globaldata-slides/GDSlideContainer.tsx`, both elements are positioned outside the slide container:
  - Footer: `className="absolute -bottom-10 left-0 ..."`
  - Slide number: `className="absolute -bottom-10 right-0"`
- The slide `<section>` uses `overflow-hidden`, so anything positioned below the container edge gets clipped.

Proposed fix (minimal + consistent with your layout guidelines)
1) Reposition footer and slide number inside the visible area
- File: `src/components/globaldata-slides/GDSlideContainer.tsx`
- Change:
  - Footer wrapper from `absolute -bottom-10 left-0` to `absolute bottom-0 left-0`
  - Slide number wrapper from `absolute -bottom-10 right-0` to `absolute bottom-0 right-0`
- Keep them inside the `max-w-7xl` container so they remain aligned to the content block (not the viewport edges).

2) Add a small “safe” bottom inset (optional but recommended)
Why: Even with `bottom-0`, some browsers (and some OS zoom settings) can clip very small text sitting exactly on the edge.
- Add a tiny bottom offset:
  - Use `bottom-1` or `bottom-2` instead of `bottom-0`
  - Or add `pb-2` to the `max-w-7xl` wrapper and keep `bottom-0`
I will implement the smallest change that guarantees visibility without affecting the “zero-scroll” layouts.

Acceptance criteria (how we’ll verify)
- On a standard laptop screen (e.g., 1366×768), every GlobalData slide shows:
  - Bottom-left: “© 2026 GlobalData · Connected Consumer Intelligence Platform”
  - Bottom-right: the slide number
- No clipping occurs even when the slide container keeps `overflow-hidden`.
- Elements remain aligned to the content container (max-w-7xl), consistent across slides.

Files to change
- `src/components/globaldata-slides/GDSlideContainer.tsx`

Implementation steps
1) Edit `GDSlideContainer.tsx`
2) Replace both `-bottom-10` classes with an in-bounds bottom positioning (and add a small bottom inset if needed)
3) Quick visual check in the GlobalData deck across multiple slides to confirm consistent visibility

Notes / edge cases
- The footer is currently `hidden sm:block` (it won’t show on very small screens by design). This fix targets the “cut off” issue on standard/desktop screens; if you also want it visible on mobile, we can adjust that separately.
