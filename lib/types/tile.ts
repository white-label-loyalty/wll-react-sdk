import { Badge, Reward, RewardCategory, TierType } from './wll';

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

export type TileConfig = InstanceType<ReturnType<typeof getConfigForTileType>>;
