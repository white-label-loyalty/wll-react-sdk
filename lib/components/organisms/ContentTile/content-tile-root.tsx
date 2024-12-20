import React, { ReactNode } from 'react';
import { BaseTile } from '../../atoms';

export const ContentTileRoot = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => <BaseTile.Root>{children}</BaseTile.Root>;
