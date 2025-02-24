import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Dimensions } from 'react-native';
import { DIMENSION_MODES } from '../constants/responsive';
import { getDimensionMode } from '../hooks/useResponsive';
import { ResponsiveContextType } from '../types/responsive';

const ResponsiveContext = createContext<ResponsiveContextType | undefined>(
  undefined
);

export function ResponsiveProvider({ children }: PropsWithChildren) {
  const getDerivedState = useCallback((window: any) => {
    const dimensionMode = getDimensionMode(window);
    return {
      dimensionMode,
      isDesktop: dimensionMode === DIMENSION_MODES.DESKTOP,
      isTablet: dimensionMode === DIMENSION_MODES.TABLET,
      isMobile: dimensionMode === DIMENSION_MODES.MOBILE,
    };
  }, []);

  const [state, setState] = useState(() => {
    const window = Dimensions.get('window');
    return getDerivedState(window);
  });

  const value = useMemo(() => state, [state]);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      if (window) {
        setState(getDerivedState(window));
      }
    });

    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, [getDerivedState]);

  return (
    <ResponsiveContext.Provider value={value}>
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
