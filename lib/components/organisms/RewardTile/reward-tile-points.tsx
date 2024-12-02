import React, { FC } from 'react';
import { View } from 'react-native';
import { RewardTileConfig } from '../../../types/tile';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { useRewardTileStyles } from './styles';

export const RewardTilePoints: FC = () => {
  const styles = useRewardTileStyles();
  const { configuration } = useTileContext();
  const { showPrice, price, pointsMultiplier, pointsPrefix, pointsSuffix } =
    configuration as RewardTileConfig;

  const calculatedPoints =
    price !== undefined ? price * (Number(pointsMultiplier) || 1) : null;

  if (!showPrice || calculatedPoints === null) return null;

  return (
    <Text variant="caption" style={styles.footer}>
      {pointsPrefix}
      <View style={styles.pointsContainer}>
        {calculatedPoints}
        <Text style={styles.suffix}>{pointsSuffix}</Text>
      </View>
    </Text>
  );
};
