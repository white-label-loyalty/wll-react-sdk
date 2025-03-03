import { StyleSheet } from 'react-native';
import { MAX_WIDTH } from '../../../constants';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useResponsive } from '../../../hooks/useResponsive';
import { useResponsiveValue } from '../../../utils/responsiveHelper';

/**
 * Custom hook that returns the styles for the Section component.
 * Applies responsive styling based on the current device.
 *
 * @returns StyleSheet styles for the Section component
 */

export const useSectionStyles = (): ReturnType<typeof StyleSheet.create> => {
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
