import React, { useRef } from 'react';
import {
  Animated,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  View,
} from 'react-native';
import { IS_WEB } from '../../../constants/device';
import { useWllSdk } from '../../../context/WllSdkContext';
import { desaturateColor } from '../../../utils/themeHelpers';

type ProgressiveImageProps = {
  source: ImageSourcePropType;
  style?: StyleProp<any>;
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
}: ProgressiveImageProps): React.ReactElement => {
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

  const baseImage = (
    <Animated.Image
      {...props}
      source={source}
      style={[
        styles.imageOverlay,
        style,
        {
          opacity: imageAnimated,
          ...(IS_WEB && {
            filter: isDesaturated ? 'grayscale(100%)' : undefined,
          }),
        },
      ]}
      onLoad={onImageLoad}
      accessibilityLabel={alt}
      accessible
      role="img"
    />
  );

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

      {/* For web, just use the base image with CSS filter */}
      {IS_WEB ? (
        baseImage
      ) : (
        // For React Native, use the overlay technique
        <>
          {baseImage}
          {isDesaturated && (
            <Animated.Image
              {...props}
              source={source}
              style={[
                styles.imageOverlay,
                style,
                {
                  opacity: imageAnimated.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.8],
                  }),
                  tintColor: 'gray',
                },
              ]}
            />
          )}
        </>
      )}
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
    width: '100%',
    height: '100%',
    minHeight: 130,
  },
});

export default ProgressiveImage;
