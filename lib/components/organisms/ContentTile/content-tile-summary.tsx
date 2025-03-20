import React from 'react';
import { useTileSize } from '../../../hooks/useTileSize';
import { ContentTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';

export const ContentTileSummary = (): JSX.Element | null => {
  const tileContext = useTileContext();

  if (!isContextValid(tileContext)) return null;

  const { body } = tileContext.configuration as ContentTileConfig;

  if (!body) return null;

  const sizeInfo = useTileSize(tileContext);

  if (!sizeInfo) return null;

  const { isFullSize, isHalfSize } = sizeInfo;

  const getNumberOfLines = (): number => {
    return isFullSize ? 3 : isHalfSize ? 4 : 3;
  };

  return (
    <Text
      variant="body"
      accessibilityRole="text"
      accessibilityLabel={body}
      numberOfLines={getNumberOfLines()}
      testID="content-tile-summary"
    >
      {body}
    </Text>
  );
};
