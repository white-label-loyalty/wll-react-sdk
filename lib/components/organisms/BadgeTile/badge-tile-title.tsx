import React from 'react';
import { View } from 'react-native';
import { BadgeTileConfig, BadgeTileType } from '../../../types/tile';
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
  const tile = useTileContext();
  const { configuration } = tile as { configuration: BadgeTileConfig };
  const { count, name, emptyBadgeMessage, type } = configuration;

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
