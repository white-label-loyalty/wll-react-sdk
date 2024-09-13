export enum CtaAction {
  sameWindow = 'SAME_WINDOW',
  newWindow = 'NEW_WINDOW',
}

export enum BadgeTileType {
  latestEarned = 'LATEST_EARNED',
  specificBadge = 'SPECIFIC_BADGE',
}

export enum TierTileType {
  currentTier = 'CURRENT_TIER',
  nextTier = 'NEXT_TIER',
  specificTier = 'SPECIFIC_TIER',
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
type Badge = {
  id: string | null;
  name: string | null;
  description: string | null;
  artworkUrl: string | null;
  createdAt: string | null;
  updatedAt: string | null;
};
export class RewardCategory {
  name?: string | null;
  priority?: number;
  type?: string | null;
  id?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  description?: string | null;
  metadata?: string | null;
  pictureUrl?: string | null;
  rewards?: Reward[];
  parent?: string | null;
}

export class Reward {
  id?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  name?: string | null;
  pictureUrl?: string | null;
  description?: string | null;
  value?: number | null;
  price?: number;
  priority?: number;
  discounts?: any[] | null;
  redemptionChannels?: string[] | null;
  venues?: any[] | null;
  purchasableForAudiences?: string[] | null;
  category?: string | null;
  terms?: string | null;
  availability?: Availability;
  purchasable?: boolean;
  tier?: string | null;
  summary?: string | null;
  redemptionMessage?: string | null;
  visibilityCriteria?: string | null;
  logoUrl?: string | null;
  type?: string | null;
  codeType?: string | null;
  code?: string | null;
  purchaseExpiration?: string | null;
  hideCode?: boolean;
  notificationConfig?: string | null;
}
type Availability = {
  start: string | null;
  end: string | null;
};
type Effectivity = {
  start: string | null;
  end: string | null;
};

export type TierType = {
  id: string | null;
  name: string | null;
  description: string | null;
  artworkUrl: string | null;
  priority: number;
  pointsRequirement: number;
  calculation: string | null;
  accumulationPeriod: string | null;
  effectivity: Effectivity;
  createdAt: string | null;
  updatedAt: string | null;
  earnedPoints: number;
  attained: boolean;
};

export class BannerTileConfig {
  imageUrl?: string | null;
  title?: string | null;
  description?: string | null;
  ctaText?: string | null;
  ctaLink?: string | null;
  ctaAction?: CtaAction;
}

export class PointsTileConfig {
  title?: string | null;
  multiplier?: number;
  prefix?: string | null;
  suffix?: string | null;
  imageUrl?: string | null;
  points?: number;
}

export class ContentTileConfig {
  title?: string | null;
  subtitle?: string | null;
  imageUrl?: string | null;
}

export class RewardTileConfig {
  reward?: Reward;
  showPrice?: boolean;
}

export class BadgeTileConfig {
  badgeTileType?: BadgeTileType;
  badgeId?: string | null;
  badge?: Badge;
}

export class RewardCategoryTileConfig {
  categoryId?: string | null;
  allowDecorationOverlay?: boolean;
  rewardCategory?: RewardCategory;
}

export class TierTileConfig {
  tierId?: string | null;
  tier?: TierType;
  type?: TierTileType;
}

export type Tile = {
  id: string | null;
  type: TileType;
  active: boolean;
  createdAt: string | null;
  updatedAt: string | null;
  visibilityCriteria: object | null;
  tileHeight: TileHeight;
  configuration: TileConfig;
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

export type TileConfig = InstanceType<
  ReturnType<typeof getConfigForTileType>
>;
