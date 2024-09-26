import { Tile, TileType } from '../../../types/tile';

import {
  BadgeTile,
  ContentTile,
  PointsTile,
  RewardCategoryTile,
  RewardTile,
  TierTile,
} from '../../organisms';

import * as React from 'react';
import { StyleSheet, View } from 'react-native';

type TileContainerProps = {
  tiles: Tile[];
};

const TileContainer: React.FC<TileContainerProps> = ({ tiles }) => {
  const renderTile = (tile: Tile) => {
    switch (tile.type) {
      case TileType.Content: {
        return <ContentTile tile={tile} />;
      }
      case TileType.Badge: {
        return <BadgeTile tile={tile} />;
      }
      case TileType.Tier: {
        return <TierTile tile={tile} />;
      }
      case TileType.Points: {
        return <PointsTile tile={tile} />;
      }
      case TileType.Reward: {
        return <RewardTile tile={tile} />;
      }
      case TileType.RewardCategory: {
        return <RewardCategoryTile tile={tile} />;
      }
    }
  };

  return (
    <View style={styles.container}>
      {tiles.map((tile, index) => (
        <View
          key={tile.id}
          style={[
            styles.tileContainer,
            {
              // TODO: Replace this with new responsive method
              marginBottom: 15,
            },
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
    aspectRatio: 1,
  },
  tileContainer: {
    flex: 1,
  },
});

export default TileContainer;
