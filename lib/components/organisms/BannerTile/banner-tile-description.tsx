import React from 'react';
import { useWllSdk } from '../../../context/WllSdkContext';
import { BannerTileConfig } from '../../../types/tile';
import { Text } from '../../atoms';
import { useBannerContext } from '../../atoms/BaseBanner';
import { useBannerTileStyles } from './styles';

export const BannerTileDescription = (): JSX.Element | null => {
  const styles = useBannerTileStyles();
  const { configuration } = useBannerContext();
  const { description } = configuration as BannerTileConfig;
  const { theme } = useWllSdk();

  if (!description) return null;
  return (
    <Text
      style={[
        styles.description,
        {
          color: theme.derivedSurfaceText[20],
        },
      ]}
    >
      {description}
    </Text>
  );
};
