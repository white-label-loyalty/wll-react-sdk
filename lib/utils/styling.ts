import { BaseThemeObject } from '../types/theme';

export const sizes = {
  borderRadiusSm: 15,
  borderRadiusLg: 20,
  borderRadiusButton: 9,
  borderRadiusRounded: 9999,
  xxxs: 4,
  xxs: 8,
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
  xxl: 24,
  xxxl: 32,
  xxxxl: 40,
  xxxxxl: 60,
} as const;

export const defaultTheme: BaseThemeObject = {
  background: '#F0F0F0',
  text: '#000000',
  primary: '#392ed7',
  accent: '#ff6a3d',
  surface: '#f8f7fc',
  surfaceText: '#000000',
  pageButtonBackground: '#392ed7',
  pageButtonText: '#ffffff',
  errorPrimary: '#000000',
  positive: '#008000',
  negative: '#ff0000',
};
