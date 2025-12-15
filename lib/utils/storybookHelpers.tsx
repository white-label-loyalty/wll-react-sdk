import * as React from 'react';
import { View, ViewStyle } from 'react-native';

export const TileWrapper = ({
  isHalfTile,
  containerStyle,
  children,
}: {
  isHalfTile?: boolean;
  containerStyle?: ViewStyle;
  children: React.ReactNode;
}): React.ReactElement => {
  const wrapperStyle: ViewStyle = {
    maxWidth: 280,
    // Let stories naturally grow to fit content; use fixed height only for half tiles
    // Use undefined rather than 'auto' to avoid RN type issues while allowing natural height
    height: isHalfTile ? 150 : undefined,
    padding: 8,
  };

  return <View style={{ ...wrapperStyle, ...containerStyle }}>{children}</View>;
};
