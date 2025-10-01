import { StyleSheet } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useResponsive } from '../../../hooks/useResponsive';
import { useResponsiveValue } from '../../../utils/responsiveHelper';

export const useChipStyles = () => {
  const { theme } = useWllSdk();
  const { isDesktop, isTablet } = useResponsive();

  const paddingHorizontal = useResponsiveValue(12, 8, isDesktop, isTablet);
  const paddingVertical = useResponsiveValue(6, 3, isDesktop, isTablet);
  const fontSize = useResponsiveValue(
    theme.sizes.sm,
    theme.sizes.xs,
    isDesktop,
    isTablet
  );
  const lineHeight = Math.max(fontSize, Math.round(fontSize * 1.3));

  return StyleSheet.create({
    container: {
      alignSelf: 'flex-start',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      paddingHorizontal,
      paddingVertical,
      borderRadius: theme.sizes.borderRadiusRounded,
      overflow: 'hidden',
      flexShrink: 1,
    },
    label: {
      fontFamily: theme.fontFamily,
      fontSize,
      lineHeight,
      fontWeight: '400',
      flexShrink: 1,
    },
  });
};
