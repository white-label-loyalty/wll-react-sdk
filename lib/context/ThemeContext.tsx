import React, { createContext, useContext, useState } from 'react';
import {
  BaseThemeObject,
  ThemeContextType,
  ThemeObject,
  ThemeProviderProps,
} from '../types/theme';
import { defaultTheme, sizes } from '../utils/styling';
import {
  getAlphaDerivedColors,
  getDerivedColor,
  getDerivedColorPercentages,
  getReadableTextColor,
} from '../utils/themeHelpers';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const createTheme = (baseTheme: Partial<BaseThemeObject> = {}): ThemeObject => {
  const mergedTheme = { ...defaultTheme, ...baseTheme } as BaseThemeObject;
  const {
    background,
    primary,
    accent,
    positive,
    negative,
    surfaceText,
    surface,
  } = mergedTheme;
  return {
    ...mergedTheme,
    sizes,
    derivedBackground: getDerivedColor(background),
    primaryText: getReadableTextColor(primary),
    accentText: getReadableTextColor(accent),
    positiveText: getReadableTextColor(positive),
    negativeText: getReadableTextColor(negative),
    derivedSurface: getDerivedColorPercentages(surface),
    derivedSurfaceText: getDerivedColorPercentages(surfaceText),
    alphaDerivedPrimary: getAlphaDerivedColors(primary),
  };
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme: providedTheme,
}) => {
  const [theme, setTheme] = useState<ThemeObject>(() =>
    createTheme(providedTheme || {})
  );

  const contextValue: ThemeContextType = {
    theme,
    setTheme: (newTheme: Partial<BaseThemeObject>) => {
      setTheme(createTheme(newTheme));
    },
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { createTheme, ThemeProvider, useTheme };
