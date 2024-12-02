import React, { FC } from 'react';
import { View } from 'react-native';
import { RewardTileConfig } from '../../../types/tile';
import { ProgressiveImage } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { useRewardTileStyles } from './styles';

type RewardTileMediaProps = {
  isArtworkOnly: boolean;
};

export const RewardTileMedia: FC<RewardTileMediaProps> = ({
  isArtworkOnly,
}) => {
  const styles = useRewardTileStyles();
  const { configuration } = useTileContext();
  const { artworkUrl, showArtwork = true } = configuration as RewardTileConfig;

  if (!artworkUrl || !showArtwork) return null;

  const containerStyle = {
    flexBasis: isArtworkOnly ? '100%' : '50%',
  };

  return (
    // @ts-ignore
    <View style={[styles.imageContainer, containerStyle]}>
      <ProgressiveImage source={{ uri: artworkUrl }} style={styles.image} />
    </View>
  );
};
