import { BaseThemeObject } from '../types/theme';
import { defaultTheme } from './styling';

// Storybook Themes
export const storyBookThemes = {
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
