import React, { FC } from 'react';
import { View } from 'react-native';
import { useTileSize } from '../../../hooks/useTileSize';
import { Tile } from '../../../types/tile';
import { BaseTile } from '../../atoms';
import { usePointsTileStyles } from './styles';

import { PointsTileFormattedPoints } from './points-tile-formatted-points';
import { PointsTileTitle } from './points-tile-title';
import { PointsTileMedia } from './points-tile-media';

type PointsTileProps = {
  tile: Tile;
};

const PointsTile: FC<PointsTileProps> & {
  Title: typeof PointsTileTitle;
  Points: typeof PointsTileFormattedPoints;
  Media: typeof PointsTileMedia;
} = ({ tile }) => {
  const { isFullSize } = useTileSize(tile);
  const styles = usePointsTileStyles(isFullSize);

  return (
    <BaseTile tile={tile}>
      {isFullSize && <PointsTile.Media isFullSize={isFullSize} />}
      <View style={styles.container}>
        {!isFullSize && <PointsTile.Media isFullSize={isFullSize} />}
        <View style={styles.contentContainer}>
          <PointsTile.Title />
          <PointsTile.Points />
        </View>
      </View>
    </BaseTile>
  );
};

PointsTile.Title = PointsTileTitle;
PointsTile.Points = PointsTileFormattedPoints;
PointsTile.Media = PointsTileMedia;

export default PointsTile;
