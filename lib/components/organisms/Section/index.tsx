import { TileContainer } from "@/components/atoms";
import { Carousel, SectionHeader } from "@/components/molecules";
import { Section as SectionData, SectionType } from "@/types/section";
import { Tile, TileHeight } from "@/types/tile";
import React from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";

type SectionProps = {
  section: SectionData;
};

const Section: React.FC<SectionProps> = ({ section }) => {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;
  const columnsPerRow = isDesktop ? 4 : 2;

  const renderSectionHeader = () => {
    return (
      <SectionHeader title={section.title} description={section.description} />
    );
  };

  if (section.type === SectionType.Banner) {
    return (
      <View style={styles.section}>
        <Carousel section={section} />
      </View>
    );
  }

  const renderTiles = () => {
    const tileContainers: JSX.Element[] = [];
    let currentTiles: Tile[] = [];
    section.tiles.forEach((tile, index) => {
      currentTiles.push(tile);
      if (
        currentTiles.length === 2 ||
        tile.tileHeight === TileHeight.Full ||
        index === section.tiles.length - 1
      ) {
        tileContainers.push(
          <View
            key={`container-${index}`}
            style={[styles.columnWrapper, { width: `${100 / columnsPerRow}%` }]}
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
    <View style={styles.section}>
      {renderSectionHeader()}
      <View style={styles.grid}>{renderTiles()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    width: "100%",
    maxWidth: 1100,
    marginHorizontal: "auto",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  columnWrapper: {
    padding: 3,
  },
});

export default Section;
