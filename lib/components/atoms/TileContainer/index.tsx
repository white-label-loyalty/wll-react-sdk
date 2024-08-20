import {
  BadgeTile,
  BannerTile,
  ContentTile,
  PointsTile,
  RewardCategoryTile,
  RewardTile,
  TierTile,
} from "@/components/organisms";
import {
  BadgeTileConfig,
  BannerTileConfig,
  ContentTileConfig,
  PointsTileConfig,
  RewardCategoryTileConfig,
  RewardTileConfig,
  TierTileConfig,
  Tile,
  TileType,
} from "@/types/tile";
import React from "react";
import { StyleSheet, View } from "react-native";

type TileContainerProps = {
  tiles: Tile[];
};

const TileContainer: React.FC<TileContainerProps> = ({ tiles }) => {
  const renderTile = (tile: Tile) => {
    switch (tile.type) {
      case TileType.Banner: {
        const config = tile.configuration as BannerTileConfig;
        return <BannerTile configuration={config} />;
      }
      case TileType.Points: {
        const config = tile.configuration as PointsTileConfig;
        return <PointsTile configuration={config} />;
      }
      case TileType.Content: {
        const config = tile.configuration as ContentTileConfig;
        return <ContentTile configuration={config} />;
      }
      case TileType.Reward: {
        const config = tile.configuration as RewardTileConfig;
        return <RewardTile configuration={config} />;
      }
      case TileType.Badge: {
        const config = tile.configuration as BadgeTileConfig;
        return <BadgeTile configuration={config} />;
      }
      case TileType.RewardCategory: {
        const config = tile.configuration as RewardCategoryTileConfig;
        // @ts-ignore we know this is wrong for the time being.
        return <RewardCategoryTile configuration={config} />;
      }
      case TileType.Tier: {
        const config = tile.configuration as TierTileConfig;
        return <TierTile configuration={config} />;
      }
      default:
        throw new Error(`Unsupported tile type: ${tile.type}`);
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
