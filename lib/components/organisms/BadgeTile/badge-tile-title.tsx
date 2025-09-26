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
 * @returns React.ReactElement or null if name is not present
 */

export const BadgeTileTitle = (): React.ReactElement | null => {
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
