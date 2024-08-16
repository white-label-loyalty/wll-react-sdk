import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import TileContainer from "./index";

export default {
  title: "components/atoms/TileContainer",
  component: TileContainer,
  decorators: [
    (Story) => (
      <View
        style={{
          width: 257,
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Story />
      </View>
    ),
  ],
} as Meta;

const Template: StoryFn<typeof TileContainer> = (args) => (
  <TileContainer {...args} />
);

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};
