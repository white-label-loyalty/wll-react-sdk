import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { BannerTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { ProgressiveImage } from '../../atoms';
import { useBannerContext } from '../../atoms/BaseBanner';
import { useBannerTileStyles } from './styles';

type BannerTileMediaProps = {
  isArtworkOnly: boolean;
};

// Extends ViewStyle to support percentage strings for width values, which React Native accepts at runtime but TypeScript doesn't type correctly
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
  const bannerContext = useBannerContext();

  if (!isContextValid(bannerContext)) return null;

  const { artworkUrl, title } = bannerContext.configuration as BannerTileConfig;

  if (!artworkUrl) return null;

  const containerStyle: ResponsiveViewStyle = {
    width: isArtworkOnly ? '100%' : '30%',
  };

  return (
    <View
      style={[styles.mediaContainer, containerStyle]}
      role="img"
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
