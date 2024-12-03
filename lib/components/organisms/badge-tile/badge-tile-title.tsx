import React, { FC } from 'react';
import { View } from 'react-native';
import { BadgeTileConfig } from '../../../types/tile';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/base-tile';
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
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {displayText}
      </Text>
    </View>
  );
};
