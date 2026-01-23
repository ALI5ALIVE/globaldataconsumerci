

## Update Title Slide Subtitle

### Change Required

Update the subtitle text on the title slide (Slide 0) to align with the sharpened enterprise-action narrative.

---

### Current Copy (lines 85-89)

```
How leading consumer brands are winning 
the moments that matter.
```

### New Copy

```
How leading consumer brands turn constant change into
faster, more confident growth and better category performance.
```

---

### Implementation

**File:** `src/components/globaldata-slides/GDSlide0Title.tsx`

**Lines 85-89:** Replace the current paragraph with the new copy, maintaining the same styling structure:

```tsx
<p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
  How leading consumer brands turn constant change into
  <br className="hidden sm:block" />
  <span className="text-primary font-medium">faster, more confident growth</span> and better category performance.
</p>
```

The key phrase "faster, more confident growth" will be highlighted with the primary color to maintain visual consistency with the current design pattern.

---

### Why This Works

The new subtitle directly connects to the narrative arc:
- **"constant change"** - acknowledges the market reality (Slide 1)
- **"faster, more confident growth"** - the outcome of closing the Intelligence Gap
- **"better category performance"** - the ultimate business result

This reinforces the enterprise-action focus rather than the softer "moments that matter" phrasing.

