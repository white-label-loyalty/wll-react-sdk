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

export const ContentTileMedia = ({
  isArtworkOnly,
}: ContentTileMediaProps): JSX.Element | null => {
  const tileContext = useTileContext();

  if (!isContextValid(tileContext)) return null;

  const { artworkUrl, title = '' } =
    tileContext.configuration as ContentTileConfig;

  if (!artworkUrl) return null;

  const hasArtwork = Boolean(artworkUrl);
  const styles = useContentTileStyles(hasArtwork);

  const containerStyle: ResponsiveViewStyle = {
    flexBasis: isArtworkOnly ? '100%' : '50%',
  };

  return (
    <View
      style={[styles.imageContainer, containerStyle]}
      testID="content-tile-media"
      accessibilityRole="image"
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
