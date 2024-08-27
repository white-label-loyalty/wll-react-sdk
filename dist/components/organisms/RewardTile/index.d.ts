import React from "react";
import { RewardTileConfig } from "../../../types/tile";
import { Button as ButtonAtom, Image as ImageAtom, Text } from "../../atoms";
type RewardTileProps = {
    configuration: RewardTileConfig;
    children: React.ReactNode;
};
declare const RewardTile: React.FC<RewardTileProps> & {
    Image: typeof ImageAtom;
    Title: typeof Text;
    Description: typeof Text;
    Button: typeof ButtonAtom;
};
export default RewardTile;
