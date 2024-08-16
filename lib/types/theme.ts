import { ReactNode } from "react";

export type ThemeObject = {
  accent: string;
  accentText: string;
  background: string;
  errorPrimary: string;
  fontFamily: string;
  negative: string;
  pageButtonBackground: string;
  pageButtonText: string;
  positive: string;
  primary: string;
  primaryText: string;
  surface: string;
  surfaceText: string;
  text: string;
  derivedBackground: string;
  positiveText: string;
  negativeText: string;
};

export type DerivedProperties =
  | "derivedBackground"
  | "primaryText"
  | "accentText"
  | "positiveText"
  | "negativeText";

export type ThemeContextType = {
  theme: ThemeObject;
};

export type ThemeProviderProps = {
  children: ReactNode;
  initialTheme?: Partial<ThemeObject>;
};

export type Variant = "primary" | "accent" | "positive" | "negative";
export type Size = "sm" | "md" | "lg";
