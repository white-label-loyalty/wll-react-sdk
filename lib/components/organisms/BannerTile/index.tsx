import * as React from 'react';
import { Image, Linking, StyleSheet, View } from 'react-native';
import BaseBanner from '../../../components/atoms/BaseBanner';
import { BannerTileConfig, Tile } from '../../../types/tile';
import { createResponsiveStyle } from '../../../utils/responsiveHelper';
import { Button, Text } from '../../atoms';
import { useBannerContext } from '../../atoms/BaseBanner';

type BannerTileProps = {
  tile: Tile;
};

const BannerTile: React.FC<BannerTileProps> & {
  Image: typeof BannerTileImage;
  Title: typeof BannerTileTitle;
  Description: typeof BannerTileDescription;
  CTA: typeof BannerTileCTA;
} = ({ tile }) => {
  return (
    <BaseBanner tile={tile}>
      <BannerTile.Image />
      <View style={styles.slideContent}>
        <BannerTile.Title />
        <BannerTile.Description />
        <BannerTile.CTA />
      </View>
    </BaseBanner>
  );
};

const BannerTileImage: React.FC = () => {
  const { configuration } = useBannerContext();
  const { artworkUrl } = configuration as BannerTileConfig;

  if (!artworkUrl) return null;
  return (
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: artworkUrl }}
        style={styles.image}
        resizeMode="cover"
        onError={(error) => console.error('Image loading error:', error)}
      />
    </View>
  );
};

const BannerTileTitle: React.FC = () => {
  const { configuration } = useBannerContext();
  const { title } = configuration as BannerTileConfig;

  if (!title) return null;
  return (
    <Text variant="title" style={styles.title} isSurface={true}>
      {title}
    </Text>
  );
};

const BannerTileDescription: React.FC = () => {
  const { configuration } = useBannerContext();
  const { description } = configuration as BannerTileConfig;

  if (!description) return null;
  return (
    <Text variant="body" style={styles.description} isSurface={true}>
      {description}
    </Text>
  );
};

const BannerTileCTA: React.FC = () => {
  const { configuration } = useBannerContext();
  const { ctaText, ctaLink } = configuration as BannerTileConfig;

  const handleLinkPress = async (url: string) => {
    if (!url) return;
    if (await Linking.canOpenURL(url)) {
      Linking.openURL(url);
    }
  };

  if (!ctaText) return null;
  return (
    <Button
      title={ctaText}
      variant="accent"
      onPress={() => handleLinkPress(ctaLink as string)}
    />
  );
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
    padding: [16, 16, 20],
    flex: 1,
  }),
  imageContainer: createResponsiveStyle({
    width: '20%',
    aspectRatio: 1,
    position: 'relative',
    overflow: 'hidden',
  }),
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  title: createResponsiveStyle({
    marginBottom: [8, 8, 10],
  }),
  description: createResponsiveStyle({
    marginBottom: [16, 16, 20],
  }),
});

BannerTile.Image = BannerTileImage;
BannerTile.Title = BannerTileTitle;
BannerTile.Description = BannerTileDescription;
BannerTile.CTA = BannerTileCTA;

export default BannerTile;
