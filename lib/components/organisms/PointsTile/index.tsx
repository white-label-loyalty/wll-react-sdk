import * as React from 'react';
import { Image, View } from 'react-native';
import { useTileSize } from '../../../hooks/useTileSize';
import { PointsTileConfig, Tile } from '../../../types/tile';
import { BaseTile, Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { usePointsTileStyles } from './styles';

type PointsTileProps = {
  tile: Tile;
};

const PointsTile: React.FC<PointsTileProps> & {
  Title: typeof PointsTileTitle;
  Points: typeof PointsTilePoints;
  Image: typeof PointsTileImage;
} = ({ tile }) => {
  const { isFullSize } = useTileSize(tile);
  const styles = usePointsTileStyles(isFullSize);

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
  const styles = usePointsTileStyles();
  const { configuration } = useTileContext();
  const { multiplier, prefix, suffix, points } =
    configuration as PointsTileConfig;

  const calculatedPoints =
    points !== undefined ? points * (multiplier ?? 1) : null;

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
  const { configuration } = useTileContext();
  const { artworkUrl } = configuration as PointsTileConfig;

  const styles = usePointsTileStyles(isFullSize);

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
