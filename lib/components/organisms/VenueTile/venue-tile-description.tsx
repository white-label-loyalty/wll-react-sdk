import React from 'react';
import { VenueTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';

/**
 * Renders the summary of a Venue Tile.
 *
 * @returns React.ReactElement or null if no summary is present
 */

export const VenueTileDescription = (): React.ReactElement | null => {
  const tileContext = useTileContext();

  if (!isContextValid(tileContext)) return null;

  const {
    description,
  } = tileContext.configuration as VenueTileConfig;

  if (!description) return null;

  return (
    <Text
      variant="body"
      role="article"
      accessibilityLabel={description}
      testID="venue-tile-description"
      numberOfLines={3}
      ellipsizeMode="tail"
    >
      {description}
    </Text>
  );
};