import React from 'react';
import { View } from 'react-native';
import { BadgeTileConfig, BadgeTileType } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';

/**
 * Renders the description for a Badge Tile.
 *
 * @returns JSX.Element or null if description is not present
 */

export const BadgeTileDescription = (): JSX.Element | null => {
  const tileContext = useTileContext();

  if (!isContextValid(tileContext)) return null;

  const { count, description, type } =
    tileContext.configuration as BadgeTileConfig;

  if (!description) return null;

  // For Latest type, hide description when count = 0
  // For Specific type, always show description
  if (count === 0 && type === BadgeTileType.Latest) return null;

  return (
    <View
      accessible
      accessibilityLabel={`Badge description: ${description}`}
      testID="badge-tile-description"
    >
      <Text
        variant="body"
        numberOfLines={2}
        ellipsizeMode="tail"
        accessibilityElementsHidden={true}
        importantForAccessibility="no-hide-descendants"
      >
        {description}
      </Text>
    </View>
  );
};
