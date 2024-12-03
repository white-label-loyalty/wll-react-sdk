import { useMemo } from 'react';
import { Tile, TileHeight } from '../types/tile';

export const useTileSize = (tile: Tile) => {
  return useMemo(
    () => ({
      isFullSize: tile.tileHeight === TileHeight.Full,
      isHalfSize: tile.tileHeight === TileHeight.Half,
    }),
    [tile.tileHeight]
  );
};
