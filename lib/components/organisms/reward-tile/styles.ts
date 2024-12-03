import { StyleSheet } from 'react-native';
import { useResponsive } from '../../../context/responsive-context';
import { useWllSdk } from '../../../context/wll-sdk-context';
import { useResponsiveValue } from '../../../utils/responsive-helper';

export const useRewardTileStyles = () => {
  const { isDesktop, isTablet } = useResponsive();
  const { theme } = useWllSdk();

  return StyleSheet.create({
    imageContainer: {
      width: '100%',
      marginBottom: useResponsiveValue(
        theme.sizes.sm,
        theme.sizes.xxs,
        isDesktop,
        isTablet
      ),
    },
    image: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    content: {
      paddingHorizontal: useResponsiveValue(
        theme.sizes.sm,
        theme.sizes.xxs,
        isDesktop,
        isTablet
      ),
      flex: 1,
    },
    footer: {
      marginTop: 8,
    },
    pointsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    suffix: {
      color: theme.primary,
      fontSize: useResponsiveValue(
        theme.sizes.xl,
        theme.sizes.md,
        isDesktop,
        isTablet
      ),
    },
  });
};
