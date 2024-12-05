import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { TileHeight, TileType } from '../../../types/tile';
import RewardTile from './index';
// @ts-ignore
import rewardImage from '../../../assets/reward.png';
import { TileWrapper } from '../../../utils/storybookHelpers';

export default {
  title: 'components/organisms/RewardTile',
  component: RewardTile,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof RewardTile> = (args) => (
  <TileWrapper>
    <RewardTile {...args} />
  </TileWrapper>
);

export const Default = Template.bind({});
Default.args = {
  tile: {
    tileHeight: TileHeight.Full,
    active: true,
    type: TileType.Reward,
    configuration: {
      rewardId: 'f7ce508f-ca52-46ff-bfb7-03e3761feb4a',
      showArtwork: true,
      showDetails: true,
      name: 'Sweet Chilli Lobster Noodles',
      summary: 'Fresh Lobster Noodles with a spicy chilli sauce',
      id: 'f7ce508f-ca52-46ff-bfb7-03e3761feb4a',
      createdAt: '2023-05-05T15:11:42.342Z',
      updatedAt: '2024-07-17T10:45:04.350Z',
      pictureUrl: 'https://ucarecdn.com/a486d015-b4ab-4831-bfa5-68f5bbbf63b1/',
      value: 800,
      price: 10,
      priority: 10,
      availability: {
        start: '2023-05-05T15:10:31.274Z',
        end: '',
      },
      purchasable: true,
      tier: null,
      category: {
        name: 'Chicken Salad',
        priority: 0,
        type: 'REWARD',
        id: '677b6b88-d97c-4b8d-80f4-88b04c86948f',
        createdAt: '2023-05-05T10:39:57.595Z',
        updatedAt: '2023-05-05T10:39:57.595Z',
        description: null,
        metadata: null,
        pictureUrl:
          'https://ucarecdn.com/9cda5d3c-75f4-48f0-9f3f-1ece144f6136/',
      },
      discounts: [],
      redemptionMessage: null,
      visibilityCriteria: null,
      type: 'VOUCHER',
      codeType: 'HUMAN',
      code: null,
      purchaseExpiration: null,
      hideCode: false,
      notificationConfig: null,
      artworkUrl: 'https://ucarecdn.com/a486d015-b4ab-4831-bfa5-68f5bbbf63b1/',
      pointsMultiplier: '1',
      pointsPrefix: null,
      pointsSuffix: null,
    },
    id: '39ac25f0-35b3-4668-acba-032dccc63e91',
    createdAt: '2024-10-17T10:50:12.673Z',
    updatedAt: '2024-10-17T10:50:12.673Z',
    priority: 3,
  },
};

export const DefaultWithPoints = Template.bind({});
DefaultWithPoints.args = {
  tile: {
    tileHeight: TileHeight.Full,
    active: true,
    type: TileType.Reward,
    configuration: {
      rewardId: '4c9c1d9d-bcb9-4d2b-a1dd-f6710ab29163',
      showPrice: true,
      id: '4c9c1d9d-bcb9-4d2b-a1dd-f6710ab29163',
      createdAt: '2023-05-11T11:03:01.864Z',
      updatedAt: '2024-07-17T10:45:41.896Z',
      showArtwork: true,
      showDetails: true,
      artworkUrl: 'https://ucarecdn.com/cbc5895e-a193-4a94-bb0f-d514719e36a6/',
      name: 'Pizza',
      summary: 'Delicious pizza',
      price: 8,
      pointsMultiplier: '1',
      pointsSuffix: 'pts',
      value: 0,
      priority: 0,
      availability: {
        start: '2023-05-11T11:01:53.703Z',
        end: '',
      },
      purchasable: true,
      tier: null,
      category: {
        name: 'Chicken Salad',
        priority: 0,
        type: 'REWARD',
        id: '677b6b88-d97c-4b8d-80f4-88b04c86948f',
        createdAt: '2023-05-05T10:39:57.595Z',
        updatedAt: '2023-05-05T10:39:57.595Z',
        description: null,
        metadata: null,
        pictureUrl:
          'https://ucarecdn.com/9cda5d3c-75f4-48f0-9f3f-1ece144f6136/',
      },
      discounts: [],
      redemptionMessage: null,
      visibilityCriteria: null,
      type: 'VOUCHER',
      codeType: 'OTP',
      code: null,
      purchaseExpiration: null,
      hideCode: false,
      notificationConfig: null,
      pointsPrefix: null,
    },
    id: '6919d275-83c5-4fcd-9adf-959b869de4a7',
    createdAt: '2024-10-17T09:01:44.179Z',
    updatedAt: '2024-10-17T09:01:44.179Z',
    priority: 1,
  },
};

export const ArtworkOnly = Template.bind({});
ArtworkOnly.args = {
  tile: {
    tileHeight: TileHeight.Full,
    active: true,
    type: TileType.Reward,
    priority: 1,
    configuration: {
      showArtwork: true,
      showDetails: false,
      artworkUrl: rewardImage,
      id: '02fdea07-e3eb-4a2d-a66a-cb0368427bd2',
      createdAt: '2024-08-20T08:46:43.851Z',
      updatedAt: '2024-08-20T08:46:43.851Z',
      name: 'Spotify Premium',
      summary: 'Get 1 year subscription',
      value: 0,
      price: 61,
      priority: 0,
      availability: {
        start: '2024-08-20T08:46:43.848Z',
        end: '2024-09-14T03:04:54.056Z',
      },
      purchasable: true,
    },
    id: '511b2a95-5094-4a01-b958-05643f813822',
    createdAt: '2024-08-20T13:05:16.974Z',
    updatedAt: '2024-08-20T13:05:16.974Z',
  },
};
