import { StyleSheet } from 'react-native';
import { MAX_WIDTH } from '../../../constants';
import { useResponsive } from '../../../context/responsive-context';
import { useWllSdk } from '../../../context/wll-sdk-context';
import { useResponsiveValue } from '../../../utils/responsive-helper';

export const useSectionStyles = () => {
  const { isDesktop, isTablet } = useResponsive();
  const { theme } = useWllSdk();
  return StyleSheet.create({
    section: {
      width: '100%',
      maxWidth: MAX_WIDTH,
      marginHorizontal: 'auto',
      marginBottom: useResponsiveValue(
        theme.sizes.xxxxxl,
        theme.sizes.xxxxl,
        isDesktop,
        isTablet
      ),
    },
  });
};
