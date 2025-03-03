import React from 'react';
import { PointsTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';

/**
 * Renders the title of a Points Tile.
 *
 * @returns JSX.Element or null if no title is present
 */

export const PointsTileTitle = (): JSX.Element | null => {
  const tileContext = useTileContext();

  if (!isContextValid(tileContext)) return null;

  const { title } = tileContext.configuration as PointsTileConfig;

  if (!title) return null;

  return (
    <Text
      variant="eyebrow"
      testID="points-tile-title"
      accessibilityRole="header"
      accessibilityLabel={title}
    >
      {title}
    </Text>
  );
};
