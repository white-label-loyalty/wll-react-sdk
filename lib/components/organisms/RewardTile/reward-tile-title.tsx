import React, { FC } from 'react';
import { RewardTileConfig } from '../../../types/tile';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';

export const RewardTileTitle: FC = () => {
  const { configuration } = useTileContext();
  const reward = configuration as RewardTileConfig;

  if (!reward?.name) return null;
  return (
    <Text variant="title" ellipsizeMode="tail" numberOfLines={1}>
      {reward.name}
    </Text>
  );
};
