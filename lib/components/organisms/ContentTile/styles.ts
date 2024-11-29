import { StyleSheet } from 'react-native';
import { useResponsive } from '../../../hooks/useResponsive';
import { useResponsiveValue } from '../../../utils/responsiveHelper';

export const useContentTileStyles = () => {
  const { isDesktop, isTablet } = useResponsive();

  return StyleSheet.create({
    content: {
      paddingHorizontal: useResponsiveValue(12, 8, isDesktop, isTablet),
      flex: 1,
      justifyContent: 'center',
    },
    media: {
      width: '100%',
    },
  });
};
