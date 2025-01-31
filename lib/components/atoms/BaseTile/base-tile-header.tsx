import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { useTileContext } from '.';
import { useTileSize } from '../../../hooks/useTileSize';
import { ContentTileConfig } from '../../../types/tile';
import { useBaseTileStyles } from './styles';

export const BaseTileHeader = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element | null => {
  const tile = useTileContext();
  const { artworkUrl } = tile.configuration as ContentTileConfig;
  const { isHalfSize } = useTileSize(tile);

  // For half tiles with an image, don't show header
  if (isHalfSize && artworkUrl) return null;

  const dynamicStyles = useBaseTileStyles();

  return (
    <View
      style={[
        dynamicStyles.header,
        {
          marginTop: isHalfSize ? 0 : dynamicStyles.header.marginTop,
          // @ts-ignore
          textAlign: isHalfSize && 'center',
        },
      ]}
      numberOfLines={1}
      testID="tile-header"
    >
      {children}
    </View>
  );
};
