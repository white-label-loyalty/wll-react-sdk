import { defaultTheme, sizes } from "@/utils/styling";
import {
  getDerivedColor,
  getDerivedColorPercentages,
  getReadableTextColor,
} from "@/utils/themeHelpers";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  BaseThemeObject,
  ThemeContextType,
  ThemeObject,
  ThemeProviderProps,
} from "../types/theme";

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
  };
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme: providedTheme,
}) => {
  const [theme, setTheme] = useState<ThemeObject>(() =>
    createTheme(providedTheme)
  );

  useEffect(() => {
    if (providedTheme) {
      setTheme(createTheme(providedTheme));
    }
  }, [providedTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { createTheme, ThemeProvider, useTheme };
