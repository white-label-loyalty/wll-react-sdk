/* istanbul ignore file */
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { Size, Variant } from '../../../types/theme';
import { Icon, ProgressBar } from '../../atoms';

export type ProgressIndicatorProps = {
  currentPoints: number;
  maxPoints: number;
  variant?: Variant;
  height?: Size;
  attained?: boolean;
};

export const ProgressIndicator = ({
  currentPoints,
  maxPoints,
  variant = 'primary',
  height = 'sm',
  attained = false,
}: ProgressIndicatorProps): React.ReactElement => {
  const { theme } = useWllSdk();
  const percentage = attained ? 100 : (currentPoints / maxPoints) * 100;
  const isComplete = percentage >= 100 || attained;
  let progressVariant: Variant = variant;

  if (isComplete) {
    progressVariant = 'primary';
  } else if (percentage < 50) {
    progressVariant = 'accent';
  }

  return (
    <View style={styles.container}>
      <ProgressBar
        percentage={percentage}
        variant={progressVariant}
        height={height}
      />
      <View style={[styles.circleContainer]}>
        <View
          style={[
            styles.circle,
            {
              borderColor: theme.derivedSurface[20],
              backgroundColor: isComplete ? theme.primary : theme.surface,
              borderWidth: isComplete ? 0 : 4,
            },
          ]}
        >
          {isComplete && (
            <Icon name="Check" size={12} color={theme.primaryText} />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleContainer: {
    position: 'absolute',
    right: 0,
  },
  circle: {
    width: 21,
    height: 21,
    borderRadius: 9999,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProgressIndicator;
