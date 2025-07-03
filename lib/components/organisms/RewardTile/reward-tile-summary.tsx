import React from 'react';
import { RewardTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';

/**
 * Renders the summary of a Reward Tile.
 *
 * @returns JSX.Element or null if no summary is present
 */

export const RewardTileSummary = (): JSX.Element | null => {
  const tileContext = useTileContext();

  if (!isContextValid(tileContext)) return null;

  const {
    summary,
    showPrice = true,
    price,
  } = tileContext.configuration as RewardTileConfig;

  const shouldShowPrice =
    showPrice && price !== undefined && price !== null && price !== 0;

  const numberOfLines = shouldShowPrice ? 1 : 3;

  if (!summary) return null;

  return (
    <Text
      variant="body"
      role="article"
      accessibilityLabel={summary}
      testID="reward-tile-summary"
      numberOfLines={numberOfLines}
      ellipsizeMode="tail"
    >
      {summary}
    </Text>
  );
};
