import * as React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useResponsive } from '../../../hooks/useResponsive';
import { useResponsiveValue } from '../../../utils/responsiveHelper';

type Justify = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
type Align = 'start' | 'end' | 'center' | 'stretch';

type ColumnProps = {
  children: React.ReactNode;
  justify?: Justify;
  align?: Align;
  direction?: FlexDirection;
  style?: ViewStyle;
};

type FlexDirection = 'column' | 'row' | 'column-reverse' | 'row-reverse';

const justifyMap = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
} as const;

const alignMap = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  stretch: 'stretch',
} as const;

const Column: React.FC<ColumnProps> = ({
  children,
  justify = 'start',
  align = 'stretch',
  direction = 'column',
  style = {},
}) => {
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
  return <View style={[dynamicStyles.column, style]}>{children}</View>;
};

export default Column;
