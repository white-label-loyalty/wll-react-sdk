// @ts-nocheck
// TODO: Fix this file

import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useTheme } from '../../../context/ThemeContext';
import { TierTileConfig, Tile, TileHeight } from '../../../types/tile';
import { createResponsiveStyle } from '../../../utils/responsiveHelper';
import { BaseTile, ProgressBar, Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';

type TierTileProps = {
  tile: Tile;
};

const TierTileBase: React.FC<TierTileProps> & {
  Name: typeof TierTileName;
  Count: typeof TierTileCount;
  Image: typeof TierTileImage;
  Progress: typeof TierTileProgress;
  Description: typeof TierTileDescription;
} = ({ tile }) => {
  const { theme } = useTheme();
  const isFullSize = tile.tileHeight === TileHeight.Full;

  const styles = StyleSheet.create({
    container: createResponsiveStyle({
      paddingHorizontal: [8, 8, 12],
      borderRadius: theme.sizes.borderRadiusSm,
      width: '100%',
      flexDirection: isFullSize ? 'row' : 'row-reverse',
      alignItems: isFullSize ? 'flex-start' : 'center',
      justifyContent: 'space-between',
    }),
    contentContainer: {
      flexDirection: 'column',
      width: isFullSize ? '100%' : 'auto',
    },
  });
  return (
    <BaseTile tile={tile}>
      {isFullSize && <TierTileImage isFullSize={isFullSize} />}
    </BaseTile>
  );
};

type TierTileImageProps = {
  isFullSize: boolean;
};

const TierTileImage: React.FC<TierTileImageProps> = ({ isFullSize }) => {
  const { theme } = useTheme();
  const { configuration } = useTileContext();
  const { tier } = configuration as TierTileConfig;

  const styles = StyleSheet.create({
    imageContainer: createResponsiveStyle({
      width: isFullSize ? '100%' : 57,
      height: isFullSize ? '50%' : 57,
      marginBottom: isFullSize ? [8, 8, 12] : 0,
      backgroundColor: isFullSize
        ? theme.alphaDerivedPrimary[20]
        : theme.surface,
      justifyContent: 'center',
      alignItems: 'center',
    }),
    image: {
      width: '80%',
      height: '80%',
      resizeMode: 'contain',
    },
  });

  if (!tier) return null;

  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri: tier.artworkUrl }} style={styles.image} />
    </View>
  );
};

const TierTileName: React.FC = () => {
  const { configuration } = useTileContext();
  const { tier } = configuration as TierTileConfig;
  return <Text variant="title">{tier?.name}</Text>;
};

const TierTileCount: React.FC = () => {
  const { configuration } = useTileContext();
  const { tier } = configuration as TierTileConfig;
  return <Text>{`${tier?.earnedPoints}/${tier?.pointsRequirement}`}</Text>;
};

const TierTileProgress: React.FC = () => {
  const { configuration } = useTileContext();
  const { tier } = configuration as TierTileConfig;
  if (!tier) return null;
  return (
    <ProgressBar percentage={tier?.earnedPoints / tier?.pointsRequirement} />
  );
};

const TierTileDescription: React.FC = () => {
  const { configuration } = useTileContext();
  const { tier } = configuration as TierTileConfig;
  return <Text variant="body">{tier?.description}</Text>;
};

TierTileBase.Name = TierTileName;
TierTileBase.Count = TierTileCount;
TierTileBase.Image = TierTileImage;
TierTileBase.Progress = TierTileProgress;
TierTileBase.Description = TierTileDescription;

const TierTile = TierTileBase;

export default TierTile;
