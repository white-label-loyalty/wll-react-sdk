import React from 'react';
import { Tile } from '../../../types/tile';
import { BaseTile, Column, Spacer } from '../../atoms';
import { withTileFetching } from '../../hoc/withTileFetching';
import { BadgeTileDateEarned } from './badge-tile-date-earned';
import { BadgeTileDescription } from './badge-tile-description';
import { BadgeTileMedia } from './badge-tile-media';
import { BadgeTileStatus } from './badge-tile-status';
import { BadgeTileTitle } from './badge-tile-title';

type BadgeTileProps = {
  tile: Tile;
};

/**
 * The main BadgeTile component.
 *
 * This component renders a badge tile with optional media, status, title, description, and date earned.
 */
const BadgeTileRoot = ({ tile }: BadgeTileProps): JSX.Element | null => {
  if (!tile) return null;

  return (
    <BaseTile tile={tile}>
      <BadgeTile.Media>
        <BadgeTile.Status />
      </BadgeTile.Media>

      <Column justify="between" align="start">
        <BadgeTile.Title />
        <BadgeTile.Description />
        <Spacer />
        <BadgeTile.DateEarned />
      </Column>
    </BaseTile>
  );
};

/**
 * The BadgeTile component with subcomponents attached.
 */
export const BadgeTile = Object.assign(BadgeTileRoot, {
  Media: BadgeTileMedia,
  Title: BadgeTileTitle,
  Description: BadgeTileDescription,
  DateEarned: BadgeTileDateEarned,
  Status: BadgeTileStatus,
});

export default withTileFetching(BadgeTile);
