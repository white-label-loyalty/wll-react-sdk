import { View } from 'react-native';
import { LayoutProps, alignMap, justifyMap } from '.';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useResponsive } from '../../../hooks/useResponsive';
import { useResponsiveValue } from '../../../utils/responsiveHelper';

export const Column: React.FC<LayoutProps> = ({
  children,
  justify = 'start',
  align = 'stretch',
  style,
}) => {
  const { isDesktop, isTablet } = useResponsive();
  const { theme } = useWllSdk();
  return (
    <View
      style={[
        {
          flex: 1,
          flexDirection: 'column',
          justifyContent: justifyMap[justify],
          alignItems: alignMap[align],
          paddingHorizontal: useResponsiveValue(
            theme.sizes.sm,
            theme.sizes.xxs,
            isDesktop,
            isTablet
          ),
          paddingBottom: useResponsiveValue(
            theme.sizes.sm,
            theme.sizes.xxs,
            isDesktop,
            isTablet
          ),
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};
