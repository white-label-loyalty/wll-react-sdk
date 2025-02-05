import React from 'react';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useTileSize } from '../../../hooks/useTileSize';
import { ContentTileConfig } from '../../../types/tile';
import Icon from '../Icon';
import Text from '../Text';
import { useTileContext } from './index';

export const BaseTileTitle = (): JSX.Element | null => {
  const tile = useTileContext();
  const { theme } = useWllSdk();
  const { title, ctaLink, artworkUrl } =
    tile.configuration as ContentTileConfig;
  const { isHalfSize } = useTileSize(tile);

  // Don't show title for half tiles with image
  if ((isHalfSize && artworkUrl) || !title) return null;

  return (
    <>
      <Text
        variant="title"
        accessibilityLabel={title}
        numberOfLines={1}
        testID="tile-title"
      >
        {title}
      </Text>
      {ctaLink && (
        <Icon name="ChevronRight" color={theme.derivedSurfaceText[20]} />
      )}
    </>
  );
};
