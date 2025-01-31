import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { useTileContext } from '.';
import { useTileSize } from '../../../hooks/useTileSize';
import { ContentTileConfig } from '../../../types/tile';
import { baseStyles } from './styles';

export const BaseTileContent = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element | null => {
  const tile = useTileContext();
  const { artworkUrl } = tile.configuration as ContentTileConfig;
  const { isHalfSize } = useTileSize(tile);

  // For half tiles with an image, don't show other content
  if (isHalfSize && artworkUrl) return null;

  return (
    <View
      testID="tile-content"
      style={[
        baseStyles.content,
        {
          justifyContent: 'center',
          height: !artworkUrl ? '100%' : undefined,
        },
      ]}
    >
      {children}
    </View>
  );
};
