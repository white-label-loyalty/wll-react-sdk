import React, { FC } from 'react';
import { BannerTileConfig } from '../../../types/tile';
import { Text } from '../../atoms';
import { useBannerContext } from '../../atoms/BaseBanner';
import { useBannerTileStyles } from './styles';

export const BannerTileTitle: FC = () => {
  const styles = useBannerTileStyles();
  const { configuration } = useBannerContext();
  const { title } = configuration as BannerTileConfig;

  if (!title) return null;
  return (
    <Text variant="title" style={styles.title}>
      {title}
    </Text>
  );
};
