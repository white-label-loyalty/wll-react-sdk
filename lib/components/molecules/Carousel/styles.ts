import { StyleSheet } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useResponsive } from '../../../hooks/useResponsive';
import { useResponsiveValue } from '../../../utils/responsiveHelper';

export const useCarouselStyles = (
  buttonSize = 42
): ReturnType<typeof StyleSheet.create> => {
  const { isDesktop, isTablet } = useResponsive();
  const { theme } = useWllSdk();

  return StyleSheet.create({
    container: {
      width: '100%',
      flex: 1,
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
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    carouselContent: {
      width: '100%',
      overflow: 'hidden',
    },
    slideContainer: {
      width: '100%',
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
    indicators: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: useResponsiveValue(
        theme.sizes.xxl,
        theme.sizes.sm,
        isDesktop,
        isTablet
      ),
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
