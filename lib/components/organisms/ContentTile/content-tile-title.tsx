import React from 'react';
import { ContentTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';

export const ContentTileTitle = (): JSX.Element | null => {
  const tileContext = useTileContext();

  if (!isContextValid(tileContext)) return null;

  const { title } = tileContext.configuration as ContentTileConfig;

  if (!title) return null;

  return (
    <Text
      variant="title"
      accessibilityRole="header"
      accessibilityLabel={title}
      numberOfLines={1}
      testID="content-tile-title"
    >
      {title}
    </Text>
  );
};
