import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { BannerTileConfig } from '../../../types/tile';
import { ProgressiveImage } from '../../atoms';
import { useBannerContext } from '../../atoms/BaseBanner';
import { useBannerTileStyles } from './styles';

type BannerTileMediaProps = {
  isArtworkOnly: boolean;
};

type ResponsiveViewStyle = StyleProp<ViewStyle> & {
  width?: string | number;
};
/**
 * Renders the media of a Banner Tile.
 *
 * @returns JSX.Element or null if no media is present
 */
export const BannerTileMedia = ({
  isArtworkOnly,
}: BannerTileMediaProps): JSX.Element | null => {
  const styles = useBannerTileStyles();
  const { configuration } = useBannerContext();

  if (!configuration) return null;

  const { artworkUrl, title } = configuration as BannerTileConfig;

  if (!artworkUrl) return null;

  const containerStyle: ResponsiveViewStyle = {
    width: isArtworkOnly ? '100%' : '30%',
  };

  return (
    <View
      style={[styles.mediaContainer, containerStyle]}
      accessibilityRole="image"
      accessibilityLabel={`Banner image${title ? ` for ${title}` : ''}`}
      testID="banner-tile-media"
    >
      <ProgressiveImage
        source={{ uri: artworkUrl }}
        style={styles.media}
        alt={`Banner image${title ? ` for ${title}` : ''}`}
      />
    </View>
  );
};
