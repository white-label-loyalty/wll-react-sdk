import * as React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { Align, alignMap, Justify, justifyMap } from '../../../types/common';

type RowProps = {
  children: React.ReactNode;
  justify?: Justify;
  align?: Align;
  reverse?: boolean;
  flex?: number;
  style?: ViewProps['style'];
} & Omit<ViewProps, 'style'>;

/**
 * A primitive Row component that extends Layout with horizontal direction.
 * Provides a cleaner API for creating horizontally aligned layouts.
 * @param reverse - When true, reverses the direction of the row (row-reverse)
 * @param justify - The justify content of the row
 * @param align - The align items of the row
 * @param flex - Optional flex number to control the row's flex behavior
 * @param style - Additional styles to apply to the row
 */
export const Row = ({
  children,
  justify = 'start',
  align = 'center',
  reverse = false,
  flex,
  style,
  ...rest
}: RowProps): JSX.Element => {
  const styles = StyleSheet.create({
    container: {
      justifyContent: justifyMap[justify],
      alignItems: alignMap[align],
      flexDirection: reverse ? 'row-reverse' : 'row',
      ...(flex !== undefined && { flex }),
    },
  });
  return (
    <View style={[styles.container, style]} {...rest}>
      {children}
    </View>
  );
};
