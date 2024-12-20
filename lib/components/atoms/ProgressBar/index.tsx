import * as React from 'react';
import { Animated, StyleSheet, View, ViewStyle } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { Size, ThemeObject, Variant } from '../../../types/theme';
import { createVariantSystem } from '../../../utils/variant';

export type ProgressBarProps = {
  percentage: number;
  variant?: Variant;
  height?: Size;
  animationDuration?: number;
};

const useStyles = (theme: ThemeObject) => {
  return StyleSheet.create({
    container: {
      width: '100%',
      borderRadius: theme.sizes.borderRadiusRounded,
      overflow: 'hidden',
    },
    progress: {
      borderRadius: theme.sizes.borderRadiusRounded,
      height: '100%',
    },
  });
};

const useContainerStyles = (theme: ThemeObject) => ({
  sm: { height: theme.sizes.xxs },
  md: { height: theme.sizes.xs },
  lg: { height: theme.sizes.sm },
});

const useProgressStyles = createVariantSystem(
  // @ts-ignore
  (theme: ThemeObject) => ({ borderRadius: theme.sizes.borderRadiusSmRounded }),
  (theme: ThemeObject) => ({
    primary: { backgroundColor: theme.primary },
    accent: { backgroundColor: theme.accent },
    positive: { backgroundColor: theme.positive },
    negative: { backgroundColor: theme.negative },
  })
);

const ProgressBar = ({
  percentage,
  variant = 'primary',
  height = 'sm',
  animationDuration = 300,
}: ProgressBarProps): JSX.Element => {
  const { theme } = useWllSdk();
  const styles = useStyles(theme);
  const containerStyles = useContainerStyles(theme);
  const progressStyles = useProgressStyles(theme, variant);

  const animatedWidth = React.useRef(new Animated.Value(0)).current;

  const containerStyle = [
    styles.container,
    containerStyles[height],
    { backgroundColor: theme.derivedSurface[20] },
  ];

  React.useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: Math.min(Math.max(percentage, 0), 100),
      duration: animationDuration,
      useNativeDriver: false,
    }).start();
  }, [percentage, animationDuration]);

  const progressWidth: ViewStyle = {
    width: animatedWidth.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%'],
    }),
  };

  return (
    <View style={containerStyle}>
      <Animated.View style={[styles.progress, progressStyles, progressWidth]} />
    </View>
  );
};

export default ProgressBar;
