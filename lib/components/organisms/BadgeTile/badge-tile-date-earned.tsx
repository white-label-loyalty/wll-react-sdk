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

/**
 * Renders the date earned for a Badge Tile.
 *
 * @returns JSX.Element or null if badge is not earned or badgeNotEarnedMessage exists
 */
export const BadgeTileDateEarned = (): JSX.Element | null => {
  const styles = useBadgeTileStyles();
  const tileContext = useTileContext();
  const { theme } = useWllSdk();

  if (!tileContext || !tileContext.configuration) return null;

  const { count, awardedDatePrefix, createdAt, badgeNotEarnedMessage, type } =
    tileContext.configuration as BadgeTileConfig;

  // Don't show for Latest type with count=0
  if (type === BadgeTileType.Latest && count === 0) {
    return null;
  }

  // For Specific type, only show if count > 0 or badgeNotEarnedMessage exists
  if (
    type === BadgeTileType.Specific &&
    count === 0 &&
    !badgeNotEarnedMessage
  ) {
    return null;
  }

  const backgroundColor = getStateColor(
    theme.alphaDerivedPrimary[20],
    type,
    count
  );
  const containerStyle = [styles.dateEarnedContainer, { backgroundColor }];
  const textColor = getReadableTextColor(backgroundColor);

  const displayText =
    count === 0
      ? badgeNotEarnedMessage
      : `${awardedDatePrefix} ${new Date(createdAt).toLocaleDateString()}`;

  const accessibilityLabel =
    count === 0
      ? 'Badge not yet earned'
      : `Badge earned on ${new Date(createdAt).toLocaleDateString()}`;

  return (
    <View
      style={containerStyle}
      accessible
      accessibilityLabel={accessibilityLabel}
      testID="badge-tile-date-earned"
    >
      <Text
        variant="label"
        style={[styles.dateEarnedText, { color: textColor }]}
        numberOfLines={1}
        ellipsizeMode="tail"
        accessibilityElementsHidden={true}
        importantForAccessibility="no-hide-descendants"
      >
        {displayText}
      </Text>
    </View>
  );
};
