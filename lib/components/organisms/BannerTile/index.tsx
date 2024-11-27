import * as React from 'react';
import { View } from 'react-native';
import BaseBanner from '../../../components/atoms/BaseBanner';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useHandleTilePress } from '../../../hooks/useHandleTilePress';
import { BannerTileConfig, Tile } from '../../../types/tile';
import { Button, ProgressiveImage, Text } from '../../atoms';
import { useBannerContext } from '../../atoms/BaseBanner';
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
  const styles = useBannerTileStyles();
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
  const styles = useBannerTileStyles();
  const { configuration } = useBannerContext();
  const { title } = configuration as BannerTileConfig;

  if (!title) return null;
  return (
    <Text variant="title" style={styles.title}>
      {title}
    </Text>
  );
};

const BannerTileDescription: React.FC = () => {
  const styles = useBannerTileStyles();
  const { configuration } = useBannerContext();
  const { description } = configuration as BannerTileConfig;
  const { theme } = useWllSdk();

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

BannerTile.Media = BannerTileMedia;
BannerTile.Title = BannerTileTitle;
BannerTile.Description = BannerTileDescription;
BannerTile.CTA = BannerTileCTA;

export default BannerTile;
