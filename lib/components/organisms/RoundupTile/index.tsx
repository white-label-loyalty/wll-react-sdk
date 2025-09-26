import React from 'react';
import { View } from 'react-native';
import { useTileSize } from '../../../hooks/useTileSize';
import { RoundupTileConfig, Tile } from '../../../types/tile';
import { BaseTile, Column, Row } from '../../atoms';
import { withTileFetching } from '../../hoc/withTileFetching';
import { RoundupTileFormattedPoints } from './roundup-tile-formatted-points';
import { RoundupTileMedia } from './roundup-tile-media';
import { RoundupTileTitle } from './roundup-tile-title';
import { useRoundupTileStyles } from './styles';
import { RoundupTileChevron } from './roundup-tile-chevron';
type RoundupTileProps = {
  tile: Tile;
};

/**
 * The PointsTile component renders a tile with media, title, and formatted points.
 *
 * @param props - Component props
 * @returns React.ReactElement or null if tile is inactive or missing required props
 */

const RoundupTileRoot = ({ tile }: RoundupTileProps): React.ReactElement | null => {
  if (!tile || !tile.active || !tile.configuration) return null;

  const config = tile.configuration as RoundupTileConfig;
  if (!config) return null;

  const { isFullSize } = useTileSize(tile);
  const styles = useRoundupTileStyles(isFullSize);

  return (
    <BaseTile tile={tile}>
      {isFullSize && <RoundupTile.Media isFullSize />}
      <View style={styles.container}>
        <Row style={styles.contentContainer}>
          <Column style={styles.contentColumn}>
            <RoundupTile.Title />
            <RoundupTile.Points />
          </Column>
          <Column style={styles.mediaColumn}>
            {!isFullSize && <RoundupTile.Media isFullSize={false} />}
            <RoundupTile.Chevron />
          </Column>
        </Row>
      </View>
    </BaseTile>
  );
};

/**
 * The PointsTile component with subcomponents attached.
 */

export const RoundupTile = Object.assign(RoundupTileRoot, {
  Title: RoundupTileTitle,
  Points: RoundupTileFormattedPoints,
  Media: RoundupTileMedia,
  Chevron: RoundupTileChevron,
});

export default withTileFetching(RoundupTile);
