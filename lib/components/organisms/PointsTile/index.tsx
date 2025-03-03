import React from 'react';
import { View } from 'react-native';
import { useTileSize } from '../../../hooks/useTileSize';
import { PointsTileConfig, Tile } from '../../../types/tile';
import { BaseTile, Column } from '../../atoms';
import { withTileFetching } from '../../hoc/withTileFetching';
import { PointsTileFormattedPoints } from './points-tile-formatted-points';
import { PointsTileMedia } from './points-tile-media';
import { PointsTileTitle } from './points-tile-title';
import { usePointsTileStyles } from './styles';

type PointsTileProps = {
  tile: Tile;
};

/**
 * The PointsTile component renders a tile with media, title, and formatted points.
 *
 * @param props - Component props
 * @returns JSX.Element or null if tile is inactive or missing required props
 */
const PointsTileRoot = ({ tile }: PointsTileProps): JSX.Element | null => {
  if (!tile || !tile.active || !tile.configuration) return null;

  const config = tile.configuration as PointsTileConfig;
  if (!config) return null;

  const { isFullSize } = useTileSize(tile);
  const styles = usePointsTileStyles(isFullSize);

  return (
    <BaseTile tile={tile}>
      {isFullSize && <PointsTile.Media isFullSize />}
      <View style={styles.container}>
        {!isFullSize && <PointsTile.Media isFullSize={false} />}
        <Column style={styles.contentContainer}>
          <PointsTile.Title />
          <PointsTile.Points />
        </Column>
      </View>
    </BaseTile>
  );
};

/**
 * The PointsTile component with subcomponents attached.
 */
export const PointsTile = Object.assign(PointsTileRoot, {
  Title: PointsTileTitle,
  Points: PointsTileFormattedPoints,
  Media: PointsTileMedia,
});

export default withTileFetching(PointsTile);
