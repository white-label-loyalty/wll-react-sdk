import Color from 'color';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useTheme } from '../../../context/ThemeContext';
import { PointsTileConfig, Tile, TileHeight } from '../../../types/tile';
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
  const { theme } = useTheme();
  const isFullSize = tile.tileHeight === TileHeight.Full;

  const styles = StyleSheet.create({
    container: {
      padding: theme.sizes.md,
      borderRadius: theme.sizes.borderRadiusSm,
      width: '100%',
      flexDirection: isFullSize ? 'row' : 'row-reverse',
      alignItems: isFullSize ? 'flex-start' : 'center',
      justifyContent: 'space-between',
    },
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
  const { theme } = useTheme();
  const { configuration } = useTileContext();
  const { title } = configuration as PointsTileConfig;

  return <Text variant="eyebrow">{title}</Text>;
};

const PointsTilePoints: React.FC = () => {
  const { theme } = useTheme();
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
    suffix: {
      fontSize: 16,
      color: theme.primary,
    },
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
  const { theme } = useTheme();
  const { configuration } = useTileContext();
  const { imageUrl } = configuration as PointsTileConfig;

  const styles = StyleSheet.create({
    imageContainer: {
      width: isFullSize ? '100%' : 57,
      height: isFullSize ? '50%' : 57,
      backgroundColor: isFullSize
        ? Color(theme.primary).alpha(0.2).string()
        : theme.surface,
      justifyContent: 'center',
      alignItems: 'center',
    },
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
