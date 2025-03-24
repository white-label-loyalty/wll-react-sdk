import Color from 'color';
import { COLOR_CONSTANTS } from '../constants/theme';
import {
  BaseThemeObject,
  DerivedColors,
  DesaturationType,
  PercentageKey,
} from '../types/theme';
import { themeItems, ThemeName, themes } from './storybookThemes';

const isValidColor = (color: string): boolean => {
  try {
    Color(color);
    return true;
  } catch {
    return false;
  }
};

/**
 * Validates a theme object to ensure all required colors are present and valid
 * @param theme - Partial theme object to validate
 * @returns Boolean indicating if theme is valid
 */
export const validateTheme = (theme: Partial<BaseThemeObject>): boolean => {
  const requiredColors = [
    'accent',
    'background',
    'primary',
    'surface',
    'surfaceText',
    'text',
  ] as const;

  // Optional colors with defaults
  const optionalColors = [
    'positive',
    'negative',
    'pageButtonBackground',
    'pageButtonText',
    'errorPrimary',
  ] as const;

  // fontFamily is optional - it has a default value in defaultTheme

  const missingOrInvalidColors = requiredColors.filter(
    (color) => !theme[color] || !isValidColor(theme[color]!)
  );

  return missingOrInvalidColors.length === 0;
};

/**
 * Safely creates a Color instance with error handling
 * @param color - Color string to process
 * @returns Color instance or null if invalid
 */
const createSafeColor = (color: string): Color | null => {
  try {
    return Color(color);
  } catch (error) {
    console.error(`Invalid color value: ${color}`, error);
    return null;
  }
};

/**
 * Returns a derived color based on the background darkness
 * @param color - Base color to derive from
 * @returns Derived color string or default color if invalid
 */
export const getDerivedColor = (color: string): string => {
  const backgroundColor = createSafeColor(color);
  if (!backgroundColor) return COLOR_CONSTANTS.DEFAULT_COLOR;

  return backgroundColor.isDark()
    ? backgroundColor
        .lighten(COLOR_CONSTANTS.DEFAULT_LIGHTNESS_ADJUSTMENT)
        .string()
    : backgroundColor
        .darken(COLOR_CONSTANTS.DEFAULT_LIGHTNESS_ADJUSTMENT)
        .string();
};

/**
 * Determines the most readable text color (black or white) for a given background
 * @param backgroundColor - Background color to check against
 * @returns Hex color string for text
 */
export const getReadableTextColor = (backgroundColor: string): string => {
  const bgColor = createSafeColor(backgroundColor);
  if (!bgColor) return COLOR_CONSTANTS.DEFAULT_COLOR;

  const white = Color('#fff');
  const black = Color('#000');

  const contrastWithWhite = bgColor.contrast(white);
  return contrastWithWhite >= COLOR_CONSTANTS.MINIMUM_CONTRAST_RATIO
    ? white.hex()
    : black.hex();
};

const percentages: PercentageKey[] = [
  5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95,
];

/**
 * Generates a set of derived colors based on a base color and derivation function
 * @param color - Base color to derive from
 * @param derivationFunction - Function to generate variations
 * @returns Object containing derived colors at different percentages
 */
const generateDerivedColors = (
  color: string,
  derivationFunction: (baseColor: Color, percentage: PercentageKey) => Color
): DerivedColors => {
  const baseColor = createSafeColor(color);
  if (!baseColor) {
    return percentages.reduce((acc, percentage) => {
      acc[percentage] = COLOR_CONSTANTS.DEFAULT_COLOR;
      return acc;
    }, {} as DerivedColors);
  }

  const result = {} as DerivedColors;
  percentages.forEach((percentage) => {
    try {
      const derivedColor = derivationFunction(baseColor, percentage);
      result[percentage] = derivedColor.toString();
    } catch (error) {
      console.error(`Error generating derived color for ${percentage}%`, error);
      result[percentage] = COLOR_CONSTANTS.DEFAULT_COLOR;
    }
  });
  return result;
};

/**
 * Generates a set of colors with varying lightness based on the base color
 * @param color - Base color to derive from
 * @returns Object containing derived colors at different lightness levels
 */
export const getDerivedColorPercentages = (color: string): DerivedColors => {
  const baseColor = createSafeColor(color);
  if (!baseColor)
    return generateDerivedColors(
      COLOR_CONSTANTS.DEFAULT_COLOR,
      (color) => color
    );

  const isDark = baseColor.isDark();
  return generateDerivedColors(color, (baseColor, percentage) =>
    isDark
      ? baseColor.lightness(percentage)
      : baseColor.lightness(100 - percentage)
  );
};

/**
 * Generates a set of colors with varying alpha values
 * @param color - Base color to derive from
 * @returns Object containing derived colors at different alpha levels
 */
export const getAlphaDerivedColors = (color: string): DerivedColors => {
  return generateDerivedColors(color, (baseColor, percentage) =>
    baseColor.alpha(percentage / 100)
  );
};

/**
 * Determines if a color should be desaturated based on type and count
 * @param type - Type of desaturation to apply
 * @param count - Count value affecting desaturation
 * @returns Boolean indicating if color should be desaturated
 */
export const shouldDesaturate = (
  type: DesaturationType,
  count: number
): boolean => {
  switch (type) {
    case 'SPECIFIC':
      return count === 0;
    default:
      return false;
  }
};

/**
 * Desaturates a color and lightens it
 * @param color - Color to desaturate
 * @returns Desaturated color string or default color if invalid
 */
export const desaturateColor = (color: string): string => {
  const baseColor = createSafeColor(color);
  if (!baseColor) return COLOR_CONSTANTS.DEFAULT_COLOR;

  return baseColor
    .grayscale()
    .lighten(COLOR_CONSTANTS.DESATURATION_LIGHTEN_AMOUNT)
    .toString();
};

/**
 * Gets the appropriate state color based on type and count
 * @param baseColor - Base color to process
 * @param type - Type of state
 * @param count - Count affecting the state
 * @returns Processed color string
 */
export const getStateColor = (
  baseColor: string,
  type: DesaturationType,
  count: number
): string => {
  return shouldDesaturate(type, count) ? desaturateColor(baseColor) : baseColor;
};

// Export theme-related items
export { themeItems, ThemeName, themes };
