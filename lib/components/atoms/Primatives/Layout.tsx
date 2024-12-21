import * as React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useResponsive } from '../../../hooks/useResponsive';
import {
  Align,
  alignMap,
  FlexDirection,
  Justify,
  justifyMap,
} from '../../../types/common';
import { useResponsiveValue } from '../../../utils/responsiveHelper';

type LayoutProps = {
  children: React.ReactNode;
  direction?: FlexDirection;
  justify?: Justify;
  align?: Align;
  style?: ViewProps['style'];
} & Omit<ViewProps, 'style'>;

/**
 * A primitive Layout component that provides flexible layout options.
 * @param direction - The direction of the layout (column or row)
 * @param justify - The justify content of the layout
 * @param align - The align items of the layout
 * @param style - Additional styles to apply to the layout
 * @param children - The child components to render inside the layout
 * @returns The rendered Layout component with special paddings
 */
export const Layout = ({
  children,
  direction = 'column',
  justify = 'start',
  align = 'start',
  style = {},
  ...rest
}: LayoutProps): JSX.Element => {
  const { theme } = useWllSdk();
  const { isDesktop, isTablet } = useResponsive();
  const dynamicStyles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: useResponsiveValue(
        theme.sizes.sm,
        theme.sizes.xxs,
        isDesktop,
        isTablet
      ),
      paddingBottom: useResponsiveValue(
        theme.sizes.sm,
        theme.sizes.xxs,
        isDesktop,
        isTablet
      ),
      justifyContent: justifyMap[justify],
      alignItems: alignMap[align],
      flexDirection: direction,
    },
  });
  return (
    <View style={[dynamicStyles.container, style]} {...rest}>
      {children}
    </View>
  );
};
