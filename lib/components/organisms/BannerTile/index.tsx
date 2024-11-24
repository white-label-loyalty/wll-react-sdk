import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import BaseBanner from '../../../components/atoms/BaseBanner';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useHandleTilePress } from '../../../hooks/useHandleTilePress';
import { BannerTileConfig, Tile } from '../../../types/tile';
import { createResponsiveStyle } from '../../../utils/responsiveHelper';
import { Button, ProgressiveImage, Text } from '../../atoms';
import { useBannerContext } from '../../atoms/BaseBanner';

type BannerTileProps = {
  tile: Tile;
};

const BannerTile: React.FC<BannerTileProps> & {
  Media: typeof BannerTileMedia;
  Title: typeof BannerTileTitle;
  Description: typeof BannerTileDescription;
  CTA: typeof BannerTileCTA;
} = ({ tile }) => {
  return (
    <BaseBanner tile={tile}>
      <BannerTile.Media />
      <View style={styles.slideContent}>
        <BannerTile.Title />
        <BannerTile.Description />
        <BannerTile.CTA />
      </View>
    </BaseBanner>
  );
};

const BannerTileMedia: React.FC = () => {
  const { configuration } = useBannerContext();
  const { artworkUrl } = configuration as BannerTileConfig;

  if (!artworkUrl) return null;
  return (
    <View style={styles.mediaContainer}>
      <ProgressiveImage source={{ uri: artworkUrl }} style={styles.media} />
    </View>
  );
};

const BannerTileTitle: React.FC = () => {
  const { configuration } = useBannerContext();
  const { title } = configuration as BannerTileConfig;

  if (!title) return null;
  return (
    // @ts-ignore
    <Text variant="title" style={styles.title}>
      {title}
    </Text>
  );
};

const BannerTileDescription: React.FC = () => {
  const { configuration } = useBannerContext();
  const { theme } = useWllSdk();
  const { description } = configuration as BannerTileConfig;

  if (!description) return null;
  return (
    <Text
      style={[
        styles.description,
        {
          color: theme.derivedSurfaceText[20],
        },
      ]}
    >
      {description}
    </Text>
  );
};

const BannerTileCTA: React.FC = () => {
  const { configuration } = useBannerContext();
  const { ctaText, ctaLink, ctaLinkTarget } = configuration as BannerTileConfig;
  const handlePress = useHandleTilePress(ctaLink, ctaLinkTarget);

  if (!ctaText) return null;
  return <Button title={ctaText} variant="accent" onPress={handlePress} />;
};

const styles = StyleSheet.create({
  slide: createResponsiveStyle({
    width: '100%',
    maxWidth: 1080,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  }),
  slideContent: createResponsiveStyle({
    flex: 1,
  }),
  mediaContainer: createResponsiveStyle({
    width: '30%',
    aspectRatio: 1,
    position: 'relative',
    overflow: 'hidden',
    marginRight: [8, 8, 24],
    height: 320,
  }),
  media: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  title: createResponsiveStyle({
    fontSize: [14, 14, 32],
    marginBottom: [4, 4, 12],
    fontWeight: '700',
  }),
  description: createResponsiveStyle({
    fontSize: [10, 10, 18],
    marginBottom: [12, 12, 32],
  }),
});

BannerTile.Media = BannerTileMedia;
BannerTile.Title = BannerTileTitle;
BannerTile.Description = BannerTileDescription;
BannerTile.CTA = BannerTileCTA;

export default BannerTile;
