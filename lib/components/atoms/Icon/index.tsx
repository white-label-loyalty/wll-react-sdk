/* istanbul ignore file */
import * as LucideReactIcons from 'lucide-react';
import * as React from 'react';
import { Platform, View, ViewProps } from 'react-native';

let LucideReactNativeIcons: any;
if (Platform.OS !== 'web') {
  // This dynamic import pattern helps with tree-shaking for web builds
  try {
    LucideReactNativeIcons = require('lucide-react-native');
  } catch (e) {
    console.warn(
      'lucide-react-native is not installed. Icons may not render correctly on native platforms.'
    );
  }
}

type IconName = keyof typeof LucideReactIcons;

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
}: IconProps): React.ReactElement | null => {
  // Choose the appropriate icon library based on platform
  const iconLib =
    Platform.OS === 'web' ? LucideReactIcons : LucideReactNativeIcons;

  if (!iconLib) {
    console.warn('Icon library not available for this platform');
    return null;
  }

  const LucideIcon = iconLib[name] as React.ElementType;

  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found in Lucide icons`);
    return null;
  }

  if (Platform.OS === 'web') {
    return (
      <View {...props}>
        <LucideIcon color={color} size={size} strokeWidth={strokeWidth} />
      </View>
    );
  } else {
    return (
      <View {...props}>
        <LucideIcon color={color} size={size} strokeWidth={strokeWidth} />
      </View>
    );
  }
};

export default Icon;
