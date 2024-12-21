import * as React from 'react';
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native';
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
  justify?: Justify;
  align?: Align;
  direction?: FlexDirection;
  style?: ViewStyle;
} & Omit<ViewProps, 'style'>;

export const Layout = ({
  children,
  justify = 'start',
  align = 'stretch',
  direction = 'column',
  style = {},
  ...rest
}: LayoutProps): JSX.Element => {
  const { theme } = useWllSdk();
  const { isDesktop, isTablet } = useResponsive();
  const dynamicStyles = StyleSheet.create({
    column: {
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
    <View style={[dynamicStyles.column, style]} {...rest}>
      {children}
    </View>
  );
};
