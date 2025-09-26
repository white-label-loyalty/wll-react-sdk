import React from 'react';
import { Pressable } from 'react-native';
import { useWllSdk } from '../../../context/WllSdkContext';
import { Icon } from '../../atoms';
import { useNavButtonStyles } from './styles';

type CarouselNavButtonProps = {
  direction: 'left' | 'right';
  onPress: () => void;
};

export const CarouselNavButton = ({
  direction,
  onPress,
}: CarouselNavButtonProps): React.ReactElement => {
  const { theme } = useWllSdk();
  const isRight = direction === 'right';
  const styles = useNavButtonStyles();

  return (
    <Pressable
      style={[
        styles.navButton,
        isRight ? styles.navButtonRight : styles.navButtonLeft,
        { backgroundColor: theme.background },
      ]}
      onPress={onPress}
      accessibilityLabel={`${isRight ? 'Next' : 'Previous'} slide`}
      role="button"
    >
      <Icon
        name={isRight ? 'ArrowRight' : 'ArrowLeft'}
        size={20}
        color={theme.primary}
      />
    </Pressable>
  );
};

export default CarouselNavButton;
