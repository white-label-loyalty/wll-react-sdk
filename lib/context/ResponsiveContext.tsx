import React, { createContext, PropsWithChildren, useContext } from 'react';
import { Dimensions } from 'react-native';
import { DIMENSION_MODES } from '../constants/responsive';
import { getDimensionMode } from '../hooks/useResponsive';
import { ResponsiveContextType } from '../types/responsive';

const ResponsiveContext = createContext<ResponsiveContextType | undefined>(
  undefined
);

export function ResponsiveProvider({ children }: PropsWithChildren) {
  const [state, setState] = React.useState(() => {
    const window = Dimensions.get('window');
    const dimensionMode = getDimensionMode(window);

    return {
      dimensionMode,
      isDesktop: dimensionMode === DIMENSION_MODES.DESKTOP,
      isTablet: dimensionMode === DIMENSION_MODES.TABLET,
      isMobile: dimensionMode === DIMENSION_MODES.MOBILE,
    };
  });

  React.useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      if (window) {
        const dimensionMode = getDimensionMode(window);
        setState({
          dimensionMode,
          isDesktop: dimensionMode === DIMENSION_MODES.DESKTOP,
          isTablet: dimensionMode === DIMENSION_MODES.TABLET,
          isMobile: dimensionMode === DIMENSION_MODES.MOBILE,
        });
      }
    });

    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, []);

  return (
    <ResponsiveContext.Provider value={state}>
      {children}
    </ResponsiveContext.Provider>
  );
}

export function useResponsive(): ResponsiveContextType {
  const context = useContext(ResponsiveContext);
  if (context === undefined) {
    throw new Error('useResponsive must be used within a ResponsiveProvider');
  }
  return context;
}
