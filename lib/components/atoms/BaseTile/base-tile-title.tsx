import React from 'react';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useTileSize } from '../../../hooks/useTileSize';
import { SafeConfig } from '../../../types/helpers';
import { ContentTileConfig } from '../../../types/tile';
import Icon from '../Icon';
import Text from '../Text';
import { useTileContext } from './index';

type SafeTileConfig = SafeConfig<ContentTileConfig, 'title' | 'artworkUrl'>;

/**
 * Renders the title of a BaseTile component.
 *
 * @returns {React.ReactElement|null} The rendered title or null if conditions for display are not met
 */

export const BaseTileTitle = (): React.ReactElement | null => {
  const tileContext = useTileContext();
  const sdk = useWllSdk();

  if (!tileContext || !tileContext.configuration || !sdk) return null;

  const config = tileContext.configuration as SafeTileConfig;

  const { title, ctaLink = '', artworkUrl } = config;

  const sizeInfo = useTileSize(tileContext);
  if (!sizeInfo) return null;

  const { isHalfSize } = sizeInfo;

  // Don't show title for half tiles with image
  if ((isHalfSize && artworkUrl) || !title) return null;

  return (
    <>
      <Text
        variant="title"
        role="heading"
        accessibilityLabel={title}
        numberOfLines={1}
        testID="tile-title"
      >
        {title}
      </Text>
      {ctaLink && (
        <Icon
          name="ChevronRight"
          color={sdk.theme?.derivedSurfaceText?.[20]}
          accessibilityLabel="View details"
        />
      )}
    </>
  );
};
