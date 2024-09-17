import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';

type LoadingIndicatorProps = {
  // Define your props here
};

const LoadingIndicator: React.FC<LoadingIndicatorProps> = () => {
  const { theme } = useWllSdk();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.surface,
          borderRadius: theme.sizes.borderRadius,
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
