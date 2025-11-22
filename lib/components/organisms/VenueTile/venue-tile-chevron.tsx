import React from 'react';
import { IS_MOBILE } from '../../../constants/device';
import { useWllSdk } from '../../../context/WllSdkContext';
import { Icon } from '../../atoms';

/**
 * Renders a chevron icon for a Venue Tile.
 *
 * @returns React.ReactElement
 */

export const VenueTileChevron = (): React.ReactElement => {
  const { theme } = useWllSdk();

  return (
    <Icon
      name="ChevronRight"
      size={IS_MOBILE ? 16 : undefined}
      color={theme?.derivedSurfaceText?.[20] || '#000000'}
      role="img"
      accessibilityLabel="View venue details"
    />
  );
};
