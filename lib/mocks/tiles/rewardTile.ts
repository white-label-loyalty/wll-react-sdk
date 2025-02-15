import { RewardTileConfig, Tile, TileHeight, TileType } from '../../types/tile';

export type RewardTileMockConfig = Partial<RewardTileConfig> & {
  active?: boolean;
  tileHeight?: TileHeight;
};

const defaultConfig = {
  active: true,
  tileHeight: TileHeight.Full,

  rewardId: 'f7ce508f-ca52-46ff-bfb7-03e3761feb4a',
  defaultLocale: 'en-US',
  showArtwork: true,
  showDetails: true,
  showPrice: true,
  id: 'f7ce508f-ca52-46ff-bfb7-03e3761feb4a',
  createdAt: '2023-05-05T15:11:42.342Z',
  updatedAt: '2024-07-17T10:45:04.350Z',
  name: 'Sweet Chilli Lobster Noodles',
  summary: 'Fresh Lobster Noodles with a spicy chilli sauce',
  artworkUrl: 'https://ucarecdn.com/a486d015-b4ab-4831-bfa5-68f5bbbf63b1/',
  pictureUrl: 'https://ucarecdn.com/a486d015-b4ab-4831-bfa5-68f5bbbf63b1/',
  value: 800,
  price: 10,
  pointsMultiplier: 1,
  pointsPrefix: '',
  pointsSuffix: '',
  priority: 10,
  purchasable: true,
  type: 'VOUCHER',
  codeType: 'HUMAN',
};

export const createRewardTileMock = (config?: RewardTileMockConfig): Tile => {
  const {
    active = defaultConfig.active,
    tileHeight = defaultConfig.tileHeight,
    ...tileConfig
  } = config || {};

  const mergedConfig = { ...defaultConfig, ...tileConfig };
  const pointsMultiplier = mergedConfig.pointsMultiplier ?? 1;

  // pictureUrl is hydrated to artworkUrl to maintain consistent image handling across all tiles
  const artworkUrl = mergedConfig.artworkUrl;
  const pictureUrl = artworkUrl;

  return {
    id: '39ac25f0-35b3-4668-acba-032dccc63e91',
    type: TileType.Reward,
    active,
    createdAt: '2024-10-17T10:50:12.673Z',
    updatedAt: '2024-10-17T10:50:12.673Z',
    tileHeight,
    priority: 3,
    configuration: {
      rewardId: 'f7ce508f-ca52-46ff-bfb7-03e3761feb4a',
      showArtwork: mergedConfig.showArtwork,
      showDetails: mergedConfig.showDetails,
      showPrice: mergedConfig.showPrice,
      name: mergedConfig.name,
      summary: mergedConfig.summary,
      id: 'f7ce508f-ca52-46ff-bfb7-03e3761feb4a',
      createdAt: '2023-05-05T15:11:42.342Z',
      updatedAt: '2024-07-17T10:45:04.350Z',
      pictureUrl,
      value: 800,
      price: mergedConfig.price,
      pointsPrefix: mergedConfig.pointsPrefix,
      pointsSuffix: mergedConfig.pointsSuffix,
      priority: 10,
      availability: {
        start: '2023-05-05T15:10:31.274Z',
        end: '',
      },
      purchasable: true,
      tier: null,
      category: {
        name: 'Chicken Salad',
        priority: 0,
        type: 'REWARD',
        id: '677b6b88-d97c-4b8d-80f4-88b04c86948f',
        createdAt: '2023-05-05T10:39:57.595Z',
        updatedAt: '2023-05-05T10:39:57.595Z',
        description: null,
        metadata: null,
        pictureUrl:
          'https://ucarecdn.com/9cda5d3c-75f4-48f0-9f3f-1ece144f6136/',
      },
      discounts: [],
      redemptionMessage: null,
      visibilityCriteria: null,
      type: 'VOUCHER',
      codeType: 'HUMAN',
      code: null,
      purchaseExpiration: null,
      hideCode: false,
      notificationConfig: null,
      artworkUrl,
      pointsMultiplier,
    },
  };
};
