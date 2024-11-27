import { StyleSheet } from 'react-native';
import { MAX_WIDTH } from '../../../constants';
import { useResponsive } from '../../../hooks/useResponsive';
import { getResponsiveValue } from '../../../utils/responsiveHelper';

export const useSectionStyles = () => {
  const { isDesktop, isTablet } = useResponsive();

  return StyleSheet.create({
    section: {
      width: '100%',
      maxWidth: MAX_WIDTH,
      marginHorizontal: 'auto',
      marginBottom: getResponsiveValue(60, 40, isDesktop, isTablet),
    },
  });
};
