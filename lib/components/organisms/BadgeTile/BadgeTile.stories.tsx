import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import BadgeTile from "./index";

export default {
  title: "components/organisms/BadgeTile",
  component: BadgeTile,
} as Meta;

const Template: StoryFn<typeof BadgeTile> = (args) => <BadgeTile {...args} />;

export const Default = Template.bind({});
Default.args = {
  configuration: {
    badgeId: "a7a3e1f2-be70-4e5a-a4b7-0d9870c56f0d",
    badge: {
      id: "a7a3e1f2-be70-4e5a-a4b7-0d9870c56f0d",
      name: "Top Shopper",
      description:
        "You’ve earned the Top Shopper badge 2 times! Last awarded on 1 Jan 2024.",
      artworkUrl: "https://picsum.photos/200/300",
      createdAt: "2024-08-15T13:06:14.583Z",
      updatedAt: "2024-08-15T13:06:14.583Z",
    },
  },
};
