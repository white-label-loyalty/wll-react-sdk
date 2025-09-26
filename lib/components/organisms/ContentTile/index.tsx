import React from 'react';
import { ContentTileConfig, Tile } from '../../../types/tile';
import { BaseTile, Layout, Row } from '../../atoms';
import { withTileFetching } from '../../hoc/withTileFetching';
import { ContentTileChevron } from './content-tile-chevron';
import { ContentTileMedia } from './content-tile-media';
import { ContentTileSummary } from './content-tile-summary';
import { ContentTileTitle } from './content-tile-title';
import { useContentTileStyles } from './styles';

type ContentTileProps = {
  tile: Tile;
};

/**
 * Helper function to determine if the tile should display artwork only.
 *
 * @param configuration - The configuration object of the tile.
 * @returns `true` if the tile should display artwork only.
 */
const isArtworkOnly = (configuration?: ContentTileConfig): boolean => {
  if (!configuration) return false;
  return !configuration.title && !configuration.body;
};

/**
 * The ContentTile component renders a tile with media, title, summary, and a chevron.
 * This follows the same structure as RewardTile for consistent layout.
 *
 * @param {ContentTileProps} props - Component props
 * @param {Tile} props.tile - The tile data to render
 * @returns React.ReactElement or null if tile is inactive
 */
const ContentTileRoot = ({ tile }: ContentTileProps): React.ReactElement | null => {
  if (!tile || !tile.active || !tile.configuration) return null;

  const configuration = tile.configuration as ContentTileConfig;
  const hasArtwork = Boolean(configuration.artworkUrl);
  const styles = useContentTileStyles(hasArtwork);

  return (
    <BaseTile tile={tile}>
      <ContentTile.Media isArtworkOnly={isArtworkOnly(configuration)} />
      <Layout
        justify={hasArtwork ? 'start' : 'center'}
        style={{ paddingBottom: 0, marginBottom: 0 }}
      >
        <Row justify="between" align="center" style={styles.header}>
          <ContentTile.Title />
          <ContentTile.Chevron />
        </Row>
        <ContentTile.Summary />
      </Layout>
    </BaseTile>
  );
};

/**
 * The ContentTile component with subcomponents attached.
 */
export const ContentTile = Object.assign(ContentTileRoot, {
  Media: ContentTileMedia,
  Title: ContentTileTitle,
  Summary: ContentTileSummary,
  Chevron: ContentTileChevron,
});

export default withTileFetching(ContentTile);
