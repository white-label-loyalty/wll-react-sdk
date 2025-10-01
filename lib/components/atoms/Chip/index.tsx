import React from 'react';
import {
  AccessibilityRole,
  StyleProp,
  Text as RNText,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { StatusVariant } from '../../../types/tile';
import { useChipStyles } from './styles';

type ChipLabel = React.ReactNode;
type AriaLive = 'polite' | 'assertive' | 'off';

type LiveRegionMapping = {
  native: 'none' | 'polite' | 'assertive';
  web: 'off' | 'polite' | 'assertive';
};

export type ChipProps = {
  label: ChipLabel;
  variant?: StatusVariant;
  role?: AccessibilityRole | 'status';
  ariaLive?: AriaLive;
  accessibilityLabel?: string;
  testID?: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
};

const mapLiveRegion = (ariaLive: AriaLive = 'polite'): LiveRegionMapping => {
  switch (ariaLive) {
    case 'assertive':
      return { native: 'assertive', web: 'assertive' };
    case 'off':
      return { native: 'none', web: 'off' };
    case 'polite':
    default:
      return { native: 'polite', web: 'polite' };
  }
};

const Chip = ({
  label,
  variant = StatusVariant.PRIMARY,
  role = 'status',
  ariaLive = 'polite',
  accessibilityLabel,
  testID,
  style,
  labelStyle,
}: ChipProps): React.ReactElement => {
  const styles = useChipStyles();
  const { theme } = useWllSdk();

  const variantStyles = React.useMemo(() => {
    switch (variant) {
      case StatusVariant.GREEN:
        return {
          container: { backgroundColor: '#d1f0e1' },
          label: { color: '#128e55' },
        };
      case StatusVariant.GREY:
        return {
          container: { backgroundColor: '#dadde0' },
          label: { color: '#666666' },
        };
      case StatusVariant.PRIMARY:
      default:
        return {
          container: {
            backgroundColor: theme.alphaDerivedPrimary?.[10] ?? theme.primary,
          },
          label: { color: theme.primary },
        };
    }
  }, [theme, variant]);

  const computedAccessibilityLabel =
    accessibilityLabel ?? (typeof label === 'string' ? label : undefined);
  const { native: accessibilityLiveRegion, web: ariaLiveValue } =
    mapLiveRegion(ariaLive);
  const isSimpleLabel = typeof label === 'string';
  const isIndividuallyAccessible = computedAccessibilityLabel !== undefined;

  return (
    <View
      style={[styles.container, variantStyles.container, style]}
      accessible={isIndividuallyAccessible}
      accessibilityRole={role as AccessibilityRole}
      accessibilityLiveRegion={accessibilityLiveRegion}
      accessibilityLabel={computedAccessibilityLabel}
      aria-live={ariaLiveValue}
      testID={testID}
    >
      {isSimpleLabel ? (
        <RNText
          style={[styles.label, variantStyles.label, labelStyle]}
          numberOfLines={1}
          ellipsizeMode="tail"
          accessible={false}
          importantForAccessibility="no"
        >
          {label}
        </RNText>
      ) : (
        label
      )}
    </View>
  );
};

export default Chip;
