import { BadgeTileType, TileHeight, TileType } from '../types/tile';

export type BadgeTileMockConfig = {
  id?: string;
  active?: boolean;
  tileHeight?: TileHeight;
  type?: BadgeTileType;
  badgeId?: string;
  internalName?: string;
  name?: string;
  description?: string;
  artworkUrl?: string;
  emptyBadgeArtworkUrl?: string;
  badgeNotEarnedMessage?: string;
  count?: number;
};

export const createBadgeTileMock = (config: BadgeTileMockConfig = {}) => {
  const {
    id = 'badge-tile',
    active = true,
    tileHeight = TileHeight.Full,
    type = BadgeTileType.Latest,
    badgeId = '900a2477-95c4-4c42-ae2d-3795e7f0f5f2',
    internalName = 'Top Spender',
    name = 'Top Spender',
    description = 'Spent £100 on 5 Separate transactions',
    artworkUrl = 'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
    emptyBadgeArtworkUrl = 'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
    badgeNotEarnedMessage,
    count = 0,
  } = config;

  return {
    id,
    type: TileType.Badge,
    active,
    createdAt: '2024-08-06T08:53:24.307Z',
    updatedAt: '2024-08-06T08:53:24.307Z',
    tileHeight,
    priority: 0,
    configuration: {
      type,
      badgeId,
      internalName,
      name,
      description,
      artworkUrl,
      priority: 0,
      status: 'ACTIVE',
      createdAt: '2024-08-06T08:53:24.307Z',
      updatedAt: '2024-08-06T08:53:24.307Z',
      awardedDatePrefix: 'Awarded',
      emptyBadgeMessage: "You haven't earned any badges yet.",
      badgeNotEarnedMessage:
        'badgeNotEarnedMessage' in config
          ? badgeNotEarnedMessage
          : 'Badge not earned yet',
      emptyBadgeArtworkUrl,
      count,
    },
  };
};
