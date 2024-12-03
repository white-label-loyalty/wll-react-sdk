import React, { FC } from 'react';
import { Text } from '../../atoms';

import { PointsTileConfig } from '../../../types/tile';
import { useTileContext } from '../../atoms/base-tile';

export const PointsTileTitle: FC = () => {
  const { configuration } = useTileContext();
  const { title } = configuration as PointsTileConfig;

  return <Text variant="eyebrow">{title}</Text>;
};
