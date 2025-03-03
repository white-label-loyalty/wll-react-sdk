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
 * @returns JSX.Element or null if showName is false or name is not present
 */
export const RewardCategoryHeader = (): JSX.Element | null => {
  const styles = useRewardCategoryTileStyles();
  const { theme } = useWllSdk();

  const tileContext = useTileContext();

  if (!isContextValid(tileContext)) return null;

  const { showName = true, name = '' } =
    tileContext.configuration as RewardCategoryTileConfig;

  if (!showName || !name) return null;

  return (
    <View
      style={[styles.header, { backgroundColor: theme.primary }]}
      testID="reward-category-header"
      accessibilityRole="header"
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
