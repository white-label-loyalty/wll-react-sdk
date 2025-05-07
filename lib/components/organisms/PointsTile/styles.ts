import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useResponsive } from '../../../hooks/useResponsive';
import { useResponsiveValue } from '../../../utils/responsiveHelper';

/**
 * Custom hook that returns the styles for the PointsTile component.
 * Applies responsive styling based on the current device.
 *
 * @returns StyleSheet styles for the PointsTile component
 */

export const usePointsTileStyles = (
  isFullSize?: boolean
): {
  container: ViewStyle;
  contentContainer: ViewStyle;
  contentColumn: ViewStyle;
  mediaColumn: ViewStyle;
  suffix: TextStyle;
  pointsWithSuffix: ViewStyle;
  imageContainer: ViewStyle;
  image: ImageStyle;
} => {
  const { isDesktop, isTablet } = useResponsive();
  const { theme } = useWllSdk();

  return StyleSheet.create({
    container: {
      paddingHorizontal: useResponsiveValue(
        theme.sizes.sm,
        theme.sizes.xxs,
        isDesktop,
        isTablet
      ),
      width: '100%',
      flexDirection: isFullSize ? 'row' : 'row-reverse',
      alignItems: isFullSize ? 'flex-start' : 'center',
      justifyContent: 'space-between',
    },
    contentContainer: {
      width: '100%',
    },
    contentColumn: {
      flexGrow: 1,
    },
    mediaColumn: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    suffix: {
      fontSize: useResponsiveValue(
        theme.sizes.xl,
        theme.sizes.md,
        isDesktop,
        isTablet
      ),
      color: theme.primary,
    },
    pointsWithSuffix: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageContainer: {
      width: isFullSize ? '100%' : isDesktop ? 57 : 40,
      height: isFullSize ? '50%' : isDesktop ? 57 : 40,
      marginBottom: isFullSize
        ? useResponsiveValue(
            theme.sizes.sm,
            theme.sizes.xxs,
            isDesktop,
            isTablet
          )
        : 0,
      marginRight: !isFullSize
        ? useResponsiveValue(
            theme.sizes.sm,
            theme.sizes.xxs,
            isDesktop,
            isTablet
          )
        : 0,
      backgroundColor: isFullSize
        ? theme.alphaDerivedPrimary[20]
        : theme.surface,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    } as ViewStyle,
    image: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      resizeMode: 'contain',
    } as ImageStyle,
  });
};
