import {
  ContentTileConfig,
  Tile,
  TileHeight,
  TileType,
} from '../../types/tile';

export type ContentTileMockConfig = Partial<ContentTileConfig> & {
  tileHeight?: TileHeight;
  active?: boolean;
};

const defaultConfig: ContentTileConfig = {
  title: 'Gold Tier Unlocked!',
  body: "You've unlocked exclusive Gold member benefits including 2X points on every purchase, priority support, and VIP event access.",
  artworkUrl:
    'https://images.pexels.com/photos/352097/pexels-photo-352097.jpeg',
};

export const createContentTileMock = (config?: ContentTileMockConfig): Tile => {
  const {
    tileHeight = TileHeight.Full,
    active = true,
    ...tileConfig
  } = config || {};

  const mergedConfig = { ...defaultConfig, ...tileConfig };

  return {
    id: '1',
    type: TileType.Content,
    active,
    createdAt: '',
    updatedAt: '',
    tileHeight,
    priority: 1,
    configuration: mergedConfig,
  };
};
