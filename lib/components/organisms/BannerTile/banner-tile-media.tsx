import React from 'react';
import { View } from 'react-native';
import { BannerTileConfig } from '../../../types/tile';
import { ProgressiveImage } from '../../atoms';
import { useBannerContext } from '../../atoms/BaseBanner';
import { useBannerTileStyles } from './styles';

type BannerTileMediaProps = {
  isArtworkOnly: boolean;
};

export const BannerTileMedia = ({
  isArtworkOnly,
}: BannerTileMediaProps): JSX.Element | null => {
  const styles = useBannerTileStyles();
  const { configuration } = useBannerContext();
  const { artworkUrl } = configuration as BannerTileConfig;

  if (!artworkUrl) return null;

  const containerStyle = {
    width: isArtworkOnly ? '100%' : '30%',
  };

  return (
    // @ts-ignore: We are using percentage values for width, which is valid in React Native but TypeScript expects a number.
    <View style={[styles.mediaContainer, containerStyle]}>
      <ProgressiveImage source={{ uri: artworkUrl }} style={styles.media} />
    </View>
  );
};
