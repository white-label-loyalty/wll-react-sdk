import React from "react";
import { Image, Linking, StyleSheet, View } from "react-native";
import { useTheme } from "../../../context/ThemeContext";
import { BannerTileConfig } from "../../../types/tile";
import { Button, Text } from "../../atoms";

type BannerTileProps = {
  configuration: BannerTileConfig;
};

const BannerTile: React.FC<BannerTileProps> = ({ configuration }) => {
  const { theme } = useTheme();
  const { imageUrl, title, description, ctaText, ctaLink } = configuration;

  const handleLinkPress = async (url: string) => {
    if (!url) return;
    if (await Linking.canOpenURL(url)) {
      Linking.openURL(url);
    }
  };
  return (
    <View
      style={[
        styles.slide,
        {
          backgroundColor: theme.surface,
        },
      ]}
    >
      {imageUrl && (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            resizeMode="cover"
            onError={(error) => console.error("Image loading error:", error)}
          />
        </View>
      )}
      <View style={styles.slideContent}>
        {title && (
          <Text variant="title" style={styles.title} isSurface={true}>
            {title}
          </Text>
        )}
        {description && (
          <Text variant="body" style={styles.description} isSurface={true}>
            {description}
          </Text>
        )}
        {ctaText && (
          <Button
            title={ctaText}
            variant="accent"
            onPress={() => handleLinkPress(ctaLink as string)}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    width: "100%",
    maxWidth: 1080,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  slideContent: {
    padding: 20,
    flex: 1,
  },
  imageContainer: {
    width: "20%",
    aspectRatio: 1,
    position: "relative",
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  title: {
    marginBottom: 10,
  },
  description: {
    marginBottom: 20,
  },
});

export default BannerTile;
