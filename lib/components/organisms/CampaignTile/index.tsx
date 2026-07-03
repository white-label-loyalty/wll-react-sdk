import React from 'react';
import { View } from 'react-native';
import { CampaignTileConfig, Tile } from '../../../types/tile';
import { BaseTile, Layout, Row } from '../../atoms';
import { withTileFetching } from '../../hoc/withTileFetching';
import { CampaignTileDescription } from './campaign-tile-description';
import { CampaignTileMedia } from './campaign-tile-media';
import { CampaignTileProgress } from './campaign-tile-progress';
import { CampaignTileTitle } from './campaign-tile-title';
import { useCampaignTileStyles } from './styles';

type CampaignTileProps = {
  tile: Tile;
};

/**
 * Helper function to determine if the tile should display artwork only.
 *
 * @param configuration - The configuration object of the tile.
 * @returns `true` if the tile should display artwork only.
 */

const isArtworkOnly = (configuration?: CampaignTileConfig): boolean => {
  if (!configuration) return false;
  return !configuration.showDetails;
};

/**
 * The CampaignTile component renders a tile displaying campaign progress.
 * It shows a campaign image, title, description, and a progress bar
 * indicating the user's current progress towards the campaign goal.
 *
 * If progress is null, the progress bar is hidden completely.
 * If showDetails is false, only the artwork is displayed.
 *
 * @param {CampaignTileProps} props - Component props
 * @param {Tile} props.tile - The tile data to render
 * @returns React.ReactElement or null if tile is inactive or missing configuration
 */

const CampaignTileRoot = ({
  tile,
}: CampaignTileProps): React.ReactElement | null => {
  const styles = useCampaignTileStyles();

  if (!tile || !tile.active || !tile.configuration) return null;

  const configuration = tile.configuration as CampaignTileConfig;
  const { progress } = configuration;
  const artworkOnly = isArtworkOnly(configuration);

  return (
    <BaseTile tile={tile}>
      <CampaignTile.Media isArtworkOnly={artworkOnly} />
      {!artworkOnly && (
        <Layout>
          <Row justify="between" align="center" style={styles.titleRow}>
            <CampaignTile.Title />
          </Row>
          <View style={{ width: '100%', maxWidth: '100%', minWidth: 0 }}>
            <CampaignTile.Description />
          </View>
          <Row justify="between" align="center" style={styles.titleRow}>
            <CampaignTile.Progress progress={progress} />
          </Row>
        </Layout>
      )}
    </BaseTile>
  );
};

/**
 * The CampaignTile component with subcomponents attached.
 */

export const CampaignTile = Object.assign(CampaignTileRoot, {
  Media: CampaignTileMedia,
  Title: CampaignTileTitle,
  Description: CampaignTileDescription,
  Progress: CampaignTileProgress,
});

export default withTileFetching(CampaignTile);
