import { StyleSheet } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useResponsive } from '../../../hooks/useResponsive';
import { useResponsiveValue } from '../../../utils/responsiveHelper';

import { TileHeight } from '../../../types/tile';

/**
 * Custom hook that returns the styles for the RewardCategory component.
 * Applies responsive styling based on the current device.
 *
 * @param tileHeight - The height of the tile
 * @returns StyleSheet styles for the RewardCategory component
 */

export const useRewardCategoryTileStyles = (
  tileHeight?: TileHeight
): ReturnType<typeof StyleSheet.create> => {
  const { isDesktop, isTablet } = useResponsive();
  const { theme } = useWllSdk();

  const isHalfHeight = tileHeight === TileHeight.Half;

  return StyleSheet.create({
    header: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10,
      height: 35,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.primary,
    },
    headerText: {
      fontSize: useResponsiveValue(
        theme.sizes.lg,
        theme.sizes.sm,
        isDesktop,
        isTablet
      ),
      paddingHorizontal: useResponsiveValue(
        theme.sizes.xxxxl,
        20,
        isDesktop,
        isTablet
      ),
      color: theme.primaryText,
    },
    background: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      objectFit: isHalfHeight ? 'contain' : 'cover',
      resizeMode: isHalfHeight ? 'contain' : 'cover',
    },
  });
};
