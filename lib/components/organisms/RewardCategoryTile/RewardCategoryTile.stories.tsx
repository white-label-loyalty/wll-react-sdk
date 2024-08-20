import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import RewardCategoryTile from "./index";

export default {
  title: "components/organisms/RewardCategoryTile",
  component: RewardCategoryTile,
} as Meta;

const Template: StoryFn<typeof RewardCategoryTile> = (args) => (
  <RewardCategoryTile {...args} />
);

export const Default = Template.bind({});
Default.args = {
  configuration: {
    allowDecorationOverlay: true,
    id: "9cb2cc08-e033-4200-86a7-95a03ba09462",
    createdAt: "2018-06-08T08:57:47.198Z",
    updatedAt: "2018-06-08T08:57:47.198Z",
    name: "Restaurants",
    description: "This is an example description",
    priority: 1,
    parent: "9cb2cc08-e033-4200-86a7-95a03ba09462",
    pictureUrl:
      "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg",
  },
};

export const LongCategoryName = Template.bind({});
LongCategoryName.args = {
  configuration: {
    allowDecorationOverlay: true,
    id: "9cb2cc08-e033-4200-86a7-95a03ba09462",
    createdAt: "2018-06-08T08:57:47.198Z",
    updatedAt: "2018-06-08T08:57:47.198Z",
    name: "This is s really really really long title that should overflow its parent.",
    description: "This is an example description",
    priority: 1,
    parent: "9cb2cc08-e033-4200-86a7-95a03ba09462",
    pictureUrl:
      "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg",
  },
};

export const NoDecorationOverlay = Template.bind({});
NoDecorationOverlay.args = {
  configuration: {
    allowDecorationOverlay: false,
    id: "9cb2cc08-e033-4200-86a7-95a03ba09462",
    createdAt: "2018-06-08T08:57:47.198Z",
    updatedAt: "2018-06-08T08:57:47.198Z",
    name: "Restaurants",
    description: "This is an example description",
    priority: 1,
    parent: "9cb2cc08-e033-4200-86a7-95a03ba09462",
    pictureUrl:
      "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg",
  },
};
