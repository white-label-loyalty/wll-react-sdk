import { StyleSheet } from 'react-native';
import { useResponsive } from '../../../context/responsive-context';
import { useWllSdk } from '../../../context/wll-sdk-context';
import { useResponsiveValue } from '../../../utils/responsive-helper';

export const usePointsTileStyles = (isFullSize?: boolean) => {
  const { isDesktop, isTablet } = useResponsive();
  const { theme } = useWllSdk();

  return StyleSheet.create({
    container: {
      paddingHorizontal: useResponsiveValue(
        theme.sizes.sm,
        theme.sizes.xxs,
        isDesktop,
        isTablet
      ),
      width: '100%',
      flexDirection: isFullSize ? 'row' : 'row-reverse',
      alignItems: isFullSize ? 'flex-start' : 'center',
      justifyContent: 'space-between',
    },
    contentContainer: {
      flexDirection: 'column',
      width: isFullSize ? '100%' : 'auto',
    },
    suffix: {
      fontSize: useResponsiveValue(
        theme.sizes.xl,
        theme.sizes.md,
        isDesktop,
        isTablet
      ),
      color: theme.primary,
    },
    pointsWithSuffix: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageContainer: {
      width: isFullSize ? '100%' : 57,
      height: isFullSize ? '50%' : 57,
      marginBottom: isFullSize
        ? useResponsiveValue(
            theme.sizes.sm,
            theme.sizes.xxs,
            isDesktop,
            isTablet
          )
        : 0,
      backgroundColor: isFullSize
        ? theme.alphaDerivedPrimary[20]
        : theme.surface,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      resizeMode: 'contain',
    },
  });
};
