import React from 'react';
import { View } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { Icon } from '../../atoms';

export const RewardTileChevron = (): JSX.Element => {
  const { theme } = useWllSdk();
  return (
    <View
      accessible
      accessibilityRole="image"
      accessibilityLabel="View reward details"
      importantForAccessibility="yes"
    >
      <Icon name="ChevronRight" color={theme.derivedSurfaceText[20]} />
    </View>
  );
};
