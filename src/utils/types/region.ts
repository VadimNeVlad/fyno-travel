export interface Region {
  id: number;
  name: string;
  label: string;
  info: string[];
  description: string;
  regionHighlights: RegionHighlightsItem[];
  regionPlaces: RegionHighlightsItem[];
}

export interface RegionHighlightsItem {
  id: number;
  name: string;
  image: string;
  curatorPick: boolean;
  info: string[];
  score?: string;
}
