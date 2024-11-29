import { StyleSheet } from 'react-native';
import { MAX_WIDTH } from '../../../constants';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useResponsive } from '../../../hooks/useResponsive';
import { useResponsiveValue } from '../../../utils/responsiveHelper';

export const useCarouselStyles = (buttonSize = 42, slideWidth: number) => {
  const { isDesktop, isTablet } = useResponsive();
  const { theme } = useWllSdk();

  return StyleSheet.create({
    container: {
      flex: 1,
      maxWidth: MAX_WIDTH,
    },
    sectionTitle: {
      fontSize: 31,
      marginBottom: 10,
    },
    sectionDescription: {
      marginBottom: 21,
    },
    title: {
      marginBottom: 10,
    },
    description: {
      marginBottom: 20,
    },
    carouselContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    carouselContent: {
      overflow: 'hidden',
      width: slideWidth,
    },
    navButton: {
      position: 'absolute',
      top: '50%',
      transform: [{ translateY: -buttonSize / 2 }],
      width: buttonSize,
      height: buttonSize,
      borderRadius: buttonSize / 2,
      backgroundColor: theme.background,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
    },
    navButtonLeft: {
      left: -buttonSize / 2,
    },
    navButtonRight: {
      right: -buttonSize / 2,
      backgroundColor: theme.surface,
    },
    slideContainer: {
      width: slideWidth,
    },
    indicators: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: useResponsiveValue(24, 12, isDesktop, isTablet),
    },
    indicator: {
      width: 8,
      height: 8,
      borderRadius: 8,
      marginHorizontal: 4,
      backgroundColor: theme.derivedBackground,
    },
    activeIndicator: {
      backgroundColor: theme.primary,
    },
  });
};
