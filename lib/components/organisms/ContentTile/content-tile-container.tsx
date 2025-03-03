import React from 'react';
import { WithChildren } from '../../../types/helpers';
import { BaseTile } from '../../atoms';

export const ContentTileContainer = ({
  children,
}: WithChildren): JSX.Element => (
  <BaseTile.Container>{children}</BaseTile.Container>
);
