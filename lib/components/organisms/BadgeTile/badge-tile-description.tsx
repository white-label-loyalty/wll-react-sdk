import React, { FC } from 'react';
import { BadgeTileConfig } from '../../../types/tile';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';

export const BadgeTileDescription: FC = () => {
  const tile = useTileContext();
  const { configuration } = tile as { configuration: BadgeTileConfig };
  const { count, description } = configuration;

  if (count === 0 || !description) return null;

  return (
    <Text variant="body" numberOfLines={2} ellipsizeMode="tail">
      {description}
    </Text>
  );
};
