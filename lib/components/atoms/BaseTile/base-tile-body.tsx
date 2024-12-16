import React, { FC } from 'react';
import { useResponsive } from '../../../hooks/useResponsive';
import { useTileSize } from '../../../hooks/useTileSize';
import { ContentTileConfig } from '../../../types/tile';
import Text from '../Text';
import { useTileContext } from './index';

export const BaseTileBody: FC = (props) => {
  const tile = useTileContext();
  const { isDesktop, isTablet } = useResponsive();
  const { body, artworkUrl } = tile.configuration as ContentTileConfig;
  const { isHalfSize } = useTileSize(tile);

  if ((isHalfSize && artworkUrl) || !body) return null;

  return (
    <Text
      variant="body"
      {...props}
      accessibilityLabel={body}
      numberOfLines={isDesktop ? 3 : isTablet ? 4 : 3}
    >
      {body}
    </Text>
  );
};
