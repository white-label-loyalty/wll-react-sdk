/* istanbul ignore file */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GRID_GAP } from '../../../constants/grid';
import { useTileSize } from '../../../hooks/useTileSize';
import { Tile, TileType } from '../../../types/tile';
import {
  BadgeTile,
  BannerTile,
  ContentTile,
  PointsTile,
  RewardCategoryTile,
  RewardTile,
  TierTileUpdated,
} from '../../organisms';

type TileContainerProps = {
  tiles: Tile[];
};

const TILE_COMPONENTS: Record<TileType, React.ComponentType<{ tile: Tile }>> = {
  [TileType.Content]: ContentTile,
  [TileType.Badge]: BadgeTile,
  [TileType.Tier]: TierTileUpdated,
  [TileType.Points]: PointsTile,
  [TileType.Reward]: RewardTile,
  [TileType.RewardCategory]: RewardCategoryTile,
  [TileType.Banner]: BannerTile,
};

/**
 * TileContainer component to render a list of tiles with proper layout and spacing.
 */
const TileContainer = ({ tiles }: TileContainerProps): JSX.Element => {
  return (
    <View style={styles.container} testID="tile-container">
      {tiles.map((tile, index) => {
        const TileComponent = TILE_COMPONENTS[tile.type!];
        const { isHalfSize } = useTileSize(tile);

        return (
          <View
            key={tile.id}
            style={[
              styles.tileContainer,
              isHalfSize && styles.halfTileContainer,
              index > 0 && { marginTop: GRID_GAP },
            ]}
          >
            {TileComponent ? <TileComponent tile={tile} /> : null}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  tileContainer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '100%',
    width: '100%',
  },
  halfTileContainer: {
    flexBasis: '50%',
    height: '50%',
  },
});

export default TileContainer;
