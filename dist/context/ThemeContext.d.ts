import React from "react";
import { BaseThemeObject, ThemeContextType, ThemeObject, ThemeProviderProps } from "../types/theme";
declare const createTheme: (baseTheme?: Partial<BaseThemeObject>) => ThemeObject;
declare const ThemeProvider: React.FC<ThemeProviderProps>;
declare const useTheme: () => ThemeContextType;
export { createTheme, ThemeProvider, useTheme };
