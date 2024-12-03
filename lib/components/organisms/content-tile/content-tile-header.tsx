import React, { FC } from 'react';
import { ContentTileConfig } from '../../../types/tile';
import { BaseTile } from '../../atoms';
import { useTileContext } from '../../atoms/base-tile';

export const ContentTileHeader: FC = () => {
  const tile = useTileContext();
  const { title } = tile.configuration as ContentTileConfig;

  if (!title) return null;

  return (
    <BaseTile.Header>
      <BaseTile.Title />
    </BaseTile.Header>
  );
};
