import * as LucideIcons from 'lucide-react';
import React from 'react';
import { View } from 'react-native';

type IconName = keyof typeof LucideIcons;

type IconProps = {
  name: IconName;
  color?: string;
  size?: number;
  strokeWidth?: number;
};

const Icon: React.FC<IconProps> = ({
  name,
  color = 'black',
  size = 24,
  strokeWidth = 2,
  ...props
}) => {
  const LucideIcon = LucideIcons[name];

  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found in Lucide icons`);
    return null;
  }

  return (
    <View {...props}>
      {/* @ts-ignore */}
      <LucideIcon color={color} size={size} strokeWidth={strokeWidth} />
    </View>
  );
};

export default Icon;
