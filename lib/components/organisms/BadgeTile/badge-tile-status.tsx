import React from 'react';
import { View } from 'react-native';
import { BadgeTileConfig, BadgeTileType } from '../../../types/tile';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import Icon from '../../atoms/Icon';
import { useBadgeTileStyles } from './styles';

/**
 * Renders the status for a Badge Tile.
 *
 * @returns JSX.Element or null if badge is not earned or badgeNotEarnedMessage exists
 */
export const BadgeTileStatus = (): JSX.Element | null => {
  const styles = useBadgeTileStyles();
  const tile = useTileContext();
  const { configuration } = tile as { configuration: BadgeTileConfig };
  const { count, type } = configuration;

  if (type !== BadgeTileType.Specific || count === 1) {
    return null;
  }

  const isLocked = count === 0;
  const statusLabel = isLocked ? 'Badge locked' : `Earned ${count} times`;

  return (
    <View
      style={styles.indicatorContainer}
      accessible
      accessibilityLabel={statusLabel}
      testID="badge-tile-status"
    >
      {isLocked ? (
        <Icon
          name="LockKeyhole"
          testID="badge-tile-status-locked"
          color="#FFF"
          size={20}
          accessibilityElementsHidden={true}
        />
      ) : (
        <Text
          style={styles.countText}
          accessibilityElementsHidden={true}
          importantForAccessibility="no-hide-descendants"
        >
          {count}x
        </Text>
      )}
    </View>
  );
};
