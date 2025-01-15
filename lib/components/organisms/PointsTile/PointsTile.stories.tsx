import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { TileHeight, TileType } from '../../../types/tile';
import { TileWrapper } from '../../../utils/storybookHelpers';
import PointsTile from './index';
// @ts-ignore
import pointsImage from '../../../assets/points.png';
// @ts-ignore
// @ts-ignore
import airmiles from '../../../assets/airmiles.png';
// @ts-ignore
import coins from '../../../assets/coins.png';
// @ts-ignore
import cashback from '../../../assets/cashback.png';
// @ts-ignore
import stars from '../../../assets/stars.png';

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
      pointsMultiplier: undefined,
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
      artworkUrl: cashback,
      pointsMultiplier: undefined,
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
      artworkUrl: stars,
      pointsMultiplier: 2,
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
      pointsMultiplier: undefined,
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
      artworkUrl: coins,
      pointsMultiplier: 3,
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
      artworkUrl: coins,
      pointsMultiplier: undefined,
      points: 1250,
      pointsPrefix: '',
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
      pointsMultiplier: 5,
      points: 50000,
      pointsPrefix: undefined,
      pointsSuffix: 'pts',
    },
    id: '405a6844-f472-4d9e-84b9-20fb55dbd399',
    createdAt: '',
    updatedAt: '',
  },
};

export const HalfWithMultiplier = Template.bind({});
HalfWithMultiplier.args = {
  tile: {
    tileHeight: TileHeight.Half,
    active: true,
    type: TileType.Points,
    configuration: {
      defaultLocale: 'en',
      details: [],
      points: 100,
      locale: 'en',
      title: 'Points Balance',
      artworkUrl:
        'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      pointsPrefix: '$',
      pointsSuffix: ' ',
      pointsMultiplier: 1000,
    },
    id: '02d84ed8-4dbd-4ef5-bd5a-606de29d8cd9',
    createdAt: '2025-01-15T06:28:38.029Z',
    updatedAt: '2025-01-15T06:32:33.968Z',
    priority: 1,
  },
};
export const FullWithMultiplier = Template.bind({});
FullWithMultiplier.args = {
  tile: {
    tileHeight: TileHeight.Full,
    active: true,
    type: TileType.Points,
    configuration: {
      defaultLocale: 'en',
      details: [],
      points: 100,
      locale: 'en',
      title: 'Points Balance',
      artworkUrl:
        'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      pointsPrefix: '$',
      pointsSuffix: ' ',
      pointsMultiplier: 1000,
    },
    id: '02d84ed8-4dbd-4ef5-bd5a-606de29d8cd9',
    createdAt: '2025-01-15T06:28:38.029Z',
    updatedAt: '2025-01-15T06:32:33.968Z',
    priority: 1,
  },
};
