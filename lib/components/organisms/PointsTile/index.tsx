import { useWllSdk } from 'context/WllSdkContext';
import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { PointsTileConfig, Tile, TileHeight } from '../../../types/tile';
import { createResponsiveStyle } from '../../../utils/responsiveHelper';
import { BaseTile, Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { useSectionContext } from '../Section';

type PointsTileProps = {
  tile: Tile;
};

const PointsTile: React.FC<PointsTileProps> & {
  Title: typeof PointsTileTitle;
  Points: typeof PointsTilePoints;
  Image: typeof PointsTileImage;
} = ({ tile }) => {
  const { theme } = useWllSdk();
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
      {isFullSize && <PointsTileImage isFullSize={isFullSize} />}
      <View style={styles.container}>
        {!isFullSize && <PointsTileImage isFullSize={isFullSize} />}
        <View style={styles.contentContainer}>
          <PointsTileTitle />
          <PointsTilePoints />
        </View>
      </View>
    </BaseTile>
  );
};

const PointsTileTitle: React.FC = () => {
  const { configuration } = useTileContext();
  const { title } = configuration as PointsTileConfig;

  return <Text variant="eyebrow">{title}</Text>;
};

const PointsTilePoints: React.FC = () => {
  const { theme } = useWllSdk();
  const { sectionData } = useSectionContext();
  const { configuration } = useTileContext();
  const {
    multiplier: tileMultiplier,
    prefix: tilePrefix,
    suffix: tileSuffix,
    points,
  } = configuration as PointsTileConfig;

  const effectiveMultiplier =
    tileMultiplier ?? sectionData?.pointsMultiplier ?? 1;
  const effectivePrefix = tilePrefix ?? sectionData?.pointsPrefix ?? '';
  const effectiveSuffix = tileSuffix ?? sectionData?.pointsSuffix ?? 'pts';
  const calculatedPoints =
    points !== undefined ? points * effectiveMultiplier : null;

  const styles = StyleSheet.create({
    suffix: createResponsiveStyle({
      fontSize: [14, 14, 18],
      color: theme.primary,
    }),
    pointsWithSuffix: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  if (calculatedPoints === null) return null;
  return (
    <Text variant="caption">
      {effectivePrefix}
      <View style={styles.pointsWithSuffix}>
        {calculatedPoints}
        <Text style={styles.suffix}>{effectiveSuffix}</Text>
      </View>
    </Text>
  );
};

type PointTileImageProps = {
  isFullSize: boolean;
};

const PointsTileImage: React.FC<PointTileImageProps> = ({ isFullSize }) => {
  const { theme } = useWllSdk();
  const { configuration } = useTileContext();
  const { imageUrl } = configuration as PointsTileConfig;

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

  if (!imageUrl) return null;

  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
    </View>
  );
};

PointsTile.Title = PointsTileTitle;
PointsTile.Points = PointsTilePoints;
PointsTile.Image = PointsTileImage;

export default PointsTile;
