import * as React from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { TSection as SectionData } from '../../../types/section';
import { Tile, TileHeight, TileType } from '../../../types/tile';
import { TileContainer } from '../../atoms';
import { SectionHeader } from '../../molecules';

type GridProps = {
  section: SectionData;
};

const Grid: React.FC<GridProps> = ({ section }) => {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 700;
  const columnsPerRow = isDesktop ? 4 : 2;

  const renderGrid = () => {
    const tileContainers: JSX.Element[] = [];
    let currentTiles: Tile[] = [];
    // Filter out banner tiles
    const gridTiles = section.tiles.filter(
      (tile) => tile.type !== TileType.Banner
    );
    gridTiles.forEach((tile, index) => {
      currentTiles.push(tile);
      if (
        currentTiles.length === 2 ||
        tile.tileHeight === TileHeight.Full ||
        index === gridTiles.length - 1
      ) {
        tileContainers.push(
          <View
            key={`container-${index}`}
            // TODO: Replace with new responsive method
            style={{ width: `${100 / columnsPerRow}%`, padding: 8 }}
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
    <>
      <SectionHeader title={section.title} description={section.description} />
      <View style={styles.grid}>{renderGrid()}</View>;
    </>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Grid;
