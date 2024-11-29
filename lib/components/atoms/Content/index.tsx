import * as React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
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
  const { isDesktop, isTablet } = useResponsive();
  const dynamicStyles = StyleSheet.create({
    column: {
      flex: 1,
      paddingHorizontal: useResponsiveValue(12, 8, isDesktop, isTablet),
      paddingBottom: useResponsiveValue(12, 8, isDesktop, isTablet),
      justifyContent: justifyMap[justify],
      alignItems: alignMap[align],
      flexDirection: direction,
    },
  });
  return <View style={[dynamicStyles.column, style]}>{children}</View>;
};

export default Column;
