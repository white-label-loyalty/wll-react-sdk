import { ContentTileConfig } from "@/types/tile";
import React from "react";
import { View } from "react-native";

type ContentTileProps = {
  configuration: ContentTileConfig;
};

const ContentTile: React.FC<ContentTileProps> = ({ configuration }) => {
  return <View>{/* Your component code here */}</View>;
};

export default ContentTile;
