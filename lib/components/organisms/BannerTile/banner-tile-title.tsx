import React from 'react';
import { BannerTileConfig } from '../../../types/tile';
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
  const { configuration } = useBannerContext();

  if (!configuration) return null;

  const { title } = configuration as BannerTileConfig;

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
