import * as React from 'react';
import { View, ViewStyle } from 'react-native';

export const TileWrapper = ({
  isHalfTile,
  children,
}: {
  isHalfTile?: boolean;
  children: React.ReactNode;
}): JSX.Element => {
  const wrapperStyle: ViewStyle = {
    maxWidth: 280,
    height: isHalfTile ? 150 : '100%',
    padding: 8,
  };

  return <View style={wrapperStyle}>{children}</View>;
};
