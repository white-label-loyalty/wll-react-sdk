import { StyleSheet } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useResponsive } from '../../../hooks/useResponsive';
import { useResponsiveValue } from '../../../utils/responsiveHelper';

export const useContentTileStyles = () => {
  const { theme } = useWllSdk();
  const { isDesktop, isTablet } = useResponsive();

  return StyleSheet.create({
    content: {
      paddingHorizontal: useResponsiveValue(
        theme.sizes.sm,
        theme.sizes.xxs,
        isDesktop,
        isTablet
      ),
      flex: 1,
      justifyContent: 'center',
    },
    media: {
      width: '100%',
    },
  });
};
