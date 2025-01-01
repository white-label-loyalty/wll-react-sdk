import React from 'react';
import { View } from 'react-native';
import { RewardTileConfig } from '../../../types/tile';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { useRewardTileStyles } from './styles';

export const RewardTilePoints = (): JSX.Element | null => {
  const styles = useRewardTileStyles();
  const { configuration } = useTileContext();
  const {
    showPrice,
    price,
    pointsMultiplier = 1,
    pointsPrefix = '',
    pointsSuffix = 'pts',
  } = configuration as RewardTileConfig;

  // Exit early if price is not shown or undefined
  if (!showPrice || price === undefined) return null;

  // Calculate points
  const calculatedPoints = price * Number(pointsMultiplier ?? 1);

  return (
    <View
      accessible
      accessibilityRole="text"
      accessibilityLabel={`Reward points: ${pointsPrefix}${calculatedPoints} ${pointsSuffix}`}
    >
      <Text variant="caption" style={styles.footer}>
        {pointsPrefix}
      </Text>
      <View style={styles.pointsContainer}>
        <Text variant="caption">{calculatedPoints}</Text>
        <Text variant="caption" style={styles.suffix}>
          {pointsSuffix}
        </Text>
      </View>
    </View>
  );
};
