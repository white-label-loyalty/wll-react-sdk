import React, { FC } from 'react';
import { useWllSdk } from '../../../context/wll-sdk-context';
import { Icon } from '../../atoms';

export const RewardTileChevron: FC = () => {
  const { theme } = useWllSdk();
  return <Icon name="ChevronRight" color={theme.derivedSurfaceText[20]} />;
};
