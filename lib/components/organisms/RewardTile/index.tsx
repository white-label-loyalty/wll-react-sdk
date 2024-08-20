import { RewardTileConfig } from "@/types/tile";
import React from "react";
import { View } from "react-native";

type RewardTileProps = {
  configuration: RewardTileConfig;
};

const RewardTile: React.FC<RewardTileProps> = ({ configuration }) => {
  return <View>{/* Your component code here */}</View>;
};

export default RewardTile;
