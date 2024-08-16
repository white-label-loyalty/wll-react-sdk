import { useTheme } from "@/context/ThemeContext";
import { sizes } from "@/utils/styling";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

type TileContainerProps = {
  children: React.ReactNode;
  type?: "grid" | "banner";
};

const TileContainer: React.FC<TileContainerProps> = ({
  children,
  type = "grid",
}) => {
  const { theme } = useTheme();

  const containerStyle: ViewStyle = {
    borderColor: theme.derivedBackground,
    ...styles.container,
    ...(type === "banner" ? styles.bannerContainer : styles.gridContainer),
  };

  return <View style={containerStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderRadius: sizes.borderRadius,
  },
  gridContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    aspectRatio: 1,
  },
  bannerContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TileContainer;
