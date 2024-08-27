import { useTheme } from "@/context/ThemeContext";
import { createResponsiveStyle } from "@/utils/responsiveHelper";
import React from "react";
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
  TextStyle,
} from "react-native";

type TextVariant =
  | "eyebrow"
  | "title"
  | "subtitle"
  | "body"
  | "caption"
  | "label";

type TextProps = RNTextProps & {
  variant?: TextVariant;
  style?: TextStyle;
  isSurface?: boolean;
};

export const Text: React.FC<TextProps> = ({
  variant = "body",
  style,
  isSurface = false,
  ...props
}) => {
  const { theme } = useTheme();

  const getVariantStyle = (variant: TextVariant): TextStyle => {
    const baseStyle = {
      color: theme.text,
    };
    switch (variant) {
      case "eyebrow":
        return createResponsiveStyle({
          ...baseStyle,
        });
      case "title":
        return createResponsiveStyle({
          ...baseStyle,
        });
      case "subtitle":
        return createResponsiveStyle({
          ...baseStyle,
        });
      case "body":
        return createResponsiveStyle({
          ...baseStyle,
        });
      case "caption":
        return createResponsiveStyle({
          ...baseStyle,
        });
      case "label":
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
