import { sizes } from '../utils/styling';
import { WithChildren } from './helpers';
import { BadgeTileType } from './tile';

export type PercentageKey = 5 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 95;
export type DerivedColors = {
  [K in PercentageKey]: string;
};

// TODO: Add more types when needed
export type DesaturationType = BadgeTileType.Specific | BadgeTileType.Latest;

export type BaseThemeObject = {
  accent: string;
  background: string;
  errorPrimary: string;
  negative: string;
  pageButtonBackground: string;
  pageButtonText: string;
  positive: string;
  primary: string;
  surface: string;
  surfaceText: string;
  text: string;
};

export type DerivedProperties = {
  accentText: string;
  derivedBackground: string;
  primaryText: string;
  positiveText: string;
  negativeText: string;
  derivedSurfaceText: DerivedColors;
  derivedSurface: DerivedColors;
  alphaDerivedPrimary: DerivedColors;
  alphaDerivedText: DerivedColors;
};

export type ThemeObject = BaseThemeObject &
  DerivedProperties & {
    readonly sizes: typeof sizes;
  };

export type ThemeContextType = {
  theme: ThemeObject;
  setTheme: (theme: ThemeObject) => void;
};

export type ThemeProviderProps = WithChildren & {
  theme?: Partial<BaseThemeObject>;
};

export type Variant = 'primary' | 'accent' | 'positive' | 'negative';
export type Size = 'sm' | 'md' | 'lg';
