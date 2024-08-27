import React from "react";
import { ImageProps as RNImageProps } from "react-native";
type ImageProps = RNImageProps & {
    roundedCorners?: boolean;
    borderRadius?: number;
    aspectRatio?: number;
};
declare const Image: React.FC<ImageProps>;
export default Image;
