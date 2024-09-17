import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { PointsTileConfig } from '../../../types/tile';
import { Text, Tile } from '../../atoms';
import { useSectionContext } from '../Section';

type PointsTileProps = {
  configuration: PointsTileConfig;
};

const PointsTile: React.FC<PointsTileProps> = ({ configuration }) => {
  const { theme } = useWllSdk();
  const { sectionData } = useSectionContext();
  const {
    title,
    multiplier: tileMultiplier,
    prefix: tilePrefix,
    suffix: tileSuffix,
    imageUrl,
    points,
  } = configuration;

  const effectiveMultiplier =
    tileMultiplier ?? sectionData?.pointsMultiplier ?? 1;
  const effectivePrefix =
    tilePrefix ?? sectionData?.pointsPrefix ?? '';
  const effectiveSuffix =
    tileSuffix ?? sectionData?.pointsSuffix ?? 'pts';
  const calculatedPoints =
    points !== undefined ? points * effectiveMultiplier : null;

  const styles = StyleSheet.create({
    container: {
      padding: theme.sizes.md,
      maxWidth: 270,
      borderRadius: theme.sizes.borderRadius,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      aspectRatio: 2,
    },
    title: {
      marginBottom: 4,
      color: theme.text,
    },
    points: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.primary,
    },
    image: {
      width: theme.sizes.lg * 3,
      height: theme.sizes.lg * 3,
    },
  });

  return (
    <Tile>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{title}</Text>
          {calculatedPoints !== null && (
            <Text style={styles.points}>
              {effectivePrefix}
              {calculatedPoints}
              {effectiveSuffix}
            </Text>
          )}
        </View>
        {imageUrl && (
          <Image source={{ uri: imageUrl }} style={styles.image} />
        )}
      </View>
    </Tile>
  );
};

export default PointsTile;
