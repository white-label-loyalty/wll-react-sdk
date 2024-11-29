import { useEffect, useState } from 'react';
import { Dimensions, Platform } from 'react-native';
import {
  SMALL_SCREEN_WIDTH,
  TABLET_SCREEN_WIDTH,
} from '../constants/responsive';

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const lerp = (start: number, end: number, t: number) =>
  start + (end - start) * t;

const getWindowWidth = () => {
  if (Platform.OS === 'web') {
    return window.innerWidth;
  }
  return Dimensions.get('window').width;
};

export const getResponsiveValue = (
  desktopValue: number,
  mobileValue: number,
  isDesktop: boolean,
  isTablet: boolean
) => {
  const width = getWindowWidth();
  const tabletValue = (desktopValue + mobileValue) / 2;

  // Desktop to Tablet scaling
  if (width >= TABLET_SCREEN_WIDTH) {
    const t = clamp((width - TABLET_SCREEN_WIDTH) / 300, 0, 1); // 300px scaling range
    return Math.round(lerp(tabletValue, desktopValue, t));
  }

  // Tablet to Mobile scaling
  if (width > SMALL_SCREEN_WIDTH) {
    const t = clamp(
      (width - SMALL_SCREEN_WIDTH) / (TABLET_SCREEN_WIDTH - SMALL_SCREEN_WIDTH),
      0,
      1
    );
    return Math.round(lerp(mobileValue, tabletValue, t));
  }

  return mobileValue;
};

export const useResponsiveValue = (
  desktopValue: number,
  mobileValue: number,
  isDesktop: boolean,
  isTablet: boolean
) => {
  const [value, setValue] = useState(() =>
    getResponsiveValue(desktopValue, mobileValue, isDesktop, isTablet)
  );

  useEffect(() => {
    if (Platform.OS !== 'web') return;

    const handleResize = () => {
      setValue(
        getResponsiveValue(desktopValue, mobileValue, isDesktop, isTablet)
      );
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [desktopValue, mobileValue, isDesktop, isTablet]);

  return value;
};
