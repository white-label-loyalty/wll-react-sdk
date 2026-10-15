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

type AriaLive = 'polite' | 'assertive' | 'off';

type LiveRegionMapping = {
  native: 'none' | 'polite' | 'assertive';
  web: 'off' | 'polite' | 'assertive';
};

export type ChipProps = {
  label: string;
  variant?: StatusVariant;
  role?: AccessibilityRole | 'status';
  ariaLive?: AriaLive;
  accessibilityLabel?: string;
  testID?: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  /**
   * Maximum number of lines the label may wrap onto before truncating.
   * Defaults to 2 so long, tenant-configured labels wrap onto a second row
   * and stay inside the parent (e.g. a badge tile) instead of overflowing.
   * Pass 1 to force a single line with tail truncation.
   */
  numberOfLines?: number;
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
  role = 'text',
  ariaLive = 'polite',
  accessibilityLabel,
  testID,
  style,
  labelStyle,
  numberOfLines = 2,
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
      <RNText
        style={[styles.label, variantStyles.label, labelStyle]}
        numberOfLines={numberOfLines}
        ellipsizeMode="tail"
        accessible={false}
        importantForAccessibility="no"
      >
        {label}
      </RNText>
    </View>
  );
};

export default Chip;
