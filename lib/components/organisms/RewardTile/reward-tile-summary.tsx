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

  const { summary } = tileContext.configuration as RewardTileConfig;

  if (!summary) return null;

  return (
    <Text
      variant="body"
      accessibilityRole="text"
      accessibilityLabel={summary}
      testID="reward-tile-summary"
    >
      {summary}
    </Text>
  );
};
