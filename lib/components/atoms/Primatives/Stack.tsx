import React from 'react';
import { View } from 'react-native';
import { alignMap, justifyMap, LayoutProps } from '../../../types/common';

/**
 * A Stack layout component that arranges its children in a flexible stack.
 *
 * @param children - The child components to render inside the stack.
 * @param justify - Defines how children are aligned along the main axis.
 * @param align - Defines how children are aligned along the cross axis.
 * @param direction - The flex direction for the stack (default is 'column').
 * @param style - Additional styles to apply to the container.
 */
export const Stack = ({
  children,
  justify = 'start',
  align = 'stretch',
  direction = 'column',
  style,
}: LayoutProps): JSX.Element => {
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
