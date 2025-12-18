import React from 'react';
import { View } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { RewardCategoryTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { useRewardCategoryTileStyles } from './styles';

/**
 * Renders the header for a Reward Category Tile.
 *
 * @returns React.ReactElement or null if showName is false or name is not present
 */

export const RewardCategoryHeader = (): React.ReactElement | null => {
  const tileContext = useTileContext();
  const styles = useRewardCategoryTileStyles();
  const { theme } = useWllSdk();

  if (!isContextValid(tileContext)) return null;

  const { showName = true, name = '' } =
    tileContext.configuration as RewardCategoryTileConfig;

  if (!showName || !name) return null;

  return (
    <View
      style={[styles.header, { backgroundColor: theme.primary }]}
      testID="reward-category-header"
      role="heading"
      accessibilityLabel={`Reward category: ${name}`}
    >
      <Text
        style={[styles.headerText, { color: theme.primaryText }]}
        ellipsizeMode="tail"
        numberOfLines={1}
      >
        {name}
      </Text>
    </View>
  );
};
