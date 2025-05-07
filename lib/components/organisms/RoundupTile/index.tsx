import React from 'react';
import { View } from 'react-native';
import { useTileSize } from '../../../hooks/useTileSize';
import { RoundupTileConfig, Tile } from '../../../types/tile';
import { BaseTile, Column } from '../../atoms';
import { withTileFetching } from '../../hoc/withTileFetching';
import { RoundupTileFormattedPoints } from './roundup-tile-formatted-points';
import { RoundupTileMedia } from './roundup-tile-media';
import { RoundupTileTitle } from './roundup-tile-title';
import { useRoundupTileStyles } from './styles';

type RoundupTileProps = {
  tile: Tile;
};

/**
 * The RoundupTile component renders a tile with media, title, and formatted points.
 *
 * @param props - Component props
 * @returns JSX.Element or null if tile is inactive or missing required props
 */

const RoundupTileRoot = ({ tile }: RoundupTileProps): JSX.Element | null => {
  if (!tile || !tile.active || !tile.configuration) return null;

  const config = tile.configuration as RoundupTileConfig;
  if (!config) return null;

  const { isFullSize } = useTileSize(tile);
  const styles = useRoundupTileStyles(isFullSize);

  return (
    <BaseTile tile={tile}>
      {isFullSize && <RoundupTile.Media isFullSize />}
      <View style={styles.container}>
        {!isFullSize && <RoundupTile.Media isFullSize={false} />}
        <Column style={styles.contentContainer}>
          <RoundupTile.Title />
          <RoundupTile.Points />
        </Column>
      </View>
    </BaseTile>
  );
};

/**
 * The RoundupTile component with subcomponents attached.
 */

export const RoundupTile = Object.assign(RoundupTileRoot, {
  Title: RoundupTileTitle,
  Points: RoundupTileFormattedPoints,
  Media: RoundupTileMedia,
});

export default withTileFetching(RoundupTile);
