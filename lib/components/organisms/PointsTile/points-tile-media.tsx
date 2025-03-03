import React from 'react';
import { Image, View } from 'react-native';

import { PointsTileConfig } from '../../../types/tile';
import { useTileContext } from '../../atoms/BaseTile';
import { usePointsTileStyles } from './styles';

type PointsTileMediaProps = {
  isFullSize: boolean;
};

/**
 * Renders the media of a Points Tile.
 *
 * @returns JSX.Element or null if media is not present
 */
export const PointsTileMedia = ({
  isFullSize,
}: PointsTileMediaProps): JSX.Element | null => {
  const tileContext = useTileContext();

  if (!tileContext.configuration) return null;

  const { artworkUrl, title = 'Points' } =
    tileContext.configuration as PointsTileConfig;
  const styles = usePointsTileStyles(isFullSize);

  if (!artworkUrl) return null;

  return (
    <View
      testID="points-tile-media"
      style={styles.imageContainer}
      accessibilityRole="image"
      accessibilityLabel={`Points tile image for ${title}`}
    >
      <Image
        source={{ uri: artworkUrl }}
        style={styles.image}
        resizeMode={isFullSize ? 'cover' : 'contain'}
      />
    </View>
  );
};
