import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { TileHeight, TileType } from '../../../types/tile';
import { TileWrapper } from '../../../utils/storybookHelpers';
import RewardCategoryTile from './index';

export default {
  title: 'components/organisms/RewardCategoryTile',
  component: RewardCategoryTile,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof RewardCategoryTile> = (args) => (
  <TileWrapper>
    <RewardCategoryTile {...args} />
  </TileWrapper>
);

export const Default = Template.bind({});
Default.args = {
  tile: {
    tileHeight: TileHeight.Full,
    active: true,
    type: TileType.RewardCategory,
    configuration: {
      showName: true,
      rewardCategoryId: '9d8287e0-bae9-47b4-8bf0-0115fd64336a',
      artworkUrl: 'https://ucarecdn.com/9efdd2f9-0e76-4634-8713-f20510415268/',
      name: 'Multi Salad',
    },
    id: 'f57f2f98-cabf-4b81-82ac-a0249172d65c',
    createdAt: '2024-10-18T14:40:37.835Z',
    updatedAt: '2024-10-18T14:40:37.835Z',
    priority: 8,
  },
};

export const LongCategoryName = Template.bind({});
LongCategoryName.args = {
  tile: {
    tileHeight: TileHeight.Full,
    active: true,
    type: TileType.RewardCategory,
    configuration: {
      showName: true,
      rewardCategoryId: '9d8287e0-bae9-47b4-8bf0-0115fd64336a',
      name: 'This is a really really really long title that should overflow its parent.',
      artworkUrl: 'https://ucarecdn.com/9efdd2f9-0e76-4634-8713-f20510415268/',
    },
    id: 'f57f2f98-cabf-4b81-82ac-a0249172d65c',
    createdAt: '2024-10-18T14:40:37.835Z',
    updatedAt: '2024-10-18T14:40:37.835Z',
    priority: 8,
  },
};

export const NoDecorationOverlay = Template.bind({});
NoDecorationOverlay.args = {
  tile: {
    tileHeight: TileHeight.Full,
    active: true,
    type: TileType.RewardCategory,
    configuration: {
      showName: false,
      rewardCategoryId: '9d8287e0-bae9-47b4-8bf0-0115fd64336a',
      name: 'This is a really really really long title that should overflow its parent.',
      artworkUrl: 'https://ucarecdn.com/9efdd2f9-0e76-4634-8713-f20510415268/',
    },
    id: 'f57f2f98-cabf-4b81-82ac-a0249172d65c',
    createdAt: '2024-10-18T14:40:37.835Z',
    updatedAt: '2024-10-18T14:40:37.835Z',
    priority: 8,
  },
};
