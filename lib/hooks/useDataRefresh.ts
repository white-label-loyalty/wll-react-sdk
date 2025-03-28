import { useCallback, useEffect, useState } from 'react';
import { useDataContext } from '../context/DataContext';
import { useWllSdk } from '../context/WllSdkContext';
import { TGroup } from '../types/group';
import { TSection } from '../types/section';
import { PointsTileConfig, Tile } from '../types/tile';

/**
 * Custom hook to fetch and manage group data with refresh capability
 *
 * @param id - The ID of the group to fetch
 * @param refreshInterval - Optional interval in seconds to refresh data
 * @returns Object containing group data, loading state, error, and refresh function
 */
export const useGroupWithRefresh = (id: string, refreshInterval?: number) => {
  const sdk = useWllSdk();
  const [data, setData] = useState<TGroup | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(
    async (showLoading = true) => {
      if (!id || !sdk?.getGroupByID) {
        setError('Invalid configuration');
        setIsLoading(false);
        return;
      }

      try {
        if (showLoading) {
          setIsLoading(true);
        }
        const response = await sdk.getGroupByID(id);
        if (response.status === 'success' && response.data) {
          setData(response.data);
          setError(null);
        } else {
          setError(response.error || 'Failed to fetch data');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        if (showLoading) {
          setIsLoading(false);
        }
      }
    },
    [id, sdk]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (!refreshInterval) return;

    const intervalId = setInterval(() => {
      fetchData(false);
    }, refreshInterval * 1000);

    return () => clearInterval(intervalId);
  }, [refreshInterval, fetchData]);

  return {
    data,
    isLoading,
    error,
    refresh: fetchData,
  };
};

/**
 * Custom hook to fetch and manage section data with refresh capability
 *
 * @param id - The ID of the section to fetch
 * @param refreshInterval - Optional interval in seconds to refresh data
 * @returns Object containing section data, loading state, error, and refresh function
 */
export const useSectionWithRefresh = (id: string, refreshInterval?: number) => {
  const sdk = useWllSdk();
  const [data, setData] = useState<TSection | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(
    async (showLoading = true) => {
      if (!id || !sdk?.getSectionByID) {
        setError('Invalid configuration');
        setIsLoading(false);
        return;
      }

      try {
        if (showLoading) {
          setIsLoading(true);
        }
        const response = await sdk.getSectionByID(id);
        if (response.status === 'success' && response.data) {
          setData(response.data);
          setError(null);
        } else {
          setError(response.error || 'Failed to fetch data');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        if (showLoading) {
          setIsLoading(false);
        }
      }
    },
    [id, sdk]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (!refreshInterval) return;

    const intervalId = setInterval(() => {
      fetchData(false);
    }, refreshInterval * 1000);

    return () => clearInterval(intervalId);
  }, [refreshInterval, fetchData]);

  return {
    data,
    isLoading,
    error,
    refresh: fetchData,
  };
};

/**
 * Custom hook to fetch and manage tile data with refresh capability
 *
 * @param id - The ID of the tile to fetch
 * @param refreshInterval - Optional interval in seconds to refresh data
 * @returns Object containing tile data, loading state, error, and refresh function
 */
export const useTileWithRefresh = (id: string, refreshInterval?: number) => {
  const { updateTile, updatePoints } = useDataContext?.() || {
    updateTile: () => {},
    updatePoints: () => {},
  };
  const sdk = useWllSdk();
  const [data, setData] = useState<Tile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(
    async (showLoading = true) => {
      if (!id || !sdk?.getTileByID) {
        setError('Invalid configuration');
        setIsLoading(false);
        return;
      }

      try {
        if (showLoading) {
          setIsLoading(true);
        }
        const response = await sdk.getTileByID(id);
        if (response.status === 'success' && response.data) {
          setData(response.data);
          setError(null);

          if (response.data.type === 'POINTS' && response.data.id) {
            updateTile(response.data);

            const config = response.data.configuration as PointsTileConfig;
            if (config && typeof config.points === 'number') {
              updatePoints(response.data.id, config.points);
            }
          }
        } else {
          setError(response.error || 'Failed to fetch data');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        if (showLoading) {
          setIsLoading(false);
        }
      }
    },
    [id, sdk]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (!refreshInterval) return;

    const intervalId = setInterval(() => {
      fetchData(false);
    }, refreshInterval * 1000);

    return () => clearInterval(intervalId);
  }, [refreshInterval, fetchData]);

  return {
    data,
    isLoading,
    error,
    refresh: fetchData,
  };
};

type RefreshCallback = {
  callback: (() => void) | ((showLoading: boolean) => void);
  silent: boolean;
  priority: 'high' | 'normal' | 'low';
  tileId?: string;
};

let refreshCallbacks: Array<RefreshCallback> = [];

/**
 * Register a refresh callback function
 *
 * @param callback - Function to call when refreshing data
 * @param silent - Whether to refresh silently (without loading state)
 * @param priority - Priority level for this callback (high = points tiles)
 * @param tileId - Optional ID of the tile this callback refreshes
 * @returns Function to unregister the callback
 */
export const registerRefreshCallback = (
  callback: (() => void) | ((showLoading: boolean) => void),
  silent = false,
  priority: 'high' | 'normal' | 'low' = 'normal',
  tileId?: string
) => {
  refreshCallbacks.push({ callback, silent, priority, tileId });

  return () => {
    refreshCallbacks = refreshCallbacks.filter(
      (cb) => cb.callback !== callback
    );
  };
};

/**
 * Trigger a refresh of all registered data
 *
 * @param silent - Whether to refresh silently (without loading state)
 * @param specificTileId - Optional ID of a specific tile to refresh
 */
export const refreshAllData = (silent = true, specificTileId?: string) => {
  const sortedCallbacks = [...refreshCallbacks].sort((a, b) => {
    const priorityOrder = { high: 0, normal: 1, low: 2 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  if (specificTileId) {
    const specificCallbacks = sortedCallbacks.filter(
      (cb) => cb.tileId === specificTileId
    );
    specificCallbacks.forEach(({ callback, silent: callbackSilent }) => {
      executeCallback(callback, silent || callbackSilent);
    });
  }

  sortedCallbacks.forEach(({ callback, silent: callbackSilent, tileId }) => {
    if (specificTileId && tileId === specificTileId) return;

    executeCallback(callback, silent || callbackSilent);
  });
};

/**
 * Execute a callback with the appropriate silent parameter
 */
const executeCallback = (
  callback: (() => void) | ((showLoading: boolean) => void),
  silent: boolean
) => {
  if (silent) {
    try {
      (callback as (showLoading: boolean) => void)(false);
    } catch {
      (callback as () => void)();
    }
  } else {
    (callback as () => void)();
  }
};
