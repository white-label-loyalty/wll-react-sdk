import React from 'react';
import { RewardTileConfig, Tile } from '../../../types/tile';
import { BaseTile, Layout } from '../../atoms';
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
const isArtworkOnly = (configuration: RewardTileConfig): boolean => {
  return !configuration.showDetails;
};

/**
 * The RewardTile component renders a tile with media, title, summary, points, and a chevron.
 *
 * @param tile - The tile data to render.
 */
const RewardTileRoot = ({ tile }: RewardTileProps): JSX.Element | null => {
  const styles = useRewardTileStyles();
  if (!tile) return null;

  const { configuration } = tile as { configuration: RewardTileConfig };

  return (
    <BaseTile tile={tile}>
      <RewardTile.Media isArtworkOnly={isArtworkOnly(configuration)} />

      <Layout direction="column">
        <Layout
          direction="row"
          justify="between"
          align="center"
          style={styles.header}
        >
          <RewardTile.Title />
          <RewardTile.Chevron />
        </Layout>
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
