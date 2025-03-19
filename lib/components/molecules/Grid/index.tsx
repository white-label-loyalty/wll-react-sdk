import React, { useCallback, useMemo } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { IS_WEB, SCREEN_WIDTH } from '../../../constants/device';
import { GRID_GAP } from '../../../constants/grid';
import { useResponsive } from '../../../context/ResponsiveContext';
import { SectionType, TSection } from '../../../types/section';
import { Tile, TileHeight, TileType } from '../../../types/tile';
import { sortByPriority } from '../../../utils/transforms';
import { TileContainer } from '../../atoms';
import { SectionHeader } from '../../molecules';

type GridProps = {
  section: TSection;
};

const Grid = ({ section }: GridProps) => {
  if (section.type !== SectionType.Grid) {
    return null;
  }

  const { isDesktop } = useResponsive();
  const columnsPerRow = isDesktop ? 4 : 2;

  const gridTiles = useMemo(() => {
    return sortByPriority(
      section.tiles.filter((tile) => tile.type !== TileType.Banner)
    );
  }, [section.tiles]);

  const getTileWidth = useCallback((columns: number) => {
    if (IS_WEB) {
      return {
        width: `calc(${100 / columns}% - ${((columns - 1) * GRID_GAP) / columns}px)`,
        marginBottom: GRID_GAP,
        height: 'auto',
        aspectRatio: 1,
      };
    } else {
      const availableWidth = SCREEN_WIDTH - GRID_GAP * 2;
      const gapSpace = (columns - 1) * GRID_GAP;

      const tileWidth = Math.floor((availableWidth - gapSpace) / columns);

      return {
        width: tileWidth,
        marginBottom: GRID_GAP,
        aspectRatio: 1,
      };
    }
  }, []);

  const renderTileContainers = useCallback(() => {
    const tileContainers: JSX.Element[] = [];
    let currentTiles: Tile[] = [];

    const sortedTiles = sortByPriority(gridTiles);

    sortedTiles.forEach((tile, index) => {
      currentTiles.push(tile);
      const nextTile = sortedTiles[index + 1];

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
        tileContainers.push(
          <View
            key={`container-${index}`}
            style={[
              // @ts-ignore Web uses CSS calc strings for responsive layouts, while ViewStyle expects numbers
              getTileWidth(columnsPerRow) as ViewStyle,
            ]}
          >
            <TileContainer tiles={currentTiles} />
          </View>
        );
        currentTiles = [];
      }
    });

    return tileContainers;
  }, [gridTiles, columnsPerRow, getTileWidth]);

  return (
    <View>
      <SectionHeader title={section.title} description={section.description} />
      <View style={styles.grid}>{renderTileContainers()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
  },
});

export default Grid;
