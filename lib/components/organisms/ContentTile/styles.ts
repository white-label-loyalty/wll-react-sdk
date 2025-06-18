import { StyleSheet, ViewStyle } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useResponsive } from '../../../hooks/useResponsive';
import { useResponsiveValue } from '../../../utils/responsiveHelper';
import { getDirectionalMargin } from '../../../utils/styling';

/**
 * Custom hook that returns the styles for the ContentTile component.
 * Applies responsive styling based on the current device.
 *
 * @returns StyleSheet styles for the ContentTile component
 */
export const useContentTileStyles = (
  hasArtwork = false
): ReturnType<typeof StyleSheet.create> => {
  const { isDesktop, isTablet } = useResponsive();
  const { theme } = useWllSdk();

  const getHeaderStyle = (hasArtwork: boolean): ViewStyle => ({
    width: '100%',
    marginBottom: useResponsiveValue(
      theme.sizes.xxs,
      theme.sizes.xxxs,
      isDesktop,
      isTablet
    ),
    ...(hasArtwork && {
      marginTop: useResponsiveValue(
        theme.sizes.xs,
        theme.sizes.xxs,
        isDesktop,
        isTablet
      ),
    }),
  });

  return StyleSheet.create({
    imageContainer: {
      width: '100%',
      marginBottom: 0,
      overflow: 'hidden',
    },
    image: {
      position: 'absolute',
      top: -1,
      left: -1,
      bottom: -1,
      right: -1,
      width: '102%',
      height: '102%',
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
    header: getHeaderStyle(hasArtwork),
    tileTitle: {
      maxWidth: '90%',
      flex: 1,
      ...getDirectionalMargin(8),
    },
  });
};
