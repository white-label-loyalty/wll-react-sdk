import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import BannerTile from '.';
import { createBannerTileMock } from '../../../mocks/bannerTile';

export default {
  title: 'components/organisms/BannerTile',
  component: BannerTile,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof BannerTile> = (args) => <BannerTile {...args} />;

export const SeasonalPromotionBanner = Template.bind({});
SeasonalPromotionBanner.args = {
  tile: createBannerTileMock({
    title: 'Summer Points Splash',
    ctaLink: '/summer-rewards',
    ctaText: 'Start Earning',
    artworkUrl:
      'https://images.pexels.com/photos/1209611/pexels-photo-1209611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'Double points on all summer essentials! Plus, unlock exclusive seasonal rewards when you spend $100 or more.',
  }),
};

export const LoyaltyTierUpgrade = Template.bind({});
LoyaltyTierUpgrade.args = {
  tile: createBannerTileMock({
    title: 'Welcome to Diamond Status',
    ctaLink: '/diamond-benefits',
    artworkUrl:
      'https://images.pexels.com/photos/380337/pexels-photo-380337.jpeg',
    description:
      'Enjoy unlimited 5X points, concierge service, and exclusive Diamond member events.',
  }),
};

export const RewardsHighlight = Template.bind({});
RewardsHighlight.args = {
  tile: createBannerTileMock(),
};
