import { defaultTheme } from "@/utils/styling";
import { getDerivedColor, getReadableTextColor } from "@/utils/themeHelpers";
import React, { createContext, useContext, useState } from "react";
import {
  ThemeContextType,
  ThemeObject,
  ThemeProviderProps,
} from "../types/theme";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const createTheme = (baseTheme: Partial<ThemeObject> = {}): ThemeObject => {
  const mergedTheme = { ...defaultTheme, ...baseTheme };
  const { background, primary, positive, negative } = mergedTheme;

  return {
    ...mergedTheme,
    derivedBackground: getDerivedColor(background),
    primaryText: getReadableTextColor(primary),
    accentText: getReadableTextColor(primary),
    positiveText: getReadableTextColor(positive),
    negativeText: getReadableTextColor(negative),
  };
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialTheme,
}) => {
  const [theme] = useState<ThemeObject>(() => createTheme(initialTheme));

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme };
