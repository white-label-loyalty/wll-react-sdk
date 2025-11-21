import { VenueTileConfig, Tile, TileHeight, TileType } from '../../types/tile';

export type VenueTileMockConfig = Partial<VenueTileConfig> & {
  active?: boolean;
  tileHeight?: TileHeight;
};

const defaultConfig = {
  active: true,
  tileHeight: TileHeight.Full,

  venueId: 'f7ce508f-ca52-46ff-bfb7-03e3761feb4a',
  name: 'Sweet Chilli Lobster Noodles',
  artworkUrl: 'https://ucarecdn.com/a486d015-b4ab-4831-bfa5-68f5bbbf63b1/',
  description: 'Fresh Lobster Noodles with a spicy chilli sauce',
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
