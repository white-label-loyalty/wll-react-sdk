import React from 'react';
import { IS_MOBILE } from '../../../constants/device';
import { useWllSdk } from '../../../context/WllSdkContext';
import { Icon } from '../../atoms';

/**
 * Renders a chevron icon for a Campaign Tile.
 *
 * @returns React.ReactElement
 */

export const CampaignTileChevron = (): React.ReactElement => {
  const { theme } = useWllSdk();

  return (
    <Icon
      name="ChevronRight"
      size={IS_MOBILE ? 16 : undefined}
      color={theme?.derivedSurfaceText?.[20] || '#000000'}
      role="img"
      accessibilityLabel="View Campaign details"
    />
  );
};
