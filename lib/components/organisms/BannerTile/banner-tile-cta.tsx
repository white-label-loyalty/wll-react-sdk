import React from 'react';
import { useHandleTilePress } from '../../../hooks/useHandleTilePress';
import { BannerTileConfig, CTALinkTarget } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { Button } from '../../atoms';
import { useBannerContext } from '../../atoms/BaseBanner';

/**
 * Renders the call to action of a Banner Tile.
 *
 * @returns React.ReactElement or null if no text or required props are present
 */

export const BannerTileCTA = (): React.ReactElement | null => {
  const bannerContext = useBannerContext();

  if (!isContextValid(bannerContext)) return null;

  const {
    ctaText = '',
    ctaLink = '',
    ctaLinkTarget,
  } = bannerContext.configuration as BannerTileConfig;

  if (!ctaText || !ctaLink) return null;

  const handlePress = useHandleTilePress(bannerContext, ctaLink, ctaLinkTarget);

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
