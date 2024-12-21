import React from 'react';
import { View } from 'react-native';
import { RewardCategoryTileConfig } from '../../../types/tile';
import { ProgressiveImage } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { useRewardCategoryTileStyles } from './styles';

export const RewardCategoryMedia = (): JSX.Element | null => {
  const styles = useRewardCategoryTileStyles();
  const { configuration } = useTileContext();
  const { artworkUrl, name } = configuration as RewardCategoryTileConfig;

  if (!artworkUrl) return null;

  return (
    <View
      accessible
      accessibilityRole="image"
      accessibilityLabel={`Background image${name ? ` for ${name} category` : ''}`}
    >
      <ProgressiveImage 
        source={{ uri: artworkUrl }} 
        style={styles.background}
        accessibilityElementsHidden={true}
        importantForAccessibility="no-hide-descendants"
      />
    </View>
  );
};
