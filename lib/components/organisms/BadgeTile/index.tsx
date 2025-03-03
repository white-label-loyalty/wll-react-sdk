import React from 'react';
import { Tile, TileHeight } from '../../../types/tile';
import { BaseTile, Layout, Spacer } from '../../atoms';
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
 * @returns JSX.Element or null if tile is not active or tileHeight is not full.
 * This component renders a badge tile with optional media, status, title, description, and date earned.
 */
const BadgeTileRoot = ({ tile }: BadgeTileProps): JSX.Element | null => {
  if (!tile || tile.tileHeight !== TileHeight.Full || !tile.active) return null;

  return (
    <BaseTile tile={tile}>
      <BadgeTile.Media>
        <BadgeTile.Status />
      </BadgeTile.Media>

      <Layout justify="between" align="start">
        <BadgeTile.Title />
        <BadgeTile.Description />
        <Spacer />
        <BadgeTile.DateEarned />
      </Layout>
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
