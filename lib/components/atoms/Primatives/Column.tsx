import * as React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { Align, alignMap, Justify, justifyMap } from '../../../types/common';

type ColumnProps = {
  children: React.ReactNode;
  justify?: Justify;
  align?: Align;
  reverse?: boolean;
  flex?: number;
  style?: ViewProps['style'];
} & Omit<ViewProps, 'style'>;

/**
 * A primitive Column component that extends Layout with vertical direction.
 * Provides a cleaner API for creating vertically aligned layouts.
 * @param reverse - When true, reverses the direction of the column (column-reverse)
 * @param justify - The justify content of the column
 * @param align - The align items of the column
 * @param flex - Optional flex number to control the column's flex behavior
 * @param style - Additional styles to apply to the column
 */
export const Column = ({
  children,
  justify = 'start',
  align = 'start',
  reverse = false,
  flex,
  style,
  ...rest
}: ColumnProps): React.ReactElement => {
  const styles = StyleSheet.create({
    container: {
      justifyContent: justifyMap[justify],
      alignItems: alignMap[align],
      flexDirection: reverse ? 'column-reverse' : 'column',
      ...(flex !== undefined && { flex }),
    },
  });
  return (
    <View style={[styles.container, style]} {...rest}>
      {children}
    </View>
  );
};
