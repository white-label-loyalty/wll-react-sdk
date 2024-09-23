import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { Variant } from '../../../types/theme';
import { createVariantSystem } from '../../../utils/variant';

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant: Variant;
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 200,
  },
  buttonInner: {
    paddingHorizontal: 14,
    paddingVertical: 9,
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

const useButtonStyles = createVariantSystem(styles.button, (theme) => ({
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

const useTextStyles = createVariantSystem(styles.text, (theme) => ({
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

const Button: React.FC<ButtonProps> = ({ title, onPress, variant }) => {
  const { theme } = useWllSdk();
  const buttonStyle = useButtonStyles(theme, variant);
  const textStyle = useTextStyles(theme, variant);

  return (
    <TouchableOpacity
      style={[buttonStyle, { borderRadius: theme.sizes.borderRadiusButton }]}
      onPress={onPress}
    >
      <View style={styles.buttonInner}>
        <Text style={[textStyle, { fontSize: 12 }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
