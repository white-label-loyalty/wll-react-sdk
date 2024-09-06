import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useTheme } from '../../../context/ThemeContext';
import { PointsTileConfig, Tile } from '../../../types/tile';
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

  const styles = StyleSheet.create({
    container: {
      padding: theme.sizes.md,
      maxWidth: 270,
      borderRadius: theme.sizes.borderRadiusSm,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      aspectRatio: 2,
    },
    contentContainer: {
      flexDirection: 'column',
    },
  });

  return (
    <BaseTile tile={tile}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <PointsTileTitle />
          <PointsTilePoints />
        </View>
        <PointsTileImage />
      </View>
    </BaseTile>
  );
};

const PointsTileTitle: React.FC = () => {
  const { theme } = useTheme();
  const { configuration } = useTileContext();
  const { title } = configuration as PointsTileConfig;

  const styles = StyleSheet.create({
    title: {
      marginBottom: 4,
      color: theme.text,
    },
  });

  return <Text style={styles.title}>{title}</Text>;
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
    points: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.primary,
    },
  });

  if (calculatedPoints === null) return null;
  return (
    <Text style={styles.points}>
      {effectivePrefix}
      {calculatedPoints}
      {effectiveSuffix}
    </Text>
  );
};

const PointsTileImage: React.FC = () => {
  const { theme } = useTheme();
  const { configuration } = useTileContext();
  const { imageUrl } = configuration as PointsTileConfig;

  const styles = StyleSheet.create({
    image: {
      width: theme.sizes.lg * 3,
      height: theme.sizes.lg * 3,
    },
  });

  if (!imageUrl) return null;
  return <Image source={{ uri: imageUrl }} style={styles.image} />;
};

PointsTile.Title = PointsTileTitle;
PointsTile.Points = PointsTilePoints;
PointsTile.Image = PointsTileImage;

export default PointsTile;
