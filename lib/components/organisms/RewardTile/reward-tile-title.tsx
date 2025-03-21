import React from 'react';
import { IS_MOBILE } from '../../../constants/device';
import { RewardTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { useRewardTileStyles } from './styles';

/**
 * Renders the title of a Reward Tile.
 *
 * @returns JSX.Element or null if no name is present
 */

export const RewardTileTitle = (): JSX.Element | null => {
  const tileContext = useTileContext();
  const styles = useRewardTileStyles();

  if (!isContextValid(tileContext)) return null;

  const { name } = tileContext.configuration as RewardTileConfig;

  if (!name) return null;

  const handleTitleWidth = () => {
    if (IS_MOBILE) {
      return styles.titleWithLink;
    }
  };

  return (
    <Text
      variant="title"
      ellipsizeMode="tail"
      numberOfLines={1}
      accessibilityRole="header"
      accessibilityLabel={`Reward title: ${name}`}
      testID="reward-tile-title"
      style={handleTitleWidth()}
    >
      {name}
    </Text>
  );
};
