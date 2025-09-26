import React from 'react';
import { Image, View } from 'react-native';

import { RoundupTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { useTileContext } from '../../atoms/BaseTile';
import { useRoundupTileStyles } from './styles';

type RoundupTileMediaProps = {
  isFullSize: boolean;
};

/**
 * Renders the media of a Points Tile.
 *
 * @returns React.ReactElement or null if media is not present
 */

export const RoundupTileMedia = ({
  isFullSize,
}: RoundupTileMediaProps): React.ReactElement | null => {
  const tileContext = useTileContext();

  if (!isContextValid(tileContext)) return null;

  const { artworkUrl, title = 'Balance' } =
    tileContext.configuration as RoundupTileConfig;
  const styles = useRoundupTileStyles(isFullSize);

  if (!artworkUrl) return null;

  return (
    <View
      testID="roundup-tile-media"
      style={styles.imageContainer}
      role="img"
      accessibilityLabel={`Roundup tile image for ${title}`}
    >
      <Image
        source={{ uri: artworkUrl }}
        style={styles.image}
        resizeMode={isFullSize ? 'cover' : 'contain'}
      />
    </View>
  );
};
