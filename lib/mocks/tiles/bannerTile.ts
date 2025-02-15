import {
  BannerTileConfig,
  CTALinkTarget,
  TileHeight,
  TileType,
} from '../../types/tile';

export type BannerTileMockConfig = Partial<BannerTileConfig> & {
  active?: boolean;
  tileHeight?: TileHeight;
};

export const createBannerTileMock = (config?: BannerTileMockConfig) => {
  const {
    active = true,
    tileHeight = TileHeight.Full,
    title = '',
    description = '',
    ctaText = '',
    ctaLink = '',
    ctaLinkTarget = CTALinkTarget.sameWindow,
    artworkUrl = 'https://images.pexels.com/photos/6250883/pexels-photo-6250883.jpeg',
  } = config || {};

  return {
    id: '3',
    type: TileType.Banner,
    active,
    createdAt: '',
    updatedAt: '',
    tileHeight,
    priority: 1,
    configuration: {
      title,
      description,
      ctaText,
      ctaLink,
      ctaLinkTarget,
      artworkUrl,
    },
  };
};
