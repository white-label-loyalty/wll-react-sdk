import * as React from 'react';
import { View } from 'react-native';
import BaseBanner from '../../../components/atoms/BaseBanner';
import { BannerTileConfig, Tile } from '../../../types/tile';
import { BannerTileCTA } from './banner-tile-cta';
import { BannerTileDescription } from './banner-tile-description';
import { BannerTileMedia } from './banner-tile-media';
import { BannerTileTitle } from './banner-tile-title';
import { useBannerTileStyles } from './styles';

type BannerTileProps = {
  tile: Tile;
};

const BannerTile: React.FC<BannerTileProps> & {
  Media: typeof BannerTileMedia;
  Title: typeof BannerTileTitle;
  Description: typeof BannerTileDescription;
  CTA: typeof BannerTileCTA;
} = ({ tile }) => {
  const styles = useBannerTileStyles();

  const { configuration } = tile as { configuration: BannerTileConfig };

  const isArtworkOnly =
    !configuration.title &&
    !configuration.description &&
    !configuration.ctaText;

  return (
    <BaseBanner tile={tile}>
      <BannerTile.Media isArtworkOnly={isArtworkOnly} />
      <View style={styles.slideContent}>
        <BannerTile.Title />
        <BannerTile.Description />
        <BannerTile.CTA />
      </View>
    </BaseBanner>
  );
};

BannerTile.Media = BannerTileMedia;
BannerTile.Title = BannerTileTitle;
BannerTile.Description = BannerTileDescription;
BannerTile.CTA = BannerTileCTA;

export default BannerTile;
