import React from 'react';
import { View } from 'react-native';

type FlexBoxProps = {
  children: React.ReactNode;
};

export const FlexBox = ({ children }: FlexBoxProps) => {
  return <View style={{ flex: 1 }}>{children}</View>;
};
