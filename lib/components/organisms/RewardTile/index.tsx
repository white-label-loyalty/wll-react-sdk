import React, { FC } from 'react';
import { RewardTileConfig, Tile } from '../../../types/tile';
import { BaseTile, Row, Column } from '../../atoms';

import { RewardTileChevron } from './reward-tile-chevron';
import { RewardTileSummary } from './reward-tile-summary';
import { RewardTileMedia } from './reward-tile-media';
import { RewardTilePoints } from './reward-tile-points';
import { RewardTileTitle } from './reward-tile-title';

type RewardTileProps = {
  tile: Tile;
};

const RewardTile: FC<RewardTileProps> & {
  Media: typeof RewardTileMedia;
  Title: typeof RewardTileTitle;
  Summary: typeof RewardTileSummary;
  Points: typeof RewardTilePoints;
  Chevron: typeof RewardTileChevron;
} = ({ tile }) => {
  const { configuration } = tile;
  const { showDetails } = configuration as RewardTileConfig;
  return (
    <BaseTile tile={tile}>
      <RewardTile.Media isArtworkOnly={!showDetails} />

      <Column>
        <Row justify="between" align="center">
          <RewardTile.Title />
          <RewardTile.Chevron />
        </Row>
        <RewardTile.Summary />
        <RewardTile.Points />
      </Column>
    </BaseTile>
  );
};

RewardTile.Media = RewardTileMedia;
RewardTile.Title = RewardTileTitle;
RewardTile.Summary = RewardTileSummary;
RewardTile.Points = RewardTilePoints;
RewardTile.Chevron = RewardTileChevron;

export default RewardTile;
