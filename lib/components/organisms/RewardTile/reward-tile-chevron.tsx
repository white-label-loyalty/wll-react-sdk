import React from 'react';
import { useWllSdk } from '../../../context/WllSdkContext';
import { Icon } from '../../atoms';

/**
 * Renders a chevron icon for a Reward Tile.
 *
 * @returns JSX.Element
 */

export const RewardTileChevron = (): JSX.Element => {
  const { theme } = useWllSdk();

  return (
    <Icon
      name="ChevronRight"
      color={theme?.derivedSurfaceText?.[20] || '#000000'}
      accessibilityRole="image"
      accessibilityLabel="View reward details"
    />
  );
};
