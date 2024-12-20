import * as React from 'react';
import { Animated, StyleSheet, ViewStyle } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';

interface SkeletonTileProps {
  style?: ViewStyle;
}

const SkeletonTile = ({ style }: SkeletonTileProps): JSX.Element => {
  const { theme } = useWllSdk();
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    const pulseAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    );

    pulseAnimation.start();

    return () => pulseAnimation.stop();
  }, [animatedValue]);

  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.3, 0.7],
  });

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity,
          backgroundColor: theme.alphaDerivedText[20],
          borderRadius: theme.sizes.borderRadiusLg,
        },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    aspectRatio: 1,
    overflow: 'hidden',
    width: 1000 / 4,
  },
});

export default SkeletonTile;
