import { StyleSheet } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useResponsive } from '../../../hooks/useResponsive';
import { useResponsiveValue } from '../../../utils/responsiveHelper';

export const useButtonDynamicStyles = (): ReturnType<
  typeof StyleSheet.create
> => {
  const { isDesktop, isTablet } = useResponsive();
  const { theme } = useWllSdk();

  return StyleSheet.create({
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: useResponsiveValue(
        theme.sizes.xxl,
        theme.sizes.sm,
        isDesktop,
        isTablet
      ),
      paddingVertical: theme.sizes.sm,
      alignSelf: 'flex-start',
    },
    text: {
      textAlign: 'center',
      textTransform: 'uppercase',
      fontSize: useResponsiveValue(
        theme.sizes.xl,
        theme.sizes.sm,
        isDesktop,
        isTablet
      ),
      fontWeight: '700',
    },
  });
};
