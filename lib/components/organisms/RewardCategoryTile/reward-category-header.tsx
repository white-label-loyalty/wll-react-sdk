import React from 'react';
import { View } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { RewardCategoryTileConfig } from '../../../types/tile';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { useRewardCategoryTileStyles } from './styles';

export const RewardCategoryHeader = (): JSX.Element | null => {
  const styles = useRewardCategoryTileStyles();
  const { theme } = useWllSdk();
  const { configuration } = useTileContext();
  const { showName, name } = configuration as RewardCategoryTileConfig;

  if (!showName || !name) return null;

  return (
    <View style={[styles.header, { backgroundColor: theme.primary }]}>
      <Text
        style={[styles.headerText, { color: theme.primaryText }]}
        ellipsizeMode="tail"
        numberOfLines={1}
      >
        {name}
      </Text>
    </View>
  );
};
