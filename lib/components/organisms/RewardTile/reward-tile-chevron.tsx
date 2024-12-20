import React from 'react';
import { useWllSdk } from '../../../context/WllSdkContext';
import { Icon } from '../../atoms';

export const RewardTileChevron = (): JSX.Element => {
  const { theme } = useWllSdk();
  return <Icon name="ChevronRight" color={theme.derivedSurfaceText[20]} />;
};
