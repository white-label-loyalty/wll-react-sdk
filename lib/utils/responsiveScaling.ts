import { useWindowDimensions } from "react-native";

const BASE_WIDTH = 375;
const MAX_WIDTH = 1080;

export const useResponsiveScale = () => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const responsiveScale = (size: number, factor: number = 0.5): number => {
    let scale = SCREEN_WIDTH / BASE_WIDTH;

    // If screen is wider than MAX_WIDTH, slow down the scaling
    if (SCREEN_WIDTH > MAX_WIDTH) {
      scale =
        MAX_WIDTH / BASE_WIDTH + (SCREEN_WIDTH - MAX_WIDTH) / (BASE_WIDTH * 4);
    }

    const newSize = size + (scale - 1) * size * factor;
    return Math.round(newSize);
  };

  return {
    rs: responsiveScale,
    fs: (size: number) => responsiveScale(size, 0.2),
    ms: (size: number) => responsiveScale(size, 0.4),
    ps: (size: number) => responsiveScale(size, 0.4),
  };
};
