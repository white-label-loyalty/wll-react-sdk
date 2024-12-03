import Color from 'color';
import { BaseThemeObject } from '../types/theme';
import { defaultTheme } from './styling';

export const getDerivedColor = (color: string): string => {
  const backgroundColor = Color(color);
  return backgroundColor.isDark()
    ? backgroundColor.lighten(0.2).string()
    : backgroundColor.darken(0.2).string();
};

// Same implimentation as Microsite
export const getReadableTextColor = (backgroundColor: string): string => {
  const bgColor = Color(backgroundColor);
  const white = Color('#fff');
  const black = Color('#000');

  // Calculate contrast ratio with white
  const contrastWithWhite = bgColor.contrast(white);

  // If contrast with white is at least 2:1, use white; otherwise, use black
  return contrastWithWhite >= 2 ? white.hex() : black.hex();
};

type PercentageKey = 5 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 95;

export type DerivedColors = {
  [K in PercentageKey]: string;
};

const percentages: PercentageKey[] = [
  5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95,
];

const generateDerivedColors = (
  color: string,
  derivationFunction: (baseColor: Color, percentage: PercentageKey) => Color
): DerivedColors => {
  const baseColor = Color(color);
  const result = {} as DerivedColors;

  percentages.forEach((percentage) => {
    const derivedColor = derivationFunction(baseColor, percentage);
    result[percentage] = derivedColor.toString();
  });

  return result;
};

export const getDerivedColorPercentages = (color: string): DerivedColors => {
  const isDark = Color(color).isDark();

  return generateDerivedColors(color, (baseColor, percentage) =>
    isDark
      ? baseColor.lightness(percentage)
      : baseColor.lightness(100 - percentage)
  );
};

export const getAlphaDerivedColors = (color: string): DerivedColors => {
  return generateDerivedColors(color, (baseColor, percentage) =>
    baseColor.alpha(percentage / 100)
  );
};

export const shouldDesaturate = (type: string, count: number): boolean => {
  //TODO: Add conditions if neccecerry
  return type === 'SPECIFIC' && count === 0;
};

export const desaturateColor = (color: string): string => {
  return Color(color).desaturate(1).toString();
};

export const getStateColor = (
  baseColor: string,
  type: string,
  count: number
): string => {
  return shouldDesaturate(type, count) ? desaturateColor(baseColor) : baseColor;
};

// Storybook Themes
const storyBookThemes = {
  modern: {
    ...defaultTheme,
    primary: '#f72585',
    accent: '#ffc300',
    background: '#e5e5e5',
    surface: '#f4f3ee',
    surfaceText: '#f72585',
  },
  warm: {
    ...defaultTheme,
    primary: '#014F5C',
    accent: '#F38A51',
    background: '#BE9C80',
    surface: '#F1CFB3',
    surfaceText: '#014F5C',
  },
  dark: {
    ...defaultTheme,
    background: '#1e1e1e',
    text: '#ffffff',
    primary: '#ffbe0b',
    accent: '#d00000',
    surface: '#2f3037',
    surfaceText: '#ffffff',
  },
  forest: {
    ...defaultTheme,
    primary: '#354f52',
    accent: '#84a98c',
    background: '#f0f4f0',
    surface: '#cad2c5',
    surfaceText: '#2d3436',
  },
  sunset: {
    ...defaultTheme,
    primary: '#c32f27',
    accent: '#db7c26',
    background: '#f9edcc',
    surface: '#f0dfad',
    surfaceText: '#2d3436',
  },
};

// Define the theme type
export type ThemeName =
  | 'default'
  | 'dark'
  | 'modern'
  | 'warm'
  | 'forest'
  | 'sunset';

// Create the themes object
export const themes: Record<ThemeName, BaseThemeObject> = {
  default: defaultTheme,
  dark: storyBookThemes.dark,
  modern: storyBookThemes.modern,
  warm: storyBookThemes.warm,
  forest: storyBookThemes.forest,
  sunset: storyBookThemes.sunset,
};

// Theme selector items
export const themeItems: Array<{ value: ThemeName; title: string }> = [
  { value: 'default', title: 'Default' },
  { value: 'dark', title: 'Dark' },
  { value: 'modern', title: 'Modern' },
  { value: 'warm', title: 'Warm' },
  { value: 'forest', title: 'Forest' },
  { value: 'sunset', title: 'Sunset' },
];
