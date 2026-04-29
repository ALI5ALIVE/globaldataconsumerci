import type { BuildOpts, DeckId, ExportMode } from "./types";

type BuilderKey = `${DeckId}:${ExportMode}`;

export const DECK_BUILDERS: Record<BuilderKey, (opts: BuildOpts) => Promise<Blob>> = {
  "consumer-journey:pixel-perfect": (opts) =>
    import("./buildConsumerJourneyDeck").then((m) => m.buildConsumerJourneyDeck(opts)),
  "consumer-journey:editable": (opts) =>
    import("./buildConsumerJourneyEditable").then((m) =>
      m.buildConsumerJourneyEditable(opts),
    ),
};

export type { BuildOpts, DeckId, ExportMode };
