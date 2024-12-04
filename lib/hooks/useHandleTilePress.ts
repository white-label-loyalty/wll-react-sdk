import { useCallback } from 'react';
import { useWllSdk } from '../context/WllSdkContext';
import {
  CTALinkTarget,
  RewardCategoryTileConfig,
  RewardTileConfig,
  Tile,
  TileType,
} from '../types/tile';

export const useHandleTilePress = (
  tile: Tile,
  ctaLink?: string | null,
  ctaLinkTarget?: string
) => {
  const { handleNavigation } = useWllSdk();

  return useCallback(() => {
    if (tile?.type === TileType.Reward) {
      const config = tile.configuration as RewardTileConfig;
      if (config?.rewardId) {
        const url = `/reward?id=${config.rewardId}`;
        return handleNavigation(url, CTALinkTarget.sameWindow);
      }
    }

    if (tile?.type === TileType.RewardCategory) {
      const config = tile.configuration as RewardCategoryTileConfig;
      const url = `/category?id=${config.rewardCategoryId}`;
      if (config?.rewardCategoryId) {
        return handleNavigation(url, CTALinkTarget.sameWindow);
      }
    }

    if (ctaLink) {
      const target =
        (ctaLinkTarget as CTALinkTarget) || CTALinkTarget.sameWindow;
      return handleNavigation(ctaLink, target);
    }
  }, [tile, ctaLink, ctaLinkTarget, handleNavigation]);
};
