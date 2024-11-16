import { useCallback } from 'react';
import { useWllSdk } from '../context/WllSdkContext';
import { CTALinkTarget } from '../types/tile';

export const useHandleTilePress = (
  ctaLink: string | null | undefined,
  ctaLinkTarget?: string
) => {
  const { handleNavigation } = useWllSdk();

  return useCallback(() => {
    if (ctaLink) {
      const target = (ctaLinkTarget as CTALinkTarget) || 'SAME_FRAME';
      handleNavigation(ctaLink, target);
    }
  }, [ctaLink, ctaLinkTarget, handleNavigation]);
};
