import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import ProgressBar from ".";

export default {
  title: "components/atoms/ProgressBar",
  component: ProgressBar,
  argTypes: {
    percentage: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
    variant: {
      control: "select",
      options: ["primary", "accent"],
    },
    height: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
} as Meta;

const Template: StoryFn<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  percentage: 50,
  variant: "primary",
  height: "md",
};

export const Accent = Template.bind({});
Accent.args = {
  percentage: 75,
  variant: "accent",
  height: "sm",
};

export const Small = Template.bind({});
Small.args = {
  percentage: 25,
  variant: "primary",
  height: "sm",
};

export const Full = Template.bind({});
Full.args = {
  percentage: 100,
  variant: "primary",
  height: "sm",
};

export const Empty = Template.bind({});
Empty.args = {
  percentage: 0,
  variant: "primary",
  height: "sm",
};
