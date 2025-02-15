import { SectionType, TSection } from '../types/section';
import { Tile, TileType } from '../types/tile';
import { createTileMock } from './tiles';

export type SectionMockConfig = Partial<TSection> & {
  tiles?: Tile[];
};

const defaultConfig: TSection = {
  details: [],
  defaultLocale: 'en',
  name: 'Elite Member Benefits',
  type: SectionType.Grid,
  active: true,
  id: 'a35399a7-580a-4493-afff-24ef4facf3f4',
  createdAt: '2024-11-19T15:50:37.701Z',
  updatedAt: '2024-12-06T11:18:16.842Z',
  priority: 2,
  tiles: [createTileMock(TileType.Content)],
  title: 'Elite Member Benefits',
  locale: 'en',
  pointsSuffix: 'miles',
};

export const createSectionMock = (config?: SectionMockConfig): TSection => {
  const { tiles, ...sectionConfig } = config || {};
  
  // If tiles are provided in config, use those. Otherwise use default tiles
  const mergedTiles = tiles || defaultConfig.tiles;

  return {
    ...defaultConfig,
    ...sectionConfig,
    tiles: mergedTiles,
  };
};

// Helper function to create a section with specific tile types
export const createSectionWithTiles = (tiles: Tile[]): TSection => {
  return createSectionMock({ tiles });
};
