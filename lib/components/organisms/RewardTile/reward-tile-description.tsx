import React, { FC } from 'react';
import { RewardTileConfig } from '../../../types/tile';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';

export const RewardTileDescription: FC = () => {
  const { configuration } = useTileContext();
  const reward = configuration as RewardTileConfig;

  if (!reward?.summary) return null;
  return <Text variant="body">{reward.summary}</Text>;
};
