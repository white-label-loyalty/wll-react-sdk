import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { TileHeight, TileType, UrlTarget } from '../../../types/tile';
import BaseBanner from './index';

export default {
  title: 'components/atoms/BaseBanner',
  component: BaseBanner,
} as Meta;

const Template: StoryFn<typeof BaseBanner> = (args) => <BaseBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
  tile: {
    id: 'banner-1',
    type: TileType.Banner,
    active: true,
    createdAt: '',
    updatedAt: '',
    tileHeight: TileHeight.Full,
    priority: 1,
    configuration: {
      artworkUrl:
        'https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_1280.jpg',
      title: 'Summer Sale',
      description: 'Get up to 50% off on selected items!',
      buttonText: 'SHOP NOW',
      url: 'https://www.example.com',
      urlTarget: UrlTarget.sameWindow,
    },
  },
};
