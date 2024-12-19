import React from 'react';
import { View, ViewStyle } from 'react-native';

/**
 * Props for the FlexBox component.
 *
 * @param children - The child components to render inside the flex container.
 * @param style - Optional custom styles to apply to the container.
 */
type FlexBoxProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

/**
 * A FlexBox component that provides a flexible container with `flex: 1`.
 *
 * This component is commonly used to create a full-flex container that expands
 * to fill available space in a layout.
 */
export const FlexBox = ({ children, style }: FlexBoxProps): JSX.Element => {
  return <View style={[{ flex: 1 }, style]}>{children}</View>;
};
