import React from 'react';
import { View } from 'react-native';
import { BannerTileConfig } from '../../../types/tile';
import { Text } from '../../atoms';
import { useBannerContext } from '../../atoms/BaseBanner';
import { useBannerTileStyles } from './styles';

export const BannerTileTitle = (): JSX.Element | null => {
  const styles = useBannerTileStyles();
  const { configuration } = useBannerContext();
  const { title } = configuration as BannerTileConfig;

  if (!title) return null;
  return (
    <View
      accessible
      accessibilityRole="header"
      accessibilityLabel={title}
    >
      <Text 
        variant="title" 
        style={styles.title}
        accessibilityElementsHidden={true}
        importantForAccessibility="no-hide-descendants"
      >
        {title}
      </Text>
    </View>
  );
};
