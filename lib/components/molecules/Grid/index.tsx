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

    // Filter banner tiles and sort by priority
    const gridTiles = section.tiles
      .filter((tile) => tile.type !== TileType.Banner)
      .sort((a, b) => {
        // Sort by priority (higher priority first)
        if (a.priority !== b.priority) {
          return b.priority - a.priority;
        }
        // If priorities are equal, maintain original order
        return section.tiles.indexOf(a) - section.tiles.indexOf(b);
      });

    gridTiles.forEach((tile, index) => {
      currentTiles.push(tile);

      const shouldCreateContainer =
        currentTiles.length === 2 || // Container is full
        tile.tileHeight === TileHeight.Full || // Full height tile
        index === gridTiles.length - 1; // Last tile

      if (shouldCreateContainer) {
        const isLastInRow = (index + 1) % columnsPerRow === 0;

        tileContainers.push(
          <View
            key={`container-${index}`}
            // @ts-ignore
            style={{
              width: `calc(${100 / columnsPerRow}% - ${((columnsPerRow - 1) * gap) / columnsPerRow}px)`,
              marginRight: isLastInRow ? 0 : gap,
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
  },
});

export default Grid;
