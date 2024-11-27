import { StyleSheet } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useResponsive } from '../../../hooks/useResponsive';
import { getResponsiveValue } from '../../../utils/responsiveHelper';

export const useBannerTileStyles = () => {
  const { isDesktop, isTablet } = useResponsive();
  const { theme } = useWllSdk();

  return StyleSheet.create({
    slideContent: {
      flex: 1,
    },
    mediaContainer: {
      width: '30%',
      aspectRatio: 1,
      position: 'relative',
      overflow: 'hidden',
      marginRight: getResponsiveValue(24, 8, isDesktop, isTablet),
      height: 320,
    },
    media: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    title: {
      fontSize: getResponsiveValue(32, 14, isDesktop, isTablet),
      marginBottom: getResponsiveValue(12, 4, isDesktop, isTablet),
      fontWeight: '700',
    },
    description: {
      fontSize: getResponsiveValue(18, 10, isDesktop, isTablet),
      marginBottom: getResponsiveValue(32, 12, isDesktop, isTablet),
      color: theme.derivedSurfaceText[20],
    },
  });
};
