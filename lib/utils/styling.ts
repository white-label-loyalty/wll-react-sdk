import { BaseThemeObject } from '../types/theme';

const scale = {
  4: 4,
  6: 6,
  8: 8,
  10: 10,
  12: 12,
  14: 14,
  16: 16,
  18: 18,
  20: 20,
  24: 24,
  32: 32,
  40: 40,
  60: 60,
} as const;

export const sizes = {
  borderRadiusSm: 15,
  borderRadiusLg: 20,
  borderRadiusButton: 9,
  borderRadiusRounded: 9999,
  xxxs: scale[4],
  xxs: scale[8],
  xs: scale[10],
  sm: scale[12],
  md: scale[14],
  lg: scale[16],
  xl: scale[18],
  xxl: scale[24],
  xxxl: scale[32],
  xxxxl: scale[40],
  xxxxxl: scale[60],
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
