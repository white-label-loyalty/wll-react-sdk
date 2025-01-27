import { applyMultiplier, getPointsLabel } from '../utils/pointsHelpers';

describe('getPointsLabel', () => {
  it('formats the label correctly with all parameters provided', () => {
    expect(getPointsLabel('Reward points:', 10, '$', 'pts')).toBe(
      'Reward points: $ 10 pts'
    );
  });

  it('uses default label when label is not provided', () => {
    expect(getPointsLabel(undefined, 10, '$', 'pts')).toBe(
      'Reward points: $ 10 pts'
    );
  });

  it('handles missing prefix and suffix', () => {
    expect(getPointsLabel('Reward points:', 10)).toBe('Reward points: 10');
    expect(getPointsLabel('Reward points:', 10, null, null)).toBe(
      'Reward points: 10'
    );
  });

  it('handles empty prefix and suffix', () => {
    expect(getPointsLabel('Reward points:', 10, '', '')).toBe(
      'Reward points: 10'
    );
  });

  it('handles zero points correctly', () => {
    expect(getPointsLabel('Reward points:', 0, '$', 'pts')).toBe('');
  });

  it('handles null or undefined values for prefix and suffix', () => {
    expect(getPointsLabel('Reward points:', 10, null, 'pts')).toBe(
      'Reward points: 10 pts'
    );
    expect(getPointsLabel('Reward points:', 10, '$', undefined)).toBe(
      'Reward points: $ 10'
    );
  });
});

describe('applyMultiplier', () => {
  it('calculates points correctly with a valid base value and multiplier', () => {
    expect(applyMultiplier(10, 2)).toBe(20);
    expect(applyMultiplier(5, 0.5)).toBe(2.5);
  });

  it('uses default multiplier (1) when multiplier is not provided', () => {
    expect(applyMultiplier(10)).toBe(10);
  });

  it('handles string multipliers correctly', () => {
    expect(applyMultiplier(10, '2')).toBe(20);
    expect(applyMultiplier(5, '0.5')).toBe(2.5);
  });

  it('handles invalid multipliers by defaulting to 1', () => {
    expect(applyMultiplier(10, 'invalid')).toBe(10);
    expect(applyMultiplier(10, null)).toBe(10);
    expect(applyMultiplier(10, undefined)).toBe(10);
  });
});
