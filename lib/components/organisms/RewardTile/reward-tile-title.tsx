import React from 'react';
import { RewardTileConfig } from '../../../types/tile';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';

/**
 * Renders the title of a Reward Tile.
 *
 * @returns JSX.Element or null if no name is present
 */
export const RewardTileTitle = (): JSX.Element | null => {
  const tileContext = useTileContext();

  if (!tileContext || !tileContext.configuration) return null;

  const { name } = tileContext.configuration as RewardTileConfig;

  if (!name) return null;

  return (
    <Text
      variant="title"
      ellipsizeMode="tail"
      numberOfLines={1}
      accessibilityRole="header"
      accessibilityLabel={`Reward title: ${name}`}
      testID="reward-tile-title"
    >
      {name}
    </Text>
  );
};
