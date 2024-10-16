import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { TileHeight, TileType } from '../../../types/tile';
import RewardTile from './index';
// @ts-ignore
import rewardImage from '../../../assets/reward.png';

export default {
  title: 'components/organisms/RewardTile',
  component: RewardTile,
} as Meta;

const Template: StoryFn<typeof RewardTile> = (args) => <RewardTile {...args} />;

export const Default = Template.bind({});
Default.args = {
  tile: {
    tileHeight: TileHeight.Full,
    active: true,
    type: TileType.Reward,
    priority: 1,
    configuration: {
      showPrice: false,
      reward: {
        id: '02fdea07-e3eb-4a2d-a66a-cb0368427bd2',
        createdAt: '2024-08-20T08:46:43.851Z',
        updatedAt: '2024-08-20T08:46:43.851Z',
        name: 'Spotify Premium',
        description: 'Get 1 year subscription',
        pictureUrl: rewardImage,
        value: 0,
        price: 0,
        priority: 0,
        availability: {
          start: '2024-08-20T08:46:43.848Z',
          end: '2024-09-14T03:04:54.056Z',
        },
        purchasable: true,
        tier: undefined,
      },
    },
    id: '511b2a95-5094-4a01-b958-05643f813822',
    createdAt: '2024-08-20T13:05:16.974Z',
    updatedAt: '2024-08-20T13:05:16.974Z',
  },
};

export const DefaultWithPoints = Template.bind({});
DefaultWithPoints.args = {
  tile: {
    tileHeight: TileHeight.Full,
    active: true,
    type: TileType.Reward,
    priority: 1,
    configuration: {
      showPrice: false,
      reward: {
        id: '02fdea07-e3eb-4a2d-a66a-cb0368427bd2',
        createdAt: '2024-08-20T08:46:43.851Z',
        updatedAt: '2024-08-20T08:46:43.851Z',
        name: 'Spotify Premium',
        description: 'Get 1 year subscription',
        pictureUrl: rewardImage,
        value: 0,
        price: 61,
        priority: 0,
        availability: {
          start: '2024-08-20T08:46:43.848Z',
          end: '2024-09-14T03:04:54.056Z',
        },
        purchasable: true,
      },
    },
    id: '511b2a95-5094-4a01-b958-05643f813822',
    createdAt: '2024-08-20T13:05:16.974Z',
    updatedAt: '2024-08-20T13:05:16.974Z',
  },
};
