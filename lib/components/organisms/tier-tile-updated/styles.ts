import { StyleSheet } from 'react-native';
import { useResponsive } from '../../../context/responsive-context';
import { useWllSdk } from '../../../context/wll-sdk-context';
import { useResponsiveValue } from '../../../utils/responsive-helper';

export const useTierTileStyles = () => {
  const { isDesktop, isTablet } = useResponsive();
  const { theme } = useWllSdk();
  return StyleSheet.create({
    header: {
      flexBasis: '50%',
      width: '100%',
      overflow: 'hidden',
      marginBottom: useResponsiveValue(
        theme.sizes.sm,
        theme.sizes.xxs,
        isDesktop,
        isTablet
      ),
    },
    title: {
      marginBottom: useResponsiveValue(
        theme.sizes.xxs,
        theme.sizes.xxxs,
        isDesktop,
        isTablet
      ),
    },
    smallImageContainer: {
      width: 48,
      height: 48,
      position: 'relative',
    },
    smallImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
  });
};
