import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
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
  testID,
}: ButtonProps): JSX.Element => {
  const { theme } = useWllSdk();
  const buttonStyle = useButtonStyles(theme, variant);
  const textStyle = useTextStyles(theme, variant);
  const styles = useButtonDynamicStyles();

  return (
    <TouchableOpacity
      style={[
        styles.button,
        buttonStyle,
        { borderRadius: theme.sizes.borderRadiusButton },
        disabled && { opacity: 0.5 },
      ]}
      onPress={onPress}
      disabled={disabled}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || title}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled }}
      testID={testID}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
