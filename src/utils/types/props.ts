import { Region, RegionHighlightsItem } from "./region";

export interface ContainerProps {
  children: React.ReactNode;
}

export interface ButtonProps {
  children: React.ReactNode;
  isBlur?: boolean;
  basic?: boolean;
  mdRadiusBorder?: boolean;
  transparent?: boolean;
}

export interface RegionListProps {
  elRef: React.MutableRefObject<HTMLInputElement | null>;
}

export interface RegionHighlightsItemProps {
  list: RegionHighlightsItem[];
  isReviewType?: boolean;
}

export interface RegionItemProps {
  region: Region;
}

export interface TripDescriptionProps {
  elRef: React.MutableRefObject<HTMLInputElement | null>;
}
