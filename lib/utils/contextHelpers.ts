import { TileSizeInfo } from '../types/tile';

/**
 * Utility function that checks if a component context and its configuration exist.
 * Works for both tile contexts and banner contexts.
 *
 * @param context - The component context to validate (tileContext or bannerContext)
 * @returns `true` if both the context and its configuration exist, otherwise `false`
 */
export function isContextValid(context: any): boolean {
  return (
    context !== null &&
    context !== undefined &&
    context.configuration !== null &&
    context.configuration !== undefined
  );
}

/**
 * Checks if a tile's content should be hidden based on its size and artwork configuration.
 *
 * @param {TileSizeInfo | null} sizeInfo - The size information for the tile
 * @param {string | null | undefined} artworkUrl - The URL of the tile's artwork
 * @returns {boolean} True if the content should be hidden, false otherwise
 */

export const shouldHideContentForHalfTile = (
  sizeInfo: TileSizeInfo | null,
  artworkUrl?: string | null
): boolean => {
  if (!sizeInfo) return false;
  return sizeInfo.isHalfSize && !!artworkUrl;
};
