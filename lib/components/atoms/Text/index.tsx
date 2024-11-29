import * as React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
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

export const Text: React.FC<TextProps> = ({
  variant = 'body',
  style,
  isSurface = false,
  ...props
}) => {
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
          fontSize: useResponsiveValue(14, 12, isDesktop, isTablet),
          marginBottom: useResponsiveValue(8, 4, isDesktop, isTablet),
        };
      case 'title':
        return {
          ...baseStyle,
          fontSize: useResponsiveValue(24, 14, isDesktop, isTablet),
          fontWeight: 'bold',
        };
      case 'body':
        return {
          color: theme.derivedSurfaceText[20],
          fontSize: useResponsiveValue(14, 10, isDesktop, isTablet),
        };
      case 'caption':
        return {
          ...baseStyle,
          fontWeight: 'bold',
          fontSize: useResponsiveValue(24, 18, isDesktop, isTablet),
          color: theme.primary,
        };
      case 'tier-earned':
        return {
          ...baseStyle,
          fontSize: useResponsiveValue(20, 14, isDesktop, isTablet),
          fontWeight: 'bold',
        };
      case 'tier-requirement':
        return {
          ...baseStyle,
          fontSize: useResponsiveValue(18, 12, isDesktop, isTablet),
          fontWeight: 'bold',
        };
      case 'description':
      case 'label':
      default:
        return {
          ...baseStyle,
          fontSize: useResponsiveValue(12, 10, isDesktop, isTablet),
        };
    }
  };

  const variantStyle = getVariantStyle(variant);

  return <RNText style={[styles.base, variantStyle, style]} {...props} />;
};

const styles = StyleSheet.create({
  base: {},
});

export default Text;
