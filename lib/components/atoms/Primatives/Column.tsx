import { View } from 'react-native';
import { LayoutProps, alignMap, justifyMap } from '.';
import { useResponsive } from '../../../hooks/useResponsive';
import { useResponsiveValue } from '../../../utils/responsiveHelper';

export const Column: React.FC<LayoutProps> = ({
  children,
  justify = 'start',
  align = 'stretch',
  style,
}) => {
  const { isDesktop, isTablet } = useResponsive();

  return (
    <View
      style={[
        {
          flex: 1,
          flexDirection: 'column',
          justifyContent: justifyMap[justify],
          alignItems: alignMap[align],
          paddingHorizontal: useResponsiveValue(12, 8, isDesktop, isTablet),
          paddingBottom: useResponsiveValue(12, 8, isDesktop, isTablet),
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};
