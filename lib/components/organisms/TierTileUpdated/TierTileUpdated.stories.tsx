import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { TierTileType, TileHeight, TileType } from '../../../types/tile';
import { TileWrapper } from '../../../utils/storybookHelpers';
import TierTileUpdated from './index';
// @ts-ignore
import goldImage from '../../../assets/gold.png';

export default {
  title: 'components/organisms/TierTileUpdated',
  component: TierTileUpdated,
} as Meta;

const Template: StoryFn<typeof TierTileUpdated> = (args) => (
  <TileWrapper isHalfTile={args.tile.tileHeight === TileHeight.Half}>
    <TierTileUpdated {...args} />
  </TileWrapper>
);

export const CurrentTier = Template.bind({});
CurrentTier.args = {
  tile: {
    id: 'current-tier',
    type: TileType.Tier,
    active: true,
    createdAt: '2024-08-06T08:53:24.307Z',
    updatedAt: '2024-08-06T08:53:24.307Z',
    tileHeight: TileHeight.Full,
    priority: 0,
    configuration: {
      type: TierTileType.currentTier,
      emptyDescription: 'Oops. You’re not in a tier.',
      emptyArtworkUrl:
        'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
      pointsToTierPrefix: undefined,
      title: 'Your Tier',
      tierId: '54f0658a-9409-41f7-a508-ca02c6ac23e1',
      tier: {
        id: '11ff96d2-c87b-4c89-bf5c-996604fc4d28',
        name: 'Bronze',
        description:
          'Get exclusive access to special rewards, and free upgrades when you stay in our hotel.',
        artworkUrl: goldImage,
        pointsRequirement: 100,
        priority: 0,
        createdAt: '2024-08-06T08:53:24.307Z',
        updatedAt: '2024-08-06T08:53:24.307Z',
      },
    },
  },
};

export const CurrentTierHalf = Template.bind({});
CurrentTierHalf.args = {
  tile: {
    id: 'current-tier-half',
    type: TileType.Tier,
    active: true,
    createdAt: '2024-08-06T08:53:24.307Z',
    updatedAt: '2024-08-06T08:53:24.307Z',
    tileHeight: TileHeight.Half,
    priority: 0,
    configuration: {
      type: TierTileType.currentTier,
      emptyDescription: 'Oops. You’re not in a tier.',
      emptyArtworkUrl:
        'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
      pointsToTierPrefix: undefined,
      title: 'Your Tier',
      tierId: '54f0658a-9409-41f7-a508-ca02c6ac23e1',
      tier: {
        id: '11ff96d2-c87b-4c89-bf5c-996604fc4d28',
        name: 'Bronze',
        description:
          'Get exclusive access to special rewards, and free upgrades when you stay in our hotel.',
        artworkUrl: goldImage,
        pointsRequirement: 100,
        priority: 0,
        createdAt: '2024-08-06T08:53:24.307Z',
        updatedAt: '2024-08-06T08:53:24.307Z',
      },
    },
  },
};

export const CurrentTierNoArtwork = Template.bind({});
CurrentTierNoArtwork.args = {
  tile: {
    id: 'current-tier-no-artwork',
    type: TileType.Tier,
    active: true,
    createdAt: '2024-08-06T08:53:24.307Z',
    updatedAt: '2024-08-06T08:53:24.307Z',
    tileHeight: TileHeight.Full,
    priority: 0,
    configuration: {
      type: TierTileType.currentTier,
      emptyDescription: 'Oops. You’re not in a tier.',
      emptyArtworkUrl:
        'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
      pointsToTierPrefix: undefined,
      title: 'Your Tier',
      tierId: '54f0658a-9409-41f7-a508-ca02c6ac23e1',
      tier: {
        id: '11ff96d2-c87b-4c89-bf5c-996604fc4d28',
        name: 'Bronze',
        description:
          'Get exclusive access to special rewards, and free upgrades when you stay in our hotel.',
        artworkUrl: null,
        pointsRequirement: 100,
        priority: 0,
        createdAt: '2024-08-06T08:53:24.307Z',
        updatedAt: '2024-08-06T08:53:24.307Z',
      },
    },
  },
};

