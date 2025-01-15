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
  const { artworkUrl, title } = configuration as PointsTileConfig;
  const styles = usePointsTileStyles(isFullSize);

  if (!artworkUrl) return null;

  return (
    <View
      style={styles.imageContainer}
      accessible
      accessibilityRole="image"
      accessibilityLabel={`Points tile image${title ? ` for ${title}` : ''}`}
    >
      <Image
        source={{ uri: artworkUrl }}
        style={styles.image}
        resizeMode={isFullSize ? 'cover' : 'contain'}
        accessibilityElementsHidden={true}
        importantForAccessibility="no-hide-descendants"
      />
    </View>
  );
};
