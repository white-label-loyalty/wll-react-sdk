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
    currentValue: {
      control: { type: "number" },
    },
    targetValue: {
      control: { type: "number" },
    },
    showProgressLabel: {
      control: "boolean",
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

export const WithLabel = Template.bind({});
WithLabel.args = {
  percentage: 66,
  variant: "primary",
  height: "sm",
  currentValue: 2,
  targetValue: 3,
  showProgressLabel: true,
};

export const WithLabelFull = Template.bind({});
WithLabelFull.args = {
  percentage: 100,
  variant: "primary",
  height: "sm",
  currentValue: 3,
  targetValue: 3,
  showProgressLabel: true,
};

export const WithLabelEmpty = Template.bind({});
WithLabelEmpty.args = {
  percentage: 0,
  variant: "primary",
  height: "sm",
  currentValue: 0,
  targetValue: 5,
  showProgressLabel: true,
};

export const WithLabelAccent = Template.bind({});
WithLabelAccent.args = {
  percentage: 40,
  variant: "accent",
  height: "md",
  currentValue: 4,
  targetValue: 10,
  showProgressLabel: true,
};
