import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { RewardTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { Icon, ProgressiveImage } from '../../atoms';
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
 * @returns React.ReactElement or null if no artwork URL is present or artwork should not be shown
 */

export const RewardTileMedia = ({
  isArtworkOnly,
}: RewardTileMediaProps): React.ReactElement | null => {
  const styles = useRewardTileStyles();
  const tileContext = useTileContext();

  if (!isContextValid(tileContext)) return null;

  const {
    artworkUrl,
    showArtwork = true,
    name = 'Reward',
    isLocked = false,
  } = tileContext.configuration as RewardTileConfig;

  if (!artworkUrl || !showArtwork) return null;

  // When artwork-only, the media should occupy the full tile height and compensate
  // for any content layout that might be hidden. We therefore force the media
  // container to flex and take the entire available height, removing default
  // bottom margins and min-heights coming from styles.
  const containerStyle: ResponsiveViewStyle = isArtworkOnly
    ? {
        flexBasis: '100%',
        flex: 1,
        height: '100%',
        marginBottom: 0,
        minHeight: 0,
        aspectRatio: 1,
      }
    : {
        flexBasis: '50%',
      };

  return (
    <View
      style={[styles.imageContainer, containerStyle]}
      testID="reward-tile-media"
      role="img"
      accessibilityLabel={`Reward image for ${name}`}
    >
      <ProgressiveImage
        source={{ uri: artworkUrl }}
        style={styles.image}
        alt={`Reward image for ${name}`}
      />
      {isLocked && (
        <View style={styles.lockOverlay} testID="lock-overlay">
          <Icon name="LockKeyhole" size={48} color="white" />
        </View>
      )}
    </View>
  );
};
