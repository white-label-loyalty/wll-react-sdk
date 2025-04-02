import React from 'react';
import { View } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { BadgeTileConfig, BadgeTileType } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import {
  getReadableTextColor,
  getStateColor,
} from '../../../utils/themeHelpers';
import { transformLocale } from '../../../utils/transforms';
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
  const { theme, config } = useWllSdk();

  if (!isContextValid(tileContext)) return null;

  const {
    count,
    awardedDatePrefix,
    lastEarnedAt,
    badgeNotEarnedMessage,
    type,
  } = tileContext.configuration as BadgeTileConfig;

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

  const handleLastEarnedDate = (date?: string) => {
    if (!date) return;
    const locale = transformLocale(config.locale ?? 'en');
    return new Date(date).toLocaleDateString(locale);
  };

  const displayText =
    count === 0
      ? badgeNotEarnedMessage
      : `${awardedDatePrefix} ${handleLastEarnedDate(lastEarnedAt)}`;

  const accessibilityLabel =
    count === 0
      ? 'Badge not yet earned'
      : `Badge earned on ${handleLastEarnedDate(lastEarnedAt)}`;

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
