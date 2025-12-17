import React from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';
import { IS_WEB } from '../../../constants/device';

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
  const isRTL =
    IS_WEB &&
    typeof document !== 'undefined' &&
    document.documentElement.dir === 'rtl';

  return (
    <View
      style={[
        {
          flex: 1,
          // If the language is Arabic (RTL), use 'rtl', otherwise 'ltr'.
          direction: isRTL ? 'rtl' : 'ltr',
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
};
