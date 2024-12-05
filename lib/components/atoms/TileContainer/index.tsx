import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { GRID_GAP } from '../../../constants/grid';
import { Tile, TileHeight, TileType } from '../../../types/tile';
import {
  BadgeTile,
  ContentTile,
  PointsTile,
  RewardCategoryTile,
  RewardTile,
  TierTileUpdated,
} from '../../organisms';

type TileContainerProps = {
  tiles: Tile[];
};

const TileContainer: React.FC<TileContainerProps> = ({ tiles }) => {
  const renderTile = (tile: Tile) => {
    switch (tile.type) {
      case TileType.Content:
        return <ContentTile tile={tile} />;
      case TileType.Badge:
        return <BadgeTile tile={tile} />;
      case TileType.Tier:
        return <TierTileUpdated tile={tile} />;
      case TileType.Points:
        return <PointsTile tile={tile} />;
      case TileType.Reward:
        return <RewardTile tile={tile} />;
      case TileType.RewardCategory:
        return <RewardCategoryTile tile={tile} />;
    }
  };

  // Check if all tiles are half height
  const allHalfTiles = tiles.every(
    (tile) => tile.tileHeight === TileHeight.Half
  );

  return (
    <View style={[styles.container, { aspectRatio: allHalfTiles ? 2 : 1 }]}>
      {tiles.map((tile, index) => (
        <View
          key={tile.id}
          style={[
            styles.tileContainer,
            tile.tileHeight === TileHeight.Half && styles.halfTileContainer,
            index > 0 && { marginTop: GRID_GAP },
          ]}
        >
          {renderTile(tile)}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
  },
  tileContainer: {
    flex: 1,
  },
  halfTileContainer: {
    flex: 1, // Take up half the height of a full tile
  },
});

export default TileContainer;
