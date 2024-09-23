import { Dimensions } from 'react-native';

// Define breakpoints
const BREAKPOINTS = {
  MOBILE: 0,
  TABLET: 767,
  DESKTOP: 768,
};

type ResponsiveStyle<T> = {
  [K in keyof T]: T[K] | [T[K], T[K], T[K]]; // [mobile, tablet, desktop]
};

export const createResponsiveStyle = <T extends object>(
  style: ResponsiveStyle<T>
): T => {
  const windowWidth = Dimensions.get('window').width;

  const responsiveStyle = Object.entries(style).reduce((acc, [key, value]) => {
    if (Array.isArray(value)) {
      if (windowWidth > BREAKPOINTS.DESKTOP) {
        (acc as any)[key] = value[2] || value[1] || value[0]; // Desktop value or fallback to tablet
      } else if (windowWidth > BREAKPOINTS.TABLET) {
        (acc as any)[key] = value[1] || value[0]; // Tablet value or fallback to mobile
      } else {
        (acc as any)[key] = value[0]; // Mobile value or fallback to first value
      }
    } else {
      (acc as any)[key] = value; // No responsive value, just return the value
    }
    return acc;
  }, {} as T);

  return responsiveStyle;
};
