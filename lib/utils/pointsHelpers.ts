/**
 * Applies a multiplier to a base value. Handles string multipliers by converting them to numbers.
 * If the multiplier is invalid (NaN, null, undefined), defaults to 1.
 *
 * @param baseValue The base value to multiply
 * @param pointsMultiplier Optional multiplier value (defaults to 1)
 * @returns The calculated points value
 */
export const applyMultiplier = (
  baseValue: number,
  pointsMultiplier?: string | number | null
): number => {
  const multiplier = Number(pointsMultiplier ?? 1);
  return baseValue * (isNaN(multiplier) ? 1 : multiplier);
};

/**
 * Formats a points label by combining the label, points value, and optional prefix/suffix.
 * Only includes non-empty values in the final string.
 * Returns empty string if points is 0.
 *
 * @param label The main label text (e.g., "Reward points:"). Defaults to "Reward points:"
 * @param points The points value to display. Defaults to 0
 * @param prefix Optional prefix to display before the points value
 * @param suffix Optional suffix to display after the points value
 * @returns A formatted string containing only the non-empty parts joined together, or empty string if points is 0
 */
export const getPointsLabel = (
  label: string | undefined = 'Reward points:',
  points: number = 0,
  prefix?: string | null,
  suffix?: string | null
) =>
  points === 0 ? '' : [label, prefix, points, suffix].filter(Boolean).join(' ');
