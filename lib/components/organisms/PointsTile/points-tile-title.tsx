import React from 'react';
import { PointsTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';

/**
 * Renders the title of a Points Tile.
 *
 * @returns React.ReactElement or null if no title is present
 */

export const PointsTileTitle = (): React.ReactElement | null => {
  const tileContext = useTileContext();

  if (!isContextValid(tileContext)) return null;

  const { title } = tileContext.configuration as PointsTileConfig;

  if (!title) return null;

  return (
    <Text
      variant="eyebrow"
      testID="points-tile-title"
      role="heading"
      accessibilityLabel={title}
    >
      {title}
    </Text>
  );
};
