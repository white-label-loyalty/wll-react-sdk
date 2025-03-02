import { StyleSheet } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useResponsive } from '../../../hooks/useResponsive';
import { useResponsiveValue } from '../../../utils/responsiveHelper';

/**
 * Custom hook that returns the styles for the ContentTile component.
 * Applies responsive styling based on the current device.
 *
 * @returns StyleSheet styles for the ContentTile component
 */
export const useContentTileStyles = (): ReturnType<
  typeof StyleSheet.create
> => {
  const { theme } = useWllSdk();
  const { isDesktop, isTablet } = useResponsive();

  return StyleSheet.create({
    content: {
      paddingHorizontal: useResponsiveValue(
        theme.sizes.sm,
        theme.sizes.xxs,
        isDesktop,
        isTablet
      ),
      flex: 1,
      justifyContent: 'center',
    },
    media: {
      width: '100%',
    },
  });
};
