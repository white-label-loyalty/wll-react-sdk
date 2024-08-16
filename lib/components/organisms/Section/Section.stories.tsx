import { Section, TierTile } from "@/components/organisms";
import { SectionType } from "@/types/section";
import { TierTileType, Tile, TileHeight, TileType } from "@/types/tile";
import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { View } from "react-native";

export default {
  title: "components/organisms/Section",
  component: Section,
  args: {
    section: {
      id: "1",
    },
  },
  decorators: [
    (Story) => (
      <View
        style={{
          width: "100%",
          height: "100%",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Story />
      </View>
    ),
  ],
} as Meta;

const Template: StoryFn<typeof Section> = (args) => <Section {...args} />;

export const GridLayout = Template.bind({});
GridLayout.args = {
  section: {
    id: "1",
    type: SectionType.Grid,
    createdAt: new Date(),
    updatedAt: new Date(),
    tenantId: "tenant1",
    visibilityCriteria: "all",
    tiles: [
      {
        id: "3",
        type: TileType.Tier,
        createdAt: new Date(),
        updatedAt: new Date(),
        tenantId: "tenant1",
        visibilityCriteria: "all",
        tileHeight: TileHeight.Full,
        configuration: {
          tierTileType: TierTileType.currentTier,
          tierId: "1",
        },
      },
      {
        id: "1",
        type: TileType.Tier,
        createdAt: new Date(),
        updatedAt: new Date(),
        tenantId: "tenant1",
        visibilityCriteria: "all",
        tileHeight: TileHeight.Half,
        configuration: {
          tierTileType: TierTileType.currentTier,
          tierId: "2",
        },
      },
      {
        id: "2",
        type: TileType.Tier,
        createdAt: new Date(),
        updatedAt: new Date(),
        tenantId: "tenant1",
        visibilityCriteria: "all",
        tileHeight: TileHeight.Half,
        configuration: {
          tierTileType: TierTileType.currentTier,
          tierId: "3",
        },
      },

      {
        id: "4",
        type: TileType.Tier,
        createdAt: new Date(),
        updatedAt: new Date(),
        tenantId: "tenant1",
        visibilityCriteria: "all",
        tileHeight: TileHeight.Full,
        configuration: {
          tierTileType: TierTileType.currentTier,
          tierId: "4",
        },
      },
      {
        id: "5",
        type: TileType.Tier,
        createdAt: new Date(),
        updatedAt: new Date(),
        tenantId: "tenant1",
        visibilityCriteria: "all",
        tileHeight: TileHeight.Half,
        configuration: {
          tierTileType: TierTileType.currentTier,
          tierId: "5",
        },
      },
      {
        id: "6",
        type: TileType.Tier,
        createdAt: new Date(),
        updatedAt: new Date(),
        tenantId: "tenant1",
        visibilityCriteria: "all",
        tileHeight: TileHeight.Half,
        configuration: {
          tierTileType: TierTileType.currentTier,
          tierId: "5",
        },
      },
    ],
  },
  renderItem: ({ tile }: { tile: Tile }) => <TierTile {...tile} />,
};

// export const BannerLayout = Template.bind({});
// BannerLayout.args = {
//   ...GridLayout.args,
//   section: {
//     ...GridLayout.args.section,
//     type: "BANNER",
//   },
//   renderItem: ({ tile }: { tile: Tile }) => (
//       <TierTile tile={tile} />,
//   ),
// };
