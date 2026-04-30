import type { SlideSpec } from "../../slideSpec";
import { PPTX_BRAND, addTitleBlock, addCard } from "@/lib/pptxBrand";

const C = PPTX_BRAND.color;
const W = PPTX_BRAND.size.w;

/** Slide 2 — Monday Morning inbox (CPSlide1MondayMorning). 7 unread emails. */
export const mondayMorningSpec: SlideSpec = {
  label: "Monday Morning",
  build: (slide) => {
    addTitleBlock(slide, {
      eyebrow: "Monday Morning",
      title: "Your inbox is already on fire.",
      subtitle: "One opportunity. Seven teams. Seven answers. Which one do you trust?",
    });

    const emails = [
      { from: "Board · Strategy", subj: "Plant-based protein position by Friday", time: "08:02" },
      { from: "Mintel", subj: "Category peaking in EU markets", time: "08:14" },
      { from: "Brandwatch", subj: "Social signal accelerating, not declining", time: "08:21" },
      { from: "Finance", subj: "TAM model v3 attached — supersedes v2", time: "08:33" },
      { from: "IP Watch", subj: "Competitor filed 4 patents (last 14 days)", time: "08:41" },
      { from: "Innovation", subj: "Concept scorecards ready for review", time: "08:55" },
      { from: "Sales", subj: "Tesco buyer wants briefing Wednesday", time: "09:02" },
    ];

    const x = 0.5;
    const w = W - 1;
    const top = 3.0;
    const rowH = 0.5;
    const gap = 0.08;

    emails.forEach((e, i) => {
      const y = top + i * (rowH + gap);
      addCard(slide, x, y, w, rowH, { fill: C.surface });
      // Unread dot
      slide.addShape("ellipse", {
        x: x + 0.18, y: y + rowH / 2 - 0.08, w: 0.16, h: 0.16,
        fill: { color: C.primary }, line: { type: "none" },
      });
      slide.addText(e.from, {
        x: x + 0.45, y, w: 2.8, h: rowH,
        fontFace: PPTX_BRAND.font.display, fontSize: 11, bold: true, color: C.ink,
        valign: "middle", margin: 0,
      });
      slide.addText(e.subj, {
        x: x + 3.3, y, w: w - 4.5, h: rowH,
        fontFace: PPTX_BRAND.font.body, fontSize: 11, color: C.inkSoft,
        valign: "middle", margin: 0,
      });
      slide.addText(e.time, {
        x: x + w - 1.0, y, w: 0.85, h: rowH,
        fontFace: PPTX_BRAND.font.body, fontSize: 10, color: C.muted,
        align: "right", valign: "middle", margin: 0,
      });
      // Unread pill
      slide.addShape("roundRect", {
        x: x + w - 0.15 - 0.6, y: y + rowH / 2 - 0.13, w: 0.6, h: 0.26,
        fill: { color: C.primarySoft }, line: { type: "none" },
        rectRadius: 0.13,
      });
      slide.addText("UNREAD", {
        x: x + w - 0.75, y: y + rowH / 2 - 0.13, w: 0.6, h: 0.26,
        fontFace: PPTX_BRAND.font.body, fontSize: 7, bold: true, color: C.primary,
        align: "center", valign: "middle", charSpacing: 2, margin: 0,
      });
    });
  },
};
