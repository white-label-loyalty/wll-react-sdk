import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { RewardTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { ProgressiveImage } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { useRewardTileStyles } from './styles';

type RewardTileMediaProps = {
  isArtworkOnly: boolean;
};

// We are using percentage values for flexBasis, which is valid in
// React Native but TypeScript expects a number.
type ResponsiveViewStyle = StyleProp<ViewStyle> & {
  flexBasis?: string | number;
};

/**
 * Renders the media for a Reward Tile.
 *
 * @param props {RewardTileMediaProps} - Component props
 * @param props.isArtworkOnly {boolean} - Whether the media should be rendered as an artwork only component
 * @returns JSX.Element or null if no artwork URL is present or artwork should not be shown
 */
export const RewardTileMedia = ({
  isArtworkOnly,
}: RewardTileMediaProps): JSX.Element | null => {
  const styles = useRewardTileStyles();
  const tileContext = useTileContext();

  if (!isContextValid(tileContext)) return null;

  const {
    artworkUrl,
    showArtwork = true,
    name = 'Reward',
  } = tileContext.configuration as RewardTileConfig;

  if (!artworkUrl || !showArtwork) return null;

  const containerStyle: ResponsiveViewStyle = {
    flexBasis: isArtworkOnly ? '100%' : '50%',
  };

  return (
    <View
      style={[styles.imageContainer, containerStyle]}
      testID="reward-tile-media"
      accessibilityRole="image"
      accessibilityLabel={`Reward image for ${name}`}
    >
      <ProgressiveImage
        source={{ uri: artworkUrl }}
        style={styles.image}
        alt={`Reward image for ${name}`}
      />
    </View>
  );
};
