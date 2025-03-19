/* istanbul ignore file */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useResponsive } from '../../../hooks/useResponsive';

const Indicator = (): JSX.Element => {
  const { isDesktop, isTablet } = useResponsive();

  const getCurrentLayout = () => {
    if (isDesktop) return 'Desktop Layout';
    if (isTablet) return 'Tablet Layout';
    return 'Mobile Layout';
  };

  return (
    <View style={styles.indicator}>
      <Text style={styles.indicatorText}>{getCurrentLayout()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
    top: 10,
    right: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  indicatorText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Indicator;
