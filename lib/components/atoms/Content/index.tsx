import * as React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { createResponsiveStyle } from '../../../utils/responsiveHelper';

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
}) => (
  <View
    style={[
      styles.column,
      {
        justifyContent: justifyMap[justify],
        alignItems: alignMap[align],
        flexDirection: direction,
      },
      style,
    ]}
  >
    {children}
  </View>
);

const styles = StyleSheet.create({
  column: {
    flex: 1,
    ...createResponsiveStyle({
      paddingHorizontal: [8, 8, 16],
      paddingBottom: [8, 8, 16],
    }),
  },
});

export default Column;
