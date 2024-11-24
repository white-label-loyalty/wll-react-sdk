import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { GRID_GAP } from '../../../constants/grid';
import { useResponsive } from '../../../context/ResponsiveContext';
import { TSection } from '../../../types/section';
import { Tile, TileHeight, TileType } from '../../../types/tile';
import { TileContainer } from '../../atoms';
import { SectionHeader } from '../../molecules';

type GridProps = {
  section: TSection;
};

const Grid: React.FC<GridProps> = ({ section }) => {
  const { isDesktop } = useResponsive();
  const columnsPerRow = isDesktop ? 4 : 2;

  const renderGrid = () => {
    const tileContainers: JSX.Element[] = [];
    let currentTiles: Tile[] = [];

    const gridTiles = section.tiles
      .filter((tile) => tile.type !== TileType.Banner)
      .sort((a, b) => {
        if (a.priority !== b.priority) {
          return b.priority - a.priority;
        }
        return section.tiles.indexOf(a) - section.tiles.indexOf(b);
      });

    const allHalfTiles = gridTiles.every(
      (tile) => tile.tileHeight === TileHeight.Half
    );

    const getTileWidth = (columns: number) => ({
      width: `calc(${100 / columns}% - ${((columns - 1) * GRID_GAP) / columns}px)`,
      marginBottom: GRID_GAP,
      height: 'auto',
    });

    if (isDesktop && allHalfTiles) {
      gridTiles.forEach((tile, index) => {
        const isLastInRow = (index + 1) % columnsPerRow === 0;
        tileContainers.push(
          <View
            key={`container-${index}`}
            style={[
              // @ts-ignore
              getTileWidth(columnsPerRow),
              !isLastInRow && { marginRight: GRID_GAP },
            ]}
          >
            <TileContainer tiles={[tile]} />
          </View>
        );
      });
      return tileContainers;
    }

    gridTiles.forEach((tile, index) => {
      currentTiles.push(tile);
      const nextTile = gridTiles[index + 1];

      const shouldStartNewContainer = (
        currentTiles: Tile[],
        currentTile: Tile,
        nextTile?: Tile
      ) => {
        if (currentTiles.length === 2) return true;
        if (currentTile.tileHeight === TileHeight.Full) return true;
        if (currentTile.tileHeight === TileHeight.Half) {
          if (!nextTile) return true;
          if (nextTile.tileHeight === TileHeight.Full) return true;
          if (currentTiles.length === 0) return false;
          if (
            currentTiles.length === 1 &&
            currentTiles[0].tileHeight === TileHeight.Half &&
            nextTile.tileHeight === TileHeight.Half
          ) {
            return false;
          }
        }
        return true;
      };

      if (shouldStartNewContainer(currentTiles, tile, nextTile)) {
        const isLastInRow = (tileContainers.length + 1) % columnsPerRow === 0;

        tileContainers.push(
          <View
            key={`container-${index}`}
            style={[
              // @ts-ignore
              getTileWidth(columnsPerRow),
              !isLastInRow && { marginRight: GRID_GAP },
            ]}
          >
            <TileContainer tiles={currentTiles} />
          </View>
        );
        currentTiles = [];
      }
    });

    return tileContainers;
  };

  return (
    <View>
      <SectionHeader title={section.title} description={section.description} />
      <View style={styles.grid}>{renderGrid()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
});

export default Grid;
