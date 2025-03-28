import { IS_MOBILE, IS_WEB } from '../constants/device';

/**
 * Utility functions for direct updates to bypass React's render cycle
 * for performance-critical updates like points values
 */

// Global registry for React Native components that need direct updates
type PointsUpdateRegistry = {
  [tileId: string]: Array<(points: number) => void>;
};

const pointsUpdateRegistry: PointsUpdateRegistry = {};

/**
 * Register a callback for direct points updates in React Native
 *
 * @param tileId - The ID of the tile
 * @param callback - Function to call with updated points value
 * @returns Function to unregister the callback
 */
export const registerPointsUpdateCallback = (
  tileId: string,
  callback: (points: number) => void
): (() => void) => {
  if (!pointsUpdateRegistry[tileId]) {
    pointsUpdateRegistry[tileId] = [];
  }

  pointsUpdateRegistry[tileId].push(callback);

  return () => {
    if (pointsUpdateRegistry[tileId]) {
      pointsUpdateRegistry[tileId] = pointsUpdateRegistry[tileId].filter(
        (cb) => cb !== callback
      );
    }
  };
};

/**
 * Directly update the points value without waiting for React re-render
 * Works in both web (DOM) and React Native environments
 *
 * @param tileId - The ID of the tile
 * @param points - The new points value
 * @param multiplier - Optional points multiplier
 */
export const updatePointsValueDirectly = (
  tileId: string,
  points: number,
  multiplier = 1
): void => {
  const calculatedPoints = points * multiplier;

  // Web environment: update DOM directly
  if (IS_WEB) {
    const elements = document.querySelectorAll(`[data-tile-id="${tileId}"]`);
    elements.forEach((element) => {
      if (element) {
        element.textContent = String(calculatedPoints);
      }
    });
  }

  // React Native environment: use the registry
  if (IS_MOBILE && pointsUpdateRegistry[tileId]) {
    pointsUpdateRegistry[tileId].forEach((callback) => {
      callback(calculatedPoints);
    });
  }
};
