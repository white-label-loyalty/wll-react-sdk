import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { TileHeight, VenueTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { Icon, ProgressiveImage } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { useVenueTileStyles } from './styles';

// We are using percentage values for flexBasis, which is valid in
// React Native but TypeScript expects a number.

type ResponsiveViewStyle = StyleProp<ViewStyle> & {
  flexBasis?: string | number;
};

/**
 * Renders the media for a Venue Tile.
 *
 * @returns React.ReactElement or null if no artwork URL is present or artwork should not be shown
 */

export const VenueTileMedia = (): React.ReactElement | null => {
  const styles = useVenueTileStyles();
  const tileContext = useTileContext();

  if (!isContextValid(tileContext)) return null;

  const {
    artworkUrl,
    name = 'Venue',
    isLocked = false,
  } = tileContext.configuration as VenueTileConfig;

  const containerStyle: ResponsiveViewStyle = {
    flexBasis: '50%',
    ...(tileContext.tileHeight === TileHeight.Half && { minHeight: 0 }),
  };

  const showCenteredPin = !artworkUrl && !isLocked;

  return (
    <View
      style={[styles.imageContainer, containerStyle]}
      testID="venue-tile-media"
      role="img"
      accessibilityLabel={`Venue image for ${name}`}
    >
      {artworkUrl && (
        <ProgressiveImage
          source={{ uri: artworkUrl }}
          style={styles.image}
          alt={`Venue image for ${name}`}
        />
      )}
      <View style={styles.lockOverlay} testID="lock-overlay">
        {isLocked && <Icon name="LockKeyhole" size={48} color="white" />}
        {showCenteredPin ? (
          <Icon name="MapPin" size={48} color="white" />
        ) : (
          <View style={styles.pinOverlay} testID="pin-overlay">
            <Icon name="MapPin" size={24} color="white" />
          </View>
        )}
      </View>
    </View>
  );
};
