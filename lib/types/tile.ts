import { Availability, RewardCategory, TierType } from './wll';

export enum CTALinkTarget {
  sameWindow = 'SAME_FRAME',
  newWindow = 'NEW_WINDOW',
}

export enum TierTileType {
  currentTier = 'CURRENT',
  specificTier = 'SPECIFIC',
}

export enum ProgressType {
  Name = 'NAME',
  Points = 'POINTS',
}

export enum TileType {
  Banner = 'BANNER',
  Points = 'POINTS',
  Content = 'CONTENT',
  Reward = 'REWARD',
  Badge = 'BADGE',
  RewardCategory = 'REWARD_CATEGORY',
  Tier = 'TIER',
  Roundup = 'ROUND_UP_BALANCE',
  Venue = 'VENUE',
}

export enum TileHeight {
  Half = 'HALF',
  Full = 'FULL',
}

export type ProgessType = 'NAME' | 'POINTS';

export enum StatusVariant {
  PRIMARY = 'primary',
  GREEN = 'green',
  GREY = 'grey',
}

export class BannerTileConfig {
  artworkUrl?: string | null;
  title?: string | null;
  description?: string | null;
  ctaText?: string | null;
  ctaLink?: string | null;
  ctaLinkTarget?: CTALinkTarget;
}

export class PointsTileConfig {
  title?: string | null;
  pointsMultiplier?: number;
  pointsPrefix?: string | null;
  pointsSuffix?: string | null;
  artworkUrl?: string | null;
  points?: number;
  ctaLink?: string | null;
  ctaLinkTarget?: CTALinkTarget;
}

export class RoundupTileConfig {
  title?: string | null;
  amountPrefix?: string | null;
  amountSuffix?: string | null;
  artworkUrl?: string | null;
  balance?: number;
  ctaLink?: string | null;
  ctaLinkTarget?: CTALinkTarget;
}

export class ContentTileConfig {
  title?: string | null;
  body?: string | null;
  artworkUrl?: string | null;
  ctaLinkTarget?: CTALinkTarget;
  ctaLink?: string | null;
  isLocked?: boolean;
}

export class RewardTileConfig {
  rewardId: string = '';
  defaultLocale: string = 'en';
  showPrice: boolean = false;
  showArtwork?: boolean;
  showDetails?: boolean;
  isLocked?: boolean;
  id: string = '';
  createdAt: string = '';
  updatedAt: string = '';
  name: string = '';
  pictureUrl: string = '';
  value: number = 0;
  price: number = 0;
  priority: number = 0;
  availability: Availability = {
    start: '',
    end: '',
  };
  purchasable: boolean = false;
  tier: string | null = null;
  category: RewardCategory = {
    name: '',
    priority: 0,
    type: '',
    id: '',
    createdAt: '',
    updatedAt: '',
    description: null,
    metadata: null,
    pictureUrl: '',
  };
  discounts: any[] = [];
  summary: string | null = null;
  redemptionMessage: string | null = null;
  visibilityCriteria: string | null = null;
  type: 'VOUCHER' = 'VOUCHER';
  codeType: 'HUMAN' | 'OTP' = 'HUMAN';
  code: string | null = null;
  purchaseExpiration: string | null = null;
  hideCode: boolean = false;
  notificationConfig: any | null = null;
  artworkUrl: string | undefined = undefined;
  pointsMultiplier: number = 1;
  pointsPrefix: string | null = null;
  pointsSuffix: string | null = null;
}

export class VenueTileConfig {
  venueId: string = '';
  name: string = '';
  artworkUrl: string = '';
  description: string = '';
  isLocked?: boolean;
}

export enum BadgeTileType {
  Specific = 'SPECIFIC',
  Latest = 'LATEST_EARNED',
}

export class BadgeTileConfig {
  type: BadgeTileType = BadgeTileType.Specific;
  badgeId: string = '';
  internalName?: string;
  defaultLocale: string = 'en';
  priority: number = 0;
  internalDescription?: string | null;
  status?: string;
  id: string = '';
  createdAt: string = '';
  updatedAt: string = '';
  details?: BadgeDetail[] = [];
  count: number = 0;
  name: string = '';
  locale: string = 'en';
  description: string = '';
  artworkUrl: string = '';
  emptyBadgeMessage?: string;
  emptyBadgeArtworkUrl?: string;
  awardedDatePrefix?: string;
  badgeNotEarnedMessage?: string;
  lastEarnedAt?: string;
}

export type BadgeDetail = {
  name: string;
  locale: string;
  description: string;
  artworkUrl: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  emptyBadgeMessage?: string;
  emptyBadgeArtworkUrl?: string;
  awardedDatePrefix?: string;
  badgeNotEarnedMessage?: string;
};

export class RewardCategoryTileConfig {
  showName: boolean = true;
  rewardCategoryId: string = '';
  artworkUrl: string = '';
  name: string = '';
}

export class TierTileConfig {
  progressType: ProgressType = ProgressType.Name;
  pointsMultiplier?: number;
  pointsPrefix?: string;
  pointsSuffix?: string;
  tier?: TierType;
  tierId?: string;
  targetTier?: TierType | undefined;
  type?: TierTileType;
  targetTierAttainingPeriod?: Date | null;
  title: string = '';
  emptyDescription?: string = '';
  emptyArtworkUrl?: string = '';
  pointsToTierPrefix?: string = '';
  pointsToTierSuffix?: string = '';
  locale: string = 'en';
}

export type Tile = {
  id: string | null;
  type?: TileType;
  active: boolean;
  createdAt: string | null;
  updatedAt: string | null;
  tileHeight: TileHeight;
  configuration: TileConfig;
  priority: number;
};

const getConfigForTileType = (tileType: TileType) => {
  switch (tileType) {
    case TileType.Banner:
      return BannerTileConfig;
    case TileType.Points:
      return PointsTileConfig;
    case TileType.Content:
      return ContentTileConfig;
    case TileType.Reward:
      return RewardTileConfig;
    case TileType.Venue:
      return VenueTileConfig;
    case TileType.Badge:
      return BadgeTileConfig;
    case TileType.RewardCategory:
      return RewardCategoryTileConfig;
    case TileType.Tier:
      return TierTileConfig;
    default:
      throw new Error(`Tile type ${tileType} is not supported`);
  }
};

export type TileConfig = InstanceType<ReturnType<typeof getConfigForTileType>>;

export type TileSizeInfo = {
  isFullSize: boolean;
  isHalfSize: boolean;
};
