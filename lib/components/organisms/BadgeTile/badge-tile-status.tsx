import { LockKeyholeIcon } from 'lucide-react';
import React, { FC } from 'react';
import { View } from 'react-native';
import { BadgeTileConfig, BadgeTileType } from '../../../types/tile';
import { useTileContext } from '../../atoms/BaseTile';
import { useBadgeTileStyles } from './styles';
import { Text } from '../../atoms';

export const BadgeTileStatus: FC = () => {
  const styles = useBadgeTileStyles();
  const tile = useTileContext();
  const { configuration } = tile as { configuration: BadgeTileConfig };
  const { count, type } = configuration;

  if (type !== BadgeTileType.Specific || count === 1) {
    return null;
  }

  return (
    <View style={styles.indicatorContainer}>
      {count === 0 ? (
        <LockKeyholeIcon color="#FFF" size={20} />
      ) : (
        <Text style={styles.countText}>{count}x</Text>
      )}
    </View>
  );
};
