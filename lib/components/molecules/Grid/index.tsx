import * as React from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { GRID_GAP } from '../../../constants/grid';
import { TSection } from '../../../types/section';
import { Tile, TileHeight, TileType } from '../../../types/tile';
import { TileContainer } from '../../atoms';
import { SectionHeader } from '../../molecules';

type GridProps = {
  section: TSection;
};

const Grid: React.FC<GridProps> = ({ section }) => {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 700;
  const columnsPerRow = isDesktop ? 4 : 2;
  const gap = GRID_GAP;

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

    if (isDesktop && allHalfTiles) {
      gridTiles.forEach((tile, index) => {
        const isLastInRow = (index + 1) % columnsPerRow === 0;
        tileContainers.push(
          <View
            key={`container-${index}`}
            // @ts-ignore
            style={{
              width: `calc(${100 / columnsPerRow}% - ${
                ((columnsPerRow - 1) * gap) / columnsPerRow
              }px)`,
              marginRight: isLastInRow ? 0 : gap,
              marginBottom: gap,
              height: 'auto',
            }}
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
            // @ts-ignore
            style={{
              width: `calc(${100 / columnsPerRow}% - ${
                ((columnsPerRow - 1) * gap) / columnsPerRow
              }px)`,
              marginRight: isLastInRow ? 0 : gap,
              marginBottom: gap,
            }}
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
    height: 'auto',
  },
});

export default Grid;
