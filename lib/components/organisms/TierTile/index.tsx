// @ts-nocheck
// TODO: Fix this file
import React from "react";
import { View } from "react-native";
import { useTheme } from "../../../context/ThemeContext";
import { TierTileConfig, TierTileType } from "../../../types/tile";
import { useResponsiveScale } from "../../../utils/responsiveScaling";
import { Text, Tile } from "../../atoms";
import { ProgressIndicator } from "../../molecules";

type TierTileProps = {
  configuration: TierTileConfig;
};

const TierTile: React.FC<TierTileProps> = ({ configuration }) => {
  if (!configuration?.tier) return null;

  const renderTierTileContent = () => {
    switch (configuration.type) {
      case TierTileType.Next:
        return <NextTierTile configuration={configuration} />;
      case TierTileType.Current:
        return <CurrentTierTile configuration={configuration} />;
      case TierTileType.Specific:
      default:
        return <SpecificTierTile configuration={configuration} />;
    }
  };

  return <Tile>{renderTierTileContent()}</Tile>;
};

const SpecificTierTile: React.FC<TierTileProps> = ({ configuration }) => {
  const { ms, ps } = useResponsiveScale();
  const { tier } = configuration;
  const { theme } = useTheme();

  return (
    <View style={{ paddingHorizontal: ps(8), width: "100%" }}>
      <View style={{ marginBottom: ms(2) }}>
        <Text
          style={{
            color: theme.derivedSurfaceText[20],
          }}
        >
          Hello World
        </Text>
        <Text variant="eyebrow">Tier</Text>
        <Text variant="title">{tier.name}</Text>
      </View>
      <ProgressIndicator
        currentPoints={
          tier.attained ? tier.pointsRequirement : tier.earnedPoints
        }
        maxPoints={tier.pointsRequirement}
        variant="primary"
      />
      <View style={{ marginTop: ms(2) }}>
        <Text variant="caption">
          {tier.earnedPoints} / {tier.pointsRequirement}pts
        </Text>
        {tier.attained && (
          <Text variant="label" style={{ marginTop: ms(1) }}>
            You reached {tier.name}!
          </Text>
        )}
      </View>
    </View>
  );
};

const NextTierTile: React.FC<TierTileProps> = ({ configuration }) => {
  const { ms } = useResponsiveScale();
  const { tier } = configuration;

  return (
    <>
      <View style={{ marginBottom: ms(2) }}>
        <Text variant="eyebrow">Next Tier</Text>
        <Text variant="title">{tier.name}</Text>
      </View>
      <ProgressIndicator
        currentPoints={tier.earnedPoints}
        maxPoints={tier.pointsRequirement}
        variant="primary"
      />
      <View style={{ marginTop: ms(2) }}>
        <Text variant="caption">
          {tier.earnedPoints} / {tier.pointsRequirement}pts
        </Text>
      </View>
    </>
  );
};

const CurrentTierTile: React.FC<TierTileProps> = ({ configuration }) => {
  const { ms } = useResponsiveScale();
  const { tier } = configuration;

  console.log(configuration, "configuration");

  return (
    <>
      <View style={{ marginBottom: ms(2) }}>
        <Text variant="eyebrow">Current Tier</Text>
        <Text variant="title">{tier.name}</Text>
      </View>
      <ProgressIndicator
        currentPoints={tier.earnedPoints}
        maxPoints={tier.pointsRequirement}
        variant="primary"
      />
      <View style={{ marginTop: ms(2) }}>
        <Text variant="caption">
          {tier.earnedPoints} / {tier.pointsRequirement}pts
        </Text>
      </View>
    </>
  );
};

export default TierTile;
