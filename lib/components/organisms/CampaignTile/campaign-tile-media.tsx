import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { CampaignTileConfig, TileHeight } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { ProgressiveImage } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { useCampaignTileStyles } from './styles';

// We are using percentage values for flexBasis, which is valid in
// React Native but TypeScript expects a number.

type ResponsiveViewStyle = StyleProp<ViewStyle> & {
  flexBasis?: string | number;
};

/**
 * Renders the media header for a Campaign Tile.
 *
 * @returns React.ReactElement or null if no artworkUrl is present
 */

export const CampaignTileMedia = (): React.ReactElement | null => {
  const styles = useCampaignTileStyles();
  const tileContext = useTileContext();

  if (!isContextValid(tileContext)) return null;

  const { artworkUrl, name = 'Campaign' } =
    tileContext.configuration as CampaignTileConfig;

  if (!artworkUrl) return null;

  const containerStyle: ResponsiveViewStyle = {
    flexBasis: '50%',
    ...(tileContext.tileHeight === TileHeight.Half && { minHeight: 0 }),
  };

  return (
    <View
      style={[styles.imageContainer, containerStyle]}
      testID="campaign-tile-media"
      role="img"
      accessibilityLabel={`Campaign image for ${name}`}
    >
      <ProgressiveImage
        source={{ uri: artworkUrl }}
        style={styles.image}
        alt={`Campaign image for ${name}`}
      />
    </View>
  );
};
