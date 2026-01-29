import React from 'react';
import { Tile, TileHeight } from '../../../types/tile';
import { BaseTile, Layout, Row } from '../../atoms';
import { withTileFetching } from '../../hoc/withTileFetching';

import { VenueTileChevron } from './venue-tile-chevron';
import { VenueTileMedia } from './venue-tile-media';
import { VenueTileDescription } from './venue-tile-description';
import { VenueTileTitle } from './venue-tile-title';
import { useVenueTileStyles } from './styles';

type VenueTileProps = {
  tile: Tile;
};

/**
 * The VenueTile component renders a tile with media, title, description, and a chevron.
 *
 * @param {VenueTileProps} props - Component props
 * @param {Tile} props.tile - The tile data to render
 */

const VenueTileRoot = ({ tile }: VenueTileProps): React.ReactElement | null => {
  const styles = useVenueTileStyles();

  if (
    !tile ||
    tile.tileHeight !== TileHeight.Full ||
    !tile.active ||
    !tile.configuration
  )
    return null;

  return (
    <BaseTile tile={tile}>
      <VenueTile.Media />
      <Layout>
        <Row justify="between" align="center" style={styles.header}>
          <VenueTile.Title />
          <VenueTile.Chevron />
        </Row>
        <VenueTile.Description />
      </Layout>
    </BaseTile>
  );
};

/**
 * The VenueTile component with subcomponents attached.
 */

export const VenueTile = Object.assign(VenueTileRoot, {
  Media: VenueTileMedia,
  Title: VenueTileTitle,
  Description: VenueTileDescription,
  Chevron: VenueTileChevron,
});

export default withTileFetching(VenueTile);
