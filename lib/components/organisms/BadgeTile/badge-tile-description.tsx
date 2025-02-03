import React from 'react';
import { View } from 'react-native';
import { BadgeTileConfig, BadgeTileType } from '../../../types/tile';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';

export const BadgeTileDescription = (): JSX.Element | null => {
  const tile = useTileContext();
  const { configuration } = tile as { configuration: BadgeTileConfig };
  const { count, description, type } = configuration;

  if (!description) return null;

  // For Latest type, hide description when count = 0
  // For Specific type, always show description
  if (count === 0 && type === BadgeTileType.Latest) return null;

  return (
    <View
      accessible
      accessibilityLabel={`Badge description: ${description}`}
      testID="badge-tile-description"
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
