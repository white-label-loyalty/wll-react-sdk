import React from 'react';
import { ImagePropsNoSource } from '../../../types/common';
import { ContentTileConfig } from '../../../types/tile';
import ProgressiveImage from '../ProgressiveImage';
import { useTileContext } from './index';
import { baseStyles, useBaseTileStyles } from './styles';

export const BaseTileMedia = (
  props: ImagePropsNoSource
): JSX.Element | null => {
  const tile = useTileContext();
  const { artworkUrl, title } = tile.configuration as ContentTileConfig;
  const styles = useBaseTileStyles();

  if (!artworkUrl) return null;

  return (
    <ProgressiveImage
      {...props}
      source={{ uri: artworkUrl }}
      testID="tile-media"
      style={[props.style, baseStyles.media, styles.media]}
      alt={`Content image${title ? ` for ${title}` : ''}`}
      accessibilityElementsHidden={true}
      importantForAccessibility="no-hide-descendants"
    />
  );
};
