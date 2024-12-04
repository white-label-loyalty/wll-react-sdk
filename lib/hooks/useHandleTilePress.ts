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
  tile?: Tile | null,
  ctaLink?: string | null,
  ctaLinkTarget?: string
) => {
  const { handleNavigation } = useWllSdk();

  return useCallback(() => {
    if (tile?.type === TileType.Reward) {
      const config = tile.configuration as RewardTileConfig;
      if (config?.rewardId) {
        const link = `/reward?id=${config.rewardId}`;
        return handleNavigation(link, CTALinkTarget.sameWindow);
      }
    }

    if (tile?.type === TileType.RewardCategory) {
      const config = tile.configuration as RewardCategoryTileConfig;
      if (config?.rewardCategoryId) {
        const link = `/category?id=${config.rewardCategoryId}`;
        return handleNavigation(link, CTALinkTarget.sameWindow);
      }
    }

    if (ctaLink) {
      const target =
        (ctaLinkTarget as CTALinkTarget) || CTALinkTarget.sameWindow;
      return handleNavigation(ctaLink, target);
    }
  }, [tile, ctaLink, ctaLinkTarget, handleNavigation]);
};
