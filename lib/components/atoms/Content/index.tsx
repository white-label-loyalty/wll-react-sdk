import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { createResponsiveStyle } from '../../../utils/responsiveHelper';

type TileContentProps = {
  children: React.ReactNode;
};

const Content: React.FC<TileContentProps> = ({ children }) => {
  return <View style={styles.content}>{children}</View>;
};

const styles = StyleSheet.create({
  content: createResponsiveStyle({
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: [8, 8, 16],
    paddingBottom: [8, 8, 16],
  }),
});
export default Content;
