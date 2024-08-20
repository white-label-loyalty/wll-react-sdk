import { useTheme } from "@/context/ThemeContext";
import { sizes } from "@/utils/styling";
import React from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type RewardCategoryTileProps = {
  configuration: {
    allowDecorationOverlay: boolean;
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    description: string;
    priority: number;
    parent: string;
    pictureUrl: string;
  };
};

const RewardCategoryTile: React.FC<RewardCategoryTileProps> = ({
  configuration,
}) => {
  const { theme } = useTheme();
  const { allowDecorationOverlay, name, pictureUrl } = configuration;

  // TODO: Add logic to fetch the reward data from the API at the moment just using fake data to style components

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          borderColor: theme.derivedBackground,
        },
      ]}
      onPress={() => Alert.alert("You Pressed, the reward category tile")}
    >
      {allowDecorationOverlay && (
        <View style={[styles.overlay, { backgroundColor: theme.primary }]}>
          <Text
            style={[styles.overlayText, { color: theme.primaryText }]}
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            {name}
          </Text>
        </View>
      )}
      <Image
        source={{ uri: pictureUrl }}
        style={styles.image}
        resizeMode="cover"
        onError={(error) => console.error("Image loading error:", error)}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 275,
    aspectRatio: 1,
    borderRadius: sizes.borderRadius,
    borderWidth: 1,
    flex: 1,
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  },
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
