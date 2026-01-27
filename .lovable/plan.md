

# Remove GlobalData Logo from All Slides

## Summary

The GlobalData logo SVG is currently displayed on all slides in the presentation. It will be removed from both locations where it appears.

---

## Files to Modify

### 1. `src/components/globaldata-slides/GDSlideContainer.tsx`

**Remove logo import and display:**
- Line 4: Remove `import globalDataLogo from "@/assets/globaldata-logo-white.svg";`
- Lines 66-71: Remove the logo container div entirely

### 2. `src/components/globaldata-slides/GDSlide0Title.tsx`

**Remove logo import and display:**
- Line 4: Remove `import globalDataLogo from "@/assets/globaldata-logo-white.svg";`
- Lines 66-69: Remove the logo display section

---

## Expected Outcome

All 10 slides in the GlobalData presentation will no longer display the GlobalData logo. The layout will adjust naturally as the logo space is freed up, with the title/subtitle content remaining in place.

