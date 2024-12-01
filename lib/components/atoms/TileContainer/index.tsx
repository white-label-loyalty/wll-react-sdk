import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { GRID_GAP } from '../../../constants/grid';
import { useResponsive } from '../../../hooks/useResponsive';
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
  const { isDesktop } = useResponsive();

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
    <View
      style={[
        styles.container,
        isDesktop && allHalfTiles ? { aspectRatio: 2 } : { aspectRatio: 1 },
      ]}
    >
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
  },
  tileContainer: {
    flex: 1,
  },
});

export default TileContainer;
