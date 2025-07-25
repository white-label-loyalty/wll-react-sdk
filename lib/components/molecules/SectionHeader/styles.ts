import { StyleSheet } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useResponsive } from '../../../hooks/useResponsive';
import { useResponsiveValue } from '../../../utils/responsiveHelper';

export const useSectionHeaderStyles = (): ReturnType<
  typeof StyleSheet.create
> => {
  const { isDesktop, isTablet } = useResponsive();
  const { theme } = useWllSdk();

  return StyleSheet.create({
    sectionHeader: {
      marginBottom: useResponsiveValue(
        theme.sizes.lg,
        theme.sizes.xxs,
        isDesktop,
        isTablet
      ),
    },
    sectionTitle: {
      fontSize: useResponsiveValue(
        theme.sizes.xxl,
        theme.sizes.xl,
        isDesktop,
        isTablet
      ),
      marginBottom: useResponsiveValue(
        theme.sizes.xxs,
        theme.sizes.xxxs,
        isDesktop,
        isTablet
      ),
      fontWeight: '700',
      color: theme.text,
      fontFamily: theme.fontFamily,
    },
    sectionDescription: {
      fontSize: useResponsiveValue(
        theme.sizes.xl,
        theme.sizes.md,
        isDesktop,
        isTablet
      ),
      color: theme.alphaDerivedText[80],
      fontFamily: theme.fontFamily,
    },
  });
};
