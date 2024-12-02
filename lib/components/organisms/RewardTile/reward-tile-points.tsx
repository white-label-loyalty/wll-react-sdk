import React, { FC } from 'react';
import { View } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { RewardTileConfig } from '../../../types/tile';
import { useTileContext } from '../../atoms/BaseTile';
import { useRewardTileStyles } from './styles';
import { Text } from '../../atoms';

export const RewardTilePoints: FC = () => {
  const styles = useRewardTileStyles();
  const { configuration } = useTileContext();
  const { theme } = useWllSdk();
  const reward = configuration as RewardTileConfig;

  const calculatedPoints =
    reward?.price !== undefined
      ? reward.price * (Number(reward.pointsMultiplier) || 1)
      : null;

  if (reward?.price === 0 || !reward.showPrice || calculatedPoints === null) {
    return null;
  }

  return (
    <Text variant="caption" style={styles.footer}>
      {reward.pointsPrefix}
      <View style={styles.pointsContainer}>
        {calculatedPoints}
        <Text style={[styles.suffix, { color: theme.primary }]}>
          {reward.pointsSuffix}
        </Text>
      </View>
    </Text>
  );
};
