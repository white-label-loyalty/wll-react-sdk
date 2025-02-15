import {
  ProgressType,
  TierTileConfig,
  TierTileType,
  Tile,
  TileHeight,
  TileType,
} from '../../types/tile';

export type TierTileMockConfig = Partial<TierTileConfig> & {
  tileHeight?: TileHeight;
  priority?: number;
};

const defaultTier = {
  id: '11ff96d2-c87b-4c89-bf5c-996604fc4d28',
  name: 'Bronze',
  description:
    'Get exclusive access to special rewards, and free upgrades when you stay in our hotel.',
  artworkUrl: 'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
  pointsRequirement: 100,
  priority: 0,
  createdAt: '2024-08-06T08:53:24.307Z',
  updatedAt: '2024-08-06T08:53:24.307Z',
};

const defaultConfig: TierTileConfig = {
  progressType: ProgressType.Name,
  locale: 'en',
  type: TierTileType.currentTier,
  emptyDescription: "Oops. You're not in a tier.",
  emptyArtworkUrl: 'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
  pointsToTierPrefix: undefined,
  title: 'Your Tier',
  tierId: '54f0658a-9409-41f7-a508-ca02c6ac23e1',
  tier: defaultTier,
};

export const createTierTileMock = (config?: TierTileMockConfig): Tile => {
  const mergedConfig = {
    ...defaultConfig,
    ...config,
    tier:
      config?.tier === undefined
        ? defaultConfig.tier
        : Object.keys(config.tier).length === 0
          ? {}
          : { ...defaultTier, ...config.tier },
  };

  return {
    id: 'tier-tile-mock',
    type: TileType.Tier,
    active: true,
    createdAt: '2024-08-06T08:53:24.307Z',
    updatedAt: '2024-08-06T08:53:24.307Z',
    tileHeight: config?.tileHeight ?? TileHeight.Full,
    priority: config?.priority ?? 0,
    configuration: mergedConfig,
  };
};
