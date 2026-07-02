import {
  CampaignTileConfig,
  Tile,
  TileHeight,
  TileType,
} from '../../types/tile';

export type CampaignTileMockConfig = Partial<CampaignTileConfig> & {
  active?: boolean;
  tileHeight?: TileHeight;
};

const defaultConfig = {
  active: true,
  tileHeight: TileHeight.Full,

  campaignId: '7a59d8a4-0740-46e9-a54e-697470a7a54a',
  type: 'GOAL_BASED',
  status: 'ACTIVE',
  name: 'Summer Loyalty',
  description: 'Exclusive summer rewards',
  artworkUrl: 'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
  effectivity: {
    start: new Date('2026-06-01T00:00:00.000Z'),
    end: new Date('2026-08-31T23:59:59.000Z'),
  },
  progress: {
    currentValue: 1,
    targetValue: 2,
    windowStart: new Date('2026-06-20T09:00:00.000Z'),
    windowEnd: new Date('2026-06-27T09:00:00.000Z'),
    optedInAt: new Date('2026-06-20T09:00:00.000Z'),
    completedAt: null,
    availableAgainAt: null,
    cooldownCycle: null,
  },
  missions: [],
};

export const createCampaignTileMock = (
  config?: CampaignTileMockConfig
): Tile => {
  const {
    active = defaultConfig.active,
    tileHeight = defaultConfig.tileHeight,
    ...tileConfig
  } = config || {};

  const mergedConfig = { ...defaultConfig, ...tileConfig };

  return {
    id: 'campaign-tile-mock-id',
    type: TileType.Campaign,
    active,
    createdAt: '2026-06-01T00:00:00.000Z',
    updatedAt: '2026-06-01T00:00:00.000Z',
    tileHeight,
    priority: 0,
    configuration: {
      campaignId: mergedConfig.campaignId,
      type: mergedConfig.type,
      status: mergedConfig.status,
      name: mergedConfig.name,
      description: mergedConfig.description,
      artworkUrl: mergedConfig.artworkUrl,
      effectivity: mergedConfig.effectivity,
      progress: mergedConfig.progress,
      missions: mergedConfig.missions,
    } as any,
  };
};
