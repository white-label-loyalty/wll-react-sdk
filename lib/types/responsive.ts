export type DimensionMode = 'desktop' | 'tablet' | 'mobile';

export type WindowDimensions = {
  width: number;
  height: number;
};

export type ResponsiveContextType = {
  dimensionMode: DimensionMode;
  isTablet: boolean;
  isMobile: boolean;
  isDesktop: boolean;
};
