import { StyleSheet } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useResponsive } from '../../../hooks/useResponsive';
import { useResponsiveValue } from '../../../utils/responsiveHelper';

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
      fontSize: useResponsiveValue(16, 12, isDesktop, isTablet),
      paddingHorizontal: useResponsiveValue(40, 20, isDesktop, isTablet),
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
