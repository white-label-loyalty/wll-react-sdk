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
};

export const Text: React.FC<TextProps> = ({
  variant = "body",
  style,
  ...props
}) => {
  const [dimensions, setDimensions] = useState(Dimensions.get("window"));

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensions(window);
    });

    return () => subscription?.remove();
  }, []);

  const variantStyle = styles[variant] || styles.body;

  const responsiveStyle = {
    ...variantStyle,
    fontSize: RFPercentage(variantStyle.fontSize as number),
  };

  return <RNText style={[styles.base, responsiveStyle, style]} {...props} />;
};

const styles = StyleSheet.create({
  base: {
    color: "#6B7280",
  },
  eyebrow: {
    fontSize: 1,
    fontWeight: "500",
    color: "#6B7280",
  },
  title: {
    fontSize: 1.2,
    fontWeight: "bold",
    color: "#000000",
  },
  subtitle: {
    fontSize: 1,
    color: "#6B7280",
  },
  body: {
    fontSize: 1,
    color: "#6B7280",
    lineHeight: 20,
  },
  caption: {
    fontSize: 1.2,
    color: "#000000",
    fontWeight: "bold",
  },
  label: {
    fontSize: 0.7,
    fontWeight: "500",
    color: "#6B7280",
  },
});

export default Text;
