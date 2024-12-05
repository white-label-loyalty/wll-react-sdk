import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { View } from 'react-native';
import { MAX_WIDTH } from '../../../constants';
import { SectionType } from '../../../types/section';
import { BadgeTileType, TileHeight, TileType } from '../../../types/tile';
import Grid from './index';

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
        },
        id: '9d4cd1a7-637d-4a53-8a83-69a458d86f69',
        createdAt: '2024-11-11T16:22:51.819Z',
        updatedAt: '2024-11-11T16:22:51.819Z',
        priority: 1,
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
