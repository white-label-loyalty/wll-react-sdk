// @ts-nocheck
import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { View } from 'react-native';
import { Section } from '../../../components/organisms';
import { SectionType } from '../../../types/section';
import { CTALinkTarget, TileHeight, TileType } from '../../../types/tile';

export default {
  title: 'components/organisms/Section',
  component: Section,
  args: {
    section: {
      id: '1',
    },
  },
  decorators: [
    (Story) => (
      <View
        style={{
          width: '100%',
          height: '100%',
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <Story />
      </View>
    ),
  ],
} as Meta;

const Template: StoryFn<typeof Section> = (args) => <Section {...args} />;

export const TravelRewardsSection = Template.bind({});
TravelRewardsSection.args = {
  section: {
    details: [],
    defaultLocale: 'en',
    name: 'Elite Member Benefits',
    type: SectionType.Grid,
    active: true,
    id: 'a35399a7-580a-4493-afff-24ef4facf3f4',
    createdAt: '2024-11-19T15:50:37.701Z',
    updatedAt: '2024-12-06T11:18:16.842Z',
    visibilityCriteria: null,
    priority: 2,
    tiles: [
      {
        tileHeight: TileHeight.Full,
        active: true,
        type: TileType.Content,
        configuration: {
          defaultLocale: 'en',
          details: [],
          ctaLinkTarget: CTALinkTarget.newWindow,
          locale: 'en',
          title: 'Welcome to Platinum Status',
          body: 'Enjoy premium benefits including priority check-in, lounge access, and complimentary upgrades. Your elite journey begins here.',
          artworkUrl:
            'https://ucarecdn.com/b129c5c2-08fd-4962-83b1-5c35301148c1/',
        },
        id: '6d49d8c5-6fc4-4db6-900d-6dbe2fcf04c2',
        priority: 7,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        tileHeight: TileHeight.Full,
        active: true,
        type: TileType.Content,
        configuration: {
          defaultLocale: 'en',
          details: [],
          ctaLinkTarget: CTALinkTarget.newWindow,
          locale: 'en',
          title: 'Double Miles Promotion',
          body: 'Earn 2X miles on all international flights this month. Plus, bonus miles on partner airlines!',
          artworkUrl:
            'https://ucarecdn.com/4dcad562-a68f-4dde-bff1-85e320df5f60/',
          ctaLink: '/promotions/double-miles',
        },
        id: 'd91c85d2-4343-4dfe-aed3-cf1f8c530d1f',
        priority: 6,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        tileHeight: TileHeight.Half,
        active: true,
        type: TileType.Points,
        configuration: {
          defaultLocale: 'en',
          details: [],
          points: 75420,
          locale: 'en',
          title: 'Available Miles',
          artworkUrl:
            'https://ucarecdn.com/ddeedc13-e354-4f0f-9746-4e24fe7d67af/',
          pointsPrefix: '✈️',
          pointsSuffix: ' miles',
          pointsMultiplier: 1,
        },
        id: '36b800ca-5e44-4c54-bbfb-a5e5b96c749a',
        priority: 4,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        tileHeight: TileHeight.Full,
        active: true,
        type: TileType.Reward,
        configuration: {
          defaultLocale: 'en',
          details: [],
          rewardId: 'cb39dd5e-bdd9-4595-a924-4f2dfb36c53b',
          showPrice: true,
          showArtwork: true,
          showDetails: true,
          name: 'Mile High Drinks',
          pictureUrl: '',
          price: 10,
          availability: {
            start: '2023-05-05T13:49:36.490Z',
            end: null,
          },
          purchasable: true,
          priority: 100,
          value: 1000,
          type: 'VOUCHER',
          codeType: 'HUMAN',
          hideCode: false,
          notificationConfig: null,
          id: 'cb39dd5e-bdd9-4595-a924-4f2dfb36c53b',
          createdAt: '2023-05-05T13:50:30.598Z',
          updatedAt: '2024-11-14T19:30:08.744Z',
          summary: 'Limited Time Offer for all you elite members',
          redemptionMessage: null,
          metadata: null,
          visibilityCriteria: null,
          code: null,
          purchaseExpiration: null,
          tier: null,
          category: null,
          discounts: [],
          artworkUrl:
            'https://images.pexels.com/photos/6858660/pexels-photo-6858660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        id: 'd07b007e-85e9-477f-9b70-08b0629b3060',
        priority: 3,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ],
    title: 'Elite Member Benefits',
    locale: 'en',
    pointsSuffix: 'miles',
  },
};
