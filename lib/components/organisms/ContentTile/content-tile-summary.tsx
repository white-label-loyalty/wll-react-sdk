import React, { useMemo } from 'react';
import { ContentTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { useTileSize } from '../../../hooks/useTileSize';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';

export const ContentTileSummary = (): JSX.Element | null => {
  const tileContext = useTileContext();
  const sizeInfo = useTileSize(tileContext);

  if (!isContextValid(tileContext)) return null;

  const { body, title, artworkUrl } =
    tileContext.configuration as ContentTileConfig;

  if (!body) return null;

  if (!sizeInfo) return null;

  const { isHalfSize } = sizeInfo;

  const numberOfLines = useMemo(() => {
    if (!body) return undefined;

    if (isHalfSize) {
      if (!title && body) return 4;
      if (title && body) return 2;
    }

    if (artworkUrl) return 2;
    if (!title) return 8;

    return 6;
  }, [title, body, artworkUrl, isHalfSize]);

  return (
    <Text
      variant="body"
      role="article"
      accessibilityLabel={body}
      numberOfLines={numberOfLines}
      testID="content-tile-summary"
    >
      {body}
    </Text>
  );
};
