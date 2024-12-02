import React, { FC } from 'react';
import { Tile } from '../../../types/tile';
import { BaseTile, Row, Column } from '../../atoms';

import { RewardTileChevron } from './reward-tile-chevron';
import { RewardTileDescription } from './reward-tile-description';
import { RewardTileMedia } from './reward-tile-media';
import { RewardTilePoints } from './reward-tile-points';
import { RewardTileTitle } from './reward-tile-title';

type RewardTileProps = {
  tile: Tile;
};

const RewardTile: FC<RewardTileProps> & {
  Media: typeof RewardTileMedia;
  Title: typeof RewardTileTitle;
  Description: typeof RewardTileDescription;
  Points: typeof RewardTilePoints;
  Chevron: typeof RewardTileChevron;
} = ({ tile }) => {
  return (
    <BaseTile tile={tile}>
      <RewardTile.Media />
      <Column>
        <Row justify="between" align="center">
          <RewardTile.Title />
          <RewardTile.Chevron />
        </Row>
        <RewardTile.Description />
        <RewardTile.Points />
      </Column>
    </BaseTile>
  );
};

RewardTile.Media = RewardTileMedia;
RewardTile.Title = RewardTileTitle;
RewardTile.Description = RewardTileDescription;
RewardTile.Points = RewardTilePoints;
RewardTile.Chevron = RewardTileChevron;

export default RewardTile;
