import { StyleSheet } from 'react-native';
import { useResponsive } from '../../../hooks/useResponsive';
import { getResponsiveValue } from '../../../utils/responsiveHelper';

export const useBadgeTileStyles = () => {
  const { isDesktop, isTablet } = useResponsive();

  return StyleSheet.create({
    container: {
      flex: 1,
    },
    indicatorContainer: {
      position: 'absolute',
      bottom: getResponsiveValue(16, 8, isDesktop, isTablet),
      right: getResponsiveValue(16, 8, isDesktop, isTablet),
      backgroundColor: 'rgba(0,0,0,0.6)',
      borderRadius: 40,
      width: 40,
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
    },
    countText: {
      color: '#FFF',
      fontSize: 14,
      fontWeight: 'bold',
    },
    header: {
      flexBasis: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      marginBottom: getResponsiveValue(16, 8, isDesktop, isTablet),
    },
    image: {
      width: '100%',
      height: '100%',
    },
    titleText: {
      marginBottom: getResponsiveValue(8, 4, isDesktop, isTablet),
    },
    dateEarnedContainer: {
      alignItems: 'flex-start',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 20,
    },
  });
};
