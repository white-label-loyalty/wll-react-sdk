import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useTheme } from '../../../context/ThemeContext';
import { Tile } from '../../../types/tile';

type LoadingIndicatorProps = {
  tile: Tile;
};

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ tile }) => {
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          borderRadius: theme.sizes.borderRadiusSm,
          padding: theme.sizes.md,
        },
      ]}
    >
      <ActivityIndicator size="small" color={theme.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
});

export default LoadingIndicator;
