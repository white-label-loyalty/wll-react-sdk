import { PointsTileConfig } from "@/types/tile";
import React from "react";
import { View } from "react-native";

type PointsTileProps = {
  configuration: PointsTileConfig;
};

const PointsTile: React.FC<PointsTileProps> = ({ configuration }) => {
  return <View>{/* Your component code here */}</View>;
};

export default PointsTile;
