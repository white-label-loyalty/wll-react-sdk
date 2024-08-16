import React from "react";
import {
  ImageStyle,
  Image as RNImage,
  ImageProps as RNImageProps,
  StyleSheet,
  View,
} from "react-native";

type ImageProps = RNImageProps & {
  roundedCorners?: boolean;
  borderRadius?: number;
  aspectRatio?: number;
};

const Image: React.FC<ImageProps> = ({
  roundedCorners,
  borderRadius = 8,
  aspectRatio,
  style,
  ...rest
}) => {
  const imageStyle: ImageStyle = StyleSheet.flatten([
    styles.image,
    roundedCorners && { borderRadius },
    aspectRatio !== undefined && { aspectRatio },
    style as ImageStyle,
  ]);

  return (
    <View style={styles.container}>
      <RNImage style={imageStyle} {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: undefined,
  },
});

export default Image;
