import {
  BadgeTileConfig,
  BadgeTileType,
  TileHeight,
  TileType,
} from '../types/tile';

export type BadgeTileMockConfig = Partial<BadgeTileConfig> & {
  active?: boolean;
  tileHeight?: TileHeight;
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
    badgeNotEarnedMessage = 'badgeNotEarnedMessage' in config
      ? config.badgeNotEarnedMessage
      : type === BadgeTileType.Specific
        ? 'Badge not earned yet'
        : undefined,
    count = 0,
    priority = 0,
    status = 'ACTIVE',
    defaultLocale = 'en',
    locale = 'en',
    createdAt = '2024-08-06T08:53:24.307Z',
    updatedAt = '2024-08-06T08:53:24.307Z',
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
      priority,
      status,
      defaultLocale,
      locale,
      createdAt,
      updatedAt,
      awardedDatePrefix: 'Awarded',
      emptyBadgeMessage: "You haven't earned any badges yet.",
      badgeNotEarnedMessage,
      emptyBadgeArtworkUrl,
      count,
    },
  };
};
