import React from 'react';
import { View } from 'react-native';
import { RewardTileConfig } from '../../../types/tile';
import { applyMultiplier, getPointsLabel } from '../../../utils/pointsHelpers';
import { Row, Text } from '../../atoms';
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
  if (!showPrice || price === undefined || price === 0) return null;

  // Calculate points
  const calculatedPoints = applyMultiplier(price, pointsMultiplier);

  const accessibilityLabel = getPointsLabel(
    'Reward points:',
    calculatedPoints,
    pointsPrefix,
    pointsSuffix
  );

  return (
    <View
      testID="reward-tile-points"
      accessible
      accessibilityLabel={accessibilityLabel}
    >
      <Row align="center" justify="start" style={{ marginTop: 8 }}>
        {pointsPrefix ? <Text variant="caption">{pointsPrefix}</Text> : null}
        <Text variant="caption" testID="reward-tile-points-value">
          {calculatedPoints}
        </Text>
        {pointsSuffix ? (
          <Text variant="caption" style={styles.suffix}>
            {pointsSuffix}
          </Text>
        ) : null}
      </Row>
    </View>
  );
};
