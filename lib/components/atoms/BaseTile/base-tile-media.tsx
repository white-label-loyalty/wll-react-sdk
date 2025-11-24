import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ImagePropsNoSource } from '../../../types/common';
import { ContentTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import Icon from '../Icon';
import ProgressiveImage from '../ProgressiveImage';
import { useTileContext } from './index';
import { baseStyles, useBaseTileStyles } from './styles';

/**
 * Renders the media (image) for a BaseTile component.
 *
 * @param {ImagePropsNoSource} props - The image props excluding source
 * @returns {React.ReactElement|null} The rendered image or null if no artwork URL is present
 */
export const BaseTileMedia = (
  props: ImagePropsNoSource
): React.ReactElement | null => {
  const tileContext = useTileContext();

  if (!isContextValid(tileContext)) return null;

  const { artworkUrl, title = '', isLocked = false } =
    tileContext.configuration as ContentTileConfig;
  const styles = useBaseTileStyles();

  if (!artworkUrl) return null;

  return (
    <View style={baseStyles.imageContainer}>
      <ProgressiveImage
        {...props}
        source={{ uri: artworkUrl }}
        testID="tile-media"
        style={[props.style, baseStyles.media, styles.media]}
        alt={`Content image${title ? ` for ${title}` : ''}`}
        role="img"
      />
      {isLocked && (
        <View style={styles.lockOverlay} testID="lock-overlay">
          <Icon name="LockKeyhole" size={48} color="white" />
        </View>
      )}
    </View>
  );
};
