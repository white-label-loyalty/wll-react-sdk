import { StyleSheet } from 'react-native';
import { useResponsive } from '../../../context/responsive-context';
import { useWllSdk } from '../../../context/wll-sdk-context';
import { useResponsiveValue } from '../../../utils/responsive-helper';

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
