import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { BadgeTileType, TileHeight, TileType } from '../../../types/tile';
import { TileWrapper } from '../../../utils/storybookHelpers';
import BadgeTileUpdated from './index';

export default {
  title: 'components/organisms/BadgeTileUpdated',
  component: BadgeTileUpdated,
} as Meta;

const Template: StoryFn<typeof BadgeTileUpdated> = (args) => (
  <TileWrapper isHalfTile={args.tile.tileHeight === TileHeight.Half}>
    <BadgeTileUpdated {...args} />
  </TileWrapper>
);

export const LatestNoBadgesEarned = Template.bind({});
LatestNoBadgesEarned.args = {
  tile: {
    id: 'specific-badge',
    type: TileType.Badge,
    active: true,
    createdAt: '2024-08-06T08:53:24.307Z',
    updatedAt: '2024-08-06T08:53:24.307Z',
    tileHeight: TileHeight.Full,
    priority: 0,
    configuration: {
      type: BadgeTileType.Latest,
      badgeId: '900a2477-95c4-4c42-ae2d-3795e7f0f5f2',
      internalName: 'Top Spender',
      priority: 0,
      internalDescription: null,
      status: 'ACTIVE',
      id: '900a2477-95c4-4c42-ae2d-3795e7f0f5f2',
      createdAt: '2024-08-06T08:53:24.307Z',
      updatedAt: '2024-08-06T08:53:24.307Z',
      awardedDatePrefix: 'Awarded',
      emptyBadgeMessage: 'You haven’t earned any badges yet.',
      badgeNotEarnedMessage: 'Badge not earned yet',
      emptyBadgeArtworkUrl:
        'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
      details: [],
      count: 1,
    },
  },
};

export const LatestEarned = Template.bind({});
LatestEarned.args = {
  tile: {
    id: 'latest-badge',
    type: TileType.Badge,
    active: true,
    createdAt: '2024-08-06T08:53:24.307Z',
    updatedAt: '2024-08-06T08:53:24.307Z',
    tileHeight: TileHeight.Full,
    priority: 0,
    configuration: {
      type: BadgeTileType.Latest,
      badgeId: '900a2477-95c4-4c42-ae2d-3795e7f0f5f2',
      internalName: 'Top Spender',
      priority: 0,
      internalDescription: null,
      status: 'ACTIVE',
      id: '900a2477-95c4-4c42-ae2d-3795e7f0f5f2',
      createdAt: '2024-08-06T08:53:24.307Z',
      updatedAt: '2024-08-06T08:53:24.307Z',
      awardedDatePrefix: 'Awarded',
      emptyBadgeMessage: 'You haven’t earned any badges yet.',
      badgeNotEarnedMessage: 'Badge not earned yet',
      emptyBadgeArtworkUrl:
        'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
      details: [
        {
          locale: 'en',
          name: 'Top Spender',
          artworkUrl:
            'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
          description: 'Spent £100 on 5 Seperate transactions',
          id: '8962205c-e32a-4651-ac7a-4c584449d9fa',
          createdAt: '2024-08-06T08:53:24.307Z',
          updatedAt: '2024-08-06T08:53:24.307Z',
        },
      ],
      count: 1,
    },
  },
};

