import { VenueTileConfig, Tile, TileHeight, TileType } from '../../types/tile';

export type VenueTileMockConfig = Partial<VenueTileConfig> & {
  active?: boolean;
  tileHeight?: TileHeight;
};

const defaultConfig = {
  active: true,
  tileHeight: TileHeight.Full,

  venueId: '3ae2dabe-6b28-4478-87c2-567363bb8469',
  name: 'The Spicy Lobster House',
  artworkUrl: 'https://ucarecdn.com/e14a2c44-d233-496a-a456-9e7fafbcfde1/',
  description:
    'Seafood-focused restaurant known for its signature spicy lobster dishes and modern atmosphere.',
};

export const createVenueTileMock = (config?: VenueTileMockConfig): Tile => {
  const {
    active = defaultConfig.active,
    tileHeight = defaultConfig.tileHeight,
    ...tileConfig
  } = config || {};

  const mergedConfig = { ...defaultConfig, ...tileConfig };

  return {
    id: '39ac25f0-35b3-4668-acba-032dccc63e91',
    type: TileType.Venue,
    active,
    createdAt: '2024-10-17T10:50:12.673Z',
    updatedAt: '2024-10-17T10:50:12.673Z',
    tileHeight,
    priority: 10,
    configuration: {
      venueId: mergedConfig.venueId,
      name: mergedConfig.name,
      artworkUrl: mergedConfig.artworkUrl,
      description: mergedConfig.description,
    },
  };
};
