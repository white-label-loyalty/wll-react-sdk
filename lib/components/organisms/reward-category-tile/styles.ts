import { StyleSheet } from 'react-native';

import { useResponsive } from '../../../context/responsive-context';
import { useWllSdk } from '../../../context/wll-sdk-context';
import { useResponsiveValue } from '../../../utils/responsive-helper';

export const useRewardCategoryTileStyles = () => {
  const { isDesktop, isTablet } = useResponsive();
  const { theme } = useWllSdk();

  return StyleSheet.create({
    header: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10,
      height: 35,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.primary,
    },
    headerText: {
      fontSize: useResponsiveValue(
        theme.sizes.lg,
        theme.sizes.sm,
        isDesktop,
        isTablet
      ),
      paddingHorizontal: useResponsiveValue(
        theme.sizes.xxxxl,
        20,
        isDesktop,
        isTablet
      ),
      color: theme.primaryText,
    },
    background: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  });
};
