import React, { FC } from 'react';
import { useHandleTilePress } from '../../../hooks/useHandleTilePress';
import { BannerTileConfig } from '../../../types/tile';
import { Button } from '../../atoms';
import { useBannerContext } from '../../atoms/BaseBanner';

export const BannerTileCTA: FC = () => {
  const { configuration } = useBannerContext();
  const { ctaText, ctaLink, ctaLinkTarget } = configuration as BannerTileConfig;
  const handlePress = useHandleTilePress(ctaLink, ctaLinkTarget);

  if (!ctaText) return null;
  return <Button title={ctaText} variant="accent" onPress={handlePress} />;
};
