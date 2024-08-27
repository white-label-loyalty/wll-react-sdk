import { BaseThemeObject } from "@/types/theme";

export const sizes = {
  borderRadius: 15,
  borderRadiusButton: 9,
  borderRadiusRounded: 9999,
  sm: 6,
  md: 10,
  lg: 16,
};

export const defaultTheme: BaseThemeObject = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell,"Helvetica Neue", sans-serif;',
  background: "#F0F0F0",
  text: "#000000",
  primary: "#392ed7",
  accent: "#ff6a3d",
  surface: "#f8f7fc",
  surfaceText: "#000000",
  pageButtonBackground: "#392ed7",
  pageButtonText: "#ffffff",
  errorPrimary: "#000000",
  positive: "#008000",
  negative: "#ff0000",
};
