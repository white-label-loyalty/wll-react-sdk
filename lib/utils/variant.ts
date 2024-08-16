import { TextStyle, ViewStyle } from "react-native";
import { ThemeObject } from "../types/theme";

type StyleVariants<V extends string> = Record<V, ViewStyle | TextStyle>;

export function createVariantSystem<V extends string>(
  baseStyle: ViewStyle | TextStyle,
  variantStyles: (theme: ThemeObject) => StyleVariants<V>
) {
  return (theme: ThemeObject, variant: V) => {
    const styles = variantStyles(theme);
    return [baseStyle, styles[variant]];
  };
}
