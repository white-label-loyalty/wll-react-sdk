import { StyleSheet } from 'react-native';
import { IS_WEB } from '../constants/device';
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

export const commonStyles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const defaultTheme: BaseThemeObject = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif',
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

/**
 * Creates appropriate directional margin styles for both web and native platforms.
 * Handles RTL layouts correctly across platforms by using the I18nManager.
 *
 * @param value - The margin value to apply
 * @returns An object with the appropriate margin style property
 */
export const getDirectionalMargin = (value: number) => {
  if (IS_WEB) {
    // Check document direction for web
    const isRTL =
      typeof document !== 'undefined' && document.documentElement.dir === 'rtl';

    return isRTL ? { marginLeft: value } : { marginRight: value };
  }

  // For native platforms, use marginEnd which automatically handles RTL
  return { marginEnd: value };
};
