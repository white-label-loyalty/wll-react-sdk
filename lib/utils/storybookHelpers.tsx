import * as React from 'react';
import { View, ViewStyle } from 'react-native';

export const TileWrapper: React.FC<{
  isHalfTile?: boolean;
  children: React.ReactNode;
}> = ({ isHalfTile, children }) => {
  const wrapperStyle: ViewStyle = {
    height: isHalfTile ? 125 : '100%',
    padding: 8,
  };

  return <View style={wrapperStyle}>{children}</View>;
};
