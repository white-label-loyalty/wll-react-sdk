import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { Variant } from '../../../types/theme';
import { createResponsiveStyle } from '../../../utils/responsiveHelper';
import { createVariantSystem } from '../../../utils/variant';

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant: Variant;
};

const styles = StyleSheet.create({
  button: createResponsiveStyle({
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: [12, 12, 24],
    paddingVertical: [12, 12, 12],
    alignSelf: 'flex-start',
  }),
  // @ts-ignore
  text: createResponsiveStyle({
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: [12, 12, 18],
  }),
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
      <Text
        style={[
          textStyle,
          {
            fontWeight: '700',
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
