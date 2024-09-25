import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { TileHeight } from 'types/tile';
import RewardCategoryTile from './index';

export default {
  title: 'components/organisms/RewardCategoryTile',
  component: RewardCategoryTile,
} as Meta;

const Template: StoryFn<typeof RewardCategoryTile> = (args) => (
  <RewardCategoryTile {...args} />
);

export const Default = Template.bind({});
Default.args = {
  tile: {
    id: '1',
    active: true,
    createdAt: '',
    updatedAt: '',
    tileHeight: TileHeight.Full,
    configuration: {
      allowDecorationOverlay: true,
      rewardCategory: {
        name: 'Restaurants',
        pictureUrl:
          'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg',
      },
    },
  },
};

export const LongCategoryName = Template.bind({});
LongCategoryName.args = {
  tile: {
    id: '1',
    active: true,
    createdAt: '',
    updatedAt: '',
    tileHeight: TileHeight.Full,
    configuration: {
      allowDecorationOverlay: true,
      rewardCategory: {
        name: 'This is a really really really long title that should overflow its parent.',
        pictureUrl:
          'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg',
      },
    },
  },
};

export const NoDecorationOverlay = Template.bind({});
NoDecorationOverlay.args = {
  tile: {
    id: '1',
    active: true,
    createdAt: '',
    updatedAt: '',
    tileHeight: TileHeight.Full,
    configuration: {
      allowDecorationOverlay: false,
      rewardCategory: {
        name: 'Restaurants',
        pictureUrl:
          'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg',
      },
    },
  },
};
