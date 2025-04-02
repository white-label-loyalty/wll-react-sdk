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

/**
 * Renders the body text of a BaseTile component.
 *
 * @param {BaseTileBodyProps} props - Component props including text styling options
 * @returns {JSX.Element|null} The rendered body text or null if conditions for display are not met
 */
export const BaseTileBody = (props: BaseTileBodyProps): JSX.Element | null => {
  const tileContext = useTileContext();
  const responsive = useResponsive();

  if (!tileContext || !tileContext.configuration || !responsive) return null;

  const { isDesktop, isTablet } = responsive;
  const { body, artworkUrl } = tileContext.configuration as ContentTileConfig;

  const sizeInfo = useTileSize(tileContext);
  if (!sizeInfo) return null;

  const { isHalfSize } = sizeInfo;

  // Don't show body for half tiles with image
  if ((isHalfSize && artworkUrl) || !body) return null;

  const getNumberOfLines = (): number | undefined => {
    if (!isHalfSize && !artworkUrl) return undefined;
    return isDesktop ? 3 : isTablet ? 4 : 3;
  };

  return (
    <Text
      variant="body"
      {...props}
      role="article"
      accessibilityLabel={body}
      numberOfLines={getNumberOfLines()}
      testID="tile-body"
    >
      {body}
    </Text>
  );
};
