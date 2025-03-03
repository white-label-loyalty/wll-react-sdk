import React from 'react';
import { ImagePropsNoSource } from '../../../types/common';
import { ContentTileConfig } from '../../../types/tile';
import ProgressiveImage from '../ProgressiveImage';
import { useTileContext } from './index';
import { baseStyles, useBaseTileStyles } from './styles';

/**
 * Renders the media (image) for a BaseTile component.
 *
 * @param {ImagePropsNoSource} props - The image props excluding source
 * @returns {JSX.Element|null} The rendered image or null if no artwork URL is present
 */
export const BaseTileMedia = (
  props: ImagePropsNoSource
): JSX.Element | null => {
  const tileContext = useTileContext();

  if (!tileContext || !tileContext.configuration) return null;

  const { artworkUrl, title = '' } =
    tileContext.configuration as ContentTileConfig;
  const styles = useBaseTileStyles();

  if (!artworkUrl) return null;

  return (
    <ProgressiveImage
      {...props}
      source={{ uri: artworkUrl }}
      testID="tile-media"
      style={[props.style, baseStyles.media, styles.media]}
      alt={`Content image${title ? ` for ${title}` : ''}`}
      accessibilityRole="image"
    />
  );
};
