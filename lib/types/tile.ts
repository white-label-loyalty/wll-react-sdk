export enum CtaAction {
  sameWindow = "SAME_WINDOW",
  newWindow = "NEW_WINDOW",
}

export enum BadgeTileType {
  latestEarned = "LATEST_EARNED",
  specificBadge = "SPECIFIC_BADGE",
}

export enum TierTileType {
  currentTier = "CURRENT_TIER",
  nextTier = "NEXT_TIER",
  specificTier = "SPECIFIC_TIER",
}

export enum TileType {
  Banner = "BANNER",
  Points = "POINTS",
  Content = "CONTENT",
  Reward = "REWARD",
  Badge = "BADGE",
  RewardCategory = "REWARD_CATEGORY",
  Tier = "TIER",
}

export enum TileHeight {
  Half = "HALF",
  Full = "FULL",
}

export class BannerTileConfig {
  imageUrl?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  ctaAction?: CtaAction;
  constructor(
    imageUrl?: string,
    title?: string,
    description?: string,
    ctaText?: string,
    ctaLink?: string,
    ctaAction?: CtaAction
  ) {
    this.imageUrl = imageUrl;
    this.title = title;
    this.description = description;
    this.ctaText = ctaText;
    this.ctaLink = ctaLink;
    this.ctaAction = ctaAction;
  }
}

export class PointsTileConfig {
  title?: string;
  multiplier?: number;
  prefix?: string;
  suffix?: string;
  imageUrl?: string;
  constructor(
    title?: string,
    multiplier?: number,
    prefix?: string,
    suffix?: string,
    imageUrl?: string
  ) {
    this.title = title;
    this.multiplier = multiplier;
    this.prefix = prefix;
    this.suffix = suffix;
    this.imageUrl = imageUrl;
  }
}

export class ContentTileConfig {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  constructor(title?: string, subtitle?: string, imageUrl?: string) {
    this.title = title;
    this.subtitle = subtitle;
    this.imageUrl = imageUrl;
  }
}

export class RewardTileConfig {
  rewardId?: string;
  showPrice?: boolean;
  constructor(rewardId?: string, showPrice?: boolean) {
    this.rewardId = rewardId;
    this.showPrice = showPrice;
  }
}

export class BadgeTileConfig {
  badgeTileType?: BadgeTileType;
  badgeId?: string;
  constructor(badgeTileType?: BadgeTileType, badgeId?: string) {
    this.badgeTileType = badgeTileType;
    this.badgeId = badgeId;
  }
}

export class RewardCategoryTileConfig {
  categoryId?: string;
  allowDecorationOverlay?: boolean;
  constructor(categoryId?: string, allowDecorationOverlay?: boolean) {
    this.categoryId = categoryId;
    this.allowDecorationOverlay = allowDecorationOverlay;
  }
}

export class TierTileConfig {
  tierTileType?: TierTileType;
  tierId?: string | null;
  constructor(tierTileType?: TierTileType, tierId?: string | null) {
    this.tierTileType = tierTileType;
    this.tierId = tierId;
  }
}

export type Tile = {
  id: string;
  type: TileType;
  createdAt: Date;
  updatedAt: Date;
  tenantId: string;
  visibilityCriteria: string;
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
