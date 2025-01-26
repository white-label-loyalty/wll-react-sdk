import React from 'react';
import { RewardTileConfig } from '../../../types/tile';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';

export const RewardTileTitle = (): JSX.Element | null => {
  const { configuration } = useTileContext();
  const { name } = configuration as RewardTileConfig;

  if (!name) return null;

  return (
    <Text
      variant="title"
      ellipsizeMode="tail"
      numberOfLines={1}
      accessibilityLabel={`Reward title: ${name}`}
      testID="reward-tile-title"
    >
      {name}
    </Text>
  );
};