export const SpecificBadgeNotEarned = Template.bind({});
SpecificBadgeNotEarned.args = {
  tile: {
    id: 'specific-badge',
    type: TileType.Badge,
    active: true,
    createdAt: '2024-08-06T08:53:24.307Z',
    updatedAt: '2024-08-06T08:53:24.307Z',
    tileHeight: TileHeight.Full,
    priority: 0,
    configuration: {
      type: BadgeTileType.Specific,
      badgeId: '900a2477-95c4-4c42-ae2d-3795e7f0f5f2',
      internalName: 'Top Spender',
      priority: 0,
      status: 'ACTIVE',
      internalDescription: null,
      id: '900a2477-95c4-4c42-ae2d-3795e7f0f5f2',
      createdAt: '2024-08-06T08:53:24.307Z',
      updatedAt: '2024-08-06T08:53:24.307Z',
      awardedDatePrefix: 'Awarded',
      emptyBadgeMessage: 'You haven’t earned any badges yet.',
      badgeNotEarnedMessage: 'Badge not earned yet',
      emptyBadgeArtworkUrl:
        'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
      details: [
        {
          locale: 'en',
          name: 'Top Spender',
          artworkUrl:
            'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
          description: 'Spent £100 on 5 Seperate transactions',
          id: '8962205c-e32a-4651-ac7a-4c584449d9fa',
          createdAt: '2024-08-06T08:53:24.307Z',
          updatedAt: '2024-08-06T08:53:24.307Z',
        },
      ],
      count: 0,
    },
  },
};

export const SpecificBadgeHighCount = Template.bind({});
SpecificBadgeHighCount.args = {
  tile: {
    id: 'specific-badge',
    type: TileType.Badge,
    active: true,
    createdAt: '2024-08-06T08:53:24.307Z',
    updatedAt: '2024-08-06T08:53:24.307Z',
    tileHeight: TileHeight.Full,
    priority: 0,
    configuration: {
      type: BadgeTileType.Specific,
      badgeId: '900a2477-95c4-4c42-ae2d-3795e7f0f5f2',
      internalName: 'Top Spender',
      priority: 0,
      internalDescription: null,
      status: 'ACTIVE',
      id: '900a2477-95c4-4c42-ae2d-3795e7f0f5f2',
      createdAt: '2024-08-06T08:53:24.307Z',
      updatedAt: '2024-08-06T08:53:24.307Z',
      awardedDatePrefix: 'Awarded',
      emptyBadgeMessage: 'You haven’t earned any badges yet.',
      badgeNotEarnedMessage: 'Badge not earned yet',
      emptyBadgeArtworkUrl:
        'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
      details: [
        {
          locale: 'en',
          name: 'Top Spender',
          artworkUrl:
            'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
          description: 'Spent £100 on 5 Seperate transactions',
          id: '8962205c-e32a-4651-ac7a-4c584449d9fa',
          createdAt: '2024-08-06T08:53:24.307Z',
          updatedAt: '2024-08-06T08:53:24.307Z',
        },
      ],
      count: 3,
    },
  },
};

export const SpecificBadgeAwardedOnce = Template.bind({});
SpecificBadgeAwardedOnce.args = {
  tile: {
    id: 'specific-badge',
    type: TileType.Badge,
    active: true,
    createdAt: '2024-08-06T08:53:24.307Z',
    updatedAt: '2024-08-06T08:53:24.307Z',
    tileHeight: TileHeight.Full,
    priority: 0,
    configuration: {
      type: BadgeTileType.Specific,
      badgeId: '900a2477-95c4-4c42-ae2d-3795e7f0f5f2',
      internalName: 'Top Spender',
      priority: 0,
      internalDescription: null,
      status: 'ACTIVE',
      id: '900a2477-95c4-4c42-ae2d-3795e7f0f5f2',
      createdAt: '2024-08-06T08:53:24.307Z',
      updatedAt: '2024-08-06T08:53:24.307Z',
      awardedDatePrefix: 'Awarded',
      emptyBadgeMessage: 'You haven’t earned any badges yet.',
      badgeNotEarnedMessage: 'Badge not earned yet',
      emptyBadgeArtworkUrl:
        'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
      details: [
        {
          locale: 'en',
          name: 'Top Spender',
          artworkUrl:
            'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
          description: 'Spent £100 on 5 Seperate transactions',
          id: '8962205c-e32a-4651-ac7a-4c584449d9fa',
          createdAt: '2024-08-06T08:53:24.307Z',
          updatedAt: '2024-08-06T08:53:24.307Z',
        },
      ],
      count: 1,
    },
  },
};
