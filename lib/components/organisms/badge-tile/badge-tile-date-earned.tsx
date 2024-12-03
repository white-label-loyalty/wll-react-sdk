import React, { FC } from 'react';
import { View } from 'react-native';
import { useWllSdk } from '../../../context/wll-sdk-context';
import { BadgeTileConfig, BadgeTileType } from '../../../types/tile';
import { getStateColor } from '../../../utils/theme-helpers';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/base-tile';
import { useBadgeTileStyles } from './styles';

export const BadgeTileDateEarned: FC = () => {
  const styles = useBadgeTileStyles();
  const tile = useTileContext();
  const { configuration } = tile as { configuration: BadgeTileConfig };
  const { type, count, awardedDatePrefix, createdAt, badgeNotEarnedMessage } =
    configuration;
  const { theme } = useWllSdk();

  const backgroundColor = getStateColor(
    theme.alphaDerivedPrimary[20],
    type,
    count
  );
  const containerStyle = [styles.dateEarnedContainer, { backgroundColor }];

  if (type === BadgeTileType.Latest && count === 0) {
    return null;
  }

  if (count === 0) {
    return (
      <View style={containerStyle}>
        <Text variant="label">{badgeNotEarnedMessage}</Text>
      </View>
    );
  }

  const formattedDate = new Date(createdAt).toLocaleDateString();

  return (
    <View style={containerStyle}>
      <Text variant="label">{`${awardedDatePrefix} ${formattedDate}`}</Text>
    </View>
  );
};
