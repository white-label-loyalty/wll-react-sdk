import React from 'react';
import { BannerTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { Text } from '../../atoms';
import { useBannerContext } from '../../atoms/BaseBanner';
import { useBannerTileStyles } from './styles';

/**
 * Renders the title of a Banner Tile.
 *
 * @returns JSX.Element or null if no title is present
 */
export const BannerTileTitle = (): JSX.Element | null => {
  const styles = useBannerTileStyles();
  const bannerContext = useBannerContext();

  if (!isContextValid(bannerContext)) return null;

  const { title } = bannerContext.configuration as BannerTileConfig;

  if (!title) return null;

  return (
    <Text
      variant="title"
      testID="banner-tile-title"
      style={styles.title}
      accessibilityRole="header"
      accessibilityLabel={title}
    >
      {title}
    </Text>
  );
};
