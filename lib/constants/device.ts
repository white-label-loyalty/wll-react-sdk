import { Dimensions, Platform } from "react-native";

export const IS_WEB = Platform.OS === "web";
export const IS_IOS = Platform.OS === "ios";
export const IS_ANDROID = Platform.OS === "android";
export const IS_MOBILE = IS_IOS || IS_ANDROID;
export const IS_DESKTOP = !IS_MOBILE;

/**
 * Safe wrapper around Dimensions.get to avoid SSR crashes where
 * Dimensions may not be initialised at module evaluation time.
 */
const getWindowDimensions = (): { width: number; height: number } => {
  try {
    return Dimensions.get("window");
  } catch {
    return { width: 0, height: 0 };
  }
};

const { width, height } = getWindowDimensions();

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;
