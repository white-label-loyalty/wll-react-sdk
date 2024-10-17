export type Badge = {
  id: string;
  name: string;
  description: string;
  artworkUrl: string;
  createdAt: string;
  updatedAt: string;
};

export class Reward {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  name?: string;
  pictureUrl?: string;
  description?: string;
  price?: number;
  value?: number;
  priority?: number;
  availability?: Availability;
  purchasable?: boolean;
  tier?: string;
  summary?: string;
  redemptionMessage?: string;
  visibilityCriteria?: string;
}

export type RewardCategory = {
  name: string;
  priority: number;
  type: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  description: string | null;
  metadata: any | null;
  pictureUrl: string;
};

export type Availability = {
  start: string;
  end: string;
};

type Effectivity = {
  start: string;
  end: string;
};

export type TierType = {
  id: string;
  name: string;
  description?: string | null;
  artworkUrl?: string | null;
  priority: number;
  pointsRequirement?: number;
  calculation?: string;
  accumulationPeriod?: string;
  effectivity?: Effectivity;
  createdAt?: string;
  updatedAt?: string;
  earnedPoints?: number;
  attained?: boolean;
};
