import React from 'react';
import { View } from 'react-native';
import { PointsTileConfig } from '../../../types/tile';
import { applyMultiplier } from '../../../utils/pointsHelpers';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { Row } from '../../atoms/Primatives';
import { usePointsTileStyles } from './styles';

const TextProps = {
  variant: 'caption' as const,
  accessibilityElementsHidden: true,
  importantForAccessibility: 'no-hide-descendants' as const,
};

export const PointsTileFormattedPoints = (): JSX.Element | null => {
  const styles = usePointsTileStyles();
  const { configuration } = useTileContext();
  const {
    pointsMultiplier = 1,
    pointsPrefix = '',
    pointsSuffix = 'pts',
    points,
  } = configuration as PointsTileConfig;

  if (points === undefined || points === 0) return null;
  const calculatedPoints = applyMultiplier(points, pointsMultiplier);
  const fullPointsText = `${pointsPrefix}${calculatedPoints} ${pointsSuffix}`;

  return (
    <View
      testID="points-tile-points"
      accessible
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
