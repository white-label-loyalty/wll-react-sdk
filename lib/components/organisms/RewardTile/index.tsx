import React from 'react';
import { View } from 'react-native';
import { RewardTileConfig, Tile, TileHeight } from '../../../types/tile';
import { BaseTile, Layout, Row } from '../../atoms';
import { withTileFetching } from '../../hoc/withTileFetching';

import { RewardTileChevron } from './reward-tile-chevron';
import { RewardTileMedia } from './reward-tile-media';
import { RewardTilePoints } from './reward-tile-points';
import { RewardTileStatus } from './reward-tile-status';
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
 * @returns React.ReactElement or null if tile is inactive or not a full-height tile
 */

const RewardTileRoot = ({
  tile,
}: RewardTileProps): React.ReactElement | null => {
  const styles = useRewardTileStyles();

  if (
    !tile ||
    tile.tileHeight !== TileHeight.Full ||
    !tile.active ||
    !tile.configuration
  )
    return null;

  const configuration = tile.configuration as RewardTileConfig;
  const artworkOnly = isArtworkOnly(configuration);
  const hasPoints =
    configuration.showPrice !== false &&
    configuration.price !== undefined &&
    configuration.price !== 0;
  const hasStatus =
    configuration.stockCapacity !== undefined &&
    configuration.stockConsumed !== undefined &&
    configuration.stockCapacity <= configuration.stockConsumed;
  const hasFooter = hasPoints || hasStatus;

  return (
    <BaseTile tile={tile}>
      <RewardTile.Media isArtworkOnly={artworkOnly} />
      {!artworkOnly && (
        <Layout>
          <Row justify="between" align="center" style={styles.header}>
            <RewardTile.Title />
            <RewardTile.Chevron />
          </Row>
          {/**
           * Ensure text wrapping works in constrained layouts (e.g., 50% width tiles on mobile).
           * React Native Web requires minWidth: 0 on flex children to allow shrink/wrap.
           */}
          <View style={{ width: '100%', maxWidth: '100%', minWidth: 0 }}>
            <RewardTile.Summary />
          </View>
          {hasFooter && (
            <Row justify="between" align="center" style={styles.footer}>
              <RewardTile.Points />
              <RewardTile.Status />
            </Row>
          )}
        </Layout>
      )}
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
  Status: RewardTileStatus,
});

export default withTileFetching(RewardTile);
