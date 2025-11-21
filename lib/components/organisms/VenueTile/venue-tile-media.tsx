import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { VenueTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { ProgressiveImage } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { useVenueTileStyles } from './styles';

type VenueTileMediaProps = {
  isArtworkOnly: boolean;
};

// We are using percentage values for flexBasis, which is valid in
// React Native but TypeScript expects a number.

type ResponsiveViewStyle = StyleProp<ViewStyle> & {
  flexBasis?: string | number;
};

/**
 * Renders the media for a Venue Tile.
 *
 * @param props {VenueTileMediaProps} - Component props
 * @param props.isArtworkOnly {boolean} - Whether the media should be rendered as an artwork only component
 * @returns React.ReactElement or null if no artwork URL is present or artwork should not be shown
 */

export const VenueTileMedia = ({
  isArtworkOnly,
}: VenueTileMediaProps): React.ReactElement | null => {
  const styles = useVenueTileStyles();
  const tileContext = useTileContext();

  if (!isContextValid(tileContext)) return null;

  const {
    artworkUrl,
    name = 'Venue',
  } = tileContext.configuration as VenueTileConfig;

  if (!artworkUrl) return null;

  const containerStyle: ResponsiveViewStyle = {
    flexBasis: isArtworkOnly ? '100%' : '50%',
  };

  return (
    <View
      style={[styles.imageContainer, containerStyle]}
      testID="venue-tile-media"
      role="img"
      accessibilityLabel={`Venue image for ${name}`}
    >
      <ProgressiveImage
        source={{ uri: artworkUrl }}
        style={styles.image}
        alt={`Venue image for ${name}`}
      />
    </View>
  );
};
