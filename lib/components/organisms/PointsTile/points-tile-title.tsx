import React from 'react';
import { PointsTileConfig } from '../../../types/tile';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';

export const PointsTileTitle = (): JSX.Element | null => {
  const { configuration } = useTileContext();
  const { title } = configuration as PointsTileConfig;

  return title ? <Text variant="eyebrow">{title}</Text> : null;
};
