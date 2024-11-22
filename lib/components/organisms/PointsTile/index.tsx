import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useTileSize } from '../../../hooks/useTileSize';
import { PointsTileConfig, Tile } from '../../../types/tile';
import { createResponsiveStyle } from '../../../utils/responsiveHelper';
import { BaseTile, Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';

type PointsTileProps = {
  tile: Tile;
};

const PointsTile: React.FC<PointsTileProps> & {
  Title: typeof PointsTileTitle;
  Points: typeof PointsTilePoints;
  Image: typeof PointsTileImage;
} = ({ tile }) => {
  const { isFullSize } = useTileSize(tile);

  const styles = StyleSheet.create({
    container: createResponsiveStyle({
      paddingHorizontal: [8, 8, 12],
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
      {isFullSize && <PointsTile.Image isFullSize={isFullSize} />}
      <View style={styles.container}>
        {!isFullSize && <PointsTile.Image isFullSize={isFullSize} />}
        <View style={styles.contentContainer}>
          <PointsTile.Title />
          <PointsTile.Points />
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
  const { configuration } = useTileContext();
  const { multiplier, prefix, suffix, points } =
    configuration as PointsTileConfig;

  const calculatedPoints =
    points !== undefined ? points * (multiplier ?? 1) : null;
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
      {prefix ?? ''}
      <View style={styles.pointsWithSuffix}>
        {calculatedPoints}
        <Text style={styles.suffix}>{suffix ?? 'pts'}</Text>
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
  const { artworkUrl } = configuration as PointsTileConfig;

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
      overflow: 'hidden',
    }),
    image: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      resizeMode: 'contain',
    },
  });

  if (!artworkUrl) return null;

  return (
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: artworkUrl }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

PointsTile.Title = PointsTileTitle;
PointsTile.Points = PointsTilePoints;
PointsTile.Image = PointsTileImage;

export default PointsTile;
