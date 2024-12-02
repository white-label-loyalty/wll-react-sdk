import React, { FC } from 'react';
import { View } from 'react-native';
import { RewardTileConfig } from '../../../types/tile';
import { ProgressiveImage } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { useRewardTileStyles } from './styles';

export const RewardTileMedia: FC = () => {
  const styles = useRewardTileStyles();
  const { configuration } = useTileContext();
  const { artworkUrl, showArtwork = true } = configuration as RewardTileConfig;

  if (!artworkUrl || !showArtwork) return null;
  
  return (
    <View style={styles.imageContainer}>
      <ProgressiveImage
        source={{ uri: artworkUrl }}
        style={styles.image}
      />
    </View>
  );
};
