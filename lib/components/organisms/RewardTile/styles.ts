import { StyleSheet } from 'react-native';
import { useResponsive } from '../../../hooks/useResponsive';
import { getResponsiveValue } from '../../../utils/responsiveHelper';

export const useRewardTileStyles = () => {
  const { isDesktop, isTablet } = useResponsive();

  return StyleSheet.create({
    imageContainer: {
      width: '100%',
      flexBasis: '50%',
      marginBottom: getResponsiveValue(12, 8, isDesktop, isTablet),
    },
    image: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    content: {
      paddingHorizontal: getResponsiveValue(12, 8, isDesktop, isTablet),
      flex: 1,
    },
    footer: {
      marginTop: 8,
    },
    pointsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    suffix: {
      fontSize: getResponsiveValue(18, 14, isDesktop, isTablet),
    },
  });
};
