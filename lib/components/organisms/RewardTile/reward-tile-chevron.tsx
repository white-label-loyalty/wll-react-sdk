import React, { FC } from 'react';
import { Icon } from '../../atoms';
import { useWllSdk } from '../../../context/WllSdkContext';

export const RewardTileChevron: FC = () => {
  const { theme } = useWllSdk();
  return <Icon name="ChevronRight" color={theme.derivedSurfaceText[20]} />;
};
