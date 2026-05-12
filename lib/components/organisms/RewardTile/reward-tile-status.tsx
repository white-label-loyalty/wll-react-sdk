import React from 'react';
import { RewardTileConfig, StatusVariant } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { Chip } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { useRewardTileStyles } from './styles';

/**
 * Renders availability status for a Reward Tile.
 *
 * @returns React.ReactElement or null if the reward is purchasable
 */

export const RewardTileStatus = (): React.ReactElement | null => {
  const styles = useRewardTileStyles();
  const tileContext = useTileContext();

  if (!isContextValid(tileContext)) return null;

  const {
    stockCapacity,
    stockConsumed,
    outOfStockMessage,
    stockRemainingMessage,
  } = tileContext.configuration as RewardTileConfig;

  const isOutOfStock =
    stockCapacity !== undefined &&
    stockConsumed !== undefined &&
    stockCapacity <= stockConsumed;

  const label = isOutOfStock ? outOfStockMessage : stockRemainingMessage;

  if (!label) return null;

  return (
    <Chip
      label={label}
      role="status"
      ariaLive="off"
      accessibilityLabel={label}
      testID="reward-tile-status"
      variant={StatusVariant.GREY}
      style={styles.statusChip}
    />
  );
};
