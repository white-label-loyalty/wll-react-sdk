import { Text } from "@/components/atoms";
import { ProgressIndicator } from "@/components/molecules";
import { useTheme } from "@/context/ThemeContext";
import { Tile } from "@/types/tile";
import { useResponsiveScale } from "@/utils/responsiveScaling";
import { sizes } from "@/utils/styling";
import React from "react";
import { View } from "react-native";

const TierTile = (tile: Tile) => {
  const { ms } = useResponsiveScale();

  if (!tile) return null;
  const { theme } = useTheme();
  const { tileHeight, configuration } = tile;

  const tierData = {
    name: "Gold",
    earnedPoints: 500,
    pointsRequirement: 1000,
    attained: false,
  };

  return (
    <View
      style={{
        width: "100%",
        borderRadius: sizes.borderRadius,
        borderColor: theme.derivedBackground,
        borderWidth: 1,
        flex: 1,
        padding: ms(10),
        justifyContent: "center",
      }}
    >
      <View style={{ marginBottom: ms(2) }}>
        <Text variant="eyebrow">Tier</Text>
        <Text variant="title">{tierData.name}</Text>
      </View>
      <ProgressIndicator
        currentPoints={
          tierData.attained ? tierData.pointsRequirement : tierData.earnedPoints
        }
        maxPoints={tierData.pointsRequirement}
        variant="primary"
        height="md"
      />
      <View style={{ marginTop: ms(2) }}>
        <Text variant="caption">
          {tierData.earnedPoints} / {tierData.pointsRequirement}pts
        </Text>
        <Text variant="label" style={{ marginTop: ms(1) }}>
          {tierData.attained ? `You reached ${tierData.name}!` : null}
        </Text>
      </View>
    </View>
  );
};

export default TierTile;
