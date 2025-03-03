import React from 'react';
import { RewardCategoryTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { ProgressiveImage } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { useRewardCategoryTileStyles } from './styles';

/**
 * Renders the background media for a Reward Category Tile.
 *
 * @returns JSX.Element or null if no artwork URL is present
 */

export const RewardCategoryMedia = (): JSX.Element | null => {
  const styles = useRewardCategoryTileStyles();

  const tileContext = useTileContext();

  if (!isContextValid(tileContext)) return null;

  const { artworkUrl, name = 'Reward' } =
    tileContext.configuration as RewardCategoryTileConfig;

  if (!artworkUrl) return null;

  return (
    <ProgressiveImage
      testID="reward-category-media"
      source={{ uri: artworkUrl }}
      style={styles.background}
      alt={`Reward category image for ${name}`}
      accessibilityRole="image"
    />
  );
};
