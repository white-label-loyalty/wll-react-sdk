import { StyleSheet } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useResponsive } from '../../../hooks/useResponsive';
import { useResponsiveValue } from '../../../utils/responsiveHelper';

export const useSectionHeaderStyles = () => {
  const { isDesktop, isTablet } = useResponsive();
  const { theme } = useWllSdk();

  return StyleSheet.create({
    sectionHeader: {
      marginBottom: useResponsiveValue(16, 8, isDesktop, isTablet),
    },
    sectionTitle: {
      fontSize: useResponsiveValue(32, 18, isDesktop, isTablet),
      marginBottom: useResponsiveValue(8, 4, isDesktop, isTablet),
      fontWeight: '700',
      color: theme.text,
    },
    sectionDescription: {
      fontSize: useResponsiveValue(24, 14, isDesktop, isTablet),
      color: theme.alphaDerivedText[80],
    },
  });
};
