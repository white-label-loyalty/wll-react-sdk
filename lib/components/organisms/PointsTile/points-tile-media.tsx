import React, { FC } from 'react';
import { View, Image } from 'react-native';

import { useTileContext } from '../../atoms/BaseTile';
import { PointsTileConfig } from '../../../types/tile';
import { usePointsTileStyles } from './styles';

type PointsTileMediaProps = {
  isFullSize: boolean;
};

export const PointsTileMedia: FC<PointsTileMediaProps> = ({ isFullSize }) => {
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
