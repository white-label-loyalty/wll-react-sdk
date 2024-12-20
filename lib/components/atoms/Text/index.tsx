import * as React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';
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

  return <RNText style={[variantStyle, style]} {...props} />;
};

export default Text;
