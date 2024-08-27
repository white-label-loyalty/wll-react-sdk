import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import RewardTile from "./index";

export default {
  title: "components/organisms/RewardTile",
  component: RewardTile,
} as Meta;

const Template: StoryFn<typeof RewardTile> = (args) => <RewardTile {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};
