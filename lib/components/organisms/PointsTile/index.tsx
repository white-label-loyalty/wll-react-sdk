import React from 'react';
import { View } from 'react-native';
import { useTileSize } from '../../../hooks/useTileSize';
import { PointsTileConfig, Tile } from '../../../types/tile';
import { BaseTile, Column, Row } from '../../atoms';
import { withTileFetching } from '../../hoc/withTileFetching';
import { PointsTileFormattedPoints } from './points-tile-formatted-points';
import { PointsTileMedia } from './points-tile-media';
import { PointsTileTitle } from './points-tile-title';
import { usePointsTileStyles } from './styles';
import { PointsTileChevron } from './points-tile-chevron';
type PointsTileProps = {
  tile: Tile;
};

/**
 * The PointsTile component renders a tile with media, title, and formatted points.
 *
 * @param props - Component props
 * @returns React.ReactElement or null if tile is inactive or missing required props
 */

const PointsTileRoot = ({ tile }: PointsTileProps): React.ReactElement | null => {
  if (!tile || !tile.active || !tile.configuration) return null;

  const config = tile.configuration as PointsTileConfig;
  if (!config) return null;

  const { isFullSize } = useTileSize(tile);
  const styles = usePointsTileStyles(isFullSize);

  return (
    <BaseTile tile={tile}>
      {isFullSize && <PointsTile.Media isFullSize />}
      <View style={styles.container}>
        <Row style={styles.contentContainer}>
          <Column style={styles.contentColumn}>
            <PointsTile.Title />
            <PointsTile.Points />
          </Column>
          <Column style={styles.mediaColumn}>
            {!isFullSize && <PointsTile.Media isFullSize={false} />}
            <PointsTile.Chevron />
          </Column>
        </Row>
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
  Chevron: PointsTileChevron,
});

export default withTileFetching(PointsTile);
