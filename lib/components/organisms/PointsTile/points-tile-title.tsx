import React from 'react';
import { View } from 'react-native';
import { PointsTileConfig } from '../../../types/tile';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';

export const PointsTileTitle = (): JSX.Element | null => {
  const { configuration } = useTileContext();
  const { title } = configuration as PointsTileConfig;

  if (!title) return null;

  return (
    <View testID="points-tile-title" accessible accessibilityLabel={title}>
      <Text
        variant="eyebrow"
        accessibilityElementsHidden={true}
        importantForAccessibility="no-hide-descendants"
      >
        {title}
      </Text>
    </View>
  );
};
