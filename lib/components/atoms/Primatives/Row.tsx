import React from 'react';
import { View } from 'react-native';
import { LayoutProps, alignMap, justifyMap } from '.';

/**
 * A Row layout component that arranges its children in a horizontal stack.
 *
 * @param children - The child components to render inside the row.
 * @param justify - Defines how children are aligned along the main axis (horizontal).
 * @param align - Defines how children are aligned along the cross axis (vertical).
 * @param direction - The flex direction for the row (default is 'row').
 * @param style - Additional styles to apply to the container.
 */
export const Row = ({
  children,
  justify = 'start',
  align = 'center',
  direction = 'row',
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
