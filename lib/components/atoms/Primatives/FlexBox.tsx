import React from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';

/**
 * Props for the FlexBox component.
 *
 * @param children - The child components to render inside the flex container.
 * @param style - Optional custom styles to apply to the container.
 */
type FlexBoxProps = {
  children: React.ReactNode;
  style?: ViewStyle;
} & Omit<ViewProps, 'style'>;

/**
 * A FlexBox component that provides a flexible container with `flex: 1`.
 *
 * This component is commonly used to create a full-flex container that expands
 * to fill available space in a layout.
 */
export const FlexBox = ({
  children,
  style,
  ...rest
}: FlexBoxProps): JSX.Element => {
  return (
    <View style={[{ flex: 1 }, style]} {...rest}>
      {children}
    </View>
  );
};
