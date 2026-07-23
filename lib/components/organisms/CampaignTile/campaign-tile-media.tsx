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

type CampaignTileMediaProps = {
  isArtworkOnly?: boolean;
};

/**
 * Renders the media header for a Campaign Tile.
 *
 * @param props {CampaignTileMediaProps} - Component props
 * @param props.isArtworkOnly {boolean} - Whether the media should occupy the full tile height
 * @returns React.ReactElement or null if no artworkUrl is present
 */

export const CampaignTileMedia = ({
  isArtworkOnly = false,
}: CampaignTileMediaProps): React.ReactElement | null => {
  const styles = useCampaignTileStyles();
  const tileContext = useTileContext();

  if (!isContextValid(tileContext)) return null;

  const { artworkUrl, name = 'Campaign' } =
    tileContext.configuration as CampaignTileConfig;

  const containerStyle: ResponsiveViewStyle = isArtworkOnly
    ? {
        flexBasis: '100%',
        flex: 1,
        height: '100%',
        marginBottom: 0,
        minHeight: 0,
        aspectRatio: tileContext.tileHeight === TileHeight.Half ? 2 : 1,
      }
    : {
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
