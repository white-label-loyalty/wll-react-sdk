import React from 'react';
import { useHandleTilePress } from '../../../hooks/useHandleTilePress';
import { BannerTileConfig } from '../../../types/tile';
import { Button } from '../../atoms';
import { useBannerContext } from '../../atoms/BaseBanner';

export const BannerTileCTA = (): JSX.Element | null => {
  const tile = useBannerContext();
  const { ctaText, ctaLink, ctaLinkTarget } =
    tile.configuration as BannerTileConfig;
  const handlePress = useHandleTilePress(tile, ctaLink, ctaLinkTarget);

  if (!ctaText) return null;

  const hint =
    ctaLinkTarget === 'NEW_WINDOW'
      ? `Opens ${ctaLink} in a new window`
      : `Takes you to ${ctaLink}`;

  return (
    <Button
      title={ctaText}
      variant="accent"
      onPress={handlePress}
      accessibilityHint={hint}
    />
  );
};
