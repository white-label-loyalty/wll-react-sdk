import React, { FC } from 'react';
import { View } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { BadgeTileConfig, BadgeTileType } from '../../../types/tile';
import { getStateColor } from '../../../utils/themeHelpers';
import { useTileContext } from '../../atoms/BaseTile';
import { useBadgeTileStyles } from './styles';
import { Text } from '../../atoms';

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
