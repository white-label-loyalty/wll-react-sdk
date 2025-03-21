import { StyleSheet } from 'react-native';
import { BUTTON_SIZE } from '../../../constants';
import { IS_MOBILE } from '../../../constants/device';
import { useWllSdk } from '../../../context/WllSdkContext';

export const useNavButtonStyles = () => {
  const { theme } = useWllSdk();
  const buttonSize = IS_MOBILE ? BUTTON_SIZE * 0.75 : BUTTON_SIZE;

  return StyleSheet.create({
    navButton: {
      position: 'absolute',
      top: '50%',
      transform: [{ translateY: -buttonSize / 2 }],
      width: buttonSize,
      height: buttonSize,
      borderRadius: buttonSize / 2,
      backgroundColor: theme.background,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
    },
    navButtonLeft: {
      left: -buttonSize / 2,
    },
    navButtonRight: {
      right: -buttonSize / 2,
    },
  });
};
