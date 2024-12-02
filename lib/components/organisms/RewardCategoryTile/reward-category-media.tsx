import React, { FC } from 'react';
import { RewardCategoryTileConfig } from '../../../types/tile';
import { ProgressiveImage } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { useRewardCategoryTileStyles } from './styles';

export const RewardCategoryMedia: FC = () => {
  const styles = useRewardCategoryTileStyles();
  const { configuration } = useTileContext();
  const { artworkUrl } = configuration as RewardCategoryTileConfig;

  if (!artworkUrl) return null;

  return (
    <ProgressiveImage source={{ uri: artworkUrl }} style={styles.background} />
  );
};
