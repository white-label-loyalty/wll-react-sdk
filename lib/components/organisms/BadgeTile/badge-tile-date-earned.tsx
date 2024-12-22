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

  const displayText =
    count === 0
      ? badgeNotEarnedMessage
      : `${awardedDatePrefix} ${new Date(createdAt).toLocaleDateString()}`;

  const accessibilityLabel =
    count === 0
      ? 'Badge not yet earned'
      : `Badge earned on ${new Date(createdAt).toLocaleDateString()}`;

  if (!displayText) return null;

  return (
    <View
      style={containerStyle}
      accessible
      accessibilityRole="text"
      accessibilityLabel={accessibilityLabel}
    >
      <Text
        variant="label"
        style={{ color: textColor }}
        accessibilityElementsHidden={true}
        importantForAccessibility="no-hide-descendants"
      >
        {displayText}
      </Text>
    </View>
  );
};
