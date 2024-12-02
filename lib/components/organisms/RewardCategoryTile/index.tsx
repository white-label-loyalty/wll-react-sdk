import * as React from 'react';
import { Tile } from '../../../types/tile';
import { BaseTile } from '../../atoms';

import { RewardCategoryHeader } from './reward-category-header';
import { RewardCategoryMedia } from './reward-category-media';

type RewardCategoryTileProps = {
  tile: Tile;
};

const RewardCategoryTile: React.FC<RewardCategoryTileProps> & {
  Header: typeof RewardCategoryHeader;
  Media: typeof RewardCategoryMedia;
} = ({ tile }) => {
  if (!tile) return null;

  return (
    <BaseTile tile={tile}>
      <RewardCategoryTile.Header />
      <RewardCategoryTile.Media />
    </BaseTile>
  );
};

RewardCategoryTile.Header = RewardCategoryHeader;
RewardCategoryTile.Media = RewardCategoryMedia;

export default RewardCategoryTile;
