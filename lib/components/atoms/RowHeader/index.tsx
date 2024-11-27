import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useResponsive } from '../../../hooks/useResponsive';
import { getResponsiveValue } from '../../../utils/responsiveHelper';

type RowHeaderProps = {
  children: React.ReactNode;
  className?: string;
} & React.ComponentProps<typeof View>;

const RowHeader: React.FC<RowHeaderProps> = ({ children, style, ...props }) => {
  const { isDesktop, isTablet } = useResponsive();

  const dynamicStyles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: getResponsiveValue(8, 4, isDesktop, isTablet),
    },
  });

  return (
    <View style={[dynamicStyles.header, style]} {...props}>
      {children}
    </View>
  );
};

export default RowHeader;
