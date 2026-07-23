import { StyleSheet } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useResponsive } from '../../../hooks/useResponsive';
import { useResponsiveValue } from '../../../utils/responsiveHelper';

/**
 * Custom hook that returns the styles for the CampaignTile component.
 * Applies responsive styling based on the current device.
 *
 * @returns StyleSheet styles for the CampaignTile component
 */

export const useCampaignTileStyles = (): ReturnType<typeof StyleSheet.create> => {
  const { isDesktop, isTablet } = useResponsive();
  const { theme } = useWllSdk();

  return StyleSheet.create({
    imageContainer: {
      width: '100%',
      minHeight: 130,
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    titleRow: {
      width: '100%',
      marginTop: useResponsiveValue(
        theme.sizes.xxs,
        theme.sizes.xxxs,
        isDesktop,
        isTablet
      ),
      marginBottom: useResponsiveValue(
        theme.sizes.xxs,
        theme.sizes.xxxs,
        isDesktop,
        isTablet
      ),
    },
    titleText: {
      maxWidth: '90%',
      flex: 1,
    },
    progressContainer: {
      width: '100%',
      marginTop: useResponsiveValue(
        theme.sizes.xxs,
        theme.sizes.xxxs,
        isDesktop,
        isTablet
      ),
    },
  });
};
