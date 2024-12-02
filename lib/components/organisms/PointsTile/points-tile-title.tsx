import React, { FC } from 'react';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { PointsTileConfig } from '../../../types/tile';

export const PointsTileTitle: FC = () => {
  const { configuration } = useTileContext();
  const { title } = configuration as PointsTileConfig;

  return <Text variant="eyebrow">{title}</Text>;
};
