import React, { FC } from 'react';
import { useTileSize } from '../../../hooks/useTileSize';
import { ImagePropsNoSource } from '../../../types/common';
import { ContentTileConfig } from '../../../types/tile';
import ProgressiveImage from '../ProgressiveImage';
import { useTileContext } from './index';
import { baseStyles, useBaseTileStyles } from './styles';

export const BaseTileMedia: FC<ImagePropsNoSource> = (props) => {
  const tile = useTileContext();
  const { artworkUrl, title, body } = tile.configuration as ContentTileConfig;
  const { isHalfSize } = useTileSize(tile);
  const styles = useBaseTileStyles();

  if (!artworkUrl) return null;

  const hasTitle = !!title;
  const hasDescription = !!body;

  return (
    <ProgressiveImage
      {...props}
      source={{ uri: artworkUrl }}
      style={[
        props.style,
        baseStyles.media,
        styles.media,
      ]}
    />
  );
};
