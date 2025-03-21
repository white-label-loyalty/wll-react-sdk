import React from 'react';
import { View } from 'react-native';
import { PointsTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { applyMultiplier } from '../../../utils/pointsHelpers';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { Row } from '../../atoms/Primatives';
import { usePointsTileStyles } from './styles';

/**
 * Renders formatted points value for a Points Tile.
 *
 * @returns JSX.Element or null if points are undefined or zero
 */

export const PointsTileFormattedPoints = (): JSX.Element | null => {
  const styles = usePointsTileStyles();
  const tileContext = useTileContext();

  if (!isContextValid(tileContext)) return null;

  const {
    pointsMultiplier = 1,
    pointsPrefix = '',
    pointsSuffix = 'pts',
    points = 0,
  } = tileContext.configuration as PointsTileConfig;

  if (points === undefined) return null;

  const calculatedPoints = applyMultiplier(points, pointsMultiplier);
  const fullPointsText =
    `${pointsPrefix}${calculatedPoints} ${pointsSuffix}`.trim();

  return (
    <View
      testID="points-tile-points"
      accessibilityRole="text"
      accessibilityLabel={`Points value: ${fullPointsText}`}
    >
      <Row align="center" justify="start">
        {pointsPrefix ? (
          <Text variant="caption" testID="points-tile-prefix">
            {pointsPrefix}
          </Text>
        ) : null}
        <Text variant="caption" testID="points-tile-value">
          {calculatedPoints}
        </Text>
        {pointsSuffix ? (
          <Text
            variant="caption"
            style={styles.suffix}
            testID="points-tile-suffix"
          >
            {pointsSuffix}
          </Text>
        ) : null}
      </Row>
    </View>
  );
};
