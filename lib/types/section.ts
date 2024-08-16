import { Tile } from "./tile";

export enum SectionType {
  Grid = "GRID",
  Banner = "BANNER",
}

export type Section = {
  id: string;
  type: SectionType;
  createdAt: Date;
  updatedAt: Date;
  tenantId: string;
  visibilityCriteria: string;
  title?: string;
  description?: string;
  tiles: Tile[];
};
