import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { ContentTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { ProgressiveImage } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { useContentTileStyles } from './styles';

// We are using percentage values for flexBasis, which is valid in
// React Native but TypeScript expects a number.
type ResponsiveViewStyle = StyleProp<ViewStyle> & {
  flexBasis?: string | number;
};

type ContentTileMediaProps = {
  isArtworkOnly: boolean;
};

export const getContentTileMediaContainerStyle = (
  isArtworkOnly: boolean
): ResponsiveViewStyle =>
  isArtworkOnly
    ? {
        flexBasis: '100%',
        aspectRatio: 1,
      }
    : { flexBasis: '50%' };

export const ContentTileMedia = ({
  isArtworkOnly,
}: ContentTileMediaProps): React.ReactElement | null => {
  const tileContext = useTileContext();

  if (!isContextValid(tileContext)) return null;

  const { artworkUrl, title = '' } =
    tileContext.configuration as ContentTileConfig;

  if (!artworkUrl) return null;

  const hasArtwork = Boolean(artworkUrl);
  const styles = useContentTileStyles(hasArtwork);

  const containerStyle = getContentTileMediaContainerStyle(isArtworkOnly);

  return (
    <View
      style={[styles.imageContainer, containerStyle]}
      testID="content-tile-media"
      role="img"
      accessibilityLabel={`Image for ${title}`}
    >
      <ProgressiveImage
        source={{ uri: artworkUrl }}
        style={styles.image}
        alt={`Image for ${title}`}
      />
    </View>
  );
};
