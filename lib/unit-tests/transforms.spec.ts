import {
  handleLastEarnedDate,
  sortByPriority,
  transformLocale,
} from '../utils/transforms';

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

describe('transformLocale', () => {
  it('transforms known locales correctly', () => {
    expect(transformLocale('en')).toBe('en-GB');
    expect(transformLocale('fr')).toBe('fr-FR');
    expect(transformLocale('us')).toBe('en-US');
  });

  it('defaults to en-GB when locale is undefined', () => {
    expect(transformLocale(undefined)).toBe('en-GB');
  });

  it('defaults to en-GB when locale is null', () => {
    expect(transformLocale(null)).toBe('en-GB');
  });

  it('defaults to en-GB for unsupported locales', () => {
    expect(transformLocale('xx')).toBe('en-GB');
  });
});

describe('handleLastEarnedDate', () => {
  it('formats date correctly with default locale', () => {
    const date = '2023-12-25';
    expect(handleLastEarnedDate(date)).toMatch(/\d{2}\/\d{2}\/\d{4}/);
  });

  it('formats date correctly with specific locale', () => {
    const date = '2023-12-25';
    expect(handleLastEarnedDate(date, 'fr')).toMatch(/\d{2}\/\d{2}\/\d{4}/);
  });

  it('returns "Date not available" when date is undefined', () => {
    expect(handleLastEarnedDate(undefined)).toBe('Date not available');
  });

  it('returns "Invalid date" for invalid date string', () => {
    expect(handleLastEarnedDate('invalid-date')).toBe('Invalid Date');
  });

  it('uses default locale when userLocale is undefined', () => {
    const date = '2023-12-25';
    expect(handleLastEarnedDate(date, undefined)).toMatch(
      /\d{2}\/\d{2}\/\d{4}/
    );
  });
});
