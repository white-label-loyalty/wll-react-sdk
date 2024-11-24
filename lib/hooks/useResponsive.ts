import { useEffect, useState } from 'react';
import { Dimensions, Platform } from 'react-native';
import {
  DIMENSION_MODES,
  SMALL_SCREEN_WIDTH,
  TABLET_SCREEN_WIDTH,
} from '../constants/responsive';
import { DimensionMode, WindowDimensions } from '../types/responsive';

const isWeb = Platform.OS === 'web';

export function getDimensionMode(window: WindowDimensions): DimensionMode {
  if (!window || !window.width) {
    return DIMENSION_MODES.MOBILE;
  }

  const { width: screenWidth } = window;

  if (screenWidth >= TABLET_SCREEN_WIDTH) {
    return DIMENSION_MODES.DESKTOP;
  }
  if (screenWidth >= SMALL_SCREEN_WIDTH) {
    return DIMENSION_MODES.TABLET;
  }
  return DIMENSION_MODES.MOBILE;
}

export function useResponsive() {
  const deviceWindow = Dimensions.get('window');
  const [dimensionMode, setDimensionMode] = useState<DimensionMode>(
    getDimensionMode(deviceWindow)
  );

  useEffect(() => {
    if (!isWeb) return;

    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      if (window) {
        const mode = getDimensionMode(window);
        setDimensionMode(mode);
      }
    });

    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, []);

  return {
    dimensionMode,
    isDesktop: dimensionMode === DIMENSION_MODES.DESKTOP,
    isTablet: dimensionMode === DIMENSION_MODES.TABLET,
    isMobile: dimensionMode === DIMENSION_MODES.MOBILE,
  };
}
