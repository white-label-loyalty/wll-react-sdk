import { View } from 'react-native';
import React from 'react';

type FlexBoxProps = {
  children: React.ReactNode;
};

export const FlexBox = ({ children }: FlexBoxProps) => {
  return <View style={{ flex: 1 }}>{children}</View>;
};
