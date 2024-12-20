import React from 'react';
import { TextProps, TextStyle } from 'react-native';
import { useResponsive } from '../../../hooks/useResponsive';
import { useTileSize } from '../../../hooks/useTileSize';
import { ContentTileConfig } from '../../../types/tile';
import Text from '../Text';
import { useTileContext } from './index';

type BaseTileBodyProps = Omit<TextProps, 'style'> & {
  variant?:
    | 'eyebrow'
    | 'title'
    | 'description'
    | 'body'
    | 'caption'
    | 'label'
    | 'tier-requirement'
    | 'tier-earned';
  isSurface?: boolean;
  style?: TextStyle;
};

export const BaseTileBody = (props: BaseTileBodyProps) => {
  const tile = useTileContext();
  const { isDesktop, isTablet } = useResponsive();
  const { body, artworkUrl } = tile.configuration as ContentTileConfig;
  const { isHalfSize } = useTileSize(tile);

  if ((isHalfSize && artworkUrl) || !body) return null;

  // Helper function to determine the number of lines
  const getNumberOfLines = (): number | undefined => {
    if (!isHalfSize && !artworkUrl) return undefined;
    return isDesktop ? 3 : isTablet ? 4 : 3;
  };

  return (
    <Text
      variant="body"
      {...props}
      accessibilityLabel={body}
      numberOfLines={getNumberOfLines()}
    >
      {body}
    </Text>
  );
};
