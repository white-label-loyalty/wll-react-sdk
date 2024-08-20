import { BadgeTileConfig } from "@/types/tile";
import React from "react";
import { View } from "react-native";

type BadgeTileProps = {
  configuration: BadgeTileConfig;
};

const BadgeTile: React.FC<BadgeTileProps> = ({ configuration }) => {
  return <View>{/* Your component code here */}</View>;
};

export default BadgeTile;
