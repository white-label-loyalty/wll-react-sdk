import React from 'react';
import { View } from 'react-native';
import { RewardTileConfig } from '../../../types/tile';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';

export const RewardTileSummary = (): JSX.Element | null => {
  const { configuration } = useTileContext();
  const { summary } = configuration as RewardTileConfig;

  if (!summary) return null;

  return (
    <View
      accessible
      accessibilityRole="text"
      accessibilityLabel={summary}
    >
      <Text 
        variant="body"
        accessibilityElementsHidden={true}
        importantForAccessibility="no-hide-descendants"
      >
        {summary}
      </Text>
    </View>
  );
};
