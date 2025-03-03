import React from 'react';
import { View } from 'react-native';
import { BadgeTileConfig, BadgeTileType } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { useBadgeTileStyles } from './styles';

/**
 * Renders the title for a Badge Tile.
 *
 * @returns JSX.Element or null if name is not present
 */
export const BadgeTileTitle = (): JSX.Element | null => {
  const styles = useBadgeTileStyles();
  const tileContext = useTileContext();

  if (!isContextValid(tileContext)) return null;

  const { count, name, emptyBadgeMessage, type } =
    tileContext.configuration as BadgeTileConfig;

  const displayText =
    type === BadgeTileType.Specific
      ? name
      : count === 0
        ? emptyBadgeMessage
        : name;

  if (!displayText) return null;

  return (
    <View
      accessible
      accessibilityLabel={`Badge title: ${displayText}`}
      testID="badge-tile-title"
    >
      <Text
        variant="title"
        style={styles.titleText}
        numberOfLines={count === 0 ? 2 : 1}
        ellipsizeMode="tail"
        accessibilityElementsHidden={true}
        importantForAccessibility="no-hide-descendants"
      >
        {displayText}
      </Text>
    </View>
  );
};
