import React, { memo } from 'react';
import { View, ViewStyle } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useResponsive } from '../../../hooks/useResponsive';
import { useResponsiveValue } from '../../../utils/responsiveHelper';
import { Align, alignMap, Justify, justifyMap } from './index';

export type FlexProps = {
  justify?: Justify;
  align?: Align;
  style?: ViewStyle;
};

export type ColumnLayoutProps = FlexProps & {
  children?: React.ReactNode;
};

/**
 * A Column layout component that arranges its children in a vertical stack.
 *
 * @param children - The child components to render inside the column.
 * @param justify - Defines how children are aligned along the main axis.
 * @param align - Defines how children are aligned along the cross axis.
 * @param style - Additional styles to apply to the container.
 */
export const Column = memo(
  ({
    children,
    justify = 'start',
    align = 'stretch',
    style,
  }: ColumnLayoutProps): JSX.Element => {
    const { isDesktop, isTablet } = useResponsive();
    const { theme } = useWllSdk();
    const spacing = useResponsiveValue(
      theme?.sizes?.sm,
      theme?.sizes?.xxxs,
      isDesktop,
      isTablet
    );

    return (
      <View
        style={[
          {
            flex: 1,
            flexDirection: 'column',
            justifyContent: justifyMap[justify],
            alignItems: alignMap[align],
            paddingHorizontal: spacing,
            paddingBottom: spacing,
          },
          style,
        ]}
      >
        {children}
      </View>
    );
  }
);
