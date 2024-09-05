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
} from '../../../types/tile';
import { useResponsiveScale } from '../../../utils/responsiveScaling';
import {
  BadgeTile,
  BannerTile,
  ContentTile,
  PointsTile,
  RewardCategoryTile,
  RewardTile,
  TierTile,
} from '../../organisms';

import React from 'react';
import { StyleSheet, View } from 'react-native';

type TileContainerProps = {
  tiles: Tile[];
};

const TileContainer: React.FC<TileContainerProps> = ({ tiles }) => {
  const { ms } = useResponsiveScale();

  const renderTile = (tile: Tile) => {
    switch (tile.type) {
      case TileType.Content: {
        return <ContentTile tile={tile} />;
      }
      case TileType.Badge: {
        return <BadgeTile tile={tile} />;
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
              marginBottom: index === tiles.length - 1 ? 0 : ms(15),
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
