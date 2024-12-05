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

export const DiningRewards = Template.bind({});
DiningRewards.args = {
  tile: {
    tileHeight: TileHeight.Full,
    active: true,
    type: TileType.RewardCategory,
    configuration: {
      showName: true,
      rewardCategoryId: '9d8287e0-bae9-47b4-8bf0-0115fd64336a',
      artworkUrl:
        'https://images.pexels.com/photos/1850595/pexels-photo-1850595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Restaurant Rewards',
    },
    id: 'f57f2f98-cabf-4b81-82ac-a0249172d65c',
    createdAt: '2024-10-18T14:40:37.835Z',
    updatedAt: '2024-10-18T14:40:37.835Z',
    priority: 8,
  },
};

export const ExclusiveExperiences = Template.bind({});
ExclusiveExperiences.args = {
  tile: {
    tileHeight: TileHeight.Full,
    active: true,
    type: TileType.RewardCategory,
    configuration: {
      showName: true,
      rewardCategoryId: '9d8287e0-bae9-47b4-8bf0-0115fd64336a',
      name: 'VIP Access & Exclusive Member Events',
      artworkUrl:
        'https://images.pexels.com/photos/19023673/pexels-photo-19023673/free-photo-of-bottle-of-champagne-in-a-basket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    id: 'f57f2f98-cabf-4b81-82ac-a0249172d65c',
    createdAt: '2024-10-18T14:40:37.835Z',
    updatedAt: '2024-10-18T14:40:37.835Z',
    priority: 8,
  },
};

export const InstantRedemption = Template.bind({});
InstantRedemption.args = {
  tile: {
    tileHeight: TileHeight.Full,
    active: true,
    type: TileType.RewardCategory,
    configuration: {
      showName: false,
      rewardCategoryId: '9d8287e0-bae9-47b4-8bf0-0115fd64336a',
      name: 'Instant Rewards',
      artworkUrl:
        'https://images.pexels.com/photos/16660873/pexels-photo-16660873/free-photo-of-neon-over-arcade-games.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    id: 'f57f2f98-cabf-4b81-82ac-a0249172d65c',
    createdAt: '2024-10-18T14:40:37.835Z',
    updatedAt: '2024-10-18T14:40:37.835Z',
    priority: 8,
  },
};

export const TravelPerks = Template.bind({});
TravelPerks.args = {
  tile: {
    tileHeight: TileHeight.Full,
    active: true,
    type: TileType.RewardCategory,
    configuration: {
      showName: true,
      rewardCategoryId: '9d8287e0-bae9-47b4-8bf0-0115fd64336a',
      artworkUrl:
        'https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Travel & Leisure',
    },
    id: 'f57f2f98-cabf-4b81-82ac-a0249172d65c',
    createdAt: '2024-10-18T14:40:37.835Z',
    updatedAt: '2024-10-18T14:40:37.835Z',
    priority: 8,
  },
};

export const GiftCardsAndVouchers = Template.bind({});
GiftCardsAndVouchers.args = {
  tile: {
    tileHeight: TileHeight.Full,
    active: true,
    type: TileType.RewardCategory,
    configuration: {
      showName: true,
      rewardCategoryId: '9d8287e0-bae9-47b4-8bf0-0115fd64336a',
      name: 'Digital Gift Cards & Vouchers',
      artworkUrl:
        'https://images.pexels.com/photos/6005387/pexels-photo-6005387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    id: 'f57f2f98-cabf-4b81-82ac-a0249172d65c',
    createdAt: '2024-10-18T14:40:37.835Z',
    updatedAt: '2024-10-18T14:40:37.835Z',
    priority: 8,
  },
};

export const CharitableDonations = Template.bind({});
CharitableDonations.args = {
  tile: {
    tileHeight: TileHeight.Full,
    active: true,
    type: TileType.RewardCategory,
    configuration: {
      showName: true,
      rewardCategoryId: '9d8287e0-bae9-47b4-8bf0-0115fd64336a',
      artworkUrl:
        'https://images.pexels.com/photos/6590920/pexels-photo-6590920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Donate Your Points',
    },
    id: 'f57f2f98-cabf-4b81-82ac-a0249172d65c',
    createdAt: '2024-10-18T14:40:37.835Z',
    updatedAt: '2024-10-18T14:40:37.835Z',
    priority: 8,
  },
};

export const LifestyleRewards = Template.bind({});
LifestyleRewards.args = {
  tile: {
    tileHeight: TileHeight.Full,
    active: true,
    type: TileType.RewardCategory,
    configuration: {
      showName: true,
      rewardCategoryId: '9d8287e0-bae9-47b4-8bf0-0115fd64336a',
      name: 'Wellness & Lifestyle Benefits',
      artworkUrl:
        'https://images.pexels.com/photos/221247/pexels-photo-221247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    id: 'f57f2f98-cabf-4b81-82ac-a0249172d65c',
    createdAt: '2024-10-18T14:40:37.835Z',
    updatedAt: '2024-10-18T14:40:37.835Z',
    priority: 8,
  },
};
