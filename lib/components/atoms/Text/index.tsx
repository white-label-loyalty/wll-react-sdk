import * as React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
  TextStyle,
} from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { createResponsiveStyle } from '../../../utils/responsiveHelper';

type TextVariant =
  | 'eyebrow'
  | 'title'
  | 'subtitle'
  | 'body'
  | 'caption'
  | 'label';

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

  const getVariantStyle = (variant: TextVariant): TextStyle => {
    const baseStyle = {
      color: theme.surfaceText,
    };
    switch (variant) {
      case 'eyebrow':
        return createResponsiveStyle({
          ...baseStyle,
          fontSize: [12, 12, 14],
          marginBottom: [4, 4, 8],
        });
      case 'title':
        return createResponsiveStyle({
          ...baseStyle,
          fontSize: [14, 14, 24],
          fontWeight: 'bold',
        });
      case 'subtitle':
        return createResponsiveStyle({
          ...baseStyle,
        });
      case 'body':
        return createResponsiveStyle({
          color: theme.derivedSurfaceText[20],
          fontSize: [10, 10, 14],
        });
      case 'caption':
        return createResponsiveStyle({
          ...baseStyle,
          fontWeight: 'bold',
          fontSize: [18, 18, 24],
          color: theme.primary,
        });
      case 'label':
        return createResponsiveStyle({
          ...baseStyle,
        });
      default:
        return createResponsiveStyle({
          ...baseStyle,
        });
    }
  };

  const variantStyle = getVariantStyle(variant);

  return <RNText style={[styles.base, variantStyle, style]} {...props} />;
};

const styles = StyleSheet.create({
  base: {},
});

export default Text;
