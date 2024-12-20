import React from 'react';
import { Image, View } from 'react-native';

import { PointsTileConfig } from '../../../types/tile';
import { useTileContext } from '../../atoms/BaseTile';
import { usePointsTileStyles } from './styles';

type PointsTileMediaProps = {
  isFullSize: boolean;
};

export const PointsTileMedia = ({
  isFullSize,
}: PointsTileMediaProps): JSX.Element | null => {
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
