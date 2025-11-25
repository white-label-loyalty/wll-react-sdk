import * as React from 'react';
import { Pressable, Text } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { Variant } from '../../../types/theme';
import { createVariantSystem } from '../../../utils/variant';
import { useButtonDynamicStyles } from './styles';

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant: Variant;
  disabled?: boolean;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  icon?: React.ReactNode;
  testID?: string;
};

const useButtonStyles = createVariantSystem({}, (theme) => ({
  primary: {
    backgroundColor: theme.primary,
  },
  accent: {
    backgroundColor: theme.accent,
  },
  positive: {
    backgroundColor: theme.positive,
  },
  negative: {
    backgroundColor: theme.negative,
  },
}));

const useTextStyles = createVariantSystem({}, (theme) => ({
  primary: {
    color: theme.primaryText,
  },
  accent: {
    color: theme.accentText,
  },
  positive: {
    color: theme.positiveText,
  },
  negative: {
    color: theme.negativeText,
  },
}));

const Button = ({
  title,
  onPress,
  variant,
  disabled = false,
  accessibilityLabel,
  accessibilityHint,
  icon,
  testID,
}: ButtonProps): React.ReactElement => {
  const { theme } = useWllSdk();
  const buttonStyle = useButtonStyles(theme, variant);
  const textStyle = useTextStyles(theme, variant);
  const styles = useButtonDynamicStyles();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        buttonStyle,
        { borderRadius: theme.sizes.borderRadiusButton },
        disabled && { opacity: 0.5 },
        pressed && { opacity: 0.7 },
      ]}
      onPress={onPress}
      disabled={disabled}
      accessible={true}
      role="button"
      accessibilityLabel={accessibilityLabel || title}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled }}
      testID={testID}
    >
      {icon && icon}
      {title && <Text style={[styles.text, textStyle]}>{title}</Text>}
    </Pressable>
  );
};

export default Button;
