import { StyleSheet } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useResponsive } from '../../../hooks/useResponsive';
import { useResponsiveValue } from '../../../utils/responsiveHelper';
import { getDirectionalMargin } from '../../../utils/styling';

/**
 * Custom hook that returns the styles for the VenueTile component.
 * Applies responsive styling based on the current device.
 *
 * @returns StyleSheet styles for the VenueTile component
 */

export const useVenueTileStyles = (): ReturnType<typeof StyleSheet.create> => {
  const { isDesktop, isTablet } = useResponsive();
  const { theme } = useWllSdk();

  return StyleSheet.create({
    imageContainer: {
      width: '100%',
      minHeight: 130,
      overflow: 'hidden',
      marginBottom: useResponsiveValue(
        theme.sizes.sm,
        theme.sizes.xxs,
        isDesktop,
        isTablet
      ),
    },
    image: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    content: {
      paddingHorizontal: useResponsiveValue(
        theme.sizes.sm,
        theme.sizes.xxs,
        isDesktop,
        isTablet
      ),
      flex: 1,
    },
    footer: {
      marginTop: 8,
    },
    pointsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    suffix: {
      color: theme.primary,
      fontSize: useResponsiveValue(
        theme.sizes.xl,
        theme.sizes.md,
        isDesktop,
        isTablet
      ),
    },
    header: {
      width: '100%',
      paddingTop: theme.sizes.xxxs,
      marginBottom: useResponsiveValue(
        theme.sizes.xxs,
        theme.sizes.xxxs,
        isDesktop,
        isTablet
      ),
    },
    tileTitle: {
      maxWidth: '90%',
      flex: 1,
      ...getDirectionalMargin(8),
    },
    lockOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 10,
    },
    pinOverlay: {
      position: 'absolute',
      top: 8,
      right: 8,
      zIndex: 20,
    },
  });
};
