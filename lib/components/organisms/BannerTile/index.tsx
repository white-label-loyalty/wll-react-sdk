import React from 'react';
import { View } from 'react-native';
import BaseBanner from '../../../components/atoms/BaseBanner';
import { BannerTileConfig, Tile } from '../../../types/tile';
import { withTileFetching } from '../../hoc/withTileFetching';
import { BannerTileCTA } from './banner-tile-cta';
import { BannerTileDescription } from './banner-tile-description';
import { BannerTileMedia } from './banner-tile-media';
import { BannerTileTitle } from './banner-tile-title';
import { useBannerTileStyles } from './styles';

type BannerTileProps = {
  tile: Tile;
};

/**
 * Helper function to determine if the tile is artwork-only.
 *
 * @param configuration - The configuration object of the tile.
 * @returns `true` if the tile has no title, description, or CTA text.
 */
const isArtworkOnly = (configuration: BannerTileConfig): boolean => {
  return (
    !configuration.title && !configuration.description && !configuration.ctaText
  );
};

/**
 * The main BannerTile component.
 *
 * This component renders a banner tile with optional media, title, description, and CTA.
 */
const BannerTileRoot = ({ tile }: BannerTileProps): JSX.Element | null => {
  if (!tile) return null;

  const styles = useBannerTileStyles();
  const { configuration } = tile as { configuration: BannerTileConfig };

  return (
    <BaseBanner tile={tile}>
      <BannerTile.Media isArtworkOnly={isArtworkOnly(configuration)} />
      <View style={styles.slideContent}>
        <BannerTile.Title />
        <BannerTile.Description />
        <BannerTile.CTA />
      </View>
    </BaseBanner>
  );
};

/**
 * The BannerTile component with subcomponents attached.
 */
export const BannerTile = Object.assign(BannerTileRoot, {
  Media: BannerTileMedia,
  Title: BannerTileTitle,
  Description: BannerTileDescription,
  CTA: BannerTileCTA,
});

export default withTileFetching(BannerTile);
