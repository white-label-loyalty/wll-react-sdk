import { useCallback } from 'react';
import { useDataContext } from '../context/DataContext';
import { useWllSdk } from '../context/WllSdkContext';
import { PointsTileConfig, Tile } from '../types/tile';
import { updatePointsValueDirectly } from '../utils/directDomUpdates';
import { refreshAllData } from './useDataRefresh';

/**
 * Hook that provides functions to update data without causing loading states
 */
export function useDataUpdate() {
  const sdk = useWllSdk();
  const { updatePoints, updateTile } = useDataContext();

  /**
   * Updates points for a tile in the cache without triggering a loading state
   * and immediately updates the DOM for instant visual feedback
   */
  const updatePointsValue = useCallback(
    (tileId: string, points: number, multiplier = 1) => {
      updatePoints(tileId, points);

      updatePointsValueDirectly(tileId, points, multiplier);

      setTimeout(() => {
        refreshAllData(true, tileId);
      }, 50);
    },
    [updatePoints]
  );

  /**
   * Updates a tile in the cache without triggering a loading state
   * and immediately refreshes that specific tile silently in the background
   */
  const updateTileData = useCallback(
    (tile: Tile) => {
      updateTile(tile);

      if (tile.id) {
        refreshAllData(true, tile.id);
      }
    },
    [updateTile]
  );

  /**
   * Refreshes points data in the background without causing loading states
   * Uses a faster, more direct approach to update the UI immediately
   */
  const refreshPointsInBackground = useCallback(
    async (tileId: string) => {
      if (!sdk?.getTileByID) return;

      try {
        const response = await sdk.getTileByID(tileId);
        if (response.status === 'success' && response.data) {
          updateTile(response.data);

          if (response.data.type === 'POINTS' && response.data.configuration) {
            const config = response.data.configuration as PointsTileConfig;
            if (typeof config.points === 'number') {
              updatePoints(tileId, config.points);
              updatePointsValueDirectly(tileId, config.points);
            }
          }
        }
      } catch (error) {
        console.error('Error refreshing points in background:', error);
      }
    },
    [sdk, updateTile, updatePoints]
  );

  return {
    updatePointsValue,
    updateTileData,
    refreshPointsInBackground,
  };
}
