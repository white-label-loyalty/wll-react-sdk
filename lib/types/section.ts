import { Tile } from './tile';

export enum SectionType {
  Grid = 'GRID',
  Banner = 'BANNER',
}

export type TSection = {
  id: string;
  type: SectionType;
  createdAt: string;
  updatedAt: string;
  title?: string;
  description?: string;
  tiles: Tile[];
  pointsMultiplier?: number;
  pointsPrefix?: string | null;
  pointsSuffix?: string | null;
  priority: number;
  active: boolean;
};
