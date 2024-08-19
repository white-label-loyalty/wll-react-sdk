import { CtaAction } from "@/types/tile";
import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import BannerTile from ".";

export default {
  title: "components/organisms/BannerTile",
  component: BannerTile,
} as Meta;

const Template: StoryFn<typeof BannerTile> = (args) => <BannerTile {...args} />;

export const Default = Template.bind({});
Default.args = {
  bannerConfig: {
    imageUrl:
      "https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_1280.jpg",
    title: "Summer Sale",
    description: "Get up to 50% off on selected items!",
    ctaText: "SHOP NOW",
    ctaLink: "https://www.example.com",
    ctaAction: CtaAction.sameWindow,
  },
};
