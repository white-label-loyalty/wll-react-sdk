import { StyleSheet } from 'react-native';
import { useResponsive } from '../../../context/responsive-context';
import { useWllSdk } from '../../../context/wll-sdk-context';
import { useResponsiveValue } from '../../../utils/responsive-helper';

export const useBadgeTileStyles = () => {
  const { isDesktop, isTablet } = useResponsive();
  const { theme } = useWllSdk();
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    indicatorContainer: {
      position: 'absolute',
      bottom: useResponsiveValue(
        theme.sizes.lg,
        theme.sizes.xxs,
        isDesktop,
        isTablet
      ),
      right: useResponsiveValue(
        theme.sizes.lg,
        theme.sizes.xxs,
        isDesktop,
        isTablet
      ),
      backgroundColor: 'rgba(0,0,0,0.6)',
      borderRadius: 40,
      width: 40,
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
    },
    countText: {
      color: '#FFF',
      fontSize: 14,
      fontWeight: 'bold',
    },
    header: {
      flexBasis: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      marginBottom: useResponsiveValue(
        theme.sizes.lg,
        theme.sizes.xxs,
        isDesktop,
        isTablet
      ),
    },
    image: {
      width: '100%',
      height: '100%',
    },
    titleText: {
      marginBottom: useResponsiveValue(
        theme.sizes.xxs,
        theme.sizes.xxxs,
        isDesktop,
        isTablet
      ),
    },
    dateEarnedContainer: {
      alignItems: 'flex-start',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 20,
    },
  });
};
