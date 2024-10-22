import React, { useRef } from 'react';
import {
  Animated,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';

type ProgressiveImageProps = {
  source: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  isDesaturated?: boolean;
  [key: string]: any;
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
  },
});

const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  source,
  style,
  isDesaturated = false,
  ...props
}) => {
  const imageAnimated = useRef(new Animated.Value(0)).current;
  const { theme } = useWllSdk();

  const onImageLoad = (): void => {
    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
      duration: 500,
    }).start();
  };

  return (
    <View
      style={[
        styles.container,
        style,
        {
          backgroundColor: isDesaturated
            ? '#D7D7D7'
            : theme.alphaDerivedPrimary[20],
        },
      ]}
    >
      {isDesaturated ? (
        <>
          <Animated.Image
            {...props}
            source={source}
            style={[
              styles.imageOverlay,
              { opacity: imageAnimated, tintColor: '#c9c9c9' },
            ]}
            onLoad={onImageLoad}
          />
          <Animated.Image
            {...props}
            source={source}
            style={[styles.imageOverlay, { opacity: 0.1 }]}
            onLoad={onImageLoad}
          />
        </>
      ) : (
        <Animated.Image
          {...props}
          source={source}
          style={[styles.imageOverlay, { opacity: imageAnimated }]}
          onLoad={onImageLoad}
        />
      )}
    </View>
  );
};

export default ProgressiveImage;
