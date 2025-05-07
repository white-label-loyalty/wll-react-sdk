import React from 'react';
import { RoundupTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';

/**
 * Renders the title of a Roundup Tile.
 *
 * @returns JSX.Element or null if no title is present
 */

export const RoundupTileTitle = (): JSX.Element | null => {
  const tileContext = useTileContext();

  if (!isContextValid(tileContext)) return null;

  const { title } = tileContext.configuration as RoundupTileConfig;

  if (!title) return null;

  return (
    <Text
      variant="eyebrow"
      testID="roundup-tile-title"
      role="heading"
      accessibilityLabel={title}
    >
      {title}
    </Text>
  );
};
