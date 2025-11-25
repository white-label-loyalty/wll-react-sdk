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
    height: isHalfTile ? 150 : '100%',
    padding: 8,
  };

  return <View style={{ ...wrapperStyle, ...containerStyle }}>{children}</View>;
};
