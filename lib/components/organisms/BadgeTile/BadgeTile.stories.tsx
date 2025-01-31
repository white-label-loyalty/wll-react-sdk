import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { BadgeTileType, TileHeight, TileType } from '../../../types/tile';
import { TileWrapper } from '../../../utils/storybookHelpers';
import BadgeTile from './index';

export default {
  title: 'components/organisms/BadgeTile',
  component: BadgeTile,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof BadgeTile> = (args) => (
  <TileWrapper isHalfTile={args.tile?.tileHeight === TileHeight.Half}>
    <BadgeTile {...args} />
  </TileWrapper>
);

export const LatestNoBadgesEarned = Template.bind({});
LatestNoBadgesEarned.args = {
  tile: {
    id: 'latest-badge-none',
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
      name: 'Top Spender',
      description: 'Spent £100 on 5 Separate transactions',
      artworkUrl: 'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
      priority: 0,
      status: 'ACTIVE',
      createdAt: '2024-08-06T08:53:24.307Z',
      updatedAt: '2024-08-06T08:53:24.307Z',
      awardedDatePrefix: 'Awarded',
      emptyBadgeMessage: "You  haven't earned any badges yet.",
      badgeNotEarnedMessage: 'Badge not earned yet',
      emptyBadgeArtworkUrl:
        'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
      count: 0,
    },
  },
};

export const LatestEarned = Template.bind({});
LatestEarned.args = {
  tile: {
    id: 'latest-badge-earned',
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
      name: 'Top Spender',
      description: 'Spent £100 on 5 Separate transactions',
      artworkUrl: 'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
      priority: 0,
      status: 'ACTIVE',
      createdAt: '2024-08-06T08:53:24.307Z',
      updatedAt: '2024-08-06T08:53:24.307Z',
      awardedDatePrefix: 'Awarded',
      emptyBadgeMessage: "You  haven't earned any badges yet.",
      badgeNotEarnedMessage: 'Badge not earned yet',
      emptyBadgeArtworkUrl:
        'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
      count: 1,
    },
  },
};

export const SpecificBadgeNotEarned = Template.bind({});
SpecificBadgeNotEarned.args = {
  tile: {
    id: 'specific-badge-not-earned',
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
      name: 'Top Spender',
      description: 'Spent £100 on 5 Separate transactions',
      artworkUrl: 'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
      priority: 0,
      status: 'ACTIVE',
      createdAt: '2024-08-06T08:53:24.307Z',
      updatedAt: '2024-08-06T08:53:24.307Z',
      awardedDatePrefix: 'Awarded',
      emptyBadgeMessage: "You  haven't earned any badges yet.",
      badgeNotEarnedMessage: 'Badge not earned yet',
      emptyBadgeArtworkUrl:
        'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
      count: 0,
    },
  },
};

export const SpecificBadgeHighCount = Template.bind({});
SpecificBadgeHighCount.args = {
  tile: {
    id: 'specific-badge-high-count',
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
      name: 'Top Spender',
      description: 'Spent £100 on 5 Separate transactions',
      artworkUrl: 'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
      priority: 0,
      status: 'ACTIVE',
      createdAt: '2024-08-06T08:53:24.307Z',
      updatedAt: '2024-08-06T08:53:24.307Z',
      awardedDatePrefix: 'Awarded',
      emptyBadgeMessage: "You haven't earned any badges yet.",
      badgeNotEarnedMessage: 'Badge not earned yet',
      emptyBadgeArtworkUrl:
        'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
      count: 3,
    },
  },
};

export const SpecificBadgeAwardedOnce = Template.bind({});
SpecificBadgeAwardedOnce.args = {
  tile: {
    id: 'specific-badge-once',
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
      name: 'Top Spender',
      description: 'Spent £100 on 5 Separate transactions',
      artworkUrl: 'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
      priority: 0,
      status: 'ACTIVE',
      id: '8962205c-e32a-4651-ac7a-4c584449d9fa',
      createdAt: '2024-08-06T08:53:24.307Z',
      updatedAt: '2024-08-06T08:53:24.307Z',
      awardedDatePrefix: 'Awarded',
      emptyBadgeMessage: "You haven't earned any badges yet.",
      badgeNotEarnedMessage: 'Badge not earned yet',
      emptyBadgeArtworkUrl:
        'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
      count: 1,
    },
  },
};

export const SpecificBadgeNotEarnedNoEmpty = Template.bind({});
SpecificBadgeNotEarnedNoEmpty.args = {
  tile: {
    id: 'specific-badge-not-earned-no-empty',
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
      name: 'Top Spender',
      description: 'Spent £100 on 5 Separate transactions',
      artworkUrl: 'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
      priority: 0,
      status: 'ACTIVE',
      createdAt: '2024-08-06T08:53:24.307Z',
      updatedAt: '2024-08-06T08:53:24.307Z',
      awardedDatePrefix: 'Awarded',
      badgeNotEarnedMessage: 'Complete 5 top-ups to earn this',
      count: 0,
    },
  },
};
