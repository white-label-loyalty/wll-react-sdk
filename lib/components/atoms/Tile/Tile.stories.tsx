import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import Tile from "./index";

export default {
  title: "components/atoms/Tile",
  component: Tile,
} as Meta;

const Template: StoryFn<typeof Tile> = (args) => <Tile {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};
