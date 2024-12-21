import React from 'react';
import { View } from 'react-native';
import { RewardTileConfig } from '../../../types/tile';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';

export const RewardTileTitle = (): JSX.Element | null => {
  const { configuration } = useTileContext();
  const { name } = configuration as RewardTileConfig;

  if (!name) return null;

  return (
    <View
      accessible
      accessibilityRole="header"
      accessibilityLabel={name}
    >
      <Text 
        variant="title" 
        ellipsizeMode="tail" 
        numberOfLines={1}
        accessibilityElementsHidden={true}
        importantForAccessibility="no-hide-descendants"
      >
        {name}
      </Text>
    </View>
  );
};
