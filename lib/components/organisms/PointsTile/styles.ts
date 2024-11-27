import { StyleSheet } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useResponsive } from '../../../hooks/useResponsive';
import { getResponsiveValue } from '../../../utils/responsiveHelper';

export const usePointsTileStyles = (isFullSize?: boolean) => {
  const { isDesktop, isTablet } = useResponsive();
  const { theme } = useWllSdk();

  return StyleSheet.create({
    container: {
      paddingHorizontal: getResponsiveValue(12, 8, isDesktop, isTablet),
      width: '100%',
      flexDirection: isFullSize ? 'row' : 'row-reverse',
      alignItems: isFullSize ? 'flex-start' : 'center',
      justifyContent: 'space-between',
    },
    contentContainer: {
      flexDirection: 'column',
      width: isFullSize ? '100%' : 'auto',
    },
    suffix: {
      fontSize: getResponsiveValue(18, 14, isDesktop, isTablet),
      color: theme.primary,
    },
    pointsWithSuffix: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageContainer: {
      width: isFullSize ? '100%' : 57,
      height: isFullSize ? '50%' : 57,
      marginBottom: isFullSize
        ? getResponsiveValue(12, 8, isDesktop, isTablet)
        : 0,
      backgroundColor: isFullSize
        ? theme.alphaDerivedPrimary[20]
        : theme.surface,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      resizeMode: 'contain',
    },
  });
};
