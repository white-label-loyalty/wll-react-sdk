/**
 * Calculates points based on a base value and multiplier
 * @param baseValue The base value to calculate points from (can be points or price)
 * @param pointsMultiplier Optional multiplier value (defaults to 1)
 * @returns The calculated points value
 */
export const calculatePoints = (baseValue: number, pointsMultiplier?: string | number): number => {
  return baseValue * Number(pointsMultiplier ?? 1);
};
