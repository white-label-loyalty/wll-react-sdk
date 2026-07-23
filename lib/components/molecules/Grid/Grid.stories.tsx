import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { View } from 'react-native';
import { MAX_WIDTH } from '../../../constants';
import { SectionType } from '../../../types/section';
import { BadgeTileType, TileHeight, TileType } from '../../../types/tile';
import Grid from './index';

// @ts-ignore
import rewardImage from '../../../assets/reward.png';

export default {
  title: 'components/molecules/Grid',
  component: Grid,
  decorators: [
    (Story) => (
      <View
        style={{
          maxWidth: MAX_WIDTH,
          height: '100%',
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof Grid> = (args) => <Grid {...args} />;

export const Default = Template.bind({});
Default.args = {
  section: {
    details: [],
    defaultLocale: 'en',
    name: 'Badge Tiles',
    type: SectionType.Grid,
    active: true,
    id: '60a6b9e3-14c7-4b49-a363-b6dc2f16dae0',
    createdAt: '2024-11-11T16:28:32.848Z',
    updatedAt: '2024-11-11T16:28:32.848Z',
    priority: 2,
    tiles: [
      {
        tileHeight: TileHeight.Full,
        active: true,
        type: TileType.Badge,
        configuration: {
          defaultLocale: 'en',
          details: [],
          type: BadgeTileType.Specific,
          badgeId: '900a2477-95c4-4c42-ae2d-3795e7f0f5f2',
          internalName: 'Epicurean Elite',
          priority: 0,
          internalDescription: null,
          status: 'ACTIVE',
          id: '8962205c-e32a-4651-ac7a-4c584449d9fa',
          createdAt: '2024-08-06T08:53:24.307Z',
          updatedAt: '2024-08-06T08:53:24.307Z',
          name: 'Epicurean Elite',
          locale: 'en',
          description:
            'Granted to those who achieve the highest tier in the loyalty program.',
          artworkUrl:
            'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
          count: 0,
          awardedDatePrefix: 'Awarded',
          emptyBadgeMessage: 'You haven’t earned any badges yet.',
          emptyBadgeArtworkUrl:
            'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
          badgeNotEarnedMessage: 'Badge not earned yet',
          lastEarnedAt: '2024-11-11T16:17:23.784Z',
        },
        id: '902258a6-f7af-4da5-9069-43042ac1a326',
        createdAt: '2024-11-11T16:17:23.784Z',
        updatedAt: '2024-11-11T16:17:23.784Z',
        priority: 4,
      },
      {
        tileHeight: TileHeight.Full,
        active: true,
        type: TileType.Badge,
        configuration: {
          defaultLocale: 'en',
          details: [],
          type: BadgeTileType.Specific,
          badgeId: 'd3a2b1fa-3963-4117-8c6f-69e5f8fea009',
          internalName: 'Tasty Trailblazer',
          priority: 0,
          status: 'ACTIVE',
          id: '79021b66-a7cf-4809-bef9-872467c0cd66',
          createdAt: '2024-08-06T08:52:49.093Z',
          updatedAt: '2024-08-06T08:52:49.093Z',
          name: 'Tasty Trailblazer',
          locale: 'en',
          description:
            'Awarded for being among the first to try new menu items.',
          artworkUrl:
            'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
          count: 6,
          awardedDatePrefix: 'Earned on',
          emptyBadgeMessage: 'You haven’t earned any badges yet.',
          emptyBadgeArtworkUrl: 'You haven’t earned any badges yet.',
          badgeNotEarnedMessage: 'Badge not earned yet',
          lastEarnedAt: '2024-11-11T16:17:23.784Z',
        },
        id: '29b1982c-2774-4ce6-9712-c8732e790dbf',
        createdAt: '2024-11-11T16:18:47.130Z',
        updatedAt: '2024-11-11T16:18:47.130Z',
        priority: 3,
      },
      {
        tileHeight: TileHeight.Full,
        active: true,
        type: TileType.Badge,
        configuration: {
          defaultLocale: 'en',
          details: [],
          type: BadgeTileType.Latest,
          badgeId: '30528c0a-30c2-44aa-9640-25647b8a594c',
          internalName: 'Flavour Fanatic',
          priority: 0,
          status: 'ACTIVE',
          id: '656539e7-0b33-4952-8cff-8fbca4883621',
          createdAt: '2024-08-06T08:43:13.594Z',
          updatedAt: '2024-08-06T08:51:48.468Z',
          name: 'Flavour Fanatic',
          locale: 'en',
          description: ' Earned by frequently rating or reviewing dishes.',
          artworkUrl:
            'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
          count: 0,
          awardedDatePrefix: 'Swindled on',
          emptyBadgeMessage: 'You haven’t earned any badges yet.',
          emptyBadgeArtworkUrl:
            'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
          badgeNotEarnedMessage: 'Badge not earned yet',
          lastEarnedAt: '2024-11-11T16:17:23.784Z',
        },
        id: '87ada9f9-5a9f-4dde-a9bc-12dec8385a7f',
        createdAt: '2024-11-11T16:21:30.457Z',
        updatedAt: '2024-11-11T16:21:30.457Z',
        priority: 2,
      },
      {
        tileHeight: TileHeight.Full,
        active: true,
        type: TileType.Badge,
        configuration: {
          defaultLocale: 'en',
          details: [],
          type: BadgeTileType.Latest,
          badgeId: '84bd0af7-bef3-4201-8541-d60431116597',
          internalName: 'Gourmet Explorer',
          priority: 0,
          status: 'ACTIVE',
          id: '4570996f-5af5-4adb-a59f-67c817cc5874',
          createdAt: '2024-08-06T08:50:54.043Z',
          updatedAt: '2024-08-06T08:50:54.043Z',
          name: 'Gourmet Explorer',
          locale: 'en',
          description:
            'Awarded for trying a diverse range of menu items or cuisines.',
          artworkUrl:
            'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
          count: 6,
          awardedDatePrefix: 'Swiped upon',
          emptyBadgeMessage: 'You haven’t earned any badges yet.',
          emptyBadgeArtworkUrl:
            'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
          badgeNotEarnedMessage: 'Badge not earned yet',
          lastEarnedAt: '2024-11-11T16:17:23.784Z',
        },
        id: '9d4cd1a7-637d-4a53-8a83-69a458d86f69',
        createdAt: '2024-11-11T16:22:51.819Z',
        updatedAt: '2024-11-11T16:22:51.819Z',
        priority: 1,
      },
      {
        tileHeight: TileHeight.Full,
        active: true,
        type: TileType.Campaign,
        configuration: {
          campaignId: '7a59d8a4-0740-46e9-a54e-697470a7a54a',
          type: 'GOAL_BASED',
          status: 'ACTIVE',
          name: 'Summer Coffee Challenge',
          description: 'Complete every step to earn the reward.',
          artworkUrl: rewardImage,
          showDetails: true,
          effectivity: { start: null, end: null },
          progress: {
            currentValue: 2,
            targetValue: 3,
            windowStart: null,
            windowEnd: null,
            optedInAt: null,
            completedAt: null,
            availableAgainAt: null,
            cooldownCycle: null,
          },
          missions: [],
        },
        id: 'campaign-full-progress',
        priority: 7,
        createdAt: '2024-11-11T16:22:51.819Z',
        updatedAt: '2024-11-11T16:22:51.819Z',
      },
      {
        tileHeight: TileHeight.Full,
        active: true,
        type: TileType.Campaign,
        configuration: {
          campaignId: '8b60e9b5-1851-47fa-b65f-808581b8b65b',
          type: 'GOAL_BASED',
          status: 'COMPLETED',
          name: 'Completed Challenge',
          description: 'You did it! All missions complete.',
          artworkUrl: rewardImage,
          showDetails: true,
          effectivity: { start: null, end: null },
          progress: {
            currentValue: 3,
            targetValue: 3,
            windowStart: null,
            windowEnd: null,
            optedInAt: null,
            completedAt: '2026-06-25T14:05:00.000Z',
            availableAgainAt: null,
            cooldownCycle: null,
          },
          missions: [],
        },
        id: 'campaign-full-completed',
        priority: 5,
        createdAt: '2024-11-11T16:22:51.819Z',
        updatedAt: '2024-11-11T16:22:51.819Z',
      },
      {
        tileHeight: TileHeight.Full,
        active: true,
        type: TileType.Campaign,
        configuration: {
          campaignId: '9c71fab6-2962-58gb-c76g-919692c9c76c',
          type: 'GOAL_BASED',
          status: 'ACTIVE',
          name: 'No Progress Yet',
          description: 'Opt in to start tracking your progress.',
          artworkUrl: rewardImage,
          showDetails: true,
          effectivity: { start: null, end: null },
          progress: null,
          missions: [],
        },
        id: 'campaign-full-no-progress',
        priority: 4,
        createdAt: '2024-11-11T16:22:51.819Z',
        updatedAt: '2024-11-11T16:22:51.819Z',
      },
      {
        tileHeight: TileHeight.Full,
        active: true,
        type: TileType.Campaign,
        configuration: {
          campaignId: 'cf04ide9-5c95-8bjd-fa9j-c4c9c5fcfa9f',
          type: 'GOAL_BASED',
          status: 'ACTIVE',
          name: 'Artwork Only Full',
          description: '',
          artworkUrl: rewardImage,
          showDetails: false,
          effectivity: { start: null, end: null },
          progress: null,
          missions: [],
        },
        id: 'campaign-full-artwork-only',
        priority: 2,
        createdAt: '2024-11-11T16:22:51.819Z',
        updatedAt: '2024-11-11T16:22:51.819Z',
      },
      {
        tileHeight: TileHeight.Full,
        active: true,
        type: TileType.Campaign,
        configuration: {
          campaignId: 'ad82gbc7-3a73-69hc-d87h-a2a7a3dad87d',
          type: 'GOAL_BASED',
          status: 'ACTIVE',
          name: 'No Image Campaign',
          description: 'Campaign without artwork, with progress.',
          artworkUrl: '',
          showDetails: true,
          effectivity: { start: null, end: null },
          progress: {
            currentValue: 7,
            targetValue: 10,
            windowStart: null,
            windowEnd: null,
            optedInAt: null,
            completedAt: null,
            availableAgainAt: null,
            cooldownCycle: null,
          },
          missions: [],
        },
        id: 'campaign-full-no-image',
        priority: 0,
        createdAt: '2024-11-11T16:22:51.819Z',
        updatedAt: '2024-11-11T16:22:51.819Z',
      },
    ],
    title: 'Achievement Gallery',
    locale: 'en',
    description:
      "Your achievements, but make them sparkle. Each badge here is a little piece of bragging rights you've earned along the way. ",
    pointsPrefix: 'Ca$h',
    pointsSuffix: 'pts',
    pointsMultiplier: 1,
  },
};

export const MixedHeights = Template.bind({});
MixedHeights.args = {
  section: {
    ...Default.args!.section!,
    id: '70a6b9e3-14c7-4b49-a363-b6dc2f16dae1',
    name: 'Mixed Height Tiles',
    tiles: [
      {
        tileHeight: TileHeight.Half,
        active: true,
        type: TileType.Content,
        configuration: {
          artworkUrl:
            'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
        },
        id: 'content-tile-1',
        createdAt: '2024-11-11T16:17:23.784Z',
        updatedAt: '2024-11-11T16:17:23.784Z',
        priority: 5,
      },
      {
        tileHeight: TileHeight.Half,
        active: true,
        type: TileType.Content,
        configuration: {
          showName: true,

          artworkUrl:
            'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
        },
        id: 'reward-category-tile-2',
        createdAt: '2024-11-11T16:17:23.784Z',
        updatedAt: '2024-11-11T16:17:23.784Z',
        priority: 4,
      },
      ...Default.args!.section!.tiles.slice(2),
    ],
  } as any,
};
