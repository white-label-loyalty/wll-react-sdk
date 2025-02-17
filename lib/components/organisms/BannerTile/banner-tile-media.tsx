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
  const { artworkUrl, title } = configuration as BannerTileConfig;

  if (!artworkUrl) return null;

  const containerStyle = {
    width: isArtworkOnly ? '100%' : '30%',
  };

  return (
    <View
      // @ts-ignore: We are using percentage values for width, which is valid in React Native but TypeScript expects a number.
      style={[styles.mediaContainer, containerStyle]}
      accessible
      role="img"
      accessibilityLabel={`Banner image${title ? ` for ${title}` : ''}`}
      testID="banner-tile-media"
    >
      <ProgressiveImage
        source={{ uri: artworkUrl }}
        style={styles.media}
        accessibilityElementsHidden={true}
        importantForAccessibility="no-hide-descendants"
      />
    </View>
  );
};
