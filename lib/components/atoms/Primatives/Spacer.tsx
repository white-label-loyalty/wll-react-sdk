import React from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';

/**
 * Props for the Spacer component.
 *
 * @param style - Optional custom styles to apply to the spacer.
 */
type SpacerProps = {
  style?: ViewStyle;
} & Omit<ViewProps, 'style'>;

/**
 * A simple Spacer component that creates flexible space in layouts.
 *
 * The Spacer is commonly used in flexbox layouts to create adjustable empty space
 * between child elements, avoiding the need for explicit margins or padding.
 */
export const Spacer = ({ style, ...rest }: SpacerProps): JSX.Element => {
  return <View style={[{ flex: 1 }, style]} {...rest} />;
};
