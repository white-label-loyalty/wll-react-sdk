import React from 'react';
import { CampaignTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';

/**
 * Renders the description of a Campaign Tile.
 *
 * @returns React.ReactElement or null if no description is present
 */

export const CampaignTileDescription = (): React.ReactElement | null => {
  const tileContext = useTileContext();

  if (!isContextValid(tileContext)) return null;

  const { description } = tileContext.configuration as CampaignTileConfig;

  if (!description) return null;

  return (
    <Text
      variant="body"
      role="article"
      accessibilityLabel={description}
      testID="campaign-tile-description"
      numberOfLines={2}
      ellipsizeMode="tail"
    >
      {description}
    </Text>
  );
};
