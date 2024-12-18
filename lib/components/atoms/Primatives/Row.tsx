import React, { FC } from 'react';
import { View } from 'react-native';
import { LayoutProps, alignMap, justifyMap } from '.';

export const Row: FC<LayoutProps> = ({
  children,
  justify = 'start',
  align = 'center',
  direction = 'row',
  style,
}) => {
  return (
    <View
      style={[
        {
          flexDirection: direction,
          justifyContent: justifyMap[justify],
          alignItems: alignMap[align],
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};
