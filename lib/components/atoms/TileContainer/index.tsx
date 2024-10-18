import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { GRID_GAP } from '../../../constants/grid';
import { Tile, TileType } from '../../../types/tile';
import {
  BadgeTile,
  ContentTile,
  PointsTile,
  RewardCategoryTile,
  RewardTile,
  TierTile,
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
        return <TierTile tile={tile} />;
      case TileType.Points:
        return <PointsTile tile={tile} />;
      case TileType.Reward:
        return <RewardTile tile={tile} />;
      case TileType.RewardCategory:
        return <RewardCategoryTile tile={tile} />;
    }
  };

  return (
    <View style={styles.container}>
      {tiles.map((tile, index) => (
        <View
          key={tile.id}
          style={[styles.tileContainer, index > 0 && { marginTop: GRID_GAP }]}
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
    aspectRatio: 1,
  },
  tileContainer: {
    flex: 1,
  },
});

export default TileContainer;
