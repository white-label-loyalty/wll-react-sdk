import { Tile, TileType } from '../../types/tile';
import { createBadgeTileMock } from './badgeTile';
import { createBannerTileMock } from './bannerTile';
import { createContentTileMock } from './contentTile';
import { createPointsTileMock } from './pointsTile';
import { createRewardCategoryTileMock } from './rewardCategoryTile';
import { createRewardTileMock } from './rewardTile';
export { createContentTileMock } from './contentTile';

export const createTileMock = (type: TileType, config?: any): Tile => {
  switch (type) {
    case TileType.Content:
      return createContentTileMock(config);
    case TileType.Reward:
      return createRewardTileMock(config);
    case TileType.Banner:
      return createBannerTileMock(config);
    case TileType.Points:
      return createPointsTileMock(config);
    case TileType.Badge:
      return createBadgeTileMock(config);
    case TileType.RewardCategory:
      return createRewardCategoryTileMock(config);
    case TileType.Tier:
    // TODO: Implement other tile types as they are needed
    default:
      throw new Error(`Tile type ${type} not yet implemented`);
  }
};
