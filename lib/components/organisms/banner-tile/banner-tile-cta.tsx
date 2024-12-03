import React, { FC } from 'react';
import { useHandleTilePress } from '../../../hooks/use-handle-tile-press';
import { BannerTileConfig } from '../../../types/tile';
import { Button } from '../../atoms';
import { useBannerContext } from '../../atoms/base-banner';

export const BannerTileCTA: FC = () => {
  const { configuration } = useBannerContext();
  const { ctaText, ctaLink, ctaLinkTarget } = configuration as BannerTileConfig;
  const handlePress = useHandleTilePress(ctaLink, ctaLinkTarget);

  if (!ctaText) return null;
  return <Button title={ctaText} variant="accent" onPress={handlePress} />;
};
