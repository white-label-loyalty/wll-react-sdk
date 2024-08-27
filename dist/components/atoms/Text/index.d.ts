import React from "react";
import { TextProps as RNTextProps, TextStyle } from "react-native";
type TextVariant = "eyebrow" | "title" | "subtitle" | "body" | "caption" | "label";
type TextProps = RNTextProps & {
    variant?: TextVariant;
    style?: TextStyle;
    isSurface?: boolean;
};
export declare const Text: React.FC<TextProps>;
export default Text;
