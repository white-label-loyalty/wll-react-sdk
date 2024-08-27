import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { useTheme } from "../../../context/ThemeContext";
import { Size, ThemeObject, Variant } from "../../../types/theme";
import { createVariantSystem } from "../../../utils/variant";

export type ProgressBarProps = {
  percentage: number;
  variant?: Variant;
  height?: Size;
};

const useStyles = (theme: ThemeObject) => {
  return StyleSheet.create({
    container: {
      width: "100%",
      borderRadius: theme.sizes.borderRadiusRounded,
      overflow: "hidden",
    },
    progress: {
      borderRadius: theme.sizes.borderRadiusRounded,
      height: "100%",
    },
  });
};

const useContainerStyles = (theme: ThemeObject) => ({
  sm: { height: theme.sizes.sm },
  md: { height: theme.sizes.md },
  lg: { height: theme.sizes.lg },
});

const useProgressStyles = createVariantSystem(
  (theme: ThemeObject) => ({ borderRadius: theme.sizes.borderRadiusRounded }),
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
  height = "sm",
}) => {
  const { theme } = useTheme();
  const styles = useStyles(theme);
  const containerStyles = useContainerStyles(theme);
  const progressStyles = useProgressStyles(theme, variant);

  const containerStyle = [
    styles.container,
    containerStyles[height],
    { backgroundColor: theme.derivedSurface[20] },
  ];

  const progressWidth: ViewStyle = {
    width: `${Math.min(Math.max(percentage, 0), 100)}%`,
  };

  return (
    <View style={containerStyle}>
      <View style={[styles.progress, progressStyles, progressWidth]} />
    </View>
  );
};

export default ProgressBar;
