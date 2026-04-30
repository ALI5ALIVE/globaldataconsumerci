import type pptxgen from "pptxgenjs";

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
  build: (slide: pptxgen.Slide, ctx: SlideContext) => Promise<void> | void;
}
