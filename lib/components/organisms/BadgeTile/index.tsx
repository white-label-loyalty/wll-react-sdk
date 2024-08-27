import { Icon, Text } from "@/components/atoms";
import Tile from "@/components/atoms/Tile";
import { useSectionContext } from "@/components/organisms/Section";
import { BadgeTileConfig } from "@/types/tile";
import { createResponsiveStyle } from "@/utils/responsiveHelper";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

type BadgeTileProps = {
  configuration: BadgeTileConfig;
};

const BadgeTile: React.FC<BadgeTileProps> = ({ configuration }) => {
  const { loading } = useSectionContext();
  const { badge } = configuration;
  return (
    <Tile>
      <View style={styles.imageContainer}>
        <Image source={{ uri: badge?.artworkUrl }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text variant="title">{badge?.name}</Text>
          <Icon name="ChevronRight" size={16} color="#666" />
        </View>
        <Text variant="body">{badge?.description}</Text>
      </View>
    </Tile>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  imageContainer: {
    width: "100%",
    flex: 1,
    position: "relative",
    overflow: "hidden",
  },
  textContainer: createResponsiveStyle({
    padding: [8, 10, 12],
    flex: 1,
  }),
});

export default BadgeTile;
