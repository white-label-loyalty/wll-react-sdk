import * as LucideIcons from 'lucide-react';
import * as React from 'react';
import { View, ViewProps } from 'react-native';

type IconName = keyof typeof LucideIcons;

type IconProps = {
  name: IconName;
  color?: string;
  size?: number;
  strokeWidth?: number;
} & Omit<ViewProps, 'style'>;

const Icon = ({
  name,
  color = 'black',
  size = 24,
  strokeWidth = 2,
  ...props
}: IconProps): JSX.Element | null => {
  const LucideIcon = LucideIcons[name] as React.ElementType;

  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found in Lucide icons`);
    return null;
  }

  return (
    <View {...props}>
      <LucideIcon color={color} size={size} strokeWidth={strokeWidth} />
    </View>
  );
};

export default Icon;
