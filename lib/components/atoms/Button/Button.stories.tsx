import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";
import Icon from "../Icon";
import React from "react";

const meta: Meta<typeof Button> = {
  title: "components/atoms/Button",
  component: Button,
  argTypes: {
    onPress: { action: "pressed" },
    variant: {
      control: "select",
      options: ["primary", "accent"],
    }
  },
  args: {
    variant: "accent",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    title: "Primary Button",
    variant: "primary",
  },
};
export const Accent: Story = {
  args: {
    title: "Accent Button",
    variant: "accent",
  },
};

export const IconOnly: Story = {
  args: {
    title: "",
    variant: "primary",
    icon: <Icon name="Loader" size={24} color="white" />,
  },
};

export const WithIconAndTitle: Story = {
  args: {
    title: "Icon Button",
    variant: "primary",
    icon: <Icon name="ChevronRight" size={24} color="white" />,
  },
};