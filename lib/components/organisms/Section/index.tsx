import { SectionType } from "@/types/section";
import { Tile, TileHeight } from "@/types/tile";
import React from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";

type SectionProps = {
  section: {
    id: string;
    type: SectionType;
    tiles: Tile[];
  };
  renderItem: (tile: Tile) => React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ section, renderItem }) => {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 600;
  const columnsPerRow = isDesktop ? 4 : 2;

  const renderTiles = () => {
    const tileContainers: JSX.Element[] = [];
    let currentContainer: Tile[] = [];

    section.tiles.forEach((tile, index) => {
      currentContainer.push(tile);

      if (
        currentContainer.length === 2 ||
        tile.tileHeight === TileHeight.Full ||
        index === section.tiles.length - 1
      ) {
        const containerElement = (
          <View
            key={`container-${index}`}
            style={[styles.tileContainer, { width: `${100 / columnsPerRow}%` }]}
          >
            {currentContainer.map((containerTile) => (
              <View
                key={containerTile.id}
                style={[
                  styles.tileWrapper,
                  {
                    aspectRatio:
                      containerTile.tileHeight === TileHeight.Full ? 1 : 2,
                  },
                ]}
              >
                {renderItem(containerTile)}
              </View>
            ))}
          </View>
        );

        tileContainers.push(containerElement);
        currentContainer = [];
      }
    });

    return tileContainers;
  };

  return (
    <View style={styles.section}>
      <View style={styles.grid}>{renderTiles()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    width: "100%",
    maxWidth: 1100,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tileContainer: {
    padding: 3,
  },
  tileWrapper: {
    padding: 6,
  },
});

export default Section;
