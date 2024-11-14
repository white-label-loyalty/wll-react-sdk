import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { createResponsiveStyle } from '../../../utils/responsiveHelper';

type RowHeaderProps = {
  children: React.ReactNode;
  className?: string;
} & React.ComponentProps<typeof View>;

const RowHeader: React.FC<RowHeaderProps> = ({ children, style, ...props }) => (
  <View style={[styles.header, style]} {...props}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  header: createResponsiveStyle({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: [4, 4, 8],
  }),
});

export default RowHeader;
