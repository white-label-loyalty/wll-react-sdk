import { View } from 'react-native';
import { LayoutProps, alignMap, justifyMap } from '.';
import { useResponsive } from '../../../hooks/useResponsive';
import { getResponsiveValue } from '../../../utils/responsiveHelper';

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
          paddingHorizontal: getResponsiveValue(12, 8, isDesktop, isTablet),
          paddingBottom: getResponsiveValue(12, 8, isDesktop, isTablet),
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};
