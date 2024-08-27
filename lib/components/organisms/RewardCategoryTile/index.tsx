import Tile from "@/components/atoms/Tile";
import { useTheme } from "@/context/ThemeContext";
import { RewardCategoryTileConfig } from "@/types/tile";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type RewardCategoryTileProps = {
  configuration: RewardCategoryTileConfig;
};

const RewardCategoryTile: React.FC<RewardCategoryTileProps> = ({
  configuration,
}) => {
  const { theme } = useTheme();
  const { allowDecorationOverlay, rewardCategory } = configuration || {};
  const { name, pictureUrl } = rewardCategory || {};

  if (!rewardCategory) return null;

  return (
    <Tile>
      {allowDecorationOverlay && (
        <View style={[styles.overlay, { backgroundColor: theme.primary }]}>
          {name && (
            <Text
              style={[styles.overlayText, { color: theme.primaryText }]}
              ellipsizeMode="tail"
              numberOfLines={1}
            >
              {name}
            </Text>
          )}
        </View>
      )}
      {pictureUrl && (
        <Image
          source={{ uri: pictureUrl }}
          style={styles.image}
          resizeMode="cover"
          onError={(error) => console.error("Image loading error:", error)}
        />
      )}
    </Tile>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  overlayText: {
    fontSize: 16,
    paddingHorizontal: 30,
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

export default RewardCategoryTile;
