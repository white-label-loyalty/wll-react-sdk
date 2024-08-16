import { useTheme } from "@/context/ThemeContext";
import { Size, ThemeObject, Variant } from "@/types/theme";
import { sizes } from "@/utils/styling";
import { createVariantSystem } from "@/utils/variant";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

export type ProgressBarProps = {
  percentage: number;
  variant?: Variant;
  height?: Size;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: sizes.borderRadiusRounded,
    overflow: "hidden",
  },
  progress: {
    borderRadius: sizes.borderRadiusRounded,
    height: "100%",
  },
});

const containerStyles = {
  sm: { height: sizes.sm },
  md: { height: sizes.md },
  lg: { height: sizes.lg },
};

const useProgressStyles = createVariantSystem(
  styles.progress,
  (theme: ThemeObject) => ({
    primary: { backgroundColor: theme.primary },
    accent: { backgroundColor: theme.accent },
    positive: { backgroundColor: theme.positive },
    negative: { backgroundColor: theme.negative },
  })
);

const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  variant = "primary",
  height = "md",
}) => {
  const { theme } = useTheme();
  const containerStyle = [
    styles.container,
    containerStyles[height],
    { backgroundColor: theme.derivedBackground },
  ];
  const progressStyle = useProgressStyles(theme, variant);

  const progressWidth: ViewStyle = {
    width: `${Math.min(Math.max(percentage, 0), 100)}%`,
  };

  return (
    <View style={containerStyle}>
      <View style={[styles.progress, progressStyle, progressWidth]} />
    </View>
  );
};

export default ProgressBar;
