import React, { createContext, useContext } from "react";
import { RewardTileConfig } from "../../../types/tile";
import {
  Button as ButtonAtom,
  Image as ImageAtom,
  Text,
  Tile,
} from "../../atoms";

type RewardTileContextType = {
  configuration: RewardTileConfig;
};

const RewardTileContext = createContext<RewardTileContextType | undefined>(
  undefined
);

type RewardTileProps = {
  configuration: RewardTileConfig;
  children: React.ReactNode;
};

const RewardTile: React.FC<RewardTileProps> & {
  Image: typeof ImageAtom;
  Title: typeof Text;
  Description: typeof Text;
  Button: typeof ButtonAtom;
} = ({ configuration, children }) => {
  return (
    <RewardTileContext.Provider value={{ configuration }}>
      <Tile>{children}</Tile>
    </RewardTileContext.Provider>
  );
};

const useRewardTileContext = () => {
  const context = useContext(RewardTileContext);
  if (!context) {
    throw new Error(
      "RewardTile compound components must be used within RewardTile"
    );
  }
  return context;
};

RewardTile.Image = ImageAtom;
RewardTile.Title = Text;
RewardTile.Description = Text;
RewardTile.Button = ButtonAtom;

export default RewardTile;
