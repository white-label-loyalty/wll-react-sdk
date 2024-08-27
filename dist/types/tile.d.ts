export declare enum CtaAction {
    sameWindow = "SAME_WINDOW",
    newWindow = "NEW_WINDOW"
}
export declare enum BadgeTileType {
    latestEarned = "LATEST_EARNED",
    specificBadge = "SPECIFIC_BADGE"
}
export declare enum TierTileType {
    currentTier = "CURRENT_TIER",
    nextTier = "NEXT_TIER",
    specificTier = "SPECIFIC_TIER"
}
export declare enum TileType {
    Banner = "BANNER",
    Points = "POINTS",
    Content = "CONTENT",
    Reward = "REWARD",
    Badge = "BADGE",
    RewardCategory = "REWARD_CATEGORY",
    Tier = "TIER"
}
export declare enum TileHeight {
    Half = "HALF",
    Full = "FULL"
}
type Badge = {
    id: string;
    name: string;
    description: string;
    artworkUrl: string;
    createdAt: string;
    updatedAt: string;
};
export declare class RewardCategory {
    name?: string;
    priority?: number;
    type?: string;
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    description?: string;
    metadata?: string;
    pictureUrl?: string;
    rewards?: Reward[];
    parent?: string;
}
export declare class Reward {
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    name?: string;
    pictureUrl?: string;
    price?: number;
    priority?: number;
    availability?: Availability;
    purchasable?: boolean;
    tier?: string;
    summary?: string;
    redemptionMessage?: string;
    visibilityCriteria?: string;
}
type Availability = {
    start: Date;
    end: Date;
};
type Effectivity = {
    start: Date;
    end: Date;
};
export type TierType = {
    id: string;
    name: string;
    description: string;
    artworkUrl: string;
    priority: number;
    pointsRequirement: number;
    calculation: string;
    accumulationPeriod: string;
    effectivity: Effectivity;
    createdAt: string;
    updatedAt: string;
    earnedPoints: number;
    attained: boolean;
};
export declare class BannerTileConfig {
    imageUrl?: string;
    title?: string;
    description?: string;
    ctaText?: string;
    ctaLink?: string;
    ctaAction?: CtaAction;
    constructor(imageUrl?: string, title?: string, description?: string, ctaText?: string, ctaLink?: string, ctaAction?: CtaAction);
}
export declare class PointsTileConfig {
    title?: string;
    multiplier?: number;
    prefix?: string;
    suffix?: string;
    imageUrl?: string;
    points?: number;
    constructor(title?: string, multiplier?: number, prefix?: string, suffix?: string, imageUrl?: string);
}
export declare class ContentTileConfig {
    title?: string;
    subtitle?: string;
    imageUrl?: string;
    constructor(title?: string, subtitle?: string, imageUrl?: string);
}
export declare class RewardTileConfig {
    rewardId?: string;
    showPrice?: boolean;
    constructor(rewardId?: string, showPrice?: boolean);
}
export declare class BadgeTileConfig {
    badgeTileType?: BadgeTileType;
    badgeId?: string;
    badge?: Badge;
    constructor(badgeTileType?: BadgeTileType, badgeId?: string);
}
export declare class RewardCategoryTileConfig {
    categoryId?: string;
    allowDecorationOverlay?: boolean;
    rewardCategory?: RewardCategory;
    constructor(categoryId?: string, allowDecorationOverlay?: boolean);
}
export declare class TierTileConfig {
    tierTileType?: TierTileType;
    tierId?: string | null;
    tier?: TierType;
    constructor(tierTileType?: TierTileType, tierId?: string | null);
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
declare const getConfigForTileType: (tileType: TileType) => typeof BannerTileConfig | typeof PointsTileConfig | typeof ContentTileConfig | typeof RewardTileConfig | typeof BadgeTileConfig | typeof RewardCategoryTileConfig | typeof TierTileConfig;
export type TileConfig = InstanceType<ReturnType<typeof getConfigForTileType>>;
export {};
