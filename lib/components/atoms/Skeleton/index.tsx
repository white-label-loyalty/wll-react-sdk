/* istanbul ignore file */
import * as React from 'react';
import { Animated, StyleSheet, View, ViewStyle } from 'react-native';
import { MAX_WIDTH } from '../../../constants';
import { GRID_GAP } from '../../../constants/grid';
import { useWllSdk } from '../../../context/WllSdkContext';
import SkeletonTile from '../SkeletonTile';

type SkeletonProps = {
  width?: number | `${number}%`;
  height?: number | `${number}%`;
  borderRadius?: number;
  style?: ViewStyle;
  numberOfSquares?: number;
};

const Skeleton = ({
  style,
  numberOfSquares = 4,
}: SkeletonProps): React.ReactElement => {
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
    <View testID="loading-skeleton">
      <Animated.View
        style={[
          styles.skeleton,
          styles.title,
          {
            opacity,
            backgroundColor: theme.alphaDerivedText[20],
            borderRadius: 6,
          },
        ]}
      />
      <Animated.View
        style={[
          styles.skeleton,
          styles.body,
          {
            opacity,
            backgroundColor: theme.alphaDerivedText[20],
            borderRadius: 6,
          },
        ]}
      />
      <Animated.View style={[styles.container, style]}>
        {Array.from({ length: numberOfSquares }).map((_, index) => (
          <SkeletonTile key={index} />
        ))}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: GRID_GAP,
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: MAX_WIDTH,
  },
  title: {
    height: 40,
    marginBottom: 10,
    width: 300,
  },
  body: {
    height: 25,
    width: '85%',
    marginBottom: 24,
  },
  skeleton: {
    overflow: 'hidden',
  },
  square: {
    width: 1000 / 4,
    aspectRatio: 1,
  },
});

export default Skeleton;
