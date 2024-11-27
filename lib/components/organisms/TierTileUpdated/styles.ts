import { StyleSheet } from 'react-native';
import { useResponsive } from '../../../hooks/useResponsive';
import { getResponsiveValue } from '../../../utils/responsiveHelper';

export const useTierTileStyles = () => {
  const { isDesktop, isTablet } = useResponsive();

  return StyleSheet.create({
    header: {
      flexBasis: '50%',
      width: '100%',
      overflow: 'hidden',
      marginBottom: getResponsiveValue(12, 8, isDesktop, isTablet),
    },
    title: {
      marginBottom: getResponsiveValue(8, 4, isDesktop, isTablet),
    },
    smallImageContainer: {
      width: 48,
      height: 48,
      position: 'relative',
    },
    smallImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
  });
};
