import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Section, SectionType } from '../../../types/section';
import {
  BannerTileConfig,
  Tile,
  TileHeight,
  TileType,
  UrlTarget,
} from '../../../types/tile';
import Carousel from './index';

export default {
  title: 'components/molecules/Carousel',
  component: Carousel,
  argTypes: {
    section: { control: 'object' },
  },
} as Meta;

const Template: StoryFn<typeof Carousel> = (args) => <Carousel {...args} />;

const createMockTile = (config: Partial<BannerTileConfig>): Tile => ({
  id: Math.random().toString(36).substr(2, 9),
  type: TileType.Banner,
  createdAt: 'test-date',
  updatedAt: 'test-date',
  active: true,
  tileHeight: TileHeight.Full,
  configuration: {
    imageUrl: config.imageUrl,
    title: config.title,
    description: config.description,
    buttonText: config.buttonText,
    url: config.url,
    urlTarget: config.urlTarget,
  },
});

const createMockSection = (
  title: string,
  description: string,
  tiles: Tile[]
): Section => ({
  id: Math.random().toString(36).substr(2, 9),
  title,
  type: SectionType.Banner,
  active: true,
  priority: 0,
  description,
  tiles,
  createdAt: 'test-date',
  updatedAt: 'test-date',
});

export const Default = Template.bind({});
Default.args = {
  section: createMockSection(
    'Featured Offers',
    'Check out our latest promotions and deals!',
    [
      createMockTile({
        title: 'Refer a friend',
        imageUrl:
          'https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_1280.jpg',
        description:
          'Click here to share your unique referral link with friends!',
        buttonText: 'REFER NOW',
        urlTarget: UrlTarget.sameWindow,
      }),
      createMockTile({
        title: 'Summer Sale',
        imageUrl:
          'https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_1280.jpg',
        description:
          'Enjoy up to 50% off on selected items. Limited time offer!',
        buttonText: 'SHOP NOW',
        urlTarget: UrlTarget.newWindow,
        url: 'https://www.example.com',
      }),
      createMockTile({
        title: 'New Collection',
        imageUrl:
          'https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_1280.jpg',
        description: 'Check out our latest arrivals for this season.',
        buttonText: 'EXPLORE',
        urlTarget: UrlTarget.sameWindow,
        url: 'https://www.example.com',
      }),
    ]
  ),
};

export const SingleItem = Template.bind({});
SingleItem.args = {
  section: createMockSection(
    'Special Promotion',
    "Don't miss out on this exclusive offer!",
    [
      createMockTile({
        title: 'Special Offer',
        description: 'Get a free gift with any purchase over $50.',
        buttonText: 'CLAIM NOW',
        imageUrl:
          'https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_1280.jpg',
        urlTarget: UrlTarget.sameWindow,
        url: 'https://www.example.com',
      }),
    ]
  ),
};

export const ManyItems = Template.bind({});
ManyItems.args = {
  section: createMockSection(
    'All Promotions',
    'Browse through our extensive list of current promotions.',
    Array(10)
      .fill(null)
      .map((_, index) =>
        createMockTile({
          title: `Offer ${index + 1}`,
          imageUrl:
            'https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_1280.jpg',
          description: `This is the description for offer number ${index + 1}.`,
          buttonText: `ACTION ${index + 1}`,
          urlTarget:
            index % 2 === 0 ? UrlTarget.sameWindow : UrlTarget.newWindow,
        })
      )
  ),
};
