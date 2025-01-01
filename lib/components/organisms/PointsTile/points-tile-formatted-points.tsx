import React from 'react';
import { View } from 'react-native';
import { PointsTileConfig } from '../../../types/tile';
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
    multiplier = 1,
    pointsPrefix = '',
    pointsSuffix = 'pts',
    points,
  } = configuration as PointsTileConfig;

  if (points === undefined) return null;
  const calculatedPoints = points * Number(multiplier ?? 1);
  const fullPointsText = `${pointsPrefix}${calculatedPoints} ${pointsSuffix}`;

  return (
    <View
      accessible
      accessibilityRole="text"
      accessibilityLabel={`Points value: ${fullPointsText}`}
    >
      <Row align="center" justify="start">
        <Text {...TextProps}>
          {pointsPrefix}
          {calculatedPoints}
        </Text>
        {pointsSuffix && (
          <Text {...TextProps} style={styles.suffix}>
            {pointsSuffix}
          </Text>
        )}
      </Row>
    </View>
  );
};
