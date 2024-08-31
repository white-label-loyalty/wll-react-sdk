export type Badge = {
  id: string;
  name: string;
  description: string;
  artworkUrl: string;
  createdAt: string;
  updatedAt: string;
};

export class RewardCategory {
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

export class Reward {
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
