import React from 'react';
import { useHandleTilePress } from '../../../hooks/useHandleTilePress';
import { BannerTileConfig, CTALinkTarget } from '../../../types/tile';
import { Button } from '../../atoms';
import { useBannerContext } from '../../atoms/BaseBanner';

/**
 * Renders the call to action of a Banner Tile.
 *
 * @returns JSX.Element or null if no text or required props are present
 */
export const BannerTileCTA = (): JSX.Element | null => {
  const tile = useBannerContext();

  if (!tile) return null;

  if (!tile.configuration) return null;

  const {
    ctaText = '',
    ctaLink = '',
    ctaLinkTarget,
  } = tile.configuration as BannerTileConfig;

  if (!ctaText || !ctaLink) return null;

  const handlePress = useHandleTilePress(tile, ctaLink, ctaLinkTarget);

  const hint = ctaLink
    ? ctaLinkTarget === CTALinkTarget.newWindow
      ? `Opens ${ctaLink} in a new window`
      : `Takes you to ${ctaLink}`
    : '';

  return (
    <Button
      testID="banner-tile-cta"
      title={ctaText}
      variant="accent"
      onPress={handlePress}
      accessibilityHint={hint}
    />
  );
};
