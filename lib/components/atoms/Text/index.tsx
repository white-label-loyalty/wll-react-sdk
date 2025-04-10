import * as React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  Role,
  StyleSheet,
  TextStyle,
} from 'react-native';
import { IS_WEB } from '../../../constants/device';
import { useResponsive } from '../../../context/ResponsiveContext';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useResponsiveValue } from '../../../utils/responsiveHelper';

type TextVariant =
  | 'eyebrow'
  | 'title'
  | 'description'
  | 'body'
  | 'caption'
  | 'label'
  | 'tier-requirement'
  | 'tier-earned';

type TextProps = RNTextProps & {
  variant?: TextVariant;
  style?: TextStyle;
  isSurface?: boolean;
};

export const Text = ({
  variant = 'body',
  style,
  isSurface = false,
  ...props
}: TextProps): JSX.Element => {
  const { theme } = useWllSdk();
  const { isDesktop, isTablet } = useResponsive();

  const getVariantStyle = (variant: TextVariant): TextStyle => {
    const baseStyle = {
      color: theme.surfaceText,
    };

    switch (variant) {
      case 'eyebrow':
        return {
          ...baseStyle,
          fontSize: useResponsiveValue(
            theme.sizes.md,
            theme.sizes.sm,
            isDesktop,
            isTablet
          ),
          marginBottom: useResponsiveValue(
            theme.sizes.xxs,
            theme.sizes.xxxs,
            isDesktop,
            isTablet
          ),
        };
      case 'title':
        return {
          ...baseStyle,
          fontSize: useResponsiveValue(
            theme.sizes.xxl,
            theme.sizes.md,
            isDesktop,
            isTablet
          ),
          fontWeight: 'bold',
        };
      case 'body':
        return {
          color: theme.derivedSurfaceText[20],
          fontSize: useResponsiveValue(
            theme.sizes.md,
            theme.sizes.xs,
            isDesktop,
            isTablet
          ),
        };
      case 'caption':
        return {
          ...baseStyle,
          fontWeight: 'bold',
          fontSize: useResponsiveValue(
            theme.sizes.xxl,
            theme.sizes.xl,
            isDesktop,
            isTablet
          ),
          color: theme.primary,
        };
      case 'description':
      case 'label':
      default:
        return {
          ...baseStyle,
          fontSize: useResponsiveValue(
            theme.sizes.sm,
            theme.sizes.xs,
            isDesktop,
            isTablet
          ),
        };
    }
  };

  const variantStyle = getVariantStyle(variant);

  // NOTE: React Native Web has different style resolution rules compared to CSS.
  // 1. We create styles using StyleSheet.create for better performance
  // 2. Base styles set the initial fontFamily
  // 3. variantStyle contains responsive fontSize and other variant-specific styles
  // 4. webOverrides ensures fontFamily is correctly applied on web platform
  //    (prevents system font stack from being incorrectly applied)
  // 5. custom style prop has highest precedence
  // The order matters because RN Web resolves styles by specific properties
  // rather than last-declaration-wins like in CSS
  // https://necolas.github.io/react-native-web/docs/styling/#how-it-works

  const styles = StyleSheet.create({
    base: {
      fontFamily: theme.fontFamily,
    },
    webOverrides: IS_WEB
      ? {
          fontFamily: theme.fontFamily,
        }
      : {},
  });

  // Determine appropriate accessibility role based on variant
  // This helps screen readers understand the semantic meaning
  let accessibilityRole;

  switch (variant) {
    case 'title':
      accessibilityRole = 'header';
      break;
    case 'caption':
      accessibilityRole = 'text';
      break;
    case 'eyebrow':
      accessibilityRole = 'text';
      break;
    case 'description':
      accessibilityRole = 'paragraph';
      break;
    case 'label':
      accessibilityRole = 'text';
      break;
    default:
      accessibilityRole = 'text';
  }

  const combinedStyles = [
    styles.base,
    variantStyle,
    styles.webOverrides,
    style,
  ];

  return (
    <RNText
      style={combinedStyles}
      {...props}
      accessible
      role={accessibilityRole as Role}
    />
  );
};

export default Text;
