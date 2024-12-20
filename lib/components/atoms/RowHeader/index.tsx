import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useResponsive } from '../../../hooks/useResponsive';
import { useResponsiveValue } from '../../../utils/responsiveHelper';

type RowHeaderProps = {
  children: React.ReactNode;
  className?: string;
} & React.ComponentProps<typeof View>;

const RowHeader = ({
  children,
  style,
  ...props
}: RowHeaderProps): JSX.Element => {
  const { isDesktop, isTablet } = useResponsive();
  const { theme } = useWllSdk();
  const dynamicStyles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: useResponsiveValue(
        theme.sizes.xxs,
        theme.sizes.xxxs,
        isDesktop,
        isTablet
      ),
    },
  });

  return (
    <View style={[dynamicStyles.header, style]} {...props}>
      {children}
    </View>
  );
};

export default RowHeader;
