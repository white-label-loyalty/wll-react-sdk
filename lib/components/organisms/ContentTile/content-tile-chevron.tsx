import React from 'react';
import { IS_MOBILE } from '../../../constants/device';
import { useWllSdk } from '../../../context/WllSdkContext';
import { ContentTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { Icon } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';

export const ContentTileChevron = (): JSX.Element | null => {
  const tileContext = useTileContext();
  const sdk = useWllSdk();

  if (!isContextValid(tileContext)) return null;

  const { ctaLink, title } = tileContext.configuration as ContentTileConfig;

  if (!ctaLink || !title) return null;

  return (
    <Icon
      name="ChevronRight"
      size={IS_MOBILE ? 16 : undefined}
      color={sdk.theme?.derivedSurfaceText?.[20]}
      accessibilityLabel="View details"
      testID="content-tile-chevron"
    />
  );
};
