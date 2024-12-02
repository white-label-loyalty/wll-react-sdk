import React, { FC } from 'react';
import { ImagePropsNoSource } from '../../../types/common';
import { Tile } from '../../../types/tile';
import { BaseTile } from '../../atoms';
import { Column } from '../../atoms';

import { BadgeTileDateEarned } from './badge-tile-date-earned';
import { BadgeTileDescription } from './badge-tile-description';
import { BadgeTileMedia } from './badge-tile-media';
import { BadgeTileStatus } from './badge-tile-status';
import { BadgeTileTitle } from './badge-tile-title';
import { View } from 'react-native';

type BadgeTileProps = {
  tile: Tile;
};

export type BadgeTileMediaProps = ImagePropsNoSource & {
  children?: React.ReactNode;
};

type BadgeTileComponent = FC<BadgeTileProps> & {
  Media: FC<BadgeTileMediaProps>;
  Content: FC;
  Title: FC;
  Description: FC;
  DateEarned: FC;
  Status: FC;
};

const BadgeTileMain: FC<BadgeTileProps> = ({ tile }) => {
  if (!tile) return null;

  return (
    <BaseTile tile={tile}>
      <BadgeTile.Media>
        <BadgeTile.Status />
      </BadgeTile.Media>
      <Column justify="between" align="start">
        <View>
          <BadgeTile.Title />
          <BadgeTile.Description />
        </View>
        <BadgeTile.DateEarned />
      </Column>
    </BaseTile>
  );
};

export const BadgeTile = BadgeTileMain as BadgeTileComponent;

BadgeTile.Media = BadgeTileMedia;
BadgeTile.Title = BadgeTileTitle;
BadgeTile.Description = BadgeTileDescription;
BadgeTile.DateEarned = BadgeTileDateEarned;
BadgeTile.Status = BadgeTileStatus;

export default BadgeTile;
