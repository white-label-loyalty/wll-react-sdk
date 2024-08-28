import Color from "color";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "../../../context/ThemeContext";
import { useSectionContext } from "../../organisms/Section";
import LoadingIndicator from "../LoadingIndicator";
import { createResponsiveStyle } from "../../../utils/responsiveHelper";

type TileProps = {
  children: React.ReactNode;
};

const Tile: React.FC<TileProps> = ({ children }) => {
  const { loading: isLoading } = useSectionContext();
  const { theme } = useTheme();

  const responsiveStyles = createResponsiveStyle({
    borderRadius: [theme.sizes.borderRadiusSm, theme.sizes.borderRadiusSm, theme.sizes.borderRadiusLg],
    maxWidth: [270, 270, 320],
  });

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.surface,
          borderColor: Color(theme.surface).darken(0.02).string(),
          borderRadius: responsiveStyles.borderRadius,
          maxWidth: responsiveStyles.maxWidth,
        },
      ]}
    >
      {isLoading ? <LoadingIndicator /> : children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    alignItems: "flex-start",
    justifyContent: "center",
    position: "relative",
    borderWidth: 1,
    aspectRatio: 1,
    // shadowColor: "#AAAAAA",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.25,
    // shadowRadius: 3,
  },
});

export default Tile;
