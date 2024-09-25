import { ReactNode } from 'react';
import { sizes } from '../utils/styling';
import { DerivedColors } from '../utils/themeHelpers';

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
};

export type ThemeObject = BaseThemeObject &
  DerivedProperties & {
    readonly sizes: typeof sizes;
  };

export type ThemeContextType = {
  theme: ThemeObject;
  setTheme: (theme: ThemeObject) => void;
};

export type ThemeProviderProps = {
  children: ReactNode;
  theme?: Partial<BaseThemeObject>;
};

export type Variant = 'primary' | 'accent' | 'positive' | 'negative';
export type Size = 'sm' | 'md' | 'lg';
