import React from 'react';
import { View } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { BadgeTileConfig, BadgeTileType } from '../../../types/tile';
import {
  getReadableTextColor,
  getStateColor,
} from '../../../utils/themeHelpers';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { useBadgeTileStyles } from './styles';

export const BadgeTileDateEarned = (): JSX.Element | null => {
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
  const textColor = getReadableTextColor(backgroundColor);

  if (type === BadgeTileType.Latest && count === 0) {
    return null;
  }

  if (count === 0) {
    return (
      <View style={containerStyle}>
        <Text variant="label" style={{ color: textColor }}>
          {badgeNotEarnedMessage}
        </Text>
      </View>
    );
  }

  const formattedDate = new Date(createdAt).toLocaleDateString();

  return (
    <View style={containerStyle}>
      <Text
        variant="label"
        style={{ color: textColor }}
      >{`${awardedDatePrefix} ${formattedDate}`}</Text>
    </View>
  );
};
