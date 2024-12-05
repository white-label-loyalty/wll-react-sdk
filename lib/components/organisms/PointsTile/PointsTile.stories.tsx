import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { TileHeight, TileType } from '../../../types/tile';
import { TileWrapper } from '../../../utils/storybookHelpers';
import PointsTile from './index';
// @ts-ignore
import pointsImage from '../../../assets/points.png';
// @ts-ignore
import pointsFull from '../../../assets/pointsFull.png';
// @ts-ignore
import airmiles from '../../../assets/airmiles.png';

export default {
  title: 'components/organisms/PointsTile',
  component: PointsTile,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof PointsTile> = (args) => (
  <TileWrapper isHalfTile={args.tile?.tileHeight === TileHeight.Half}>
    <PointsTile {...args} />
  </TileWrapper>
);

export const StandardPointsBalance = Template.bind({});
StandardPointsBalance.args = {
  tile: {
    tileHeight: TileHeight.Half,
    active: true,
    type: TileType.Points,
    priority: 1,
    configuration: {
      title: 'Available Points',
      artworkUrl: pointsImage,
      multiplier: undefined,
      points: 2750,
      pointsPrefix: undefined,
      pointsSuffix: 'points',
    },
    id: '405a6844-f472-4d9e-84b9-20fb55dbd399',
    createdAt: '',
    updatedAt: '',
  },
};

export const CashbackRewards = Template.bind({});
CashbackRewards.args = {
  tile: {
    tileHeight: TileHeight.Half,
    active: true,
    type: TileType.Points,
    priority: 1,
    configuration: {
      title: 'Cashback Earned',
      artworkUrl: pointsImage,
      multiplier: undefined,
      points: 125.5,
      pointsPrefix: '£',
      pointsSuffix: '',
    },
    id: '405a6844-f472-4d9e-84b9-20fb55dbd399',
    createdAt: '',
    updatedAt: '',
  },
};

export const StarRewards = Template.bind({});
StarRewards.args = {
  tile: {
    tileHeight: TileHeight.Full,
    active: true,
    type: TileType.Points,
    priority: 1,
    configuration: {
      title: 'Stars Balance',
      artworkUrl: pointsFull,
      multiplier: 2,
      points: 48,
      pointsPrefix: undefined,
      pointsSuffix: 'stars',
    },
    id: '405a6844-f472-4d9e-84b9-20fb55dbd399',
    createdAt: '',
    updatedAt: '',
  },
};

export const MileageProgram = Template.bind({});
MileageProgram.args = {
  tile: {
    tileHeight: TileHeight.Full,
    active: true,
    type: TileType.Points,
    priority: 1,
    configuration: {
      title: 'Air Miles Balance',
      artworkUrl: airmiles,
      multiplier: undefined,
      points: 25840,
      pointsPrefix: undefined,
      pointsSuffix: 'miles',
    },
    id: '405a6844-f472-4d9e-84b9-20fb55dbd399',
    createdAt: '',
    updatedAt: '',
  },
};

export const CoinPoints = Template.bind({});
CoinPoints.args = {
  tile: {
    tileHeight: TileHeight.Half,
    active: true,
    type: TileType.Points,
    priority: 1,
    configuration: {
      title: 'Your Balance',
      artworkUrl: pointsImage,
      multiplier: 3,
      points: 15750,
      pointsPrefix: undefined,
      pointsSuffix: 'coins',
    },
    id: '405a6844-f472-4d9e-84b9-20fb55dbd399',
    createdAt: '',
    updatedAt: '',
  },
};

export const GamifiedCoins = Template.bind({});
GamifiedCoins.args = {
  tile: {
    tileHeight: TileHeight.Full,
    active: true,
    type: TileType.Points,
    priority: 1,
    configuration: {
      title: 'Reward Coins',
      artworkUrl: pointsFull,
      multiplier: undefined,
      points: 1250,
      pointsPrefix: '🪙',
      pointsSuffix: 'coins',
    },
    id: '405a6844-f472-4d9e-84b9-20fb55dbd399',
    createdAt: '',
    updatedAt: '',
  },
};

export const HotelPoints = Template.bind({});
HotelPoints.args = {
  tile: {
    tileHeight: TileHeight.Half,
    active: true,
    type: TileType.Points,
    priority: 1,
    configuration: {
      title: 'Elite Points',
      artworkUrl: pointsImage,
      multiplier: 5,
      points: 50000,
      pointsPrefix: undefined,
      pointsSuffix: 'pts',
    },
    id: '405a6844-f472-4d9e-84b9-20fb55dbd399',
    createdAt: '',
    updatedAt: '',
  },
};
