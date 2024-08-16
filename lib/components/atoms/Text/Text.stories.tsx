import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Text } from ".";

const meta: Meta<typeof Text> = {
  title: "components/atoms/Text",
  component: Text,
  argTypes: {
    variant: {
      control: "select",
      options: ["eyebrow", "title", "subtitle", "body", "caption", "label"],
    },
    children: {
      control: "text",
    },
  },
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Body: Story = {
  args: {
    children: "Hello, World!",
    variant: "body",
  },
};

export const Eyebrow: Story = {
  args: {
    children: "Tier",
    variant: "eyebrow",
  },
};

export const Title: Story = {
  args: {
    children: "Welcome, Nick!",
    variant: "title",
  },
};

export const Subtitle: Story = {
  args: {
    children: "This is a subtitle",
    variant: "subtitle",
  },
};

export const Caption: Story = {
  args: {
    children: "4536/6000",
    variant: "caption",
  },
};

export const Label: Story = {
  args: {
    children: "You reached Gold!",
    variant: "label",
  },
};
