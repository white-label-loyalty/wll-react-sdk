import React from 'react';
import { RewardTileConfig, Tile, TileHeight } from '../../../types/tile';
import { BaseTile, Layout, Row } from '../../atoms';
import { withTileFetching } from '../../hoc/withTileFetching';

import { RewardTileChevron } from './reward-tile-chevron';
import { RewardTileMedia } from './reward-tile-media';
import { RewardTilePoints } from './reward-tile-points';
import { RewardTileSummary } from './reward-tile-summary';
import { RewardTileTitle } from './reward-tile-title';
import { useRewardTileStyles } from './styles';

type RewardTileProps = {
  tile: Tile;
};

/**
 * Helper function to determine if the tile should display artwork only.
 *
 * @param configuration - The configuration object of the tile.
 * @returns `true` if the tile should display artwork only.
 */

const isArtworkOnly = (configuration?: RewardTileConfig): boolean => {
  if (!configuration) return false;
  return !configuration.showDetails;
};

/**
 * The RewardTile component renders a tile with media, title, summary, points, and a chevron.
 *
 * @param {RewardTileProps} props - Component props
 * @param {Tile} props.tile - The tile data to render
 * @returns JSX.Element or null if tile is inactive or not a full-height tile
 */

const RewardTileRoot = ({ tile }: RewardTileProps): JSX.Element | null => {
  const styles = useRewardTileStyles();

  if (
    !tile ||
    tile.tileHeight !== TileHeight.Full ||
    !tile.active ||
    !tile.configuration
  )
    return null;

  const configuration = tile.configuration as RewardTileConfig;

  return (
    <BaseTile tile={tile}>
      <RewardTile.Media isArtworkOnly={isArtworkOnly(configuration)} />
      <Layout>
        <Row justify="between" align="center" style={styles.header}>
          <RewardTile.Title />
          <RewardTile.Chevron />
        </Row>
        <RewardTile.Summary />
        <RewardTile.Points />
      </Layout>
    </BaseTile>
  );
};

/**
 * The RewardTile component with subcomponents attached.
 */

export const RewardTile = Object.assign(RewardTileRoot, {
  Media: RewardTileMedia,
  Title: RewardTileTitle,
  Summary: RewardTileSummary,
  Points: RewardTilePoints,
  Chevron: RewardTileChevron,
});

export default withTileFetching(RewardTile);
