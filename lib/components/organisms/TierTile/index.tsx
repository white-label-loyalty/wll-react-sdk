// @ts-nocheck
// TODO: Update data structure. Data structure is wrong for this file, just for show currently.
import { Text } from "@/components/atoms";
import { ProgressIndicator } from "@/components/molecules";
import { useTheme } from "@/context/ThemeContext";
import { TierTileConfig } from "@/types/tile";
import { useResponsiveScale } from "@/utils/responsiveScaling";
import { sizes } from "@/utils/styling";
import React from "react";
import { View } from "react-native";
type TierTileProps = {
  configuration: TierTileConfig;
};

const TierTile: React.FC<TierTileProps> = ({ configuration }) => {
  const { ms } = useResponsiveScale();

  if (!configuration) return null;
  const { theme } = useTheme();

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
        <Text variant="title">{configuration.name}</Text>
      </View>
      <ProgressIndicator
        currentPoints={
          configuration.attained
            ? configuration.pointsRequirement
            : configuration.earnedPoints
        }
        maxPoints={configuration.pointsRequirement}
        variant="primary"
        height="md"
      />
      <View style={{ marginTop: ms(2) }}>
        <Text variant="caption">
          {configuration.earnedPoints} / {configuration.pointsRequirement}pts
        </Text>
        <Text variant="label" style={{ marginTop: ms(1) }}>
          {configuration.attained ? `You reached ${configuration.name}!` : null}
        </Text>
      </View>
    </View>
  );
};

export default TierTile;
