import { StyleSheet, ViewStyle } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useResponsive } from '../../../hooks/useResponsive';
import { useResponsiveValue } from '../../../utils/responsiveHelper';
import { getDirectionalMargin } from '../../../utils/styling';

import { TileHeight } from '../../../types/tile';

/**
 * Custom hook that returns the styles for the ContentTile component.
 * Applies responsive styling based on the current device.
 *
 * @param hasArtwork - Whether the tile has artwork
 * @param tileHeight - The height of the tile
 * @returns StyleSheet styles for the ContentTile component
 */
export const useContentTileStyles = (
  hasArtwork = false,
  tileHeight?: TileHeight
): ReturnType<typeof StyleSheet.create> => {
  const { isDesktop, isTablet } = useResponsive();
  const { theme } = useWllSdk();

  const isHalfHeight = tileHeight === TileHeight.Half;

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
      resizeMode: isHalfHeight ? 'contain' : 'cover',
      objectFit: isHalfHeight ? 'contain' : 'cover',
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
