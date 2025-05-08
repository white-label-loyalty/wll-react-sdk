import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { createPointsTileMock } from '../../../mocks/tiles/pointsTile';
import { CTALinkTarget, TileHeight } from '../../../types/tile';
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

export const ZeroPointsBalance = Template.bind({});
ZeroPointsBalance.args = {
  tile: createPointsTileMock({
    tileHeight: TileHeight.Half,
    title: 'Available Points',
    artworkUrl: pointsImage,
    points: 0,
    pointsSuffix: 'points',
  }),
};
export const StandardPointsBalance = Template.bind({});
StandardPointsBalance.args = {
  tile: createPointsTileMock({
    tileHeight: TileHeight.Half,
    title: 'Available Points',
    artworkUrl: pointsImage,
    points: 2750,
    pointsSuffix: 'points',
  }),
};

export const CashbackRewards = Template.bind({});
CashbackRewards.args = {
  tile: createPointsTileMock({
    tileHeight: TileHeight.Half,
    title: 'Cashback Earned',
    artworkUrl: cashback,
    points: 125.5,
    pointsPrefix: '£',
    pointsSuffix: '',
  }),
};

export const StarRewards = Template.bind({});
StarRewards.args = {
  tile: createPointsTileMock({
    tileHeight: TileHeight.Full,
    title: 'Stars Balance',
    artworkUrl: stars,
    pointsMultiplier: 2,
    points: 48,
    pointsSuffix: 'stars',
  }),
};

export const MileageProgram = Template.bind({});
MileageProgram.args = {
  tile: createPointsTileMock({
    tileHeight: TileHeight.Full,
    title: 'Air Miles Balance',
    artworkUrl: airmiles,
    points: 25840,
    pointsSuffix: 'miles',
  }),
};

export const CoinPoints = Template.bind({});
CoinPoints.args = {
  tile: createPointsTileMock({
    tileHeight: TileHeight.Half,
    title: 'Your Balance',
    artworkUrl: coins,
    pointsMultiplier: 3,
    points: 15750,
    pointsSuffix: 'coins',
  }),
};

export const GamifiedCoins = Template.bind({});
GamifiedCoins.args = {
  tile: createPointsTileMock({
    tileHeight: TileHeight.Full,
    title: 'Reward Coins',
    artworkUrl: coins,
    points: 1250,
    pointsPrefix: '',
    pointsSuffix: 'coins',
  }),
};

export const HotelPoints = Template.bind({});
HotelPoints.args = {
  tile: createPointsTileMock({
    tileHeight: TileHeight.Half,
    title: 'Elite Points',
    artworkUrl: pointsImage,
    pointsMultiplier: 5,
    points: 50000,
    pointsSuffix: 'pts',
  }),
};

export const HalfWithMultiplier = Template.bind({});
HalfWithMultiplier.args = {
  tile: createPointsTileMock({
    tileHeight: TileHeight.Half,
    title: 'Points Balance',
    points: 100,
    artworkUrl:
      'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    pointsPrefix: '$',
    pointsSuffix: ' ',
    pointsMultiplier: 1000,
  }),
};
export const FullWithMultiplier = Template.bind({});
FullWithMultiplier.args = {
  tile: createPointsTileMock({
    tileHeight: TileHeight.Full,
    title: 'Points Balance',
    points: 100,
    artworkUrl:
      'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    pointsPrefix: '$',
    pointsSuffix: ' ',
    pointsMultiplier: 1000,
  }),
};

export const WithCtaLink = Template.bind({});
WithCtaLink.args = {
  tile: createPointsTileMock({
    tileHeight: TileHeight.Full,
    title: 'Points Balance',
    artworkUrl: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ctaLink: 'https://www.example.com',
    ctaLinkTarget: CTALinkTarget.sameWindow,
  }),
};

export const WithCtaLinkHalf = Template.bind({});
WithCtaLinkHalf.args = {
  tile: createPointsTileMock({
    tileHeight: TileHeight.Half,
    title: 'Points Balance',
    ctaLink: 'https://www.example.com',
    artworkUrl: pointsImage,
    ctaLinkTarget: CTALinkTarget.sameWindow,
  }),
};
