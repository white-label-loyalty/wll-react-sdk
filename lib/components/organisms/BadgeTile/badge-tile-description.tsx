import React, { useMemo } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { BadgeTileConfig, BadgeTileType } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { useWllSdk } from '../../../context/WllSdkContext';

/**
 * Renders the description for a Badge Tile.
 *
 * @returns React.ReactElement or null if description is not present
 */

export const BadgeTileDescription = (): React.ReactElement | null => {
  const tileContext = useTileContext();
  const width = useWindowDimensions().width;
  const { theme } = useWllSdk();

  if (!isContextValid(tileContext)) return null;

  const { count, description, type } =
    tileContext.configuration as BadgeTileConfig;

  if (!description) return null;

  // For Latest type, hide description when count = 0
  // For Specific type, always show description
  if (count === 0 && type === BadgeTileType.Latest) return null;

  const numberOfLines = useMemo(() => {
    if (width <= 480) return 2;
    if (width <= 768) return 3;
    if (width <= 1024) return 1;
    return 2;
  }, [width]);

  return (
    <View
      accessible
      accessibilityLabel={`Badge description: ${description}`}
      testID="badge-tile-description"
      style={{
        width: '100%',
        overflow: 'hidden',
        paddingBottom: theme.sizes.xxs,
      }}
    >
      <Text
        variant="body"
        numberOfLines={numberOfLines}
        ellipsizeMode="tail"
        accessibilityElementsHidden={true}
        importantForAccessibility="no-hide-descendants"
      >
        {description}
      </Text>
    </View>
  );
};
