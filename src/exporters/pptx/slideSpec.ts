import type pptxgen from "pptxgenjs";
import type { GdLayoutKey } from "./gdMasterLayouts";

export interface SlideContext {
  logo: string;
  index: number;
  total: number;
  deckLabel: string;
}

export interface SlideSpec {
  label: string;
  /** Variant controls master chrome (light = body slide, dark = hero/title). */
  variant?: "light" | "dark";
  /** Set to false to skip the standard chrome for fully custom layouts. */
  chrome?: boolean;
  /**
   * Optional GlobalData master layout to attach via post-merge. The post
   * processor in `gdMasterMerge.ts` re-points the slide's layout relationship
   * at the matching `slideLayoutN.xml` from `gd_master.pptx`. When omitted
   * we default to `Content` (the most flexible body layout).
   */
  gdLayout?: GdLayoutKey;
  build: (slide: pptxgen.Slide, ctx: SlideContext) => Promise<void> | void;
}
