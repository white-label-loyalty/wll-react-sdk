import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { createRewardCategoryTileMock } from '../../../mocks/rewardCategoryTile';
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
  tile: createRewardCategoryTileMock(),
};

export const ExclusiveExperiences = Template.bind({});
ExclusiveExperiences.args = {
  tile: createRewardCategoryTileMock({
    name: 'VIP Access & Exclusive Member Events',
    artworkUrl:
      'https://images.pexels.com/photos/19023673/pexels-photo-19023673/free-photo-of-bottle-of-champagne-in-a-basket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  }),
};

export const InstantRedemption = Template.bind({});
InstantRedemption.args = {
  tile: createRewardCategoryTileMock({
    showName: false,
    name: 'Instant Rewards',
    artworkUrl:
      'https://images.pexels.com/photos/16660873/pexels-photo-16660873/free-photo-of-neon-over-arcade-games.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  }),
};

export const TravelPerks = Template.bind({});
TravelPerks.args = {
  tile: createRewardCategoryTileMock({
    name: 'Travel & Leisure',
    artworkUrl:
      'https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  }),
};

export const GiftCardsAndVouchers = Template.bind({});
GiftCardsAndVouchers.args = {
  tile: createRewardCategoryTileMock({
    name: 'Digital Gift Cards & Vouchers',
    artworkUrl:
      'https://images.pexels.com/photos/6005387/pexels-photo-6005387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  }),
};

export const CharitableDonations = Template.bind({});
CharitableDonations.args = {
  tile: createRewardCategoryTileMock({
    name: 'Donate Your Points',
    artworkUrl:
      'https://images.pexels.com/photos/6590920/pexels-photo-6590920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  }),
};

export const LifestyleRewards = Template.bind({});
LifestyleRewards.args = {
  tile: createRewardCategoryTileMock({
    name: 'Wellness & Lifestyle Benefits',
    artworkUrl:
      'https://images.pexels.com/photos/221247/pexels-photo-221247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  }),
};
