import React from 'react';
import { View } from 'react-native';
import { PointsTileConfig } from '../../../types/tile';
import { Layout, Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { usePointsTileStyles } from './styles';

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
  const calculatedPoints = points * multiplier;
  const fullPointsText = `${pointsPrefix}${calculatedPoints} ${pointsSuffix}`;

  return (
    <View
      accessible
      accessibilityRole="text"
      accessibilityLabel={`Points value: ${fullPointsText}`}
    >
      <Text
        variant="caption"
        accessibilityElementsHidden={true}
        importantForAccessibility="no-hide-descendants"
      >
        {pointsPrefix}
        <Layout
          direction="row"
          accessibilityElementsHidden={true}
          importantForAccessibility="no-hide-descendants"
        >
          {calculatedPoints}
          <Text
            style={styles.suffix}
            accessibilityElementsHidden={true}
            importantForAccessibility="no-hide-descendants"
          >
            {pointsSuffix}
          </Text>
        </Layout>
      </Text>
    </View>
  );
};
