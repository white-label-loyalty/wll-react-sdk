import React, { ReactNode } from 'react';
import { BaseTile } from '../../atoms';

export const ContentTileContainer = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => <BaseTile.Container>{children}</BaseTile.Container>;
