import React, { useState, useCallback } from 'react';
import { RefreshControl } from 'react-native';
import { useInvalidateData } from './useInvalidateData';

type UsePullToRefreshProps = {
  onRefresh?: () => Promise<void>;
  refreshing?: boolean;
};

export function usePullToRefresh({
  onRefresh,
  refreshing: externalRefreshing,
}: UsePullToRefreshProps = {}) {
  const [internalRefreshing, setInternalRefreshing] = useState(false);
  const { invalidateGroupData } = useInvalidateData();

  const refreshing = externalRefreshing ?? internalRefreshing;

  const handleRefresh = useCallback(async () => {
    if (refreshing) return;

    setInternalRefreshing(true);

    try {
      if (onRefresh) {
        await onRefresh();
      } else {
        // Default behavior: refresh all group data
        invalidateGroupData();
        // Add a small delay to show the refresh animation
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    } catch (error) {
      console.error('Pull to refresh failed:', error);
    } finally {
      setInternalRefreshing(false);
    }
  }, [refreshing, onRefresh, invalidateGroupData]);

  const refreshControl = React.createElement(RefreshControl, {
    refreshing,
    onRefresh: handleRefresh,
  });

  return {
    refreshControl,
    refreshing,
    handleRefresh,
  };
}
