import { PointsTileConfig, TileHeight, TileType } from '../../types/tile';

export type PointsTileMockConfig = Partial<PointsTileConfig> & {
  active?: boolean;
  tileHeight?: TileHeight;
};

export const createPointsTileMock = (config?: PointsTileMockConfig) => {
  const {
    active = true,
    tileHeight = TileHeight.Full,
    title = 'Available Points',
    points = 1000,
    pointsPrefix = '',
    pointsSuffix = ' pts',
    artworkUrl = 'https://example.com/points.png',
    pointsMultiplier,
    ctaLink,
    ctaLinkTarget,
  } = config || {};

  return {
    id: '1',
    type: TileType.Points,
    active,
    createdAt: '2025-01-26T11:13:38Z',
    updatedAt: '2025-01-26T11:13:38Z',
    tileHeight,
    priority: 1,
    configuration: {
      title,
      points,
      pointsPrefix,
      pointsSuffix,
      artworkUrl,
      ctaLink,
      ctaLinkTarget,
      ...(pointsMultiplier !== undefined && { pointsMultiplier }),
    },
  };
};
