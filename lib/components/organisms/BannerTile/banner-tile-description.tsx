import React from 'react';
import { BannerTileConfig } from '../../../types/tile';
import { Text } from '../../atoms';
import { useBannerContext } from '../../atoms/BaseBanner';
import { useBannerTileStyles } from './styles';

/**
 * Renders the description text of a Banner Tile.
 *
 * @returns JSX.Element or null if no description is present
 */
export const BannerTileDescription = (): JSX.Element | null => {
  const styles = useBannerTileStyles();
  const { configuration } = useBannerContext();

  if (!configuration) return null;

  const { description } = configuration as BannerTileConfig;

  if (!description) return null;

  return (
    <Text
      style={styles.description}
      accessibilityRole="text"
      accessibilityLabel={description}
      testID="banner-tile-description"
    >
      {description}
    </Text>
  );
};
