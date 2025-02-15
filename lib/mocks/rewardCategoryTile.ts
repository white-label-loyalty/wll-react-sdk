import { RewardCategoryTileConfig, TileHeight, TileType } from '../types/tile';

export type RewardCategoryTileMockConfig = Partial<RewardCategoryTileConfig> & {
  active?: boolean;
  tileHeight?: TileHeight;
};

export const createRewardCategoryTileMock = (
  config?: RewardCategoryTileMockConfig
) => {
  const defaultConfig = {
    active: true,
    tileHeight: TileHeight.Full,
    showName: true,
    rewardCategoryId: '9d8287e0-bae9-47b4-8bf0-0115fd64336a',
    artworkUrl:
      'https://images.pexels.com/photos/1850595/pexels-photo-1850595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    name: 'Restaurant Rewards',
  };

  const { active, tileHeight, showName, rewardCategoryId, artworkUrl, name } = {
    ...defaultConfig,
    ...config,
  };

  return {
    id: 'f57f2f98-cabf-4b81-82ac-a0249172d65c',
    type: TileType.RewardCategory,
    active,
    createdAt: '2024-10-18T14:40:37.835Z',
    updatedAt: '2024-10-18T14:40:37.835Z',
    tileHeight,
    priority: 8,
    configuration: {
      showName,
      rewardCategoryId,
      artworkUrl,
      name,
    },
  };
};
