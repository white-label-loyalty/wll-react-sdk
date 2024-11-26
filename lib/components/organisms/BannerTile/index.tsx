import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import BaseBanner from '../../../components/atoms/BaseBanner';
import { useResponsive } from '../../../context/ResponsiveContext';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useHandleTilePress } from '../../../hooks/useHandleTilePress';
import { BannerTileConfig, Tile } from '../../../types/tile';
import { getResponsiveValue } from '../../../utils/responsiveHelper';
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
  const { isDesktop, isTablet } = useResponsive();

  const dynamicStyles = StyleSheet.create({
    mediaContainer: {
      width: '30%',
      aspectRatio: 1,
      position: 'relative',
      overflow: 'hidden',
      marginRight: getResponsiveValue(24, 8, isDesktop, isTablet),
      height: 320,
    },
  });

  if (!artworkUrl) return null;
  return (
    <View style={dynamicStyles.mediaContainer}>
      <ProgressiveImage source={{ uri: artworkUrl }} style={styles.media} />
    </View>
  );
};

const BannerTileTitle: React.FC = () => {
  const { configuration } = useBannerContext();
  const { title } = configuration as BannerTileConfig;
  const { isDesktop, isTablet } = useResponsive();

  const dynamicStyles = StyleSheet.create({
    title: {
      fontSize: getResponsiveValue(32, 14, isDesktop, isTablet),
      marginBottom: getResponsiveValue(12, 4, isDesktop, isTablet),
      fontWeight: '700',
    },
  });

  if (!title) return null;
  return (
    <Text variant="title" style={dynamicStyles.title}>
      {title}
    </Text>
  );
};

const BannerTileDescription: React.FC = () => {
  const { configuration } = useBannerContext();
  const { description } = configuration as BannerTileConfig;
  const { theme } = useWllSdk();
  const { isDesktop, isTablet } = useResponsive();

  const dynamicStyles = StyleSheet.create({
    description: {
      fontSize: getResponsiveValue(18, 10, isDesktop, isTablet),
      marginBottom: getResponsiveValue(32, 12, isDesktop, isTablet),
    },
  });

  if (!description) return null;
  return (
    <Text
      style={[
        dynamicStyles.description,
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

BannerTile.Media = BannerTileMedia;
BannerTile.Title = BannerTileTitle;
BannerTile.Description = BannerTileDescription;
BannerTile.CTA = BannerTileCTA;

const styles = StyleSheet.create({
  slideContent: {
    flex: 1,
  },
  media: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

export default BannerTile;
