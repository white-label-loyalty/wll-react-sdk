import React, { FC } from 'react';
import { View } from 'react-native';
import { LayoutProps, alignMap, justifyMap } from '.';
import { useResponsive } from '../../../context/responsive-context';
import { useWllSdk } from '../../../context/wll-sdk-context';
import { useResponsiveValue } from '../../../utils/responsive-helper';

export const Column: FC<LayoutProps> = ({
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
