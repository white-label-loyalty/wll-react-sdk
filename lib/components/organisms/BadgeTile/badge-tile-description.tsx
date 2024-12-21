import React from 'react';
import { View } from 'react-native';
import { BadgeTileConfig } from '../../../types/tile';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';

export const BadgeTileDescription = (): JSX.Element | null => {
  const tile = useTileContext();
  const { configuration } = tile as { configuration: BadgeTileConfig };
  const { count, description } = configuration;

  if (count === 0 || !description) return null;

  return (
    <View
      accessible
      accessibilityRole="text"
      accessibilityLabel={`Badge description: ${description}`}
    >
      <Text 
        variant="body" 
        numberOfLines={2} 
        ellipsizeMode="tail"
        accessibilityElementsHidden={true}
        importantForAccessibility="no-hide-descendants"
      >
        {description}
      </Text>
    </View>
  );
};
