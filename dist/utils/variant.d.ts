import { TextStyle, ViewStyle } from "react-native";
import { ThemeObject } from "../types/theme";
type StyleVariants<V extends string> = Record<V, ViewStyle | TextStyle>;
export declare function createVariantSystem<V extends string>(baseStyle: ViewStyle | TextStyle, variantStyles: (theme: ThemeObject) => StyleVariants<V>): (theme: ThemeObject, variant: V) => ViewStyle[];
export {};
