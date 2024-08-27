import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

const meta: Meta<typeof Button> = {
  title: "components/atoms/Button",
  component: Button,
  argTypes: {
    onPress: { action: "pressed" },
    variant: {
      control: "select",
      options: ["primary", "accent"],
    },
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
