import React from 'react';
import { I18nManager } from 'react-native';
import { View, ViewProps, ViewStyle } from 'react-native';

/**
 * Props for the FullFlex component.
 *
 * @param children - The child components to render inside the flex container.
 * @param style - Optional custom styles to apply to the container.
 */
type FullFlexProps = {
  children: React.ReactNode;
  style?: ViewStyle;
} & Omit<ViewProps, 'style'>;

/**
 * A FullFlex component that provides a flexible container with `flex: 1`.
 *
 * This component is commonly used to create a full-flex container that expands
 * to fill available space in a layout.
 */
export const FullFlex = ({
  children,
  style,
  ...rest
}: FullFlexProps): React.ReactElement => {
  return (
    <View
      style={[
        {
          flex: 1,
          // Set layout direction based on current locale.
          // If the language is Arabic (RTL), use 'rtl', otherwise 'ltr'.
          direction: I18nManager.isRTL ? 'rtl' : 'ltr',
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
};
