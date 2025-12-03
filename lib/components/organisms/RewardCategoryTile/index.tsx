import React from 'react';
import { Tile } from '../../../types/tile';
import { BaseTile } from '../../atoms';
import { withTileFetching } from '../../hoc/withTileFetching';
import { RewardCategoryHeader } from './reward-category-header';
import { RewardCategoryMedia } from './reward-category-media';
import { View } from 'react-native';

type RewardCategoryTileProps = {
  tile: Tile;
};

/**
 * The RewardCategoryTile component renders a tile with a header and media.
 *
 * @param {RewardCategoryTileProps} props - The component props
 * @param {Tile} props.tile - The tile data to render
 * @returns {React.ReactElement|null} Rendered component or null if tile is inactive or missing configuration
 */

const RewardCategoryTileRoot = ({
  tile,
}: RewardCategoryTileProps): React.ReactElement | null => {
  if (!tile || !tile.active || !tile.configuration) return null;

  return (
    <BaseTile tile={tile}>
      <View style={{ aspectRatio: 1 }}>
        <RewardCategoryTile.Header />
        <RewardCategoryTile.Media />
      </View>
    </BaseTile>
  );
};

/**
 * The RewardCategoryTile component with subcomponents attached.
 */
export const RewardCategoryTile = Object.assign(RewardCategoryTileRoot, {
  Header: RewardCategoryHeader,
  Media: RewardCategoryMedia,
});

export default withTileFetching(RewardCategoryTile);
