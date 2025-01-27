import { sortByPriority } from '../utils/transforms';

describe('sortByPriority', () => {
  it('sorts tiles by priority in descending order', () => {
    const tiles = [
      { id: '1', priority: 1 },
      { id: '2', priority: 3 },
      { id: '3', priority: 2 },
    ];

    const sortedTiles = sortByPriority(tiles);

    expect(sortedTiles).toEqual([
      { id: '2', priority: 3 },
      { id: '3', priority: 2 },
      { id: '1', priority: 1 },
    ]);
  });

  it('maintains original order for tiles with equal priority', () => {
    const tiles = [
      { id: '1', priority: 2 },
      { id: '2', priority: 2 },
      { id: '3', priority: 2 },
      { id: '4', priority: 1 },
    ];

    const sortedTiles = sortByPriority(tiles);

    // Tiles with priority 2 should maintain their original order
    expect(sortedTiles).toEqual([
      { id: '1', priority: 2 },
      { id: '2', priority: 2 },
      { id: '3', priority: 2 },
      { id: '4', priority: 1 },
    ]);
  });

  it('handles mixed priorities while preserving order of equal priorities', () => {
    const tiles = [
      { id: '1', priority: 1 },
      { id: '2', priority: 2 },
      { id: '3', priority: 2 },
      { id: '4', priority: 3 },
      { id: '5', priority: 2 },
    ];

    const sortedTiles = sortByPriority(tiles);

    expect(sortedTiles).toEqual([
      { id: '4', priority: 3 },
      { id: '2', priority: 2 },
      { id: '3', priority: 2 },
      { id: '5', priority: 2 },
      { id: '1', priority: 1 },
    ]);
  });

  it('handles empty array', () => {
    const tiles: Array<{ priority: number }> = [];
    const sortedTiles = sortByPriority(tiles);
    expect(sortedTiles).toEqual([]);
  });

  it('handles single item array', () => {
    const tiles = [{ id: '1', priority: 1 }];
    const sortedTiles = sortByPriority(tiles);
    expect(sortedTiles).toEqual([{ id: '1', priority: 1 }]);
  });

  it('does not modify the original array', () => {
    const tiles = [
      { id: '1', priority: 1 },
      { id: '2', priority: 3 },
      { id: '3', priority: 2 },
    ];
    const originalTiles = [...tiles];

    sortByPriority(tiles);

    expect(tiles).toEqual(originalTiles);
  });
});
