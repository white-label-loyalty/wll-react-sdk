import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { useResponsive } from '../../../hooks/useResponsive';
import { Variant } from '../../../types/theme';
import { useResponsiveValue } from '../../../utils/responsiveHelper';
import { createVariantSystem } from '../../../utils/variant';

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant: Variant;
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

const Button: React.FC<ButtonProps> = ({ title, onPress, variant }) => {
  const { theme } = useWllSdk();
  const { isDesktop, isTablet } = useResponsive();
  const buttonStyle = useButtonStyles(theme, variant);
  const textStyle = useTextStyles(theme, variant);

  const dynamicStyles = StyleSheet.create({
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: useResponsiveValue(24, 12, isDesktop, isTablet),
      paddingVertical: 12,
      alignSelf: 'flex-start',
    },
    text: {
      textAlign: 'center',
      textTransform: 'uppercase',
      fontSize: useResponsiveValue(18, 12, isDesktop, isTablet),
      fontWeight: '700',
    },
  });

  return (
    <TouchableOpacity
      style={[
        dynamicStyles.button,
        buttonStyle,
        { borderRadius: theme.sizes.borderRadiusButton },
      ]}
      onPress={onPress}
    >
      <Text style={[dynamicStyles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
