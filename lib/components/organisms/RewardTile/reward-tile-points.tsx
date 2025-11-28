import React from 'react';
import { View } from 'react-native';
import { RewardTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { applyMultiplier, getPointsLabel } from '../../../utils/pointsHelpers';
import { Row, Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { useRewardTileStyles } from './styles';

/**
 * Renders the points value of a Reward Tile.
 *
 * @returns React.ReactElement or null if price should not be shown or is zero/undefined
 */

export const RewardTilePoints = (): React.ReactElement | null => {
  const styles = useRewardTileStyles();
  const tileContext = useTileContext();

  if (!isContextValid(tileContext)) return null;

  const {
    showPrice = true,
    price = 0,
    pointsMultiplier = 1,
    pointsPrefix = '',
    pointsSuffix = 'pts',
  } = tileContext.configuration as RewardTileConfig;

  if (!showPrice || price === undefined || price === 0) return null;

  const calculatedPoints = applyMultiplier(price, pointsMultiplier);

  const accessibilityLabel = getPointsLabel(
    'Reward points:',
    calculatedPoints,
    pointsPrefix,
    pointsSuffix
  );

  return (
    <View
      style={{ marginTop: 'auto' }}
      testID="reward-tile-points"
      role="article"
      accessibilityLabel={accessibilityLabel}
    >
      <Row align="center" justify="start">
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
