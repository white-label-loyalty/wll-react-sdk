import {
  BadgeTile,
  ContentTile,
  PointsTile,
  RewardCategoryTile,
  RewardTile,
  TierTile,
} from "@/components/organisms";
import { Tile, TileType } from "@/types/tile";
import React from "react";
import { StyleSheet, View } from "react-native";

type TileContainerProps = {
  tiles: Tile[];
};

const TileContainer: React.FC<TileContainerProps> = ({ tiles }) => {
  const renderTile = (tile: Tile) => {
    switch (tile.type) {
      case TileType.Tier:
        return <TierTile tile={tile} />;
      case TileType.Points:
        return <PointsTile tile={tile} />;
      case TileType.Content:
        return <ContentTile tile={tile} />;
      case TileType.Reward:
        return <RewardTile tile={tile} />;
      case TileType.Badge:
        return <BadgeTile tile={tile} />;
      case TileType.RewardCategory:
        return <RewardCategoryTile tile={tile} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {tiles.map((tile, index) => (
        <View key={tile.id} style={styles.tileContainer}>
          {renderTile(tile)}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: "100%",
  },
  tileContainer: {
    flex: 1,
    marginBottom: 6,
  },
});

export default TileContainer;
