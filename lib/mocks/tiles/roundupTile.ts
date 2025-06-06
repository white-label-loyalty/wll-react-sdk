import {
  CTALinkTarget,
  RoundupTileConfig,
  TileHeight,
  TileType,
} from '../../types/tile';

export type RoundupTileMockConfig = Partial<RoundupTileConfig> & {
  active?: boolean;
  tileHeight?: TileHeight;
  defaultLocale?: string;
  details?: any[];
  locale?: string;
  balance?: number;
};

export const createRoundupTileMock = (config?: RoundupTileMockConfig) => {
  const {
    active = true,
    tileHeight = TileHeight.Full,
    title = 'Available Points',
    artworkUrl = 'https://example.com/points.png',
    ctaLink,
    ctaLinkTarget,
    defaultLocale = 'en',
    details = [],
    locale = 'en',
    balance,
    amountPrefix,
    amountSuffix,
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
      artworkUrl,
      ctaLink,
      ctaLinkTarget,
      defaultLocale,
      details,
      locale,
      balance,
      amountPrefix,
      amountSuffix,
    },
  };
};
