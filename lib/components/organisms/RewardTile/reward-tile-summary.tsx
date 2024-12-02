import React, { FC } from 'react';
import { RewardTileConfig } from '../../../types/tile';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';

export const RewardTileSummary: FC = () => {
  const { configuration } = useTileContext();
  const { summary } = configuration as RewardTileConfig;

  if (!summary) return null;

  return <Text variant="body">{summary}</Text>;
};
