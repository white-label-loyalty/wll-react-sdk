import { Icon, ProgressBar } from "@/components/atoms";
import { useTheme } from "@/context/ThemeContext";
import { Size, Variant } from "@/types/theme";
import React from "react";
import { StyleSheet, View } from "react-native";

export type ProgressIndicatorProps = {
  currentPoints: number;
  maxPoints: number;
  variant?: Variant;
  height?: Size;
  attained?: boolean;
};

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentPoints,
  maxPoints,
  variant = "primary",
  height = "md",
  attained = false,
}) => {
  const { theme } = useTheme();
  const percentage = attained ? 100 : (currentPoints / maxPoints) * 100;
  const isComplete = percentage >= 100 || attained;

  let progressVariant: Variant = variant;
  if (isComplete) {
    progressVariant = "positive";
  } else if (percentage < 50) {
    progressVariant = "accent";
  }

  return (
    <View style={styles.container}>
      <ProgressBar
        percentage={percentage}
        variant={progressVariant}
        height={height}
      />
      {isComplete && (
        <View style={styles.checkIconContainer}>
          <View
            style={[
              styles.checkIconBackground,
              { backgroundColor: theme.positive },
            ]}
          >
            <Icon name="Check" size={16} color={theme.positiveText} />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  checkIconContainer: {
    position: "absolute",
    right: 0,
  },
  checkIconBackground: {
    borderRadius: 9999,
    padding: 4,
  },
});

export default ProgressIndicator;
