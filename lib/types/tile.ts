import { Availability, RewardCategory, TierType } from './wll';

export enum UrlTarget {
  sameWindow = 'SAME_WINDOW',
  newWindow = 'NEW_WINDOW',
}

export enum TierTileType {
  currentTier = 'CURRENT',
  currentTargetNext = 'NEXT',
  currentTargetSpecific = 'SPECIFIC',
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
}

export enum TileHeight {
  Half = 'HALF',
  Full = 'FULL',
}

export type ProgessType = 'NAME' | 'POINTS';

export class BannerTileConfig {
  artworkUrl?: string | null;
  title?: string | null;
  description?: string | null;
  ctaText?: string | null;
  ctaLink?: string | null;
  ctaLinkTarget?: UrlTarget;
}

export class PointsTileConfig {
  title?: string | null;
  multiplier?: number;
  prefix?: string | null;
  suffix?: string | null;
  artworkUrl?: string | null;
  points?: number;
}

export class ContentTileConfig {
  title?: string | null;
  description?: string | null;
  artworkUrl?: string | null;
  linkURL?: string | null;
}

export class RewardTileConfig {
  rewardId: string;
  showPrice: boolean;
  showArtwork?: boolean;
  showDetails?: boolean;
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  pictureUrl: string;
  value: number;
  price: number;
  priority: number;
  availability: Availability;
  purchasable: boolean;
  tier: string | null;
  category: RewardCategory;
  discounts: any[];
  summary: string | null;
  redemptionMessage: string | null;
  visibilityCriteria: string | null;
  type: 'VOUCHER';
  codeType: 'HUMAN' | 'OTP';
  code: string | null;
  purchaseExpiration: string | null;
  hideCode: boolean;
  notificationConfig: any | null;
  artworkUrl: string;
  pointsMultiplier: string;
  pointsPrefix: string | null;
  pointsSuffix: string | null;
  constructor(config: {
    rewardId: string;
    showPrice: boolean;
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    pictureUrl: string;
    value: number;
    price: number;
    priority: number;
    availability: Availability;
    purchasable: boolean;
    category: RewardCategory;
    type: 'VOUCHER';
    codeType: 'HUMAN' | 'OTP';
    hideCode: boolean;
    artworkUrl: string;
    pointsMultiplier: string;
    showArtwork?: boolean;
    showDetails?: boolean;
    tier?: string | null;
    discounts?: any[];
    summary?: string | null;
    redemptionMessage?: string | null;
    visibilityCriteria?: string | null;
    code?: string | null;
    purchaseExpiration?: string | null;
    notificationConfig?: any | null;
    pointsPrefix?: string | null;
    pointsSuffix?: string | null;
  }) {
    this.rewardId = config.rewardId;
    this.showPrice = config.showPrice;
    this.showArtwork = config.showArtwork;
    this.showDetails = config.showDetails;
    this.id = config.id;
    this.createdAt = config.createdAt;
    this.updatedAt = config.updatedAt;
    this.name = config.name;
    this.pictureUrl = config.pictureUrl;
    this.value = config.value;
    this.price = config.price;
    this.priority = config.priority;
    this.availability = config.availability;
    this.purchasable = config.purchasable;
    this.tier = config.tier ?? null;
    this.category = config.category;
    this.discounts = config.discounts ?? [];
    this.summary = config.summary ?? null;
    this.redemptionMessage = config.redemptionMessage ?? null;
    this.visibilityCriteria = config.visibilityCriteria ?? null;
    this.type = config.type;
    this.codeType = config.codeType;
    this.code = config.code ?? null;
    this.purchaseExpiration = config.purchaseExpiration ?? null;
    this.hideCode = config.hideCode;
    this.notificationConfig = config.notificationConfig ?? null;
    this.artworkUrl = config.artworkUrl;
    this.pointsMultiplier = config.pointsMultiplier;
    this.pointsPrefix = config.pointsPrefix ?? null;
    this.pointsSuffix = config.pointsSuffix ?? null;
  }
}

export enum BadgeTileType {
  Specific = 'SPECIFIC',
  Latest = 'LATEST_EARNED',
}

export class BadgeTileConfig {
  type: BadgeTileType = BadgeTileType.Specific;
  badgeId: string = '';
  internalName?: string;
  priority: number = 0;
  internalDescription?: string | null;
  status?: string;
  id: string = '';
  createdAt: string = '';
  updatedAt: string = '';
  details?: BadgeDetail[] = [];
  count: number = 0;
  dateEarned: string = '';
  prefix: string = '';
}

export type BadgeDetail = {
  name: string;
  locale: string;
  description: string;
  artworkUrl: string;
  id: string;
  createdAt: string;
  updatedAt: string;
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
