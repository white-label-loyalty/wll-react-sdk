import { Meta, StoryFn } from "@storybook/react";
import * as LucideIcons from "lucide-react";
import React from "react";
import Icon from ".";

export default {
  title: "components/atoms/Icon",
  component: Icon,
  argTypes: {
    name: {
      control: "select",
      options: Object.keys(LucideIcons),
    },
    color: { control: "color" },
    size: { control: { type: "range", min: 12, max: 96, step: 4 } },
    strokeWidth: { control: { type: "range", min: 0.5, max: 4, step: 0.5 } },
  },
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "ChevronRight",
  color: "black",
  size: 24,
  strokeWidth: 2,
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  ...Default.args,
  name: "Heart",
  color: "red",
};

export const LargeIcon = Template.bind({});
LargeIcon.args = {
  ...Default.args,
  name: "Star",
  size: 48,
};

export const ThinStroke = Template.bind({});
ThinStroke.args = {
  ...Default.args,
  name: "User",
  strokeWidth: 1,
};
