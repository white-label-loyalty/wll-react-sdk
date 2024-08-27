import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import PointsTile from "./index";

export default {
  title: "components/organisms/PointsTile",
  component: PointsTile,
} as Meta;

const Template: StoryFn<typeof PointsTile> = (args) => <PointsTile {...args} />;

export const Default = Template.bind({});
Default.args = {
  configuration: {
    title: "Points",
    imageUrl: "https://picsum.photos/200/200",
    multiplier: 1,
    points: 100,
    suffix: "pts",
  },
};
