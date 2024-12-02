import React, { FC, ReactNode } from 'react';
import { BaseTile } from '../../atoms';

export const ContentTileRoot: FC<{ children: ReactNode }> = ({ children }) => (
  <BaseTile.Root>{children}</BaseTile.Root>
);