export const CurrentTierNoArtworkHalf = Template.bind({});
CurrentTierNoArtworkHalf.args = {
  tile: {
    id: 'current-tier-no-artwork-half',
    type: TileType.Tier,
    active: true,
    createdAt: '2024-08-06T08:53:24.307Z',
    updatedAt: '2024-08-06T08:53:24.307Z',
    tileHeight: TileHeight.Half,
    priority: 0,
    configuration: {
      type: TierTileType.currentTier,
      emptyDescription: 'Oops. You’re not in a tier.',
      emptyArtworkUrl:
        'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
      pointsToTierPrefix: undefined,
      title: 'Your Tier',
      tierId: '54f0658a-9409-41f7-a508-ca02c6ac23e1',
      tier: {
        id: '11ff96d2-c87b-4c89-bf5c-996604fc4d28',
        name: 'Bronze',
        description:
          'Get exclusive access to special rewards, and free upgrades when you stay in our hotel.',
        artworkUrl: null,
        pointsRequirement: 100,
        priority: 0,
        createdAt: '2024-08-06T08:53:24.307Z',
        updatedAt: '2024-08-06T08:53:24.307Z',
      },
    },
  },
};

export const CurrentNoTier = Template.bind({});
CurrentNoTier.args = {
  tile: {
    id: 'current-tier-no-artwork-half',
    type: TileType.Tier,
    active: true,
    createdAt: '2024-08-06T08:53:24.307Z',
    updatedAt: '2024-08-06T08:53:24.307Z',
    tileHeight: TileHeight.Full,
    priority: 0,
    configuration: {
      type: TierTileType.currentTier,
      emptyDescription: 'Earn at least 1000 points to earn bronze tier.',
      emptyArtworkUrl:
        'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
      pointsToTierPrefix: undefined,
      title: 'Oops. You’re not in a tier.',
      tierId: '54f0658a-9409-41f7-a508-ca02c6ac23e1',
      tier: [],
    },
  },
};

export const CurrentNoTierHalf = Template.bind({});
CurrentNoTierHalf.args = {
  tile: {
    id: 'current-tier-no-artwork-half',
    type: TileType.Tier,
    active: true,
    createdAt: '2024-08-06T08:53:24.307Z',
    updatedAt: '2024-08-06T08:53:24.307Z',
    tileHeight: TileHeight.Half,
    priority: 0,
    configuration: {
      type: TierTileType.currentTier,
      emptyDescription: 'Earn at least 1000 points to earn bronze tier.',
      emptyArtworkUrl:
        'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
      pointsToTierPrefix: undefined,
      title: 'Oops. You’re not in a tier.',
      tierId: '54f0658a-9409-41f7-a508-ca02c6ac23e1',
      tier: [],
    },
  },
};

// Points to Tier

export const PointsToTierNotAchieved = Template.bind({});
PointsToTierNotAchieved.args = {
  tile: {
    id: 'points-to-tier',
    type: TileType.Tier,
    active: true,
    createdAt: '2024-08-06T08:53:24.307Z',
    updatedAt: '2024-08-06T08:53:24.307Z',
    tileHeight: TileHeight.Full,
    priority: 0,
    configuration: {
      type: TierTileType.nextTier,
      emptyDescription: 'Earn at least 1000 points to earn bronze tier.',
      emptyArtworkUrl:
        'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
      pointsToTierPrefix: undefined,
      title: 'Oops. You’re not in a tier.',
      tierId: '54f0658a-9409-41f7-a508-ca02c6ac23e1',
      tier: {
        id: '11ff96d2-c87b-4c89-bf5c-996604fc4d28',
        name: 'Bronze',
        description:
          'Get exclusive access to special rewards, and free upgrades when you stay in our hotel.',
        artworkUrl: null,
        pointsRequirement: 100,
        priority: 0,
        createdAt: '2024-08-06T08:53:24.307Z',
        updatedAt: '2024-08-06T08:53:24.307Z',
      },
    },
  },
};

export const PointsToTierNotAchievedHalf = Template.bind({});
PointsToTierNotAchievedHalf.args = {
  tile: {
    id: 'points-to-tier-half',
    type: TileType.Tier,
    active: true,
    createdAt: '2024-08-06T08:53:24.307Z',
    updatedAt: '2024-08-06T08:53:24.307Z',
    tileHeight: TileHeight.Half,
    priority: 0,
    configuration: {},
  },
};

export const PointsToTierAchieved = Template.bind({});
PointsToTierAchieved.args = {
  tile: {
    id: 'points-to-tier',
    type: TileType.Tier,
    active: true,
    createdAt: '2024-08-06T08:53:24.307Z',
    updatedAt: '2024-08-06T08:53:24.307Z',
    tileHeight: TileHeight.Full,
    priority: 0,
    configuration: {},
  },
};

export const PointsToTierAchievedHalf = Template.bind({});
PointsToTierAchievedHalf.args = {
  tile: {
    id: 'points-to-tier-half',
    type: TileType.Tier,
    active: true,
    createdAt: '2024-08-06T08:53:24.307Z',
    updatedAt: '2024-08-06T08:53:24.307Z',
    tileHeight: TileHeight.Half,
    priority: 0,
    configuration: {},
  },
};
