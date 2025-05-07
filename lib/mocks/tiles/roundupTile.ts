import {
  CTALinkTarget,
  RoundupTileConfig,
  TileHeight,
  TileType,
} from '../../types/tile';

export type RoundupTileMockConfig = Partial<RoundupTileConfig> & {
  active?: boolean;
  tileHeight?: TileHeight;
};

export const createRoundupTileMock = (config?: RoundupTileMockConfig) => {
  const {
    active = true,
    tileHeight = TileHeight.Full,
    title = 'Available Points',
    amount = 1000,
    amountPrefix = '',
    amountSuffix = ' pts',
    artworkUrl = 'https://example.com/points.png',
    ctaLink = 'https://example.com',
    ctaLinkTarget = CTALinkTarget.sameWindow,
  } = config || {};

  return {
    id: '1',
    type: TileType.Roundup,
    active,
    createdAt: '2025-01-26T11:13:38Z',
    updatedAt: '2025-01-26T11:13:38Z',
    tileHeight,
    priority: 1,
    configuration: {
      title,
      amount,
      amountPrefix,
      amountSuffix,
      artworkUrl,
      ctaLink,
      ctaLinkTarget,
    },
  };
};
