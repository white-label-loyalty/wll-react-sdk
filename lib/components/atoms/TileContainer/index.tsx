import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GRID_GAP } from '../../../constants/grid';
import { Tile, TileHeight, TileType } from '../../../types/tile';
import {
  BadgeTile,
  BannerTile,
  PointsTile,
  RewardCategoryTile,
  RewardTile,
  TierTileUpdated,
  RoundupTile,
  ContentTile
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
  [TileType.Roundup]: RoundupTile,
};

/**
 * TileContainer component to render a list of tiles with proper layout and spacing.
 */
const TileContainer = ({ tiles }: TileContainerProps): JSX.Element => {
  const allHalfHeight =
    tiles.length > 0 &&
    tiles.every((tile) => tile.tileHeight === TileHeight.Half);

  const halfHeightGap = allHalfHeight ? GRID_GAP / 2 : GRID_GAP;

  return (
    <View
      style={[styles.container, allHalfHeight && styles.aspectContainer]}
      testID="tile-container"
    >
      {tiles.map((tile, index) => {
        const TileComponent = TILE_COMPONENTS[tile.type!];
        const isHalfHeight = tile.tileHeight === TileHeight.Half;

        return (
          <View
            key={tile.id}
            style={[
              styles.tileWrapper,
              isHalfHeight && styles.halfHeightTile,
              index > 0 && {
                marginTop: allHalfHeight ? halfHeightGap : GRID_GAP,
              },
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
    flex: 1,
    width: '100%',
  },
  aspectContainer: {
    aspectRatio: 1,
  },
  tileWrapper: {
    flex: 1,
    width: '100%',
  },
  halfHeightTile: {
    flex: 0.5,
  },
});

export default TileContainer;
