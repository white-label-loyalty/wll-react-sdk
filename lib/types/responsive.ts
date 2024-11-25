export type DimensionMode = 'desktop' | 'tablet' | 'mobile';

export interface WindowDimensions {
  width: number;
  height: number;
}

export interface ResponsiveContextType {
  dimensionMode: DimensionMode;
  isTablet: boolean;
  isMobile: boolean;
  isDesktop: boolean;
}
