import { StyleSheet } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useResponsive } from '../../../hooks/useResponsive';
import { useResponsiveValue } from '../../../utils/responsiveHelper';
import { getDirectionalMargin } from '../../../utils/styling';

/**
 * Custom hook that returns the styles for the BannerTile component.
 * Applies responsive styling based on the current device.
 *
 * @returns StyleSheet styles for the BannerTile component
 */

export const useBannerTileStyles = (): ReturnType<typeof StyleSheet.create> => {
  const { isDesktop, isTablet } = useResponsive();
  const { theme } = useWllSdk();

  return StyleSheet.create({
    slideContent: {
      flex: 1,
    },
    mediaContainer: {
      aspectRatio: 1,
      position: 'relative',
      overflow: 'hidden',
      ...getDirectionalMargin(
        useResponsiveValue(
          theme.sizes.xxl,
          theme.sizes.xxs,
          isDesktop,
          isTablet
        )
      ),
      maxHeight: useResponsiveValue(253, 120, isDesktop, isTablet),
      minHeight: 120,
    },
    media: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    title: {
      fontSize: useResponsiveValue(
        theme.sizes.xxxl,
        theme.sizes.md,
        isDesktop,
        isTablet
      ),
      marginBottom: useResponsiveValue(
        theme.sizes.sm,
        theme.sizes.xxxs,
        isDesktop,
        isTablet
      ),
      fontWeight: '700',
    },
    description: {
      fontSize: useResponsiveValue(
        theme.sizes.xl,
        theme.sizes.xs,
        isDesktop,
        isTablet
      ),
      marginBottom: useResponsiveValue(
        theme.sizes.xxxl,
        theme.sizes.sm,
        isDesktop,
        isTablet
      ),
      color: theme.derivedSurfaceText[20],
    },
  });
};
