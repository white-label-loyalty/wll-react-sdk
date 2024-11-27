import { StyleSheet } from 'react-native';
import { useResponsive } from '../../../hooks/useResponsive';
import { getResponsiveValue } from '../../../utils/responsiveHelper';

export const useSectionStyles = () => {
  const { isDesktop, isTablet } = useResponsive();

  return StyleSheet.create({
    section: {
      width: '100%',
      maxWidth: 1080,
      marginHorizontal: 'auto',
      marginBottom: getResponsiveValue(60, 40, isDesktop, isTablet),
    },
  });
};
