/* istanbul ignore file */
import React, { useRef } from 'react';
import {
  Animated,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { IS_WEB } from '../../../constants/device';
import { useWllSdk } from '../../../context/WllSdkContext';
import { desaturateColor } from '../../../utils/themeHelpers';

type ProgressiveImageProps = {
  source: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  isDesaturated?: boolean;
  alt?: string;
  [key: string]: any;
};

const ProgressiveImage = ({
  source,
  style,
  isDesaturated = false,
  alt,
  ...props
}: ProgressiveImageProps): JSX.Element => {
  const imageAnimated = useRef(new Animated.Value(0)).current;
  const { theme } = useWllSdk();

  const onImageLoad = (): void => {
    requestAnimationFrame(() => {
      Animated.timing(imageAnimated, {
        toValue: 1,
        useNativeDriver: true,
        duration: 300,
      }).start();
    });
  };

  const baseColor = theme.alphaDerivedPrimary[20];
  const desaturatedColor = desaturateColor(baseColor);
  const backgroundColor = isDesaturated ? desaturatedColor : baseColor;

  // Platform-specific logic for desaturation
  const desaturationStyle = IS_WEB
    ? {
        filter: isDesaturated ? 'grayscale(100%)' : undefined,
      }
    : {};

  return (
    <View style={[styles.container, style, { backgroundColor }]}>
      {/* Placeholder that fades out as the main image loads */}
      <Animated.View
        style={[
          styles.imageOverlay,
          {
            backgroundColor,
            opacity: imageAnimated.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          },
        ]}
      />

      <Animated.Image
        {...props}
        source={source}
        style={[
          styles.imageOverlay,
          {
            opacity: imageAnimated,
            ...desaturationStyle,
          },
        ]}
        onLoad={onImageLoad}
        accessibilityLabel={alt}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    width: '100%',
    height: '100%',
  },
});

export default ProgressiveImage;
