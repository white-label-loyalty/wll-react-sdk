import { useTheme } from "@/context/ThemeContext";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
  TextStyle,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

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
  const [dimensions, setDimensions] = useState(Dimensions.get("window"));
  const { theme } = useTheme();

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensions(window);
    });
    return () => subscription?.remove();
  }, []);

  const getVariantStyle = (variant: TextVariant): TextStyle => {
    switch (variant) {
      case "eyebrow":
        return {
          fontSize: RFPercentage(1),
          fontWeight: "500",
          color: isSurface ? theme.surfaceText : theme.text,
        };
      case "title":
        return {
          fontSize: RFPercentage(1.2),
          fontWeight: "bold",
          color: isSurface ? theme.surfaceText : theme.text,
        };
      case "subtitle":
        return {
          fontSize: RFPercentage(1),
          color: isSurface ? theme.surfaceText : theme.text,
        };
      case "body":
        return {
          fontSize: RFPercentage(1),
          color: isSurface ? theme.surfaceText : theme.text,
          lineHeight: 20,
        };
      case "caption":
        return {
          fontSize: RFPercentage(1.2),
          color: isSurface ? theme.surfaceText : theme.text,
          fontWeight: "bold",
        };
      case "label":
        return {
          fontSize: RFPercentage(0.7),
          fontWeight: "500",
          color: isSurface ? theme.surfaceText : theme.text,
        };
      default:
        return {
          fontSize: RFPercentage(1),
          color: isSurface ? theme.surfaceText : theme.text,
          lineHeight: 20,
        };
    }
  };

  const variantStyle = getVariantStyle(variant);

  return <RNText style={[styles.base, variantStyle, style]} {...props} />;
};

const styles = StyleSheet.create({
  base: {
    // You can keep some base styles here if needed
  },
});

export default Text;
