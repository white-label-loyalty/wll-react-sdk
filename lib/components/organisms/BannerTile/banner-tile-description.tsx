import React from 'react';
import { BannerTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { Text } from '../../atoms';
import { useBannerContext } from '../../atoms/BaseBanner';
import { useBannerTileStyles } from './styles';

/**
 * Renders the description text of a Banner Tile.
 *
 * @returns React.ReactElement or null if no description is present
 */

export const BannerTileDescription = (): React.ReactElement | null => {
  const styles = useBannerTileStyles();
  const bannerContext = useBannerContext();

  if (!isContextValid(bannerContext)) return null;

  const { description } = bannerContext.configuration as BannerTileConfig;

  if (!description) return null;

  return (
    <Text
      style={styles.description}
      role="article"
      testID="banner-tile-description"
    >
      {description}
    </Text>
  );
};
