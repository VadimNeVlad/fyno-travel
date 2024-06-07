import { RegionHighlightsItem } from "./region";

export interface Highlight {
  id: number;
  day: string;
  directionTime: string;
  highlightsItems: RegionHighlightsItem[];
}
