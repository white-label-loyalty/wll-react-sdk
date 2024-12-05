import React, { FC } from 'react';
import { View } from 'react-native';
import { BadgeTileConfig } from '../../../types/tile';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { useBadgeTileStyles } from './styles';

export const BadgeTileTitle: FC = () => {
  const styles = useBadgeTileStyles();
  const tile = useTileContext();
  const { configuration } = tile as { configuration: BadgeTileConfig };
  const { count, name, emptyBadgeMessage } = configuration;

  const displayText = count === 0 ? emptyBadgeMessage : name;
  if (!displayText) return null;

  return (
    <View>
      <Text
        variant="title"
        style={styles.titleText}
        numberOfLines={count === 0 ? 2 : 1}
        ellipsizeMode="tail"
      >
        {displayText}
      </Text>
    </View>
  );
};
